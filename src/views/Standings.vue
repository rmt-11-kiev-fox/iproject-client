<template>
  <div>
    <table class="table">
        <thead class="thead-dark">
            <tr class="row">
                <th scope="col" class="col-1">#</th>
                <th scope="col" class="col-3">Club</th>
                <th scope="col" class="col-1">MP</th>
                <th scope="col" class="col-1">W</th>
                <th scope="col" class="col-1">D</th>
                <th scope="col" class="col-1">L</th>
                <th scope="col" class="col-1">GF</th>
                <th scope="col" class="col-1">GA</th>
                <th scope="col" class="col-1">GD</th>
                <th scope="col" class="col-1">Pts</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="team in standings" :key="team.team_id" class="row">
                <th scope="row" class="col-1">{{team.overall_league_position}}</th>
                <td class="col-3 d-flex flex-row justify-content-start align-items-center">
                    <div class="me-3">
                        <img :src="team.team_badge" class="teamBadge" alt="team">
                    </div>
                    <div>
                        <p>{{team.team_name}}</p>
                    </div>
                </td>
                <td class="col-1">{{team.overall_league_payed}}</td>
                <td class="col-1">{{team.overall_league_W}}</td>
                <td class="col-1">{{team.overall_league_D}}</td>
                <td class="col-1">{{team.overall_league_L}}</td>
                <td class="col-1">{{team.overall_league_GF}}</td>
                <td class="col-1">{{team.overall_league_GA}}</td>
                <td class="col-1">{{team.overall_league_D}}</td>
                <td class="col-1">{{team.overall_league_PTS}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Standings',
  computed: {
    standings: function () {
      return this.$store.state.standings
    }
  }
}
</script>

<style scoped>
.teamBadge {
    max-width: 30px;
}
</style>
