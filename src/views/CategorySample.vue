<template>
  <div class="container" style="background-color: whitesmoke">
    <div v-for="(data, i) in organizationList" :key="i">
      <h2>{{ data }}</h2>
    </div>

    <!-- 
    <div v-for="(data, i) in organizationList" :key="i" class="card">
        <div class="card-body">
          <h4 class="card-title">{{ data.charityName }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{{ data.category }}</h6>
          <p class="card-text">
            <pre> website: {{data.url}} </pre>
          </p>
          <a href="#" class="card-link" @click="$router.push(`/checkout?id=${data.charityName}`)">Donate</a>
          <a href="#" class="card-link">Add to My Charity</a>
        </div>
      </div> -->
  </div>
</template>

<script>
export default {
  name: "CategorySample",
  computed: {
    organizationList() {
      return this.$store.state.organizations;
    },
  },
  created() {
    const { id } = this.$route.params;

    this.$store.dispatch("fetchOrganizationByCategory", id);
  },
};
</script>

<style>
</style>