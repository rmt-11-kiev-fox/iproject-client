import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isHome: true,
    isResult: false,
    subscriber: false,
    heroText: true,
    results: [],
    exchangeRate: false
  },
  mutations: {
    SET_IS_HOME (state, payload) {
      state.isHome = payload
    },
    SET_IS_RESULT (state, payload) {
      state.isHome = payload
    },
    SET_SUBSCRIBER (state, payload) {
      state.subscriber = payload
    },
    SET_HERO_TEXT (state, payload) {
      state.heroText = payload
    },
    DATA_RESULT (state, payload) {
      state.results = payload
    },
    USD_TO_ID (state, payload) {
      state.exchangeRate = payload
    }
  },
  actions: {
    fetchResult (context, payload) {
      axios({
        url: `/result?age_group=${payload.age_group}&gender=${payload.gender}&interest=${payload.interest}`,
        method: 'GET'
      })
        .then(response => {
          Swal.fire(
            'Generate Data Success!',
            'Take a look! We have some great products for you',
            'success'
          )
          context.commit('DATA_RESULT', response.data)
          if (router.currentRoute.name !== 'Result') {
            router.push('/result')
          }
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to fill the form!'
          })
        })
    },
    exchangeRate (context) {
      axios({
        url: '/exchangeRate',
        method: 'GET'
      })
        .then(response => {
          context.commit('USD_TO_ID', response.data.USD_IDR)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Can\'t generate exchange rate',
            text: `${err.response.data}`
          })
        })
    },
    sendEmail (context, payload) {
      // Generate refresh token : https://developers.google.com/oauthplayground
      axios({
        url: '/sendEmail',
        method: 'POST',
        data: payload
      })
        .then(() => {
          Swal.fire(
            'Email has been sent!',
            'Thank you!',
            'success'
          )
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Sorry, email can\'t be sent :(',
            text: 'Google OAuth2 refresh token for nodemailer has been expired. Catch me on email or phone bellow so I can fix it :)'
          })
        })
    }
  },
  modules: {
  }
})
