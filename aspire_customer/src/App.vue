<template>
	<v-app>
		<div id="app" :style="STYLE_VARIABLES">
			<layout/>
		</div>
	</v-app>
</template>

<script>
	import Layout from "@/layout";
	import {mapGetters} from 'vuex';

	export default {
		name: 'app',
		components: {
			Layout,
		},
		computed: {
			...mapGetters({
				STYLE_VARIABLES: 'STYLE_VARIABLES',
				role: 'role'
			})
		},

		created() {
			this.$store.dispatch('UPDATE_ROUTES').then();
		},
		watch: {
			role() {
				this.$store.dispatch('UPDATE_ROUTES').then();
			}
		},
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
	#app {
		font-family: 'Open Sans', sans-serif;
		font-weight: 400;
		-webkit-font-smoothing: antialiased;
		-webkit-transform: translateZ(0);
		color: #2c3e50;
		overflow: hidden;
	}

	body {
		white-space: nowrap;
		margin: 0;
		padding: 0;
	}
</style>
