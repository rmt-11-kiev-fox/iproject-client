<template>
  <div class="container">
    <div class="row d-flex">
      <div class="col-5 my-3 mx-auto shadow p-3 mb-5 bg-white rounded">
        <form @submit.prevent="submitLogin" class="text-center">
          <h1 class="h3 mb-3 fw-normal">Please Login</h1><br>
          <div class="form-floating">
            <label class="text-center" for="username">Username</label>
            <input v-model="username" type="text" class="form-control" placeholder="Your username here">
          </div><br>
          <div class="form-floating">
            <label for="password">Password</label>
            <input v-model="password" type="password" class="form-control" placeholder="Your password here">
          </div><br>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button><br><br>
          <p> Don't have an account? <a @click.prevent="toRegister" class="btn btn-default btn-dark"> Register </a> </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    toRegister () {
      this.$router.push({ path: '/register' })
    },
    submitLogin () {
      const payload = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>

</style>
