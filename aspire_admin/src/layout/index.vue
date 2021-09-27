<template>
  <div id="layout">
    <BrowserLayout v-if="!isMobile"/>
		<MobileLayout v-else/>
  </div>
</template>

<script>
import BrowserLayout from "./browser";
import MobileLayout from "./mobile";
import { mobileCheck } from "@/utils/commonUtils";

export default {
  name: "layout",
	components: {
		BrowserLayout,
		MobileLayout
	},
	data() {
		return {
			isMobile: false
		}
	},
	created() {
		window.addEventListener("resize", this.checkView);
	},
	destroyed() {
		window.removeEventListener("resize", this.checkView);
	},
	mounted() {
		this.checkView();
	},
	methods: {
		checkView: function() {
			this.isMobile = mobileCheck();
			this.$store.commit("ON_MOBILE_VIEW", this.isMobile);
		}
	}
};
</script>

<style lang="scss" scoped>
#layout {
  height: 100vh;
  width: 100vw;
}
</style>
