<template>
  <div>
    <div class="container">

      <div v-for="(data, i) in organizationList" :key="i" class="card">
        <div class="card-body">
          <h4 class="card-title">{{ data.charityName }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{{ data.category }}</h6>
          <p class="card-text">
            <pre> website: {{data.url}} </pre>
          </p>
          <a href="#" class="card-link" @click="$router.push(`/checkout?id=${data.charityName}`)">Donate</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryData",
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