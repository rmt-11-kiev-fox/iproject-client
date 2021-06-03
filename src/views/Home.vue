<template>
  <div class="home">
    <Navbar />
    <div id="judul">
      <h2>SIGN IN NOW TO SEE MANY</h2>
      <h2>ANIMAL EXTICT</h2>
    </div>
    <FormLogin />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/navbarHome";
import FormLogin from "../components/formLogin";
export default {
  name: "Home",
  components: {
    Navbar,
    FormLogin
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/").catch(() => {});
    } else {
      this.$router.push("/dashboard").catch(() => {});
    }
  }
};
</script>

<style>
#judul {
  width: 100%;
  height: auto;
  text-align: center;
  padding-top: 30px;
}
</style>
