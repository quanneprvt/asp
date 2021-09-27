<template>
  <v-menu v-model="menu" :close-on-content-click="false" max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="computedDateFormattedMomentjs"
        clearable
        label="Formatted with Moment.js"
        readonly
        v-bind="attrs"
        v-on="on"
        @click:clear="date = null"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" @change="onClose"></v-date-picker>
  </v-menu>
</template>

<script>
  import moment from 'moment';
  import { format, parseISO } from 'date-fns';

  export default {
    props: {
      onDatePick: {type: Function, default: () => {}}
    },
    data: () => ({
      // https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments
      date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
      menu: false,
    }),
    computed: {
      computedDateFormattedMomentjs () {
        return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
      },
    },
    methods: {
      onClose: function(){
        this.menu = false;
        this.onDatePick(this.date);
      }
    }
  }
</script>
