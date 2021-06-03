<template>

<div class="row mt-5">
  <div class="col-9">
    <Graphs3/>
  </div>
  <div class="col-2 mr-4">
    <h3 style="text-align:center;">Your past score</h3>
    <table class="mx-auto">
      <thead>
        <th>No</th>
        <th>Score</th>
      </thead>
      <tbody>
        <tr v-for="(history, index) in gamesHistory" :key="history.id">
          <td>{{index+1}}</td>
          <td>{{history}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import Graphs3 from '../../components/Graphs3'
export default {
  name: 'UserHistory',
  components: {
    Graphs3
  },
  data () {
    return {
      gamesHistory: []
    }
  },
  created () {
    this.$store.dispatch('fetchUserGameData')
      .then((data) => {
        this.gamesHistory = data.data
        for (let i = 0; i < this.gamesHistory.length; i++) {
          if (typeof this.gamesHistory[i] !== 'number') {
            this.gamesHistory[i] = 0
          }
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>
