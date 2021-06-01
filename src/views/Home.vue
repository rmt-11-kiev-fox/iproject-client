<template>
  <section class="home col-12">
  </section>
</template>

<script>
export default {
  name: 'Home',
  created () {
    this.$store.dispatch('fetchAnimals')
  }
}
</script>

<style>
.home {
    background-image: url('../assets/dark.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
</style>
