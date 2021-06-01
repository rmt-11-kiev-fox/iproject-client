<template>
  <div class="home">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
