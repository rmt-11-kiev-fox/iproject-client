<template>
  <div>
    <div id="history" class="jumbotron" :style="`background: url(${image.file}) no-repeat fixed; background-size: cover;`">
        <div class="container-fluid">
            <h1 class="display-4 p-5 col-5 text-start text-light" style="padding: 50px 30px 0px">History List</h1>
        </div>
    </div>
    <div class="container">
      <!-- <h1 id="header" class="mt-4">History List</h1> -->
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
    collect () {
      return this.$store.state.collect
    },
    image () {
      return this.$store.state.image
    }
  },
  created () {
    this.$store.dispatch('showHistory')
    this.$store.dispatch('image')
  }

}
</script>

<style>

</style>
