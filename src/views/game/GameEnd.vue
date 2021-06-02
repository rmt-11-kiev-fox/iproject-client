<template>
  <div>
    <div>
      <h2>Game Result</h2>
    </div>
    <div>
      <table class="mx-auto">
        <thead>
          <th>No</th>
          <th>Correct Answer</th>
          <th>Your Answer</th>
        </thead>
        <tbody>
          <tr
          v-for="(data, index) in gameData.questionData"
          :key="data.id"
          >
            <td>{{index+1}}</td>
            <td>{{data.correctAnswer}}</td>
            <td>{{data.userAnswer}}</td>
          </tr>
          <tr>
            <td></td>
            <td>Total Score</td>
            <td>{{gameData.gameData.score}}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button @click.prevent='goToHome' class="btn btn-danger mt-3">Back to Home</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameEnd',
  computed: {
    GameId () {
      return this.$store.state.GameId
    },
    gameData () {
      return this.$store.state.gameData
    }
  },
  methods: {
    goToHome () {
      this.$router.push('/home/mainMenu')
    }
  },
  created () {
    this.$store.dispatch('fetchGameData', this.GameId)
  }
}
</script>

<style>
  table, th, td {
  border: 1px solid black;
}
</style>
