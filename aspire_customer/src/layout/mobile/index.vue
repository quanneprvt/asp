<template>
  <div id="mobile-layout">
    <Navigation />
    <Outside />
  </div>
</template>

<script>
import Navigation from "./navigation";
import Outside from "./outside";

export default {
  name: "mobileLayout",
  components: {
    Navigation,
    Outside
  }
}
</script>