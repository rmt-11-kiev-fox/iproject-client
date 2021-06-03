<template>
  <div id="app">
    <router-view />
    <HFooter />
  </div>
</template>
<script>
import HFooter from "vue-hacktiv8-footer";
export default {
  components: {
    HFooter
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/").catch(() => {});
    }
  }
};
</script>
<style>
#app {
  display: flex;
  flex-direction: column;
}
</style>
