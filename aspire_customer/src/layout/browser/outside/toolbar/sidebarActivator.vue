<template>
	<div id="sidebar-activator" @click="toggleSidebar">
		<SvgIcon :icon="ArrowRight" id="activator-icon" :class="{'activator-turn':sidebarOpen}" :size="{width: 24, height: 24}" />
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import SvgIcon from "@/components/common/svg-icon.vue"
	import ArrowRight from "!svg-inline-loader!@/assets/icons/arrow-right.svg";

	export default {
		name: "sidebarActivator",
		components: {
			SvgIcon
		},
		data() {
			return {
				ArrowRight
			};
		},
		methods: {
			toggleSidebar() {
				this.$store.commit('TOGGLE_SIDEBAR');
			}
		},
		computed: {
			...mapGetters({
				sidebarOpen: 'sidebarOpen',
			})
		}
	}
</script>

<style lang="scss" scoped>
	#sidebar-activator {
		width: var(--toolbar-height);
		text-align: center;
		line-height: var(--toolbar-height);
		transition: padding-left 0.3s;

		#activator-icon {
			transition: transform 0.3s;

			&.activator-turn {
				transform: rotate(-180deg);
			}
		}
	}
</style>
