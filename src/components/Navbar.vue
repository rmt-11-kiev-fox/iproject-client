<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/"> Personal Expenses Assistant </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul v-if="loggedIn" class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/income"> +Add </router-link>
          <router-link class="nav-link" to="/reports"> Show Reports </router-link>
          <router-link class="nav-link" to="/login"> Login </router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" @submit.prevent="logout">
        <button v-if="loggedIn" class="btn btn-danger my-2 my-sm-0" type="submit"> Logout </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
