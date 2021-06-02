import Vue from "vue";
import Vuex from "vuex";
import axios from "../config/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        onlineUsers: [],
        guests: 0,
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload;
        },
        SOCKET_onlineUsers(state, payload) {
            // console.log("masuk socket onlineusers", payload);
            state.onlineUsers = payload;
        },
        SOCKET_guestsNumber(state, payload) {
            state.guests = payload;
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
});
