<template>
  <div v-if="!route.hidden" class="sidebar-menu-item">
    <template v-if="!hasActiveChildren(route)">
      <router-link :to="fullPath">
        <el-menu-item
          :index="
            fullPath + (hasChildren(route) ? '/' + route.children[0].path : '')
          "
        >
					<SvgIcon :icon="route.meta.icon" :size="{width: 24, height: 24}" :style="{marginRight: '25px'}" :fill="isRouteActive ? '#01D167' : ''" />
          <span slot="title">{{
            hasSideName(route) ? route.meta.sideName : route.name
          }}</span>
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else :index="fullPath" popper-append-to-body>
      <template slot="title">
				<SvgIcon :icon="route.meta.icon" :size="{width: 24, height: 24}" :style="{marginRight: '25px'}" :fill="isRouteActive ? '#01D167' : ''"/>
        <span style="font-weight: 900">{{ hasSideName(route) ? route.meta.sideName : route.name }}</span>
      </template>
      <sidebar-menu-item
        v-for="child in route.children"
        :key="child.path"
        :route="child"
        :base-path="fullPath"
        class="nest-menu-item"
      />
    </el-submenu>
  </div>
</template>

<script>
import {
  hasActiveChildren,
  hasIcon,
  hasSideName,
  hasChildren,
} from "@/utils/routerUtils";
import SvgIcon from "@/components/common/svg-icon";

export default {
  name: "sidebarMenuItem",
	components: {
		SvgIcon
	},
  props: {
    route: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  computed: {
    fullPath() {
      return (this.basePath + "/" + this.route.path).replace(/^\/\//, "\/");
    },
		isRouteActive() {
			return this.$route.matched.some(({ name }) => name === this.route.name);
		}
  },
  methods: {
    hasActiveChildren,
    hasIcon,
    hasSideName,
    hasChildren
  }
};
</script>

<style lang="scss" scoped>
.sidebar-menu-item{
	padding-left: 20px;
}
.el-menu-item.is-active {
	span {
		color: #01D167;
		font-weight: bold;
	}
}
</style>
