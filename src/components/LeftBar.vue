<template>
    <div class="col-2 left-bar">
      <div class="row">
        <form class="mt-4">
          <input
            class="form-control"
            type="search"
            placeholder="Animal Name"
            v-model="keyword"
          >
        </form>
      </div>
      <div class="row my-4">
          <router-link
            :to="'/home/favorites'"
            :class="{
                type_opt: $route.params.type !== 'favorites',
                type_choosed: $route.params.type === 'favorites'
            }"
            >
                <h4>
                    My Favorite Animals
                </h4>
        </router-link>
      </div>
      <div class="row my-4 w-75">
        <h4>Type:</h4>
        <router-link
            to="/home"
            :class="{
                type_opt: $route.params.type,
                type_choosed: !$route.params.type
            }"
            class="ms-4"
            >All
        </router-link>
        <router-link
            :to="'/home/' + type"
            v-for="(type, i) in types"
            :key="i"
            :class="{
                type_opt: $route.params.type !== type,
                type_choosed: $route.params.type === type
            }"
            class="ms-4"
            >{{ type }}
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Leftbar',
  computed: {
    types () {
      return this.$store.state.types
    },
    keyword: {
      get () {
        return this.$store.state.keyword
      },
      set (value) {
        this.$store.commit('SET_KEYWORD', value)
      }
    }
  }
}
</script>

<style>
.left-bar {
  background-color: rgba(134, 134, 134, 0.692);
}
.type_opt {
    cursor: pointer;
    color: aliceblue;
}
.type_choosed {
    cursor: pointer;
    color: rgb(7, 63, 0);
}
</style>
