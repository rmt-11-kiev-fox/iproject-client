<template>
  <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
</template>

<script>
import { Plotly } from 'vue-plotly'

export default {
  name: 'Graphs3',
  data () {
    return {
      gamesHistory: [],
      arrayNumber: [],
      data: [{
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter'
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
    this.$store.dispatch('fetchUserGameData')
      .then((data) => {
        this.gamesHistory = data.data
        for (let i = 0; i < this.gamesHistory.length; i++) {
          if (typeof this.gamesHistory[i] !== 'number') {
            this.gamesHistory[i] = 0
          }
          this.arrayNumber.push(i)
        }
        this.data[0].x = this.arrayNumber
        this.data[0].y = this.gamesHistory
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>
