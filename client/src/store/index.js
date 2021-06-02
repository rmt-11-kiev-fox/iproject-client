import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    booking: {},
    bookings: []
  },
  mutations: {
    SET_BOOKINGS (state, payload) {
      state.bookings = payload
    },
    ADD_BOOKING (state, payload) {
      state.booking = payload
    }
  },
  actions: {
    login ({ dispatch, commit }, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/signIn',
        data: payload
      })
        .then(result => {
          localStorage.setItem('access_token', result.data.access_token)
          router.push('/admin')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBookings ({ commit }) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/bookings',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          console.log(result.data)
          commit('SET_BOOKINGS', result.data.bookings)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteBooking ({ dispatch, commit }, payload) {
      axios({
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        },
        url: `http://localhost:3000/bookings/${payload}`
      })
        .then(result => {
          dispatch('fetchBookings')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addBooking ({ dispatch, commit }, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/bookings',
        data: payload
      })
        .then(result => {
          commit('ADD_BOOKING', result.data)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
