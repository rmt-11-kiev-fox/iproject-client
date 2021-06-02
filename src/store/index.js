import Vue from "vue";
import Vuex from "vuex";
import axios from "../config/api";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		location: {},
		isAuthenticate: false,
		suggestions: [
			{
				business_status: "OPERATIONAL",
				geometry: { location: [Object], viewport: [Object] },
				icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
				name: "Sate & Seafood Senayan Salemba",
				opening_hours: { open_now: false },
				photos: [[Object]],
				place_id: "ChIJZzz4Kmb0aS4RQuHGBLappZE",
				plus_code: {
					compound_code: "RV32+3V Paseban, Central Jakarta City, Jakarta, Indonesia",
					global_code: "6P58RV32+3V",
				},
				price_level: 2,
				rating: 4.4,
				reference: "ChIJZzz4Kmb0aS4RQuHGBLappZE",
				scope: "GOOGLE",
				types: ["restaurant", "food", "point_of_interest", "establishment"],
				user_ratings_total: 1809,
				vicinity: "Jalan Salemba Raya No.57, RT.9/RW.5, Paseban",
			},
			{
				business_status: "OPERATIONAL",
				geometry: { location: [Object], viewport: [Object] },
				icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
				name: "Handayani Prima",
				opening_hours: { open_now: false },
				photos: [[Object]],
				place_id: "ChIJwXPxvWT0aS4RAbt8-HLB-jM",
				plus_code: {
					compound_code: "QVX4+6P Palmeriam, East Jakarta City, Jakarta, Indonesia",
					global_code: "6P58QVX4+6P",
				},
				price_level: 2,
				rating: 4.3,
				reference: "ChIJwXPxvWT0aS4RAbt8-HLB-jM",
				scope: "GOOGLE",
				types: ["restaurant", "food", "point_of_interest", "establishment"],
				user_ratings_total: 990,
				vicinity: "Jalan Matraman Raya No.45, RT.1/RW.3, Palmeriam",
			},
			{
				business_status: "OPERATIONAL",
				geometry: { location: [Object], viewport: [Object] },
				icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
				name: "Restoran Putra Sriwijaya",
				opening_hours: { open_now: false },
				photos: [[Object]],
				place_id: "ChIJDdWD8W70aS4R2rjH05z4Brs",
				plus_code: {
					compound_code: "QVX2+86 Pegangsaan, Central Jakarta City, Jakarta, Indonesia",
					global_code: "6P58QVX2+86",
				},
				rating: 4.4,
				reference: "ChIJDdWD8W70aS4R2rjH05z4Brs",
				scope: "GOOGLE",
				types: ["restaurant", "food", "point_of_interest", "establishment"],
				user_ratings_total: 206,
				vicinity: "Graha IJW, Jalan Proklamasi No.91, RT.4/RW.3, Pegangsaan",
			},
			{
				business_status: "OPERATIONAL",
				geometry: { location: [Object], viewport: [Object] },
				icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
				name: "Dapua Balairung Resto",
				opening_hours: { open_now: true },
				photos: [[Object]],
				place_id: "ChIJs9cda2b0aS4Rs9bjeXj8Z-Q",
				plus_code: {
					compound_code: "RV23+2W Palmeriam, East Jakarta City, Jakarta, Indonesia",
					global_code: "6P58RV23+2W",
				},
				rating: 3.6,
				reference: "ChIJs9cda2b0aS4Rs9bjeXj8Z-Q",
				scope: "GOOGLE",
				types: ["restaurant", "food", "point_of_interest", "establishment"],
				user_ratings_total: 5,
				vicinity: "Jalan Matraman Raya No.19, RT.1/RW.1, Palmeriam",
			},
		],
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
	},
	actions: {
		setLocation({ commit, dispatch }, payload) {
			commit("SET_LOC", payload);
			// dispatch("fetchSuggestions");
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
	},
	modules: {},
});
