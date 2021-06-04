<template>
  <div class="container">
    <b-form-select class="my-3" v-model="selected" :options="options"></b-form-select>
    <!-- <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select> -->
    <div class="mt-3">
        Selected:
        <strong>{{ selected }}</strong><br>
        <button @click.prevent="showReport" class="btn btn-default btn-primary" >Show Reports</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Report',
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
      this.$store.dispatch('showReport', period)
    }
  }
}
</script>

<style>

</style>
