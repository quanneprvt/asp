<template>
  <v-btn :to="fullPath" v-if="!hasActiveChildren(route)">
    <span>{{route.name}}</span>
    <SvgIcon :icon="route.meta.icon" :size="{width: 24, height: 24}" :fill="isRouteActive ? '#01D167' : ''"/>
  </v-btn>
</template>

<script>
import SvgIcon from "@/components/common/svg-icon";
import {
  hasActiveChildren,
  hasIcon,
  hasSideName,
  hasChildren,
} from "@/utils/routerUtils";

export default {
  name: "navigationButton",
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
    hasActiveChildren
  }
}
</script>