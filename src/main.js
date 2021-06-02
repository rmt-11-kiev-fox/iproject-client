import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.css'
import './assets/js/main'
// import './assets/vendor/animate.css/animate.min.css'
// import './assets/vendor/aos/aos.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
// import './assets/vendor/boxicons/css/boxicons.min.css'
// import './assets/vendor/fontawesome-free/css/all.min.css'
// import './assets/vendor/glightbox/css/glightbox.min.css'
// import './assets/vendor/swiper/swiper-bundle.min.css'
// import './assets/vendor/aos/aos.js'
// import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
// import './assets/vendor/glightbox/js/glightbox.min.js'
// import './assets/vendor/php-email-form/validate.js'
// import './assets/vendor/purecounter/purecounter.js'
// import './assets/vendor/swiper/swiper-bundle.min.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
