import Vue from "vue";
import Vuex from "vuex";
import axios from "../config/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload;
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
            if (localStorage.access_token && localStorage.email) {
                let emailFormat = localStorage.email.split("@gmail.com");
                const payload = {
                    email: emailFormat[0],
                    imageUrl: localStorage.imageUrl,
                };
                context.commit("SET_USER", payload);
            }
        },
    },
    modules: {},
});
