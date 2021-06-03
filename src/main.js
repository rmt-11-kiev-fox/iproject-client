import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import GoogleSignInButton from 'vue-google-signin-button-directive'
import 'tailwindcss/tailwind.css'
Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug:true,
  connection:'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
},
}))

new Vue({
  router,
  store,
  render: h => h(App),
  GoogleSignInButton,
}).$mount('#app')
