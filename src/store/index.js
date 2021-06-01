import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          identity: payload.identity,
          password: payload.password
        }
      })
        .then(({ data }) => {
          Vue.swal({
            title: 'Welcome to Zoolorium, ' + data.username,
            icon: 'success'
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
