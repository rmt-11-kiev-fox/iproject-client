<template>
  <div class="container">
    <table class="table table-striped text-center">
      <thead class="table-dark">
        <tr>
          <th scope="col">Exchange</th>
          <th scope="col">Type</th>
          <th scope="col">Symbol</th>
          <th scope="col">Short Name</th>
          <th scope="col">Long Name</th>
          <th scope="col">Score</th>
          <!-- <th scope="col">Action</th> -->
        </tr>
      </thead>
      <Table v-for="(data, index) in tableDatas" :key="index" :data="data" />
    </table>
    <div class="container mt-3">
      <div class="row justify-content-center">
        <Card v-for="data in newsData" :key="data.uuid" :data="data" />        
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table.vue'
import Card from '@/components/Card.vue'
export default {
  name: 'Home',
  components: {
    Table,
    Card
  },
  methods: {
    renderHome () {
      this.$store.dispatch('homepageData')
    }
  },
  computed: {
    tableDatas () {
      return this.$store.state.homeData.quotes
    },
    newsData () {
      return this.$store.state.homeData.news
    }
  },
  created () {
    this.renderHome()
  }
}
</script>
