<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
        <div class="d-flex align-itmes-center">
          <i class="fa fa-align-justify primary-text fs-4 me-3" id="menu-toggle" aria-hidden="true"></i>
          <h2 class="fs-2 m-0">Dashboard</h2>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggle-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item-dropdown">
              <a href="#" class="nav-link dropdown-toggle second-text fw-bold" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-user" aria-hidden="true"> Admin</i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a href="#" class="dropdown-item"> Profile</a></li>
                <li><a href="#" class="dropdown-item"> Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
