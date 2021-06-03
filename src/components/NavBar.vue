<template>
    <nav class="navbar shadow navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Kick Off</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <p class="nav-link">{{username}}</p>
                </li>
                <li class="nav-item">
                    <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    logout () {
      localStorage.clear()
      //   const auth2 = gapi.auth2.getAuthInstance()
      //   auth2.signOut().then(function () {
      //     console.log('User signed out.')
      //   })
      this.$store.dispatch('SET_favourites', [])
      this.$store.dispatch('SET_standings', [])
      this.$store.dispatch('SET_news', [])
      this.$store.dispatch('SET_favourite', null)
      this.$router.push('/login')
    }
  },
  computed: {
    username: function () {
      return localStorage.getItem('username')
    }
  }
}
</script>

<style>

</style>
