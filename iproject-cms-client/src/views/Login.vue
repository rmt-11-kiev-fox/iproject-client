<template>
  <section id="login-section">
    <div class="container">
      <div class="row px-3">
        <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
          <div class="img-left d-none d-md-flex"></div>

          <div class="card-body">
            <h4 class="title text-center mt-4">LOGIN</h4>
            <form @submit.prevent="submitLogin" class="form-box px3">
              <div class="form-input">
                <span><i class="fa fa-envelope-o"></i></span>
                <input v-model="email" type="email" name="" placeholder="Your Email" tabindex="10" required>
              </div>
              <div class="form-input">
                <span><i class="fa fa-key"></i></span>
                <input v-model="password" type="password" name="" placeholder="Your Password" required>
              </div>
              <div class="mb-3 warp-btn-login">
                <button type="submit" class="btn btn-block text-uppercase">
                  Login
                </button>
              </div>
              <hr class="my-4">
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitLogin(){
      let payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  },
}
</script>

<style>

</style>
