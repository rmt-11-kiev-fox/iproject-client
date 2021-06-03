<template>
  <nav class="navbar navbar-dark bg-danger">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/PROJECT-LOGO.png"
          alt=""
          width="60"
          height="60"
          class="d-inline-block align-text-top"
        />
      </a>
      <div>
        <a href="#" class="navbar-brand">{{ user }}</a>
        <router-link to="/contact"
          ><a href="#" class="navbar-brand">Contact</a></router-link
        >
        <router-link to="/about"
          ><a href="#" class="navbar-brand">About</a></router-link
        >
        <a href="#" class="navbar-brand" @click.prevent="logout">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "dashboard",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    }
  },
  computed: mapState({
    user: "userLogin"
  })
};
</script>

<style></style>
