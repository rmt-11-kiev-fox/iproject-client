import Vue from "vue";
import Vuex from "vuex";
import axios from "../config/api";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		location: {},
		isAuthenticate: false,
		suggestions: [],
		covidMarker: [],
		place: {},
		seeDirection: false,
	},
	mutations: {
		SET_LOC(state, payload) {
			state.location = payload;
		},
		SET_SUGGESTS(state, payload) {
			state.suggestions = payload;
		},
		SET_COVIDMARKER(state, payload) {
			state.covidMarker = payload;
		},
		SET_PLACE(state, payload) {
			state.place = payload;
		},
		SET_DIRECTION(state, payload) {
			state.seeDirection = payload;
		},
		SET_AUTH(state, payload) {
			state.isAuthenticate = payload;
		},
	},
	actions: {
		setLocation({ commit, dispatch }, payload) {
			commit("SET_LOC", payload);
			dispatch("fetchSuggestions");
			dispatch("fetchCovid");
		},
		fetchSuggestions({ commit, state }) {
			let { lat, lng } = state.location;
			axios({
				method: "POST",
				url: `map/suggestions`,
				data: { lat, lng },
			})
				.then(({ data }) => {
					commit("SET_SUGGESTS", data.results);
				})
				.catch((err) => {
					console.log(err.response.data.message);
				});
		},
		fetchCovid({ commit }) {
			axios({
				method: "GET",
				url: "covid",
			})
				.then(({ data }) => {
					commit("SET_COVIDMARKER", data);
				})
				.catch((err) => {
					console.log(err.response.data.message);
				});
		},
		login(context, payload) {
			return axios({
				method: "POST",
				url: "login",
				data: payload,
			});
		},
		register(context, payload) {
			return axios({
				method: "POST",
				url: "register",
				data: payload,
			});
		},
	},
	modules: {},
});
