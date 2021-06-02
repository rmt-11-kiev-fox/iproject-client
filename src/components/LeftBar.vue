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
        <a v-for="(type, i) in types" :key="i" class="type-opt ms-4">{{ type }}</a>
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
.type-opt {
    cursor: pointer;
    color: aliceblue;
}
</style>
