<template>
  <nav class="navbar navbar-expand-lg shadow-lg sticky-top">
    <div class="container-fluid col-12">
      <div class="col-2">
        <router-link to="/" class="navbar-brand nav-btn ms-4">
          MINI Z
          <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
          <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        </router-link>
      </div>
      <div class="col-3">
        <a
          class="navbar-brand btn-logout d-flex flex-row-reverse"
          v-if="isLogin"
          @click.prevent="logout"
        >Leave the Zoo</a>
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
      this.$store.commit('SET_ISLOGIN', false)
      this.$router.push('/login')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>
nav {
  background-color: rgba(0, 175, 58, 0.733);
}

.nav-btn {
  color: rgb(70, 29, 0);
  text-decoration: none;
}

.btn-logout {
  cursor: pointer;
  color: aliceblue;
  font-size: 25px;
}
</style>
