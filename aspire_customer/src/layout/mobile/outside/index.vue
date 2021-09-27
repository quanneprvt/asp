<template>
	<div id="app-main">
		<transition name="fade-transform" mode="out-in">
			<router-view :key="route" />
		</transition>
	</div>
</template>

<script>
	export default {
		name: "appMain",
		computed: {
			route() {
				return this.$route.path;
			}
		},
	}
</script>