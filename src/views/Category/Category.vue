<template>
  <div class="d-flex m-2">
    <div class="col-2 first-container">
      <div class="container">
        <ul class="list-group overflow-hidden">
          <li
            v-for="(category, i) in categories"
            :key="i"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
          
              <a href="" @click="$router.push(`/category/${category.categoryId}`)">
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
</style>