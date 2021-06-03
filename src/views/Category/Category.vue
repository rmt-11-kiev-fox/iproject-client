<template>
  <div class="d-flex m-2" style="max-height: 500px">
    <div class="col-2 first-container" style="width:500px">
      <div class="container d-flex">
        <ul class="list-group scroll">
          <li
            v-for="(category, i) in categories"
            :key="i"
            class="list-group-item d-flex justify-content-between align-items-center overflow-hidden"
          >
            <a
              href=""
              @click="$router.push(`/category/${category.categoryId}`)"
            >
              {{ category.categoryDesc }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "Category",
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  created() {
    this.$store.dispatch("fetchCategories");
  },
};
</script>

<style>
.scroll {
  overflow-y: scroll;
}
</style>