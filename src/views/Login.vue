<template>
  <section class="container col-6 mt-4 login">
    <div class="row">
      <h1 class="text-center mb-4">Login</h1>
      <div class="login-cont container row">
        <div class="col-7 my-4">
          <img width="400px" src="../assets/login.jpg" alt="">
        </div>
        <div class="col-4 my-4">
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
        </div>
      </div>
    </div>
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
.login-cont {
  background-color: rgba(0, 100, 0, 0.479);
  border-radius: 10%;
}
</style>
