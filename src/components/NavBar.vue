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
            <router-link to="/">
              <a class="nav-link">Home</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/category">
              <a class="nav-link">Category</a>
            </router-link>
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
              <router-link to="/profile">
                <a class="dropdown-item">My Profile</a>
              </router-link>
              <router-link to="/donation">
                <a class="dropdown-item">My Donation</a>
              </router-link>
            </div>
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
      this.$router.push("/login");
    },
    onSubmit: function (e) {
      if (e.keyCode === 13) {
        this.searchHandler(this.keyword);
      }
    },
    searchHandler(keyword) {
      this.$store.dispatch("findOrganizations", keyword);
      this.$router.push(`/organization?q=${keyword}`).catch(() => {});
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
/* .bg-glass {
background: rgba( 197, 203, 196, 0.50 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 1.5px );
-webkit-backdrop-filter: blur( 1.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 )
} */

/* .bg-class {
  background: rgba(197, 203, 196, 0);
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
/* backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-weight: bolder;
} */
</style>