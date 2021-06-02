<template>
  <li>
      <a @click.prevent="favActive(favourite)" href="#">{{favourite.teamName}}</a>
  </li>
</template>

<script>
export default {
  name: 'FavouritesList',
  props: ['favourite'],
  methods: {
    favActive (favourite) {
      console.log(favourite)
    }
  }
}
</script>

<style>

</style>
