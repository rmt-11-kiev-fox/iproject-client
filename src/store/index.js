import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../config/api"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    redditResults: [],
    twitterResults: [],
    query: ""
  },
  getters: {
    searchResult: (state) => state.results
  },
  mutations: {
    SET_DATA_REDDIT: (state, redditResults) => (state.redditResults = redditResults),
    SET_DATA_TWITTER: (state, twitterResults) => (state.twitterResults = twitterResults),
  },
  actions: {
    getSearchReddit ({commit}, query) {
      axios({
        url: `http://www.reddit.com/search.json?sort=hot&limit=30&q=${query}`,
        method: 'GET',
      }) 
        .then(({data}) => {
          let results = data.data.children.map(data => data.data)
          let dataResult = [...results]
          console.log(dataResult, "ini data Reddit");
          commit('SET_DATA_REDDIT', dataResult)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getSearchTwitter ({commit}, query) {
      axios({
        url: `/twitter?query=${query}`,
        method: 'GET',
      }) 
        .then(({data}) => {
          console.log(data.data, "ini data Twitter");
          commit('SET_DATA_TWITTER', data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    getSearchByVoice ({commit}, voiceInput) {
      axios({
        url: `http://www.reddit.com/search.json?sort=hot&limit=30&q=${voiceInput}`,
        method: 'GET',
      }) 
        .then(({data}) => {
          let results = data.data.children.map(data => data.data)
          let dataResult = [...results]
          console.log(dataResult, "ini data Reddit");
          commit('SET_DATA_REDDIT', dataResult)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  modules: {
  }
})
