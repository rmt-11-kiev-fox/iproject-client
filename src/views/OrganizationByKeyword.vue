<template>
  <div>
    <h1> {{organizations}}</h1>
  </div>
</template>

<script>
export default {
  name: "OrganizationByKeyword",
  computed: {
    organizations() {
      return this.$store.state.organizations;
    },
  },
  created() {
    
  
  },
};
</script>

<style>
</style>