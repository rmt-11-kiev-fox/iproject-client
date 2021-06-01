import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios.js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: '',
    errorLogin: false
  },
  mutations: {
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_ERRORLOGIN (state, payload) {
      state.errorLogin = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
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
          localStorage.setItem('access_token', data.access_token)
          commit('SET_ISLOGIN', true)
          router.push('/')
        })
        .catch((err) => {
          console.log(err.response.data.message)
          commit('SET_ERRORLOGIN', true)
        })
    }
  },
  modules: {
  }
})
