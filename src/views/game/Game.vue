<template>
  <div class="container-fluid row">
    <div class="col-2 h-100 bg-danger" style="height:500px"><Sidebar/></div>
    <div class="col-10">
      <h1>Renaissance Game</h1>
      <router-view/>
    </div>
  </div>
</template>
<script>
import Sidebar from '../../components/Sidebar'
export default {
  name: 'PickTopic',
  components: {
    Sidebar
  }
}
</script>

<style>

</style>
