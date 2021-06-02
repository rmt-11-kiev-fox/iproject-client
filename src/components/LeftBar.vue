<template>
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
