<template>
  <section class="container col-4 mt-4 login rounded">
    <h1>Login</h1>
    <form>
      <div class="my-3">
        <label class="form-label">Username or Email</label>
        <input type="text" class="form-control" v-model="identity">
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <div class="mb-3">
        <router-link to="/register">Create New Account</router-link>
      </div>
      <button type="submit" class="btn btn-success mb-4" @click.prevent="login">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      identity: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        identity: this.identity,
        password: this.password
      })
    }
  }
}
</script>

<style>

</style>
