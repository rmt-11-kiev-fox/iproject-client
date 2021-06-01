import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios.js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: '',
    errorLogin: false,
    errorRegister: []
  },
  mutations: {
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_ERRORLOGIN (state, payload) {
      state.errorLogin = payload
    },
    SET_ERROR_REGISTER (state, payload) {
      state.errorRegister = payload
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
            imageUrl: 'https://www.pngkey.com/png/full/908-9088530_lion-cartoon.png',
            imageWidth: 100,
            background: 'rgba(0, 175, 58, 0.733)'
          })
          localStorage.setItem('access_token', data.access_token)
          commit('SET_ISLOGIN', true)
          router.push('/')
        })
        .catch((err) => {
          console.log(err.response.data.message)
          commit('SET_ERRORLOGIN', true)
        })
    },
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          username: payload.username,
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          Vue.swal({
            title: 'Registration Success',
            text: 'Welcome To The Club, ' + data.username,
            imageUrl: 'https://www.pngkey.com/png/full/908-9088530_lion-cartoon.png',
            imageWidth: 100,
            background: 'rgba(0, 175, 58, 0.733)'
          })
          router.push('/login')
        })
        .catch((err) => {
          console.log(err.response.data)
          if (err.response.data.message === 'Validation Error') {
            context.commit('SET_ERROR_REGISTER', err.response.data.errors)
            console.log(context.state.errorRegister)
          } else {
            Vue.swal({
              title: err.response.data.message,
              icon: 'error'
            })
          }
        })
    }
  },
  modules: {
  }
})
