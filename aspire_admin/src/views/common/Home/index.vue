<template>
	<div id="home" class="pa-10">
		<div class="heading">All Loans</div>
		<LoanList :listData="loanList" :onStatusSelect="onStatusSelect" :onDeleteLoan="onDeleteLoan"/>
		<v-btn class="btn-reload mx-2" fab dark small color="primary" icon @click="getLoanList">
      <img :src="require('@/assets/icons/reload.svg')" />
    </v-btn>
	</div>
</template>

<script>
import LoanList from "@/components/loans/loanList";
import { getLoan, updateLoan, deleteLoan } from "@/api/loan-service/loan";
	// @ is an alias to /src
	export default {
		name: 'home',
		components: {
			LoanList
		},
		data() {
			return {
				loanList: []
			}
		},
		async mounted() {
			await this.getLoanList();
		},
		methods: {
			getLoanList: async function() {
				const res = await getLoan();
				this.loanList = res.data;
			},
			onStatusSelect: async function(value, target) {
				if (value.toLowerCase() === target.status) return;
				const res = await updateLoan({
					id: target.id,
					status: value.toLowerCase()
				});
				await this.getLoanList();
			},
			onDeleteLoan: async function(target) {
				const res = await deleteLoan(target);
				await this.getLoanList();
			}
		}
	}
</script>

<style lang="scss" scoped>
	#home {
		text-align: center;
		overflow: auto;
		max-height: 95vh;

		& > div {
			margin: 50px 0;
		}

		.btn-reload {
			float: right;
		}
	}
</style>
