<template>
  <div id="app">
    <Navbar/>
    <router-view/>

  </div>
</template>
<script>
import HFooter from 'vue-hacktiv8-footer'
import Navbar from './components/Navbar'
export default {
  name:"App",
  components:{
    Navbar,
    HFooter
  }
}
</script>

<style>
#app{
  background-color: #f8f3d4;
}

</style>