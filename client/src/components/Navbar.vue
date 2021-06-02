<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <div class="row">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <a class="navbar-brand col-lg-3 col-md-6 col-sm-12" href="#">
                        <img src="../Picture/logo.png" alt="" width="120" height="80">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <ul class="navbar-nav">
                        <li class="nav-item mx-5 col-lg-3 col-md-6 col-sm-12">
                            <router-link class="nav-link active" aria-current="page" to="/"
                                style="font-family: serif; font-style: oblique;">Home</router-link>
                        </li>
                        <li class="nav-item mx-5 col-lg-3 col-md-6 col-sm-12">
                            <router-link class="nav-link" style="font-family: serif; font-style: oblique;" to="/menu">Menu</router-link>
                        </li>
                        <li class="nav-item mx-5 col-lg-3 col-md-6 col-sm-12">
                            <router-link class="nav-link" href="#" style="font-family: serif; font-style: oblique;" to="/location">Location</router-link>
                        </li>
                        <li class="nav-item mx-5 col-lg-3">
                            <a class="nav-link" href="#" style="font-family: serif; font-style: oblique;">Book Now</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style>

</style>
