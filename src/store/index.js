import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favourites: [],
    countries: [],
    favourite: null,
    standings: [],
    news: []
  },
  mutations: {
    SET_countries (state, payload) {
      state.countries = payload
    },
    SET_favourites (state, payload) {
      state.favourites = payload
    },
    SET_favourite (state, payload) {
      state.favourite = payload
    },
    SET_standings (state, payload) {
      state.standings = payload
    },
    SET_news (state, payload) {
      state.news = payload
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
    },
    getTeamByKey (content, teamKey) {
      return axios({
        url: '/teams/' + teamKey,
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    getStandings (content, leagueKey) {
      return axios({
        url: '/standings/' + leagueKey,
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    getNews (context, teamName) {
      return axios({
        url: `/news/?teamName=${teamName}`,
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
