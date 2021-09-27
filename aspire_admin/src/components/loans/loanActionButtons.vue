<template>
  <div class="loan-action-buttons">
    <div class="btn-group" @click="openStatus">
      <div class="img-container">
        <img :src="require(`@/assets/icons/set-spend-limit.svg`)" />
      </div>
      <span>Set loan status</span>
      <v-select
        :items="statuses"
        label="Standard"
        class="status-select"
        v-show="showSelect"
        :menu-props="{ value: showSelect }"
        @change="statusSelect"
      ></v-select>
    </div>
    <div class="btn-group" @click="deleteLoan">
      <div class="img-container">
        <img :src="require(`@/assets/icons/deactivate-card.svg`)" />
      </div>
      <span>Delete loan</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onStatusSelect: null,
    onDeleteLoan: null
  },
  data() {
    return {
      statuses: ["APPROVED", "PENDING", "DECLINED"],
      showSelect: false,
    };
  },
  methods: {
    openStatus: function() {
      this.showSelect = !this.showSelect;
    },
    statusSelect: function(value) {
      this.showSelect = !this.showSelect;
      this.onStatusSelect && this.onStatusSelect(value)
    },
    deleteLoan: function() {
      this.onDeleteLoan && this.onDeleteLoan();
    }
  },
};
</script>

<style lang="scss" scoped>
.loan-action-buttons {
  display: flex;
  background-color: #edf3ff;
  border-radius: var(--card-border-radius);
  padding: 10px;
  justify-content: center;
  .btn-group {
    display: flex;
    flex-direction: column;
    margin: 0 5px;
    .img-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 5px 0;
    }
    span {
      text-align: center;
      font-size: 12px;
      display: block;
      max-width: 50px;
      white-space: normal;
      color: black;
    }
  }
  .status-select {
    // display: none;
    max-width: 0;
    max-height: 0;
    opacity: 0;
  }
}
</style>
