<template>
<nav class="navbar navbar-light bg-light justify-content-between">
  <div>
    <a @click.prevent="goToHome" href="#" class="navbar-brand">Renaissance Game</a>
    <a @click.prevent="goToProfile" href="#" class="navbar-brand">Profile</a>
  </div>
  <a class="btn border navbar-inline text-center" >Chat</a>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goToHome () {
      this.$router.push('/home/mainMenu')
    },
    goToProfile () {
      this.$router.push('/profile/user/userHistory')
    }

  }

}
</script>

<style>

</style>
