import Vue from 'vue'
import Vuex from 'vuex'
import initiateAxios from '../axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataHome: {},
    dataPlaylists: []
  },
  mutations: {
    FETCH_DATA_HOME (state, data) {
      console.log(data)
      state.dataHome = data
    },
    FETCH_DATA_PLAYLISTS (state, data) {
      state.dataPlaylists = data
      console.log(state.dataPlaylists)
    }
  },
  actions: {
    fetchDataHome ({ commit, dispatch }) {
      console.log('masuk function')
      initiateAxios({
        url: '/currentDatas',
        method: 'get'
      })
        .then(payload => {
          // dispatch('fetchDataPlaylists')
          console.log('masuk di sukses')
          console.log(payload.data)
          commit('FETCH_DATA_HOME', payload.data)
        })
        .catch(error => {
          console.log('masuk error')
          console.log(error)
        })
    },
    login ({ dispatch }, payload) {
      initiateAxios({
        url: '/users/login',
        method: 'post',
        data: {
          username: payload.username,
          password: payload.password
        }
      })
        .then(payloads => {
          localStorage.setItem('access_token', payloads.data.access_token)
          router.push('/home')
        })
    },
    register (context, payload) {
      initiateAxios({
        url: '/users/register',
        method: 'post',
        data: {
          username: payload.username,
          password: payload.password
        }
      })
        .then(_ => {
          router.push('/login')
        })
        .catch(error => {
          console.log(error)
        })
    },
    // FUNGSI INI HANYA DIGUNAKAN UNTUK LATIHAN
    // changePassword (context, password) {
    //   initiateAxios({
    //     url: '/users/changePassword',
    //     method: 'put',
    //     headers: {
    //       access_token: localStorage.access_token
    //     },
    //     data: {
    //       password
    //     }
    //   })
    //     .then(_ => {
    //       localStorage.clear()
    //       router.push('/login')
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // }
    // fetchDataPlaylists ({ commit }) {
    //   initiateAxios({
    //     url: '/playlists',
    //     method: 'get',
    //     headers: {
    //       access_token: localStorage.access_token
    //     }
    //   })
    //     .then(payload => {
    //       commit('FETCH_DATA_PLAYLISTS', payload.data)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },
    // addPlaylist ({ dispatch }, payload) {
    //   initiateAxios({
    //     url: '/playlist',
    //     method: 'post',
    //     headers: {
    //       access_token: localStorage.access_token
    //     },
    //     data: {
    //       id: payload.id,
    //       title: payload.title,
    //       url: payload.url
    //     }
    //   })
    //     .then(_ => {
    //       dispatch('fetchDataHome')
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },
    // deletePlaylist ({ dispatch }, id) {
    //   initiateAxios({
    //     url: `/playlists/${id}`,
    //     method: 'delete',
    //     headers: {
    //       access_token: localStorage.access_token
    //     }
    //   })
    //     .then(_ => {
    //       dispatch('fetchDataHome')
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },
    logout (context) {
      localStorage.clear()
      router.push('/login')
    }
  },
  modules: {
  }
})
