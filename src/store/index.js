import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/api.js'
import router from '../router/index.js'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowPlayings: [],
    comingSoons: [],
    cinemas: [],
    watchLists: []
  },
  mutations: {
    SET_NOWPLAYING(state, payload) {
      state.nowPlayings = payload
    },
    SET_COMINGSOON(state, payload) {
      state.comingSoons = payload
    },
    SET_CINEMA(state, payload) {
      state.cinemas = payload
    },
    SET_WATCHLIST(state, payload) {
      state.watchLists = payload
    }
  },
  actions: {
    register(context, payload) {
      // console.log('<<<<<<< ini masuk di store register');
      axios({
        url: '/register',
        method: 'POST',
        data: payload
      })
        .then(() => {
          router.push('/login')
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
              didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
  
            Toast.fire({
              icon: 'success',
              title: 'Your register is successfully'
            })
        })
        .catch(err => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Email or Password'
          })
        })
    },
    login(context, payload) {
      // console.log(payload, '<<<<<masuk di login store');
      axios({
        url: '/login',
        method: 'POST',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('username', data.username)
          router.push('/')
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
              didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
  
            Toast.fire({
              icon: 'success',
              title: 'Logged in successfully'
            })
        })
        .catch(err => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Email or Password'
          })
        })
    },
    fetchDataNowPlaying(context, payload) {
      axios({
        url: '/nowPlayings',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data, '<<<<<< ini di store now playing');
          context.commit('SET_NOWPLAYING', data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    fetchDataComingSoon(context, payload) {
      axios({
        url: '/comingSoons',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('SET_COMINGSOON', data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    fetchDataCinema(context, payload) {
      axios({
        url: '/cinemas',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('SET_CINEMA', data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    fetchDataWatchlist(context, payload) {
      axios({
        url: '/watchLists',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data);
          context.commit('SET_WATCHLIST', data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    addToWatchlist(context, title) {
      axios({
        url: '/watchLists',
        method: 'POST',
        data: {
          title
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchDataWatchlist')
        })
        .catch(err => {
          console.log(err);
        })
    },
    deleteWatchList(context, id) {
      axios({
        url: '/watchLists',
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          WatchlistId: id
        }
      })
        .then(() => {
          context.dispatch('fetchDataWatchlist')
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  modules: {
  }
})
