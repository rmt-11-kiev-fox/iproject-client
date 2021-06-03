<template>
  <div class="container">
    <h1 id="header" class="mt-4">History List</h1>
    <table class="table table-hover mt-3">
      <thead>
        <tr>
          <th class="col-1">No.</th>
          <th class="col-2">Name</th>
          <th class="col-2">Address</th>
          <th class="col-1">Date</th>
          <th class="col-1">Notes</th>
        </tr>
      </thead>
      <tbody>
        <Table
          v-for="(col, index) in collect"
          :key="index"
          :index="index"
          :col="col"
        ></Table>
      </tbody>
    </table>
  </div>
</template>

<script>
import Table from './Table'
export default {
  name: 'History',
  components: {
    Table
  },
  computed: {
    carts () {
      return this.$store.state.collect
    }
  },
  created () {
    this.$store.dispatch('showHistory')
  }

}
</script>

<style>

</style>
