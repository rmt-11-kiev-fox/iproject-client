import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueSocketIO from 'vue-socket.io'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/styles/style.css'

Vue.config.productionTip = false

Vue.use(
    new VueSocketIO({
        debug: true,
        connection: 'http://localhost:3000', // local testing
        // connection: 'https://triviasiks.herokuapp.com', // deploy url
        vuex: {
            store,
            actionPrefix: 'SOCKET_',
            mutationPrefix: 'SOCKET_'
        }
    })
)

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
