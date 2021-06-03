<template>
  <div class="home">
    <Navbar/>
    <router-view/>
    <HFooter></HFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../../components/Navbar'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    HFooter
  },
  methods: {
    startGame () {
      this.$router.push('/game/start')
    }
  }
}
</script>
<style>
  .home{
    height: 100%;
  }
  .box-menu{
    width: 500px;
    height: 350px;
    top: 50%;
    left: 50%;
    background-color: aliceblue;
    border-radius: 25px;
  }
  div a{
    width: 200px;
    height: 50px;
  }
  .btn-menu{
    text-align: center;
  }
</style>
