<template>
	<div class="outside">
		<toolbar/>
		<appMain/>
	</div>
</template>

<script>
	import Toolbar from "./toolbar/index";
	import AppMain from "./appMain/index";

	export default {
		name: "outside",
		components: {Toolbar, AppMain}
	}
</script>

<style lang="scss" scoped>
	.outside {
		width: calc(100vw - var(--sidebar-width));
		display: flex;
		flex-direction: column;
		transform: translateX(var(--sidebar-width));
		transition: all 0.3s;
	}
</style>
