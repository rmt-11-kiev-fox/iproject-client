<template>
  <section class="container col-6 mt-4 login">
    <div class="row">
      <h1 class="text-center mb-4">Zoolorium Entrance</h1>
      <div class="login-cont container row">
        <div class="col-7 my-4">
          <img v-if="!errorLogin" class="img-fluid" src="../assets/login.jpg" alt="">
          <img v-else class="img-fluid" src="../assets/loginerr.png" alt="">
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
              <router-link class="to-register" to="/register">Not a Member yet? Register Now!</router-link>
            </div>
            <button type="submit" class="btn btn-login mb-4" @click.prevent="login">ENTER THE ZOO</button>
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
      this.$store.dispatch('catpi')
        .then(({ data }) => {
          this.$store.commit('SET_CATGIF', data.message)
          this.$store.dispatch('login', {
            identity: this.identity,
            password: this.password
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    errorLogin () {
      return this.$store.state.errorLogin
    }
  },
  created () {
    this.$store.commit('SET_ERRORLOGIN', false)
  }
}
</script>

<style>
.login-cont {
  background-color: rgba(0, 100, 0, 0.479);
  border-radius: 10%;
}
.to-register {
  color: rgb(0, 53, 13);
}
.btn-login {
  background-color: darkgreen;
  color: aliceblue;
}
</style>
