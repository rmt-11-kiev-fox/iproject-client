import Vue from "vue";
import Vuex from "vuex";
import axios from "../config/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        onlineUsers: [],
        guests: 0,
        lobbyChat: [],
        rooms: [],
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload;
        },
        SET_LOBBY_CHAT(state, payload) {
            state.lobbyChat.push(payload);
        },
        SOCKET_updateData(state, payload) {
            state.onlineUsers = payload.onlineUsers;
            state.guests = payload.guestsNumber;
            state.rooms = payload.rooms;
        },
        SOCKET_newLobbyMessage(state, payload) {
            state.lobbyChat.push(payload);
        },
    },
    actions: {
        googleSignIn(context, payload) {
            return axios({
                method: "post",
                url: "/login",
                data: {
                    googleToken: payload.qc.id_token,
                },
            });
        },
        findSongs(context, payload) {
            return axios({
                method: "post",
                url: "/search",
                data: {
                    searchDetails: payload,
                },
            });
        },
        checkLogin(context) {
            return new Promise((resolve, reject) => {
                if (localStorage.access_token && localStorage.email) {
                    let emailFormat = localStorage.email.split("@gmail.com");
                    const payload = {
                        email: emailFormat[0],
                        imageUrl: localStorage.imageUrl,
                    };
                    context.commit("SET_USER", payload);
                    resolve(payload);
                } else {
                    reject();
                }
            });
        },
    },
    modules: {},
    getters: {},
});
