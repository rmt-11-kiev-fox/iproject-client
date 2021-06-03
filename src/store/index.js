import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios.js'
import swal from 'sweetalert'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showing: false,
    dataSpecies: [],
    userLogin: localStorage.getItem('user'),
    aboutMsg: [],
    dataNewSpeciesEx: []
  },
  mutations: {
    SET_SHOW_FORM(state, payload) {
      state.showing = payload
    },
    SET_DATA_FILTER(state, payload) {
      state.dataSpecies = payload
    },
    SET_DATA_FILTER_RESET(state, payload) {
      state.dataSpecies = payload
    },
    SET_DATA_MSG(state, payload) {
      state.aboutMsg = payload
    },
    SET_DATA_CARD(state, payload) {
      state.dataNewSpeciesEx = payload
    }
  },
  actions: {
    resetData(context, payload) {
      context.commit('SET_DATA_FILTER_RESET', [])
    },
    register(context, payload) {
      return axios({
        url: '/register',
        method: 'POST',
        data: payload
      })
    },
    login(context, payload) {
      return axios({
        url: '/login',
        method: 'POST',
        data: payload
      })
    },
    googleLogin(context, payload) {
      return axios({
        url: '/google-login',
        method: 'POST',
        data: {
          idToken: payload
        }
      })
    },
    filterBySpecies(context, payload) {
      axios({
        url: `/filterbyspecies/${payload}`,
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(({ data }) => {
        context.dispatch('resetData')
        context.commit('SET_DATA_FILTER', data)
      }).catch((err) => {
        console.log(err);
      })
    },
    filterByCountry(context, payload) {
      axios({
        url: `/filterbycountries/${payload}`,
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(({ data }) => {
        context.dispatch('resetData')
        context.commit('SET_DATA_FILTER', data)
      }).catch((err) => {
        console.log(err);
      })
    },
    sendMsgData(context, payload) {

      axios({
        url: '/sendMsg',
        method: 'POST',
        data: {
          user: payload.user,
          msg: payload.message
        },
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(({ data }) => {
        context.dispatch('readMsg')
      }).catch((err) => {
        console.log(err);
      })
    },
    readMsg(context, payload) {
      axios({
        url: '/readMsg',
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(({ data }) => {
        context.commit('SET_DATA_MSG', data)
      }).catch((err) => {
        console.log(err);
      })
    },
    displayCard(context, payload) {
      axios({
        url: 'data',
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(({ data }) => {
        context.commit('SET_DATA_CARD', data)
      }).catch((err) => {
        console.log(err);
      })
    },
    addCardSpecies(context, payload) {
      axios({
        url: '/add',
        method: 'POST',
        data: {
          name: payload.name,
          "img_url": payload.imgUrl,
          kingdom: payload.kingdom,
          habitat: payload.kingdom,
          region: payload.region,
          status: payload.status
        },
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(({ data }) => {
        context.dispatch('displayCard')
        swal("Good job!", "Success Add", "success", {
          button: "OK!"
        });
      }).catch((err) => {
        swal("Incorrect!", "Somethink wrong, please try again", "error", {
          button: "OK!"
        });
      })
    },
    deleteItem(context, payload) {
      return axios({
        url: `/delete/${payload}`,
        method: 'DELETE',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    filterbyKingdom(context, payload) {
      axios({
        url: `/filterbyKingdom/${payload}`,
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(({ data }) => {
        context.dispatch('resetData')
        context.commit('SET_DATA_FILTER', data)
      }).catch((err) => {
        console.log(err);
      })
    },
    searchByName(context, payload) {
      axios({
        url: `/filterbyKingdom/${payload}`,
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(({ data }) => {
        if (data.length > 0) {
          context.dispatch('resetData')
          context.commit('SET_DATA_FILTER', data)
        } else {
          swal("Incorrect!", "Keyword not found", "error", {
            button: "OK!"
          });
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  },
  modules: {
  }
})
