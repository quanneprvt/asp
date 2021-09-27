<template>
  <div id="home" class="pa-12">
    <div class="mt-10"><b>Current Loans</b></div>
    <LoanList :listData="loanList" />
    <v-btn class="btn-reload mx-2" fab dark small color="primary" icon @click="getLoanList">
      <img :src="require('@/assets/icons/reload.svg')" />
    </v-btn>
  </div>
</template>

<script>
import LoanList from "@/components/loans/loanList";
import { getLoan } from "@/api/loan-service/loan";
// @ is an alias to /src
export default {
  name: "home",
  components: {
    LoanList,
  },
  data() {
    return {
      loanList: [],
    };
  },
  methods: {
    getLoanList: async function() {
      const res = await getLoan();
      this.loanList = res.data;
    },
  },
  mounted() {
    this.getLoanList();
  },
};
</script>

<style lang="scss" scoped>
#home {
  text-align: center;

  & > div {
    margin: 50px 0;
  }

	.btn-reload {
		float: right;
	}
}
</style>
