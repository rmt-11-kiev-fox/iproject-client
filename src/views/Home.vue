<template>
  <div class="home">
    <Navbar></Navbar>
    <Content v-if="$route.name === 'Home'"></Content>
    <Register v-if="$route.name === 'Home'"></Register>
    <Login v-if="$route.name === 'Login'"></Login>
    <Collect v-if="$route.name === 'Collect'"></Collect>
    <HFooter></HFooter>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Collect from '../components/Collect'
import Register from '../components/Register'
import Content from '../components/Content'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    Login,
    Collect,
    Register,
    Content,
    HFooter
  }
}
</script>
