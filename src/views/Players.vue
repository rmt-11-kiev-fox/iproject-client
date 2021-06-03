<template>
  <div>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Age</th>
                <th scope="col">Plays</th>
                <th scope="col">Goals</th>
                <th scope="col">Assists</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="player in players" :key="player.player_id">
                <th scope="row">{{player.player_number}}</th>
                <td>{{player.player_name}}</td>
                <td>{{player.player_position}}</td>
                <td>{{player.player_age}}</td>
                <td>{{player.player_match_played}}</td>
                <td>{{player.player_goals}}</td>
                <td>{{player.player_assists}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Players',
  computed: {
    players: function () {
      return this.$store.state.favourite.players
    }
  }
}
</script>

<style>

</style>
