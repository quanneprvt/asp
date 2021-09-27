<template>
  <div id="loans-browser" v-if="!isMobile">
    <div class="header">
      <h3>Total Loan Amount:</h3>
      <div>{{ totalAmount }}</div>
    </div>
    <div class="content">
      <v-tabs v-model="tab">
        <v-tab>Hightlight</v-tab>
        <v-tab>All Loans</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
					<div class="my-loan-container pa-8">
						<div class="action">
							<currentLoanCard :loanData="featureLoan"/>
							<loanActionButtons class="btn-action" :onStatusSelect="onStatusSelect" :onDeleteLoan="onDeleteLoan"/>
						</div>
						<div class="details">
							<loanDetailCard :loanData="featureLoan"/>
						</div>
					</div>
        </v-tab-item>
        <v-tab-item>
          <LoanList :listData="loanList" :onStatusSelect="onStatusSelect" :onDeleteLoan="onDeleteLoan"/>
        </v-tab-item>
      </v-tabs-items>
    </div>
		<v-btn class="btn-reload mx-2" fab dark small color="primary" icon @click="reload">
      <img :src="require('@/assets/icons/reload.svg')" />
    </v-btn>
  </div>
	<div id="loans-mobile" v-else>
		<div class="header">
			<div class="header-current-loan">
				<div class="total-loan">
					<div>Total Loan Available:</div>
					<div>{{"number"}}</div>
				</div>
				<div class="logo">
					<SvgIcon :icon="require('!svg-inline-loader!@/assets/icons/Home.svg')" fill="#01d167" :size="{width: 24, height: 24}" />
				</div>
			</div>
			<div class="header-loan-tab">
				<div class="tab-container">
					<v-tabs v-model="tab" background-color="transparent" color="white" slider-color="#23CEFD" active-class="tab-active">
						<v-tab>Hightlight</v-tab>
						<v-tab>All Loans</v-tab>
					</v-tabs>
					<v-tabs-items v-model="tab">
						<v-tab-item class="tab-item-container mt-10">
							<div class="my-loan-container">
								<div class="action">
									<currentLoanCard :loanData="featureLoan"/>
								</div>
							</div>
						</v-tab-item>
						<v-tab-item class="tab-item-container">
							<LoanList :listData="loanList" :onStatusSelect="onStatusSelect" :onDeleteLoan="onDeleteLoan"/>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="btn-action-container mt-n2">
				<loanActionButtons :onStatusSelect="onStatusSelect" :onDeleteLoan="onDeleteLoan"/>
			</div>
			<div class="detail-container pa-5">
				<loanDetailCard :loanData="featureLoan"/>
			</div>
		</div>
		<v-btn class="btn-reload mx-2" fixed fab dark small color="primary" icon @click="reload">
      <img :src="require('@/assets/icons/reload.svg')" />
    </v-btn>
	</div>
</template>

<script>
import currentLoanCard from "@/components/loans/currentLoanCard";
import loanActionButtons from "@/components/loans/loanActionButtons";
import loanDetailCard from "@/components/loans/loanDetailCard";
import LoanList from "@/components/loans/loanList";
import SvgIcon from "@/components/common/svg-icon";
import { mapGetters } from "vuex";
import { getLoan, getFeatureLoan, updateLoan, deleteLoan } from "@/api/loan-service/loan";

export default {
  name: "loan",
  components: {
    currentLoanCard,
		loanActionButtons,
		loanDetailCard,
		LoanList,
		SvgIcon
  },
  data() {
    return {
      tab: null,
			loanList: [],
			featureLoan: null
    };
  },
	async mounted() {
		this.reload();
	},
	computed: {
		...mapGetters({
      isMobile: "isMobile"
    }),
		totalAmount: function() {
			if (this.loanList.length === 0) return 0;
			return this.loanList.reduce((a, b) => {return {amount: a.amount + b.amount}}).amount;
		}
	},
	methods: {
		getLoanList: async function() {
			const res = await getLoan();
			this.loanList = res.data;
		},
		getFeatureLoan: async function() {
			const res = await getFeatureLoan();
			this.featureLoan = res.data;
		},
		onStatusSelect: async function(value, target) {
			if (!target) target = this.featureLoan;
			if (value.toLowerCase() === target.status) return;
			const res = await updateLoan({
				id: target.id,
				status: value.toLowerCase()
			});
			this.reload();
		},
		onDeleteLoan: async function(target) {
			if (!target) target = this.featureLoan;
			const res = await deleteLoan(target);
			this.reload();
		},
		reload: async function(){
			await this.getFeatureLoan();
			await this.getLoanList();
		}
	}
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
