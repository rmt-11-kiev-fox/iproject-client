<template>
  <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
</template>

<script>
import { Plotly } from 'vue-plotly'
export default {
  name: 'Graphs1',
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
    this.$store.dispatch('fetchMostPlayed')
      .then((data) => {
        const names = []
        const gamesPlayed = []
        data.data.mostPlayedData.forEach((el) => {
          names.push(el.name)
          gamesPlayed.push(el.gamePlayed)
        })
        this.data[0].x = names
        this.data[0].y = gamesPlayed
      })
  }
}
</script>

<style>

</style>
