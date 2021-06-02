import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios.js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: '',
    errorLogin: false,
    errorRegister: [],
    isDark: false,
    animals: [],
    favorites: [],
    types: []
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
    },
    SET_ISDARK (state, payload) {
      state.isDark = payload
    },
    SET_ANIMALS (state, payload) {
      state.animals = payload
    },
    SET_FAVORITES (state, payload) {
      state.favorites = payload
    },
    SET_TYPES (state, payload) {
      state.types = payload
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
    },
    fetchAnimals (context) {
      axios({
        method: 'GET',
        url: '/animals',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('SET_ANIMALS', data.animals)
          let temp = []
          data.animals.forEach((element) => {
            if (!temp.includes(element.type)) {
              temp.push(element.type)
            }
          })
          temp = temp.sort()
          context.commit('SET_TYPES', temp)
        })
        .catch((err) => {
          if (err.response.data.message === 'Please Login First') {
            localStorage.clear()
            router.push('/login')
          }
        })
    },
    fetchFavorite (context) {
      axios({
        method: 'GET',
        url: '/favorites',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          const map = data.data.Animals.map((element) => {
            return element.name
          })
          context.commit('SET_FAVORITES', map)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addToFavorite (context, payload) {
      axios({
        method: 'POST',
        url: `/favorites/${payload}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.dispatch('fetchAnimals')
          context.dispatch('fetchFavorite')
        })
        .catch((err) => {
          Vue.swal({
            title: err.response.data.message,
            imageUrl: 'https://www.pngkit.com/png/full/322-3220303_drawn-bunny-sad-crying-rabbit-cartoon.png',
            imageWidth: 100,
            background: 'rgba(0, 175, 58, 0.733)'
          })
        })
    },
    removeFromFavorite (context, payload) {
      axios({
        method: 'DELETE',
        url: `/favorites/${payload}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.dispatch('fetchAnimals')
          context.dispatch('fetchFavorite')
        })
        .catch((err) => {
          Vue.swal({
            title: err.response.data.message,
            imageUrl: 'https://www.pngkit.com/png/full/322-3220303_drawn-bunny-sad-crying-rabbit-cartoon.png',
            imageWidth: 100,
            background: 'rgba(0, 175, 58, 0.733)'
          })
        })
    }
  },
  modules: {
  }
})
