<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <img src="" alt="" style="width: 80px; background: transparent; outline: none; border-radius: 50px;">
      <a class="navbar-brand">Artheals</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav m-auto my-2 my-lg-0">
          <li class="nav-item">
            <a @click.prevent="$router.push('/')" class="nav-link active" href="#">Gallery</a>
          </li>
        </ul>
        <div class="d-flex">
          <input disabled class="px-0 search" type="search" value="" aria-label="Search">
          <button class="btn0" type="button"><span><i class="fa fa-heart" aria-hidden="true"></i></span></button>
          <button v-if="!verify" @click="$router.push('/login')" class="btn0">Login</button>
          <button v-else @click="logout" class="btn0">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
    }
  },
  methods:{
    logout(){
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  computed: {
      verify(){
        return localStorage.getItem('access_token')
      }
  }

    // gotToLiked(){
    //   if(!localStorage.getItem('access_token')){
    //     this.$router.push('/login')
    //   } else {
    //     this.$router.push('/like')
    //   }
    // }

}
</script>

<style>

</style>
