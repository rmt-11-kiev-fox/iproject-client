<template>
  <nav class="navbar navbar-expand-lg shadow-lg sticky-top">
    <div class="container-fluid col-12">
      <div class="col-2">
        <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top ms-4" alt="">
        <a href="#" class="navbar-brand nav-btn">ZOOLORIUM</a>
      </div>
      <div class="col-4 ms-4">
        <form class="d-flex">
          <input class="form-control ms-4 me-2" type="search" placeholder="Search">
        </form>
      </div>
      <div class="col-3">
        <a class="navbar-brand btn d-flex flex-row-reverse">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
nav {
  background-color: rgba(0, 175, 58, 0.733);
}
.nav-btn {
  color: rgb(70, 29, 0);
  text-decoration: none;
}
</style>
