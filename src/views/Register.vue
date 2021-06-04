<template>
    <div>
        <Navbar/>
        <section id="hero">
            <!-- Register -->
            <div class="container mt-5">
                <h2>Register</h2>
                <p>Register yourself with us to manage and diagnose patients</p>
                <form @submit.prevent="register">
                    <div class="col-md-6 form-group">
                        <input v-model="full_name" type="text" class="form-control" name="full_name" id="full_name" placeholder="Your full name" required>
                    </div>
                    <div class="col-md-6 form-group mt-2">
                        <input v-model="email" type="email" class="form-control" name="email" id="email" placeholder="Your email" required>
                    </div>
                    <div class="col-md-6 form-group mt-2">
                        <input v-model="password" type="password" name="password" class="form-control" id="password" placeholder="Your password" required>
                    </div>
                    <button type="submit" class="btn btn-info text-white mt-2">Register</button>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Register',
  data () {
    return {
        full_name: '',
        email: '',
        password: ''
    }
  },
  methods: {
      register () {
          const payload = {
              full_name: this.full_name,
              email: this.email,
              password: this.password
          }
          console.log(payload);
          this.$store.dispatch('register', payload)
      }
  },
  components: {
    Navbar
  }
}
</script>

<style>

</style>