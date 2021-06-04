import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from 'axios'

const baseURL = 'https://iproject-pea-hanun.herokuapp.com/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    homeData: {},
    reports: {},
    ieReports: [],
    getExp: {},
    getInc: {}
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
    },
    SET_EXP (state, data) {
      state.getExp = data
    },
    SET_INC (state, data) {
      state.getInc = data
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
        context.commit('SET_REPORTS', response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    showMyIncome (context, period) {
      axios({
        method: 'GET',
        url: `${baseURL}/show-incomes/${period}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        context.commit('SET_IE_REPORTS', response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    showMyExpenses (context, period) {
      axios({
        method: 'GET',
        url: `${baseURL}/show-expenses/${period}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        context.commit('SET_IE_REPORTS', response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    addNewExp (context, payload) {
      axios({
        method: 'POST',
        url: `${baseURL}/expenses`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          category: payload.category,
          description: payload.description,
          amount: payload.amount,
          period: payload.period
        }
      }).then(response => {
        router.push({ path: '/tracker' })
      }).catch(error => {
        console.log(error)
      })
    },

    findExp (context, id) {
      axios({
        method: 'GET',
        url: `${baseURL}/expenses/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        // console.log(response.data)
        context.commit('SET_EXP', response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    editExp (context, payload) {
      axios({
        method: 'PUT',
        url: `${baseURL}/expenses/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          category: payload.category,
          description: payload.description
        }
      }).then(response => {
        console.log(response.data)
        router.push({ path: '/tracker' })
      }).catch(error => {
        console.log(error)
      })
    },

    updateExp (context, payload) {
      axios({
        method: 'PATCH',
        url: `${baseURL}/expenses/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          amount: payload.amount
        }
      }).then(response => {
        router.push({ path: '/tracker' })
      }).catch(error => {
        console.log(error)
      })
    },

    delExp (context, id) {
      axios({
        method: 'DELETE',
        url: `${baseURL}/expenses/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        router.push({ path: '/tracker' })
      }).catch(error => {
        console.log(error)
      })
    },

    addNewInc (context, payload) {
      axios({
        method: 'POST',
        url: `${baseURL}/incomes`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          category: payload.category,
          description: payload.description,
          amount: payload.amount,
          period: payload.period
        }
      }).then(response => {
        router.push({ path: '/tracker' })
      }).catch(error => {
        console.log(error)
      })
    },

    findInc (context, id) {
      axios({
        method: 'GET',
        url: `${baseURL}/incomes/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        context.commit('SET_INC', response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    editInc (context, payload) {
      axios({
        method: 'PUT',
        url: `${baseURL}/incomes/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          category: payload.category,
          description: payload.description
        }
      }).then(response => {
        router.push({ path: '/tracker' })
      }).catch(error => {
        console.log(error)
      })
    },

    updateInc (context, payload) {
      axios({
        method: 'PATCH',
        url: `${baseURL}/incomes/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          amount: payload.amount
        }
      }).then(response => {
        router.push({ path: '/tracker' })
      }).catch(error => {
        console.log(error)
      })
    },

    delInc (context, id) {
      axios({
        method: 'DELETE',
        url: `${baseURL}/incomes/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        router.push({ path: '/tracker' })
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
