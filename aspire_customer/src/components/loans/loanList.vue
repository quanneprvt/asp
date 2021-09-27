<template>
  <div>
    <v-card
      class="card-detail-container mx-auto mt-5 mb-5"
      max-width="100%"
      min-width="200"
      v-for="(item, i) in listData"
      :key="i"
    >
      <v-card-actions class="action-header">
        <v-btn
          text
          class="expand-btn-text"
          @click="show(i)"
        >
          <img :src="require('@/assets/icons/detail-paper.svg')" />
          {{item.member}}
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          icon
          @click="show(i)"
          class="expand-btn"
        >
          <img :src="require('@/assets/icons/down-arrow.svg')" v-bind:class="!showItems[i] ? 'expand' : 'collapse'"/>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="showItems[i]" class="content">
          <v-divider></v-divider>

          <v-card-text class="detail-list">
            <div class="detail-amount">Amount: {{item.amount}}</div>
            <div class="detail-status" v-bind:class="item.status">{{item.status}}</div>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
  export default {
    props: {
      listData: {type: Array, default: []}
    },
    data() {
      return {
        showItems: []
      }
    },
    watch: {
      listData: function(value){
        this.listData.forEach(function(item, i){
          this.showItems[i] = this.showItems[i] ? true : false;
        }.bind(this));
      }
    },
    methods: {
      show: function(v) {
        this.$set(this.showItems, v, !this.showItems[v]);
      }
    }
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
  .content {
    text-transform: uppercase;
    .approved {
      background-color: #077E8C;
    }
    .pending {
      background-color: #F7CB73;
    }
    .declined {
      background-color: #D9512C;
    }
    .detail-amount {
      text-align: left;
    }
    .detail-list {
      .detail-status {
        font-weight: bold;
        color: white;
        width: 25vw;
        text-align: center;
        border-radius: var(--card-border-radius);
      }
    }
  }
}
</style>