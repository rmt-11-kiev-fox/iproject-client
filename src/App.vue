<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <HFooter/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'App',
  components: {
    Navbar,
    HFooter
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
