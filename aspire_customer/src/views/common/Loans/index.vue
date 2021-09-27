<template>
  <div id="loans-browser">
    <Dialog
      :visible="dialog"
      :onClose="onDialogClose"
      title="Add new loan"
      :hasActionButton="true"
    >
      <template v-slot:dialog-content>
        <v-text-field
          label="Amount"
          :rules="[
            (value) => !!value || 'Required.',
            (value) => typeof parseFloat(value) === 'number' || 'Number only.',
          ]"
          hide-details="auto"
          v-model="loanData.amount"
        >
        </v-text-field>
        <v-text-field
          label="Name"
          v-model="loanData.name"
          :rules="[(value) => !!value || 'Required.']"
        ></v-text-field>
        <DatePicker :onDatePick="onDatePick" />
      </template>
      <template v-slot:dialog-action-buttons>
        <v-btn @click="onSubmit">Submit</v-btn>
      </template>
    </Dialog>
    <div class="header"></div>
    <div class="content pa-12">
      <v-btn tile color="#325BAF" class="btn-add-loan" @click="dialog = true">
        <img :src="require('@/assets/icons/box.svg')" class="mr-2" />
        <span>New Loan</span>
      </v-btn>
      <div class="mt-10" v-if="loanList.length > 0"><b>Current Loans</b></div>
      <LoanList :listData="loanList" />
    </div>
    <v-btn class="btn-reload mx-2" fab dark small color="primary" icon @click="getLoanList">
      <img :src="require('@/assets/icons/reload.svg')" />
    </v-btn>
  </div>
  <!-- <div id="loans-mobile" v-else></div> -->
</template>

<script>
import moment from "moment";
import SvgIcon from "@/components/common/svg-icon";
import Dialog from "@/components/common/dialog";
import DatePicker from "@/components/common/date-picker";
import LoanList from "@/components/loans/loanList";
import { mapGetters } from "vuex";
import { postLoan, getLoan } from "@/api/loan-service/loan";

export default {
  name: "loan",
  components: {
    SvgIcon,
    Dialog,
    DatePicker,
    LoanList,
  },
  data() {
    return {
      tab: null,
      dialog: false,
      loanData: {
        date: new Date(),
        name: "",
        amount: 0,
      },
      loanList: [],
    };
  },
  async mounted() {
    await this.getLoanList();
    console.log(this.loanList);
  },
  computed: {
    ...mapGetters({
      isMobile: "isMobile",
    }),
  },
  methods: {
    onDialogClose: function() {
      this.dialog = false;
    },
    onDatePick: function(date) {
      this.loanData.date = moment(date).toDate();
    },
    onSubmit: async function() {
      const isValid = this.validateData();
      if (!isValid) return;
      const res = await postLoan(this.loanData);
      this.onDialogClose();
      await this.getLoanList();
    },
    validateData: function() {
      return (
        this.loanData.amount &&
        typeof parseFloat(this.loanData.amount) === "number" &&
        this.loanData.name
      );
    },
    getLoanList: async function() {
      const res = await getLoan();
      this.loanList = res.data;
    }
  },
};
</script>

<style lang="scss" scoped>
#loans-browser {
  .btn-reload {
		float: right;
	}
  .btn-add-loan {
    color: white;
    border-radius: var(--card-border-radius);
    text-transform: none;
    font-weight: bold;
  }
}
</style>
