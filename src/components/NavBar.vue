<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top mb-4 shadow"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Charitable</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="#"
              >Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link to="/category">
              <a class="nav-link">Category</a>
            </router-link>
          </li>

          <li v-if="logged" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >My Account</a
            >
            <div class="dropdown-menu">
              <router-link to="/profile/data">
                <a class="dropdown-item">My Profile</a>
              </router-link>
              <!-- <a class="dropdown-item" href="#">My Profile</a> -->
              <a class="dropdown-item" href="#">My Donation</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li>
            <form @submit.prevent="searchHandler" class="d-flex">
              <input
                @keyup="onSubmit"
                v-model="keyword"
                class="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
            </form>
          </li>
          <li class="nav-item ms-2 me-2">
            <router-link to="/">
              <a v-if="logged" class="nav-link" href="#" @click="logout"
                >Logout
              </a>
            </router-link>
          </li>
          <li v-if="!logged" class="nav-item ms-2 me-2">
            <router-link to="/register">
              <a class="nav-link" href="#">Register </a>
            </router-link>
          </li>
          <li v-if="!logged" class="nav-item ms-2 me-2">
            <router-link to="/login">
              <a class="nav-link" href="#">Login </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      logged: false,
      keyword: "",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
    },
    onSubmit: function (e) {
      if (e.keyCode === 13) {
        this.searchHandler(this.keyword);
      }
    },
    searchHandler(keyword) {
      this.$store.dispatch("findOrganizations", keyword);
      this.$router.push("/organization/keyword").catch(() => {});
    },
  },
  // watch: {
  //   keyword: function (value) {
  //     this.searchHandler(value);
  //   },
  // },
  created() {
    this.logged = !localStorage.access_token ? false : true;
  },
};
</script>

<style>
</style>