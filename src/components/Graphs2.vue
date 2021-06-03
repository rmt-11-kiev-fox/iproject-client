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
        x: ['sam', 'faz', 'bund', 'gor'],
        y: [10, 15, 13, 17],
        type: 'bar'
      }],
      layout: {
        title: ''
      }
    }
  },
  components: {
    Plotly
  },
  created () {
    this.$store.dispatch('fetchLeaderboard')
      .then((data) => {
        const names = []
        const mostAccuracy = []
        data.data.forEach((el) => {
          names.push(el.name)
          mostAccuracy.push(el.finalResult)
        })
        this.data[0].x = names
        this.data[0].y = mostAccuracy
      })
  }
}
</script>

<style>

</style>
