<template>
    <div>
        <!-- Navbar -->
        <Navbar/>
        <section id="hero">
            <!-- Login -->
            <div class="container mt-5">
                <h2>Welcome to <span>Medicio</span></h2>
                <p>Please log in with your account</p>
                <form @submit.prevent="login">
                    <div class="col-md-6 form-group">
                        <input v-model="email" type="email" class="form-control" name="email" id="email" placeholder="Your email" required>
                    </div>
                    <div class="col-md-6 form-group mt-2">
                        <input v-model="password" type="password" name="password" class="form-control" id="password" placeholder="Your password" required>
                    </div>
                    <button type="submit" class="btn btn-info text-white mt-2">Login</button>
                </form>
            </div>
        </section>    
    </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Login',
  data () {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
      login () {
          const payload = {
              email: this.email,
              password: this.password
          }
          this.$store.dispatch('login', payload)
      }
  },
  components: {
    Navbar
  }
}
</script>

<style>

</style>