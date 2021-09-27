<template>
  <el-menu
    id="sidebar-menu"
    :background-color="$vars.sidebar.bgc"
    text-color="white"
    :default-active="$route.path"
    :collapse="!sidebarOpen"
    :collapse-transition="false"
  >
    <sidebar-menu-item
      v-for="route in routes"
      :key="route.fullPath"
      :route="route"
    />
  </el-menu>
</template>

<script>
import SidebarMenuItem from "./sidebarMenuItem";
import { mapGetters } from "vuex";

export default {
  name: "sidebarMenu",
  components: { SidebarMenuItem },
  computed: {
    ...mapGetters({
      routes: "routes",
      sidebarOpen: "sidebarOpen",
    }),
  },
};
</script>

<style lang="scss" scoped>
#sidebar-menu {
  width: 100%;
	margin-top: 50%;
	padding: 0;
}
</style>
