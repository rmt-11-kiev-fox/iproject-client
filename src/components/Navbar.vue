<template>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            <span class="fs-4">ADABIDAN</span>
        </a>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <router-link to="/" class="me-3 py-2 text-dark text-decoration-none" href="#">Home</router-link>
            <router-link to="/login" v-if="!isLogin" class="me-3 py-2 text-dark text-decoration-none">Login</router-link>
            <a class="me-3 py-2 text-dark text-decoration-none" v-else href="/" @click.prevent="logout">Logout</a>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
      return {
          isLogin: null
      }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.isLogin = false
    }
  },
  created () {
      if(localStorage.username){
          this.isLogin = true
      }
  }
}
</script>

<style>

</style>
