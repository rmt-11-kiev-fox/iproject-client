<template>
  <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
</template>

<script>
import { Plotly } from 'vue-plotly'

export default {
  name: 'Graphs2',
  data () {
    return {
      data: [{
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'bar'
      }],
      layout: {
        title: 'Leaderboards'
      }
    }
  },
  components: {
    Plotly
  },
  created () {
    this.$store.dispatch('fetchLeaderboards')
  }
}
</script>

<style>

</style>
