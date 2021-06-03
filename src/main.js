import LoadScript from "vue-plugin-load-script";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/bootstrap.min.css";
import "./assets/css/typography.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
// import "./assets/js/jquery-3.4.1.min.js";
// import "./assets/js/popper.min.js";
// import "./assets/js/bootstrap.min.js";
// import "./assets/js/slick.min.js";
// import "./assets/js/owl.carousel.min.js";
// import "./assets/js/select2.min.js";
// import "./assets/js/jquery.magnific-popup.min.js";
// import "./assets/js/slick-animation.min.js";
// import "./assets/js/custom.js";
// import "./assets/js/flatpickr.min.js";

Vue.use(LoadScript);
Vue.config.productionTip = false;
// Vue.loadScript("./assets/js/jquery-3.4.1.min.js");
// Vue.loadScript("./assets/js/popper.min.js");
// Vue.loadScript("./assets/js/bootstrap.min.js");
// Vue.loadScript("./assets/js/slick.min.js");
// Vue.loadScript("./assets/js/owl.carousel.min.js");
// Vue.loadScript("./assets/js/select2.min.js");
// Vue.loadScript("./assets/js/jquery.magnific-popup.min.js");
// Vue.loadScript("./assets/js/slick-animation.min.js");
// Vue.loadScript("./assets/js/custom.js");
// Vue.loadScript("./assets/js/flatpickr.min.js");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
