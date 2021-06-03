<template>
  <div class="hello container">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link text-white-50" href="#About">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white-50" @click="logout">Logout</a>
          </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
