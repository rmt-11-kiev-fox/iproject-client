import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/api'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    location: [],
    collect: []
  },
  mutations: {
    SET_Login (state, payload) {
      state.isLogin = payload
    },
    SET_Location (state, payload) {
      state.location = payload
    },
    SET_Collect (state, payload) {
      state.collect = payload
    }
  },
  actions: {
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password,
          address: payload.address,
          category: payload.category,
          message: payload.message
        }
      })
        .then(({ data }) => {
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('SET_login', true)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    reqCollect (context, payload) {
      axios({
        method: 'POST',
        url: '/collect',
        data: {
          name: payload.name,
          address: payload.address,
          date: payload.date,
          notes: payload.notes
        },
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          // router.push({ path: '/history' })
          context.dispatch('showHistory')
          context.dispatch('location')
        })
        .catch(err => {
          console.log(err)
        })
    },
    showHistory (context) {
      axios({
        method: 'GET',
        url: '/collect',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.commit('SET_Collect', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    location (context, payload) {
      axios({
        method: 'GET',
        url: '/location',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.commit('SET_Location', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
