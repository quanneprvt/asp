<template>
  <v-bottom-navigation
    :value="value"
    color="teal"
    grow
    hide-on-scroll
    fixed
  >
    <NavigationButton
      v-for="route in routes"
      :key="route.fullPath"
      :route="route"
    />
  </v-bottom-navigation>
</template>

<script>
import NavigationButton from "./navigationButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "navigation",
  components: {
    NavigationButton
  },
  data() {
    return {
      value: 1
    };
  },
  computed: {
    ...mapGetters({
      routes: "routes"
    }),
  },
}
</script>