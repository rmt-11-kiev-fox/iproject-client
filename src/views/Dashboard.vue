<template>
  <div id="dashboard">
    <Navbar />
    <Body />
  </div>
</template>

<script>
import Navbar from "../components/navbarDashboard";
import Body from "../components/bodyDashboard";
export default {
  components: {
    Navbar,
    Body
  }
};
</script>

<style>
#dashboard {
  display: flex;
  flex-direction: column;
}
</style>
