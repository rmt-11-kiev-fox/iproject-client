<template>
  <div class="container">
    <b-form-select class="my-3" v-model="selected" :options="options"></b-form-select>
    <!-- <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select> -->
    <div class="mt-3">
        Selected:
        <strong>{{ selected }}</strong><br>
        <div class="d-flex justify-content-center">
          <button @click.prevent="showReport" class="btn btn-default btn-primary my-2 mx-3"> Show Reports </button>
          <button @click.prevent="showIncome" class="btn btn-default btn-primary my-2 mx-3"> Show Income </button>
          <button @click.prevent="showExpenses" class="btn btn-default btn-primary my-2 mx-3"> Show Expenses </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tracker',
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select month' },
        { value: 'JAN', text: 'January' },
        { value: 'FEB', text: 'February' },
        { value: 'MAR', text: 'March' },
        { value: 'APR', text: 'April' },
        { value: 'MAY', text: 'May' },
        { value: 'JUN', text: 'June' },
        { value: 'JUL', text: 'July' },
        { value: 'AUG', text: 'August' },
        { value: 'SEP', text: 'September' },
        { value: 'OCT', text: 'October' },
        { value: 'NOV', text: 'November' },
        { value: 'DEC', text: 'December' }
      ]
    }
  },
  methods: {
    showReport () {
      const period = this.selected
      this.$store.dispatch('showMyReport', period)
      this.$router.push({ path: '/reports' })
    },
    showIncome () {
      const period = this.selected
      this.$store.dispatch('showMyIncome', period)
      this.$router.push({ path: '/incomes' })
    },
    showExpenses () {
      const period = this.selected
      this.$store.dispatch('showMyExpenses', period)
      this.$router.push({ path: '/expenses' })
    }
  }
}
</script>

<style>

</style>
