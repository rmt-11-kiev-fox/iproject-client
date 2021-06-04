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
          <th scope="col">Action</th>
        </tr>
      </thead>
      <IncomeTable v-for="data in fetchIncome" :key="data.id" :data="data" />
    </table>
    <div class="d-flex justify-content-center">
      <button @click.prevent="addInc" class="btn btn-default btn-primary my-2 mx-3"> Add New Income </button>
    </div>
  </div>
</template>

<script>
import IncomeTable from '@/components/IncomeTable.vue'
export default {
  name: 'Income',
  components: {
    IncomeTable
  },
  methods: {
    addInc () {
      this.$router.push({ path: '/add-income' })
    }
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
