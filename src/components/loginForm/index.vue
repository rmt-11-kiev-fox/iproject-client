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

      <button v-if="!loadingHandler">Submit</button>
      <button v-if="loadingHandler" class="loader-wrapping ">
        <LoaderV2 />
      </button>
    </form>

    <div class="register-copy">Doesn't Have Any Account?</div>
    <div class="register-copy link" @click="toggleRegisterHandler(true)">
      Register
    </div>
  </div>
</template>

<script>
import LoaderV2 from '@/components/loaderV2/index'

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
      this.$store.commit('IS_LOADING', true)
      this.$store.dispatch('loginHandler', payload)
    }
  },
  computed: {
    loadingHandler() {
      return this.$store.state.isLoading
    }
  },
  components: {
    LoaderV2
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
