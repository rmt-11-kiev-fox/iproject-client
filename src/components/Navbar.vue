<template>
  <header id="main-header">
    <div class="main-header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
              <a
                class="navbar-toggler c-toggler"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <div class="navbar-toggler-icon" data-toggle="collapse">
                  <span class="navbar-menu-icon navbar-menu-icon--top"></span>
                  <span
                    class="navbar-menu-icon navbar-menu-icon--middle"
                  ></span>
                  <span
                    class="navbar-menu-icon navbar-menu-icon--bottom"
                  ></span>
                </div>
              </a>
              <a class="navbar-brand">
                <h5>Red Envelope</h5>
              </a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="menu-main-menu-container">
                  <ul id="top-menu" class="navbar-nav ml-auto">
                    <li class="menu-item">
                      <a>Home</a>
                    </li>
                    <li class="menu-item">
                      <a>Movies</a>
                    </li>
                    <li class="menu-item">
                      <a>My Wishlist</a>
                    </li>
                    <li class="menu-item">
                      <a @click="logout">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mobile-more-menu">
                <a
                  class="more-toggle"
                  id="dropdownMenuButton"
                  data-toggle="more-toggle"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ri-more-line"></i>
                </a>
              </div>
              <div class="navbar-right menu-right">
                <ul class="d-flex align-items-center list-inline m-0">
                  <li class="nav-item nav-icon">
                    <a
                      class="iq-user-dropdown search-toggle p-0 d-flex align-items-center"
                      data-toggle="search-toggle"
                    >
                      <img
                        src="https://purepng.com/public/uploads/large/purepng.com-ninjashinobininjacovert-agentassassinationguerrilla-warfaresamuraiclip-artblack-ninja-14215269606870qvcf.png"
                        class="img-fluid avatar-40 rounded-circle"
                        alt="user"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="nav-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
#logo-image {
  width: 100pt;
  height: 50pt;
}
</style>
