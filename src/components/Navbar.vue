<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
    <div class="container-fluid">
      <a @click.prevent="$router.push({ path: '/' })" class="navbar-brand mx-3 my-2" href="">WarkopCycle.</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="https://warkop-cycle.web.app/">Shop</a>
          </li>
          <li class="nav-item">
            <a @click.prevent="$router.push({ path: '/history' })" class="nav-link" href="">My History</a>
          </li>
          <li v-if="$store.state.isLogin === false" class="nav-item">
            <a @click.prevent="$router.push({ path: '/login' })" class="nav-link" href="">Login</a>
          </li>
          <li v-if="$store.state.isLogin === true" class="nav-item">
            <a  @click.prevent="logout" class="nav-link" href="">Logout</a>
          </li>
        </ul>
      </div>
      <div>
        <button @click.prevent="$router.push({ path: '/collect' })" class="mx-3 btn btn-warning">RECYCLE FOR ME</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ path: '/' })
      this.$store.state('SET_Login', false)
    }
  }
}
</script>

<style>

</style>
