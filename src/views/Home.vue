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
    const currentTime = new Date().getHours()
    if (currentTime >= 18 || currentTime < 6) {
      this.$store.commit('SET_ISDARK', true)
    } else {
      this.$store.commit('SET_ISDARK', false)
    }
  }
}
</script>

<style>

</style>
