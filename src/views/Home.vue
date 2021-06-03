<template>
  <div class="home">
    <Navbar></Navbar>
    <Content v-if="$route.name === 'Home'"></Content>
    <Register v-if="$route.name === 'Home'"></Register>
    <Login v-else-if="$route.name === 'Login'"></Login>
    <Collect
      v-else-if="$route.name === 'Collect'"
    ></Collect>
    <History
      v-else-if="$route.name === 'History'"
    ></History>
    <HFooter
      class="sticky-bottom"
    ></HFooter>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Collect from '../components/Collect'
import Register from '../components/Register'
import Content from '../components/Content'
import History from '../components/History'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    Login,
    Collect,
    Register,
    Content,
    History,
    HFooter
  },
  created () {
    this.$store.dispatch('location')
  }
}
</script>
