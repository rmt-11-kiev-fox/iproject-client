import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from 'axios'

const baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    homeData: {},
    reports: {},
    ieReports: []
  },
  mutations: {
    SET_LOGIN (state, data) {
      state.isLogin = data
    },
    SET_HOME (state, data) {
      state.homeData = data
    },
    SET_REPORTS (state, data) {
      state.reports = data
    },
    SET_IE_REPORTS (state, data) {
      state.ieReports = data
    }
  },
  actions: {
    register (context, payload) {
      axios({
        method: 'POST',
        url: `${baseURL}/register`,
        data: {
          username: payload.username,
          password: payload.password
        }
      }).then(response => {
        console.log(response.data)
        router.push({ path: '/login' })
      }).catch(error => {
        console.log(error)
      })
    },

    login (context, payload) {
      axios({
        method: 'POST',
        url: `${baseURL}/login`,
        data: {
          username: payload.username,
          password: payload.password
        }
      }).then(response => {
        console.log(response.data)
        localStorage.setItem('access_token', response.data.access_token)
        context.commit('SET_LOGIN', true)
        router.push({ path: '/' })
      }).catch(error => {
        console.log(error)
      })
    },

    showMyReport (context, period) {
      axios({
        method: 'GET',
        url: `${baseURL}/reports/${period}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        console.log(response.data)
        context.commit('SET_REPORTS', response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    showMyIncome (context, period) {
      axios({
        method: 'GET',
        url: `${baseURL}/incomes/${period}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        console.log(response.data)
        context.commit('SET_IE_REPORTS', response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    showMyExpenses (context, period) {
      axios({
        method: 'GET',
        url: `${baseURL}/expenses/${period}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        console.log(response.data)
        context.commit('SET_IE_REPORTS', response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    homepageData (context) {
      axios({
        method: 'GET',
        url: `${baseURL}/`
      }).then(response => {
        context.commit('SET_HOME', response.data)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  modules: {
  }
})
