<template>
  <div id="app">
    <div class="dashboard-container">
      <OverlayModal v-show="loginToggle">
        <LoginForm
          :toggleLoginHandler="toggleLoginHandler"
          :toggleRegisterHandler="toggleRegisterHandler"
        />
      </OverlayModal>
      <OverlayModal v-show="registerToggle">
        <RegisterForm
          :toggleRegisterHandler="toggleRegisterHandler"
          :toggleLoginHandler="toggleLoginHandler"
        />
      </OverlayModal>
      <div class="dashboard-container__left">
        <HeaderDashboard />
        <ListMenu :activeTab="activeTab" />
      </div>
      <div class="dashboard-container__right">
        <div class="login-button" @click="toggleLoginHandler">Login</div>
        <router-view />
        <Chat v-if="activeTab === 'Chat'" />
        <LiveBid v-if="activeTab === 'LiveBid'" />
      </div>
    </div>
  </div>
</template>

<script>
import Chat from "./views/chat/index";
import LiveBid from "./views/liveBid/index";

// import Loader from "../components/loader/index"
import ListMenu from "./components/listMenu/index";
import HeaderDashboard from "./components/headerDashboard/index";
import OverlayModal from "./components/modal/index";
import LoginForm from "./components/loginForm/index.vue";
import RegisterForm from "./components/registerForm/index.vue";
export default {
  name: "App",
  data() {
    return {
      activeTab: "Dashboard",
      loginToggle: false,
      registerToggle: false
    };
  },
  methods: {
    toggleRegisterHandler() {
      this.registerToggle = !this.registerToggle;
      this.loginToggle = false;
    },
    toggleLoginHandler() {
      this.loginToggle = !this.loginToggle;
      this.registerToggle = false;
    }
  },
  components: {
    // Loader
    ListMenu,
    HeaderDashboard,
    LoginForm,
    OverlayModal,
    RegisterForm,
    Chat,
    LiveBid
  }
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
