import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/css/style.css'
import './assets/js/main'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSuggestion from 'vue-suggestion'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSuggestion)

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    getAge (birth_year) {
      const today = new Date();
      const age = today.getFullYear() - birth_year
      return `${age} years old`
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
