<template>
  <div class="container">
    <table class="table table-striped text-center">
      <thead class="table-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Total Income</th>
          <th scope="col">Total Expenses</th>
          <th scope="col">Balance</th>
          <th scope="col">Period</th>
        </tr>
      </thead>
      <tbody class="table-secondary">
        <tr>
        <th scope="row">{{ fetchReport.UserId }}</th>
        <td> Rp {{ moneyFormatted(fetchReport.total_income) }},- </td>
        <td> Rp {{ moneyFormatted(fetchReport.total_expenses) }},- </td>
        <td> Rp {{ moneyFormatted(fetchReport.balance) }},- </td>
        <td> {{ fetchReport.period }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Report',
  methods: {
    moneyFormatted (number) {
      return number.toLocaleString('id-ID')
    }
  },
  computed: {
    fetchReport () {
      return this.$store.state.reports
    }
  }
}
</script>

<style>

</style>
