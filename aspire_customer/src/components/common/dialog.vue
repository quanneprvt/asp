<template>
  <div class="text-center">
    <v-dialog v-model="visible" :width="`${width}px`" @click:outside="onClose">
      <v-card>
        <v-card-title class="text-h5 lighten-2 text-title" v-if="title !== ''">
          {{ title }}
        </v-card-title>
        <v-card-text>
          <slot name="dialog-content"></slot>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions v-if="hasActionButton">
          <v-spacer></v-spacer>
          <slot name="dialog-action-buttons"></slot>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: { type: Boolean, default: false },
    hasActionButton: { type: Boolean, default: false },
    title: { type: String, default: "" },
    width: {type: Number, default: 500},
    onClose: {type: Function, default: ()=>{}}
  }
};
</script>

<style lang="scss" scoped>
.text-title {
  color: white;
  background-color: #0C365A;
}
</style>
