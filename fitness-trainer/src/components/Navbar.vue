<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: skyblue">
  <div class="container-fluid">
    <a class="navbar-brand" >Fitness Trainer</a>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto m-3 mb-lg-0">
       
      </ul>
      <a class="btn btn-light" aria-current="page" @click="logout" >Logout</a>
      
    </div>
  </div>
</nav> <br>
  </div>
</template>

<script>
export default {
  methods: {
    data() {
      return {
      }
    },
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    }
  },
  created () {
    this.userName = localStorage.userName
  }
}
</script>