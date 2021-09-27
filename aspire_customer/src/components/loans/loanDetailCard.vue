<template>
  <v-card
    class="card-detail-container mx-auto"
    max-width="100%"
    min-width="200"
  >
    <v-card-actions class="action-header">
      <v-btn
        text
        class="expand-btn-text"
        @click="show = !show"
      >
        <img :src="require('@/assets/icons/detail-paper.svg')" />
        Loan details
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
        class="expand-btn"
      >
        <img :src="require('@/assets/icons/down-arrow.svg')" v-bind:class="!show ? 'expand' : 'collapse'"/>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>

<style lang="scss" scoped>
.card-detail-container {
  .action-header {
    background-color: #F5F9FF;
    .expand-btn-text {
      text-transform: none;
    }
    .expand-btn {
      img {
        transition: all 0.3s linear;
      }
      .expand {
        transform: rotate(180deg);
      }
      .collapse {
        transform: rotate(0deg);
      }
    }
  }
}
</style>