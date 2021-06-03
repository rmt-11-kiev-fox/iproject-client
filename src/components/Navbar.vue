<template>
  <!--------------------------------------------- NAVBAR --------------------------------------------->
  <div>
    <div class="container">
      <div class="row d-flex justify-content-between">
        <img class="col-3" src="../../resources/logo3.png" alt="" />
        <nav class="col-7 navbar navbar-expand-lg navbar-light flex-grow-1 p-0">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav col-12 lh-base" style="font-family: 'Raleway', sans-serif;">
                <li v-if="isHome" class="nav-item bg-warning col-3 text-center">
                  <a @click="toHome" class="nav-link active fs-4" aria-current="page" href="#">HOME</a>
                </li>
                <li v-else class="nav-item bg-light col-3 text-center">
                  <a @click="toHome" class="nav-link active fs-4" aria-current="page" href="#">HOME</a>
                </li>
                <li class="nav-item bg-light col-3 text-center">
                  <a v-if="isHome" class="nav-link active fs-4" aria-current="page" href="#about">ABOUT</a>
                  <a v-else @click="toHome" class="nav-link active fs-4" aria-current="page" href="#about">ABOUT</a>
                </li>
                <li class="nav-item bg-light col-3 text-center">
                  <a v-if="isHome" class="nav-link active fs-4" aria-current="page" href="#search">SEARCH</a>
                  <a v-else @click="toHome" class="nav-link active fs-4" aria-current="page" href="#search">SEARCH</a>
                </li>
                <li v-if="isHome" class="nav-item bg-light col-3 text-center">
                  <a @click="toContact" class="nav-link active fs-4" aria-current="page" href="#">CONTACT</a>
                </li>
                <li v-else-if="isResult" class="nav-item bg-light col-3 text-center">
                  <a @click="toContact" class="nav-link active fs-4" aria-current="page" href="#">CONTACT</a>
                </li>
                <li v-else class="nav-item bg-warning col-3 text-center">
                  <a @click="toContact" class="nav-link active fs-4" aria-current="page" href="#">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div v-if="heroText" class="fw-lighter ms-5 mt-5" style="color: white; font-family: 'Varela Round', sans-serif;">
        <h1 class="fs-1" style="font-family: 'Righteous', cursive;">Find gift ideas in seconds!</h1>
        <h3>Find great product to celebrate you special moment</h3>
      </div>
    </div>
  </div>
  <!--------------------------------------------- NAVBAR --------------------------------------------->

</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toHome () {
      if (this.$router.currentRoute.name !== 'Home') {
        this.$router.push('/')
      }
    },
    toContact () {
      if (this.$router.currentRoute.name !== 'Contact') {
        this.$router.push('/contact')
      }
    }
  },
  computed: {
    isHome () {
      return this.$store.state.isHome
    },
    isResult () {
      return this.$store.state.isResult
    },
    heroText () {
      return this.$store.state.heroText
    }
  }
}
</script>

<style>
.navbar a:hover {
  background-color: #ffc107;
}
</style>
