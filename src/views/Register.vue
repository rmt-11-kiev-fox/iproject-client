<template>
    <section class="container col-6 mt-4">
        <div class="row">
        <h1 class="text-center mb-4">MINI ZOO REGRISTRATION</h1>
        <div class="login-cont container row">
            <div class="col-7 my-4">
                <img class="img-fluid" src="../assets/login.jpg" alt="">
            </div>
            <div class="col-4 my-4">
                <form>
                    <div class="my-3">
                        <label class="form-label">Username</label>
                        <input type="text" class="form-control" v-model="username">
                        <p class="err-msg">{{ errorRegister.errorUsername }}</p>
                    </div>
                    <div class="my-3">
                        <label class="form-label">Email</label>
                        <input type="text" class="form-control" v-model="email">
                        <p class="err-msg">{{ errorRegister.errorEmail }}</p>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" v-model="password">
                        <p class="err-msg">{{ errorRegister.errorPassword }}</p>
                    </div>
                    <div class="mb-3">
                        <router-link class="to-register" to="/login">Back to Login</router-link>
                        <p class="err-msg">{{ errorRegister.error }}</p>
                    </div>
                    <button type="submit" class="btn btn-login mb-4" @click.prevent="register">JOIN AS ZOO MEMBER</button>
                </form>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  computed: {
    errorRegister () {
      const err = {}
      this.$store.state.errorRegister.forEach((element) => {
        if (element.includes('Email')) {
          err.errorEmail = element
        } else if (element.includes('Password')) {
          err.errorPassword = element
        } else if (element.includes('Username')) {
          err.errorUsername = element
        } else {
          err.error = element
        }
      })
      return err
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        username: this.username,
        email: this.email,
        password: this.password
      })
    }
  },
  created () {
    this.$store.commit('SET_ERROR_REGISTER', [])
  }
}
</script>

<style>

</style>
