<template>
  <section class="container-fluid row">
    <div class="col-12">
      <h1 class="text-center mt-4">Animal List</h1>
    </div>
    <div class="col-2 left-bar">
      <div class="row">
        <form class="mt-4">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
          >
        </form>
      </div>
      <div class="row my-4 w-75">
        <h4>Type:</h4>
        <select class="custom-select ms-4">
          <option value="">aaa</option>
        </select>
      </div>
    </div>
    <div class="col-10 right-bar">
      <div class="container-fluid row">
        <AnimalCard
          v-for="animal in animals"
          :key="animal.id"
          :animal="animal"
        ></AnimalCard>
      </div>
    </div>
  </section>
</template>

<script>
import AnimalCard from '../components/AnimalCard'
export default {
  name: 'Home',
  components: {
    AnimalCard
  },
  computed: {
    animals () {
      return this.$store.state.animals
    }
  },
  created () {
    this.$store.dispatch('fetchAnimals')
  }
}
</script>

<style>
.left-bar {
  background-color: rgba(0, 0, 0, 0.692);
}
.right-bar {
  background-color: rgba(0, 0, 0, 0.692);
}
</style>
