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
      <IncomeTable v-for="data in fetchIncome" :key="data.id" :data="data" />
    </table>
  </div>
</template>

<script>
import IncomeTable from '@/components/IncomeTable.vue'
export default {
  name: 'Income',
  components: {
    IncomeTable
  },
  computed: {
    fetchIncome () {
      return this.$store.state.ieReports
    }
  }
}
</script>

<style>

</style>
