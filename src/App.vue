<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <HFooter class="fixed-bottom"></HFooter>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'Apps',
  components: {
    Navbar,
    HFooter
  },
  computed: {
    bgImg () {
      return this.$store.state.bgImg
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('SET_ISLOGIN', true)
    } else {
      this.$store.commit('SET_ISLOGIN', false)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'ZCOOL KuaiLe', cursive;
  font-weight: bold;
}

body {
  background-image: url('./assets/56693.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.err-msg {
  color: crimson;
}
</style>
