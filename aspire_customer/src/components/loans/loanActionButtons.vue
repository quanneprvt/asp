<template>
  <div class="loan-action-buttons">
    <div class="btn-group">
      <div class="img-container"><img :src="require(`@/assets/icons/set-spend-limit.svg`)" /></div>
      <span>Set loan status</span>
    </div>
    <div class="btn-group">
      <div class="img-container"><img :src="require(`@/assets/icons/deactivate-card.svg`)" /></div>
      <span>Delete loan</span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.loan-action-buttons {
  display: flex;
  background-color: #EDF3FF;
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
}
</style>