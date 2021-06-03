import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    booking: {},
    bookings: [],
    bookTemp: {},
    PIMLoc: {},
    PSLoc: {},
    MtgLoc: {},
    PIMweather: {},
    PSWeather: {},
    MtgWeather: {}
  },
  mutations: {
    SET_BOOKINGS (state, payload) {
      state.bookings = payload
    },
    ADD_BOOKING (state, payload) {
      state.booking = payload
    },
    SET_BOOKINGTEMP (state, payload) {
      state.bookTemp = payload
    },
    SET_PIM (state, payload) {
      state.PIMLoc = payload
    },
    SET_PS (state, payload) {
      state.PSLoc = payload
    },
    SET_MTG (state, payload) {
      state.MtgLoc = payload
    },
    SET_PIMW (state, payload) {
      state.PIMweather = payload
    },
    SET_PSW (state, payload) {
      state.PSWeather = payload
    },
    SET_MTGW (state, payload) {
      state.MtgWeather = payload
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
          // console.log(result.data)
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
    },
    editBooking ({ dispatch, commit }, payload) {
      axios({
        method: 'PUT',
        url: `http://localhost:3000/bookings/${payload.id}`,
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          console.log(result)
          dispatch('fetchBookings')
          router.push('/admin')
        })
        .catch(err => {
          console.log(err)
        })
    },
    PIMLoc ({ commit }) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/locationPIM'
      })
        .then(result => {
          // console.log(result.data)
          commit('SET_PIM', result.data.coordinatePIM)
        })
        .catch(err => {
          console.log(err)
        })
    },
    PSLoc ({ commit }) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/locationPS'
      })
        .then(result => {
          // console.log(result.data)
          commit('SET_PS', result.data.coordinatePS)
        })
        .catch(err => {
          console.log(err)
        })
    },
    MtgLoc ({ commit }) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/locationMtg'
      })
        .then(result => {
          // console.log(result.data)
          commit('SET_MTG', result.data.coordinateMtg)
        })
        .catch(err => {
          console.log(err)
        })
    },
    PIMWeather ({ commit }) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/weatherPIM'
      })
        .then(result => {
          commit('SET_PIMW', result.data.weather)
        })
        .catch(err => {
          console.log(err)
        })
    },
    PSWeather ({ commit }) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/weatherPS'
      })
        .then(result => {
          // console.log(result.data)
          commit('SET_PSW', result.data.weather)
        })
        .catch(err => {
          console.log(err)
        })
    },
    MTGWeather ({ commit }) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/weatherMtg'
      })
        .then(result => {
          // console.log(result.data)
          commit('SET_MTGW', result.data.weather)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
