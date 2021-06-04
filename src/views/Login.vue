<template>
  <div class="container w-75 my-5 bg-light rounded shadow" id="login-page">
        <div class="row py-2 d-flex align-items-center">
            <div class="col">
                <!-- <img src="../../assets/login-logo.svg" style="width: 100%" alt="" /> -->
            </div>
            <div class="col">
                <h1>Please Login first</h1>
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" aria-describedby="usernameHelp" v-model="username"/>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                Dont have an account? <router-link  to="/register">Register Here</router-link > OR
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
    login () {
      this.$store.dispatch('login', { username: this.username, password: this.password })
    }
  }
}
</script>

<style>

</style>
