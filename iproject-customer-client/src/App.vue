<template>
  <div id="app">
    <!-- NAVBAR -->
    <Navbar/>
    <router-view/>
    <HFooter></HFooter>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import HFooter from 'vue-hacktiv8-footer'
export default {
  components:{
     Navbar,
     HFooter
  }
}
</script>
<style>

</style>
