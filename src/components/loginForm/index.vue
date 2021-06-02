<template>
  <div class="login-container">
    <div class="title">Login</div>
    <i class="fas fa-times icon-close" @click="toggleLoginHandler(false)"></i>
    <form @submit.prevent="loginHandler">
      <label>Username</label>
      <input
        type="text"
        placeholder="Masukan Username"
        v-model="usernameInput"
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Masukan Password"
        v-model="passwordInput"
      />

      <button>Submit</button>
    </form>

    <div class="register-copy">Doesn't Have Any Account?</div>
    <div class="register-copy link" @click="toggleRegisterHandler(true)">
      Register
    </div>
  </div>
</template>

<script>
export default {
  props: ['toggleLoginHandler', 'toggleRegisterHandler'],
  name: 'Login',
  data() {
    return {
      passwordInput: '',
      usernameInput: ''
    }
  },
  methods: {
    loginHandler() {
      const payload = {
        password: this.passwordInput,
        username: this.usernameInput
      }
      this.$store.dispatch('loginHandler', payload)
    }
  },
  computed: {}
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
