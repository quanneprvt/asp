<template>
  <div id="browser-layout">
    <sidebar/>
		<outside/>
  </div>
</template>

<script>
import Sidebar from "@/layout/browser/sidebar/index";
import Outside from "@/layout/browser/outside/index";

export default {
  name: "browserLayout",
  components: {Outside, Sidebar},
}
</script>

<style lang="scss" scoped>
#browser-layout{
  display: flex;
}
</style>