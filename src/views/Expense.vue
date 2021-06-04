<template>
  <div class="container">
    <table class="table table-striped text-center">
      <thead class="table-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Category</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Period</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <ExpenseTable v-for="data in fetchExpenses" :key="data.id" :data="data" />
    </table>
  </div>
</template>

<script>
import ExpenseTable from '@/components/ExpenseTable.vue'
export default {
  name: 'Expense',
  components: {
    ExpenseTable
  },
  computed: {
    fetchExpenses () {
      return this.$store.state.ieReports
    }
  }
}
</script>

<style>

</style>
