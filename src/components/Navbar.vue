<template>
    <!-- ======= NAVBAR ======= -->
    <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

        <a class="logo me-auto"><img src="@/assets/img/logo.png" alt=""></a>

        <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
            <li><a @click.prevent="$router.push('/').catch(() => {})" v-if="isLoggedIn" class="nav-link scrollto" href="#">Home</a></li>
            <li><a @click.prevent="$router.push('/login').catch(() => {})" v-if="!isLoggedIn" class="nav-link scrollto" href="#">Login</a></li>
            <li v-if="isLoggedIn" class="dropdown"><a href="#"><i class="fas fa-user"></i></a>
            <ul>
                <li @click.prevent="logout"><a href="#">Logout</a></li>
            </ul>
            </li>
        </ul>
        </nav>
        <a @click.prevent="$router.push('/register').catch(() => {})" v-if="!isLoggedIn" class="mx-3 btn btn-info text-white"><span class="d-none d-md-inline">Are you a doctor?</span> Register now!</a>
    </div>
    </header>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
      isLoggedIn () {
          return this.$store.state.isLoggedIn
      }
  },
  methods: {
      logout () {
          this.$store.dispatch('logout')
      }
  }
}
</script>

<style>

</style>