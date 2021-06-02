<template>
    <div class="col-10 right-bar mb-4">
      <div class="container-fluid row mb-4">
        <AnimalCard
          v-for="animal in animals"
          :key="animal.id"
          :animal="animal"
        ></AnimalCard>
      </div>
    </div>
</template>

<script>
import AnimalCard from './AnimalCard'
export default {
  name: 'Rightbar',
  components: {
    AnimalCard
  },
  computed: {
    animals () {
      return this.$store.getters.filteredByName({
        keyword: this.$store.state.keyword,
        data: this.typeFiltered
      })
    },
    typeFiltered () {
      let type = ''
      if (this.$route.params.type) {
        type = this.$route.params.type
      }
      return this.$store.getters.filteredAnimalByType(type)
    }
  }
}
</script>

<style>
.right-bar {
  background-color: rgba(241, 241, 241, 0.692);
}
</style>
