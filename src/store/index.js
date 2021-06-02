import Vue from 'vue'
import Vuex from 'vuex'

import axios from '../config/api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        chats: [],
        currentUser: null,
        currentQuestion: null,
        isActiveServer: false,
        timeLeft: 10
    },
    mutations: {
        PUSH_CHATS(state, chat) {
            state.chats.push(chat)
        },
        SET_CHATS(state, chats) {
            state.chats = chats
        },
        SET_CURRENT_USER(state, username) {
            // console.log(username)
            state.currentUser = username
        },
        SET_CURRENT_QUESTION(state, question) {
            // console.log(question)
            state.currentQuestion = question
        },
        SET_SERVER_STATUS(state, status) {
            state.isActiveServer = status
        },
        SET_TIME_LEFT(state, time) {
            state.timeLeft = time
        }
    },
    actions: {
        register(context, registerData) {
            return axios({
                url: '/register',
                method: 'POST',
                data: registerData
            })
        },
        login(context, login) {
            return axios({
                url: '/login',
                method: 'POST',
                data: login
            })
        },
        fetchChats(context) {
            return axios({
                url: '/chats',
                method: 'GET',
                headers: {
                    access_token: localStorage.access_token
                }
            })
                .then(({ data }) => {
                    context.commit('SET_CHATS', data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        createChat(context, chat) {
            return axios({
                url: '/chats',
                method: 'POST',
                data: chat,
                headers: {
                    access_token: localStorage.access_token
                }
            })
                .then(() => {
                    context.dispatch('fetchChats')
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    modules: {}
})
