<template>
  <div class="home">
    <NavBar />
    <Slider v-if="homePage" />

    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    NavBar,
    Slider,
  },
  computed: {
    homePage() {
      if (this.$route.path == "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style scoped>
.title {
  font-weight: bolder;
}
</style>