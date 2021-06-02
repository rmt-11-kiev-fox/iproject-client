import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favourites: [],
    countries: [],
    favourite: null
  },
  mutations: {
    SET_countries (state, payload) {
      state.countries = payload
    },
    SET_favourites (state, payload) {
      state.favourites = payload
    },
    SET_favourite (state, payload) {
      state.facourite = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        url: '/users/login',
        method: 'post',
        data: payload
      })
    },
    loginWithGoogle (context, token) {
      return axios({
        method: 'POST',
        url: '/users/googleLogin',
        data: {
          idToken: token
        }
      })
    },
    register (context, payload) {
      return axios({
        url: '/users/register',
        method: 'post',
        data: payload
      })
    },
    fetchCountries ({ commit }) {
      axios({
        url: '/countries',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          commit('SET_countries', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchFavourites ({ commit }) {
      console.log('favourite triggered')
      axios({
        url: '/favourites',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('SET_favourites', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchTeams (context, leagueKey) {
      return axios({
        url: `/teams/?leagueKey=${leagueKey}`,
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    addToFavourite (context, payload) {
      return axios({
        url: '/favourites',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        method: 'post',
        data: payload
      })
    }
  },
  modules: {
  }
})
