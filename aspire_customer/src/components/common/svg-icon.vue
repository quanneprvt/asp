<template>
  <div v-html="icon" class="svg-container"></div>
</template>

<script>
export default {
  props: {
    icon: null,
    size: {type: Object, default: () => ({width: 0, height: 0})},
    fill: {type: String, default: ""}
  },
  mounted() {
    const svg = this.$el.firstChild;
    Object.assign(svg.style, {
      width: this.size.width,
      height: this.size.height,
    });
    const path = this.getPath();
    for (let i = 0; i< path.length; i++) {
      path[i].style.fill = this.fill;
    }
  },
  methods: {
    getPath: function(){
      return this.$el.firstChild.getElementsByTagName("path");
    }
  },
  watch: {
    fill: function(value) {
      const path = this.getPath();
      for (let i = 0; i< path.length; i++) path[i].style.fill = value;
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-container {
  display: inline-block;
}
</style>