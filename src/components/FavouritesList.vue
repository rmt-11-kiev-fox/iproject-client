<template>
  <li>
      <a @click.prevent="favActive(favourite)" href="#">{{favourite.teamName}}</a>
  </li>
</template>

<script>
export default {
  name: 'FavouritesList',
  props: ['favourite'],
  methods: {
    favActive (favourite) {
      //   console.log(favourite)
      // tembak standings pake leagueKey
      this.$store.dispatch('getTeamByKey', favourite.teamKey)
        .then(({ data }) => {
          this.$store.commit('SET_favourite', data)
          //   console.log(this.$store.state.favourite)
          return this.$store.dispatch('getStandings', favourite.leagueKey)
        })
        .then(({ data }) => {
          this.$store.commit('SET_standings', data)
          //   console.log(this.$store.state.standings)
          return this.$store.dispatch('getNews', favourite.teamName)
        })
        .then(({ data }) => {
          this.$store.commit('SET_news', data)
          console.log(this.$store.state.news)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
