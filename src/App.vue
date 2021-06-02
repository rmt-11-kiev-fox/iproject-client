<template>
  <div id="app">
    <div class="dashboard-container">
      <OverlayModal v-if="loginToggle">
        <LoginForm
          :toggleLoginHandler="toggleLoginHandler"
          :toggleRegisterHandler="toggleRegisterHandler"
        />
      </OverlayModal>
      <OverlayModal v-if="registerToggle">
        <RegisterForm
          :toggleRegisterHandler="toggleRegisterHandler"
          :toggleLoginHandler="toggleLoginHandler"
        />
      </OverlayModal>
      <div class="dashboard-container__left">
        <HeaderDashboard />
        <ListMenu :activeTab="activeTab" v-if="isLogged" />
      </div>
      <div class="dashboard-container__right">
        <router-view />
      </div>
      <div
        class="overlay-menu"
        v-if="!isLogged && !loginToggle && !registerToggle"
      >
        <div class="text">Login For Your Best Experience</div>
        <div class="login-button" @click="toggleLoginHandler(true)">
          Login
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Loader from "../components/loader/index"
import ListMenu from './components/listMenu/index'
import HeaderDashboard from './components/headerListMenu/index'
import OverlayModal from './components/modal/index'
import LoginForm from './components/loginForm/index.vue'
import RegisterForm from './components/registerForm/index.vue'
export default {
  name: 'App',
  data() {
    return {
      activeTab: 'Dashboard'
    }
  },
  methods: {
    toggleRegisterHandler(val) {
      this.$store.commit('REGISTER_MODAL_HANDLER', val)
    },
    toggleLoginHandler(val) {
      this.$store.commit('LOGIN_MODAL_HANDLER', val)
    }
  },
  computed: {
    loginToggle() {
      return this.$store.state.loginModal
    },
    registerToggle() {
      return this.$store.state.registerModal
    },
    isLogged() {
      return this.$store.state.isLogged
    }
  },
  components: {
    // Loader
    ListMenu,
    HeaderDashboard,
    LoginForm,
    OverlayModal,
    RegisterForm
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
