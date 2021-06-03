<template>
    <div class="col-10 right-bar mb-4" :class="{ right_bar: !isDark, right_bar_dark: isDark }">
      <div class="row mt-4">
        <div class="col-4 text-center">
        <router-link
        :to="'/home/favorites'"
        :class="{
          type_opt: $route.params.type !== 'favorites' && !isDark,
          type_choosed: $route.params.type === 'favorites' && !isDark,
          type_opt_dark: $route.params.type !== 'favorites' && isDark,
          type_choosed_dark: $route.params.type === 'favorites' && isDark
        }"
        >
        <h4>
          My Favorite Animals
        </h4>
        </router-link>
        </div>
        <div class="col-auto">
          <router-link
            to="/home"
            :class="{
              type_opt: $route.params.type && !isDark,
              type_choosed: !$route.params.type && !isDark,
              type_opt_dark: $route.params.type && isDark,
              type_choosed_dark: !$route.params.type && isDark
            }"
            class="ms-4"
            > All
          </router-link>
      <router-link
        :to="'/home/' + type"
        v-for="(type, i) in types"
        :key="i"
        :class="{
          type_opt: $route.params.type !== type && !isDark,
          type_choosed: !$route.params.type === type && !isDark,
          type_opt_dark: $route.params.type !== type && isDark,
          type_choosed_dark: !$route.params.type ===type && isDark
        }"
        class="ms-4"
        >{{ type }}
      </router-link>
        </div>
      </div>
      <hr>
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
    types () {
      return this.$store.state.types
    },
    isDark () {
      return this.$store.state.isDark
    },
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
.right_bar_dark {
  background-color: rgba(0, 0, 0, 0.849);
}
.type_opt {
  cursor: pointer;
  color: rgb(0, 0, 0);
}
.type_choosed {
  cursor: pointer;
  color: rgb(0, 14, 209);
}
.type_opt_dark {
  cursor: pointer;
  color: rgb(221, 221, 221);
}
.type_choosed_dark {
  cursor: pointer;
  color: rgb(0, 150, 125);
}
</style>
