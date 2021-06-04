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
    <div class="d-flex justify-content-center">
      <button @click.prevent="addExp" class="btn btn-default btn-primary my-2 mx-3"> Add New Expenses </button>
    </div>
  </div>
</template>

<script>
import ExpenseTable from '@/components/ExpenseTable.vue'
export default {
  name: 'Expense',
  components: {
    ExpenseTable
  },
  methods: {
    addExp () {
      this.$router.push({ path: '/add-expenses' })
    }
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
