<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('SET_LOGIN', true)
    }
  }
}
</script>

<style>

</style>
