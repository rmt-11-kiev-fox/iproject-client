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
              <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" style="margin: auto; border-radius: 5px;"></GoogleLogin>
              <hr class="my-4">
              <div class="text-center mb-2">
                Don't have an account?
              </div>
              <a @click.prevent="toRegist" href="#" class="register-link">
                Register here
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GoogleLogin from 'vue-google-login'
export default {
  data() {
    return {
      email: '',
      password: '',
        params: {
                  client_id: "368190331850-dvbu8q3ecoc05i0f4qtgn782vasqjrpp.apps.googleusercontent.com"
                },
                // only needed if you want to render the button with the google ui
                renderParams: {
                  width: 250,
                  height: 50,
                  longtitle: true
                }
    }
  },
  components: {
    GoogleLogin
  },
  methods: {
    submitLogin(){
      let payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    },
    toRegist(){
      this.$router.push('/register')
    },
    onSuccess(googleLogin){
      let token_id = googleLogin.qc.id_token
      // console.log(token_id)
      this.$store.dispatch('googleSubmit', token_id)
    }
  },
}
</script>

<style>

</style>
