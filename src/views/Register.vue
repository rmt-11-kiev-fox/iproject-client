<template>
  <div class="container w-75 my-5 bg-light rounded shadow">
        <div class="row py-2 d-flex align-items-center">
            <div class="col">
                <!-- <img src="../../assets/login-logo.svg" style="width: 100%" alt="" /> -->
            </div>
            <div class="col">
                <h1>Register</h1>
                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label for="reg-email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="reg-email" aria-describedby="emailHelp" v-model="email"/>
                    </div>
                    <div class="mb-3">
                        <label for="reg-username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="reg-username" aria-describedby="emailHelp" v-model="username"/>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                Already registered? <router-link to="/login">Login here</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
        email: '',
        username: '',
        password: ''
    }
  },
  methods: {
    register () {
        this.$store.dispatch('register', {email: this.email, username: this.username, password: this.password, role: 'Patient'})
    }
  }
}
</script>

<style>

</style>
