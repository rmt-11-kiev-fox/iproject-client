<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/"> Personal Expenses Assistant </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li v-if="loggedIn" class="nav-item">
          <router-link class="nav-link" to="/reports"> Show Reports </router-link>
        </li>
        <li v-if="!loggedIn" class="nav-item">
          <router-link class="nav-link" to="/login"> Login </router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" @submit.prevent="logout">
        <button v-if="loggedIn" @click.prevent="logout" class="btn btn-danger my-2 my-sm-0" type="submit"> Logout </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      month: ''
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('SET_LOGIN', false)
      this.$router.push({ path: '/login' })
    }
  },
  computed: {
    loggedIn () {
      console.log(this.$store.state.isLogin)
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>
