<template>
	<router-link id="sidebar-logo" to="/">
		<transition-group name="fade" mode="out-in">
			<div v-if="sidebarOpen" class="logo-icon-group" key="icon">
				<SvgIcon :icon="require(`!svg-inline-loader!@/assets/icons/Logo.svg`)" :size="{width: 125, height: 35}" fill="#01d167" />
				<div class="sub-title-text">Trusted way of banking for 3,000+ SMEs and startups in Singapore</div>
			</div>
			<span v-else id="sidebar-logo-text" key="title">{{appTitle}}</span>
		</transition-group>
	</router-link>
</template>

<script>
	import {mapGetters} from 'vuex'
	import SvgIcon from "@/components/common/svg-icon";

	export default {
		name: "sidebarLogo",
		components: {
			SvgIcon
		},
		data() {
			return {
			}
		},
		computed: {
			...mapGetters({
				sidebarOpen: 'sidebarOpen',
				appTitle: 'appTitle',
			})
		},

	}
</script>

<style lang="scss" scoped>

	#sidebar-logo {
		min-height: var(--toolbar-height);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		img {
			width: 32px;
			height: 32px;
		}

		#sidebar-logo-text {
			display: inline;
			color: #01d167;
			white-space: nowrap;
			line-height: var(--toolbar-height);
			font-size: 25px;
			font-weight: 550;
		}

		.logo-icon-group {
			padding: 30px;
			.sub-title-text {
				color: #FFFFFF;
				opacity: 0.3;
				font-size: 15px;
				white-space: normal;
			}
		}
	}
</style>
