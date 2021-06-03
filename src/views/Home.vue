<template>
  <section class="container-fluid row mb-4">
    <div class="col-12">
      <h1 class="text-center mt-4">MINI ZOO COLLECTIONS</h1>
    </div>
    <Leftbar></Leftbar>
    <Rightbar></Rightbar>
  </section>
</template>

<script>
import Leftbar from '../components/LeftBar'
import Rightbar from '../components/RightBar'
export default {
  name: 'Home',
  components: {
    Rightbar,
    Leftbar
  },
  created () {
    this.$store.dispatch('fetchAnimals')
    this.$store.dispatch('fetchFavorite')
  }
}
</script>

<style>

</style>
