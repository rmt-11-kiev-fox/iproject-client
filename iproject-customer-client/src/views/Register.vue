<template>
  <section id="register-section">
    <div class="container">
      <div class="row px-3">
        <div class="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
          <div class="img-left-register d-none d-md-flex"></div>

          <div class="card-body">
            <h4 class="title text-center mt-4">REGISTER</h4>
            <form @submit.prevent="submitRegist" class="form-box px3">
              <div class="form-input">
                <span><i class="fa fa-user" aria-hidden="true"></i></span>
                <input v-model="value.fullname" type="text" name="" placeholder="Full Name" tabindex="10" required>
              </div>
              <div class="form-input">
                <span><i class="fa fa-envelope-o"></i></span>
                <input v-model="value.email" type="email" name="" placeholder="Email" tabindex="10" required>
              </div>
              <div class="form-input">
                <span><i class="fa fa-key"></i></span>
                <input v-model="value.password" type="password" name="" placeholder="Password" required>
              </div>
              <div class="form-input">
                <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                <input v-model="value.address" type="text" name="" placeholder="Address" required>
              </div>
              <div class="mb-3 warp-btn-login">
                <button type="submit" class="btn btn-block text-uppercase">
                  Success
                </button>
              </div>
              <div class="mb-3 warp-btn-login">
                <button @click="backToLogin" type="button" class="btn btn-block text-uppercase">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Register',
  data() {
    return {
      value: {
        fullname: '',
        email: '',
        password: '',
        address: ''
      }
    }
  },
  components: {

  },
  methods: {
    backToLogin () {
      this.$router.push('/login')
    },
    submitRegist(){
      this.$store.dispatch('register', this.value)
    }
  }
}
</script>
