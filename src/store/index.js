import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topic: 'sun',
    questionNumber: 1,
    GameId: 0,
    answers: [],
    question: {},
    questionId: 0,
    gameData: []
  },
  mutations: {
    SET_topic (state, payload) {
      state.topic = payload
    },
    SET_GameId (state, payload) {
      state.GameId = payload
    },
    SET_answers (state, payload) {
      state.answers = payload
    },
    SET_question (state, payload) {
      state.question = payload
    },
    SET_questionId (state, payload) {
      state.questionId = payload
    },
    SET_questionNumber (state) {
      state.questionNumber++
    },
    SET_questionNumberReset (state) {
      state.questionNumber = 1
    },
    SET_gameData (state, payload) {
      state.gameData = payload
    }
  },
  actions: {
    async login (context, payload) {
      try {
        return axios({
          url: '/users/login',
          method: 'POST',
          data: payload
        })
      } catch (err) {
        console.log(err)
      }
    },
    async register (context, payload) {
      try {
        return axios({
          url: '/users/register',
          method: 'POST',
          data: payload
        })
      } catch (err) {
        console.log(err)
      }
    },
    async gameCreate (context, payload) {
      const data = {
        topic: payload,
        type: 'long'
      }
      try {
        axios({
          url: '/games/start',
          method: 'POST',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data
        })
          .then((data) => {
            context.commit('SET_GameId', data.data.id)
            console.log(data)
          })
      } catch (err) {
        console.log(err)
      }
    },
    async fetchQuestion (context, payload) {
      axios({
        url: '/question/getQuestion',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then((data) => {
          context.commit('SET_answers', data.data.answersData)
          context.commit('SET_question', data.data.correctData)
          context.commit('SET_questionId', data.data.id)
          console.log(data.data.answer)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async userAnswer (context, payload) {
      return axios({
        url: '/question/answerQuestion',
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
    },
    async fetchGameData (context, payload) {
      const GameId = payload
      try {
        axios({
          url: '/games/gameStats',
          method: 'POST',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: { GameId: GameId }
        })
          .then((data) => {
            context.commit('SET_gameData', data.data)
          })
      } catch (err) {
        console.log(err)
      }
    },
    async fetchProfile (context) {
      try {
        return axios({
          url: '/users/selfprofile',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    async fetchUserGameData (context, payload) {
      try {
        return axios({
          url: '/stats/',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    async fetchQuote (context) {
      try {
        return axios({
          url: '/quote/getQuote',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    async fetchMostPlayed (context) {
      try {
        return axios({
          url: '/stats/mostPlayed',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    async fetchLeaderboard (context) {
      try {
        return axios({
          url: '/stats/leaderboard',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    async calculateScore (context, GameId) {
      try {
        axios({
          url: '/games/updateScore',
          method: 'PUT',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            gameId: GameId
          }
        })
          .then((data) => {
            console.log(data)
          })
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
  }
})
