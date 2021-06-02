import Vue from "vue";
import Vuex from "vuex";
import axios from "../config/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    popularMovies: [],
    nowPlayingMovies: [],
    upcomingMovies: [],
    detailMovie: [],
    similarMovies: []
  },
  mutations: {
    SET_POPULAR_MOVIES(state, movies) {
      state.popularMovies = movies;
    },
    SET_NOWPLAYING_MOVIES(state, movies) {
      state.nowPlayingMovies = movies;
    },
    SET_UPCOMING_MOVIES(state, movies) {
      state.upcomingMovies = movies;
    },
    SET_DETAIL_MOVIES(state, movies) {
      state.detailMovie = movies;
    },
    SET_SIMILAR_MOVIES(state, movies) {
      state.similarMovies = movies;
    }
  },
  actions: {
    login(context, userData) {
      return axios({
        url: "login",
        method: "POST",
        data: userData
      });
    },
    fetchPopularMovies({ commit }) {
      axios({
        url: "/movies/popular",
        method: "GET"
      })
        .then(({ data }) => {
          // console.log(data.data, "fetch popular movie data in store");
          commit("SET_POPULAR_MOVIES", data.data.results);
        })
        .catch(err => {
          console.log(err, "err in fetch popular movies");
        });
    },
    fetchNowPlayingMovies({ commit }) {
      axios({
        url: "/movies/nowPlaying",
        method: "GET"
      })
        .then(({ data }) => {
          commit("SET_NOWPLAYING_MOVIES", data);
        })
        .catch(err => {
          console.log(err, "err in fetch now playing movies");
        });
    },
    fetchUpcomingMovies({ commit }) {
      axios({
        url: "/movies/upcoming",
        method: "GET"
      })
        .then(({ data }) => {
          commit("SET_UPCOMING_MOVIES", data);
        })
        .catch(err => {
          console.log(err, "err in fetch upcoming movies");
        });
    },
    fetchMovieDetail({ commit }, MovieId) {
      // console.log(MovieId, "movieId store fetch movie detail");
      axios({
        url: `/movies/detail/${MovieId}`,
        method: "GET"
      })
        .then(({ data }) => {
          // console.log(data, "movie detail data");
          commit("SET_DETAIL_MOVIES", data.data);
        })
        .catch(err => {
          console.log(err, "err in fetch movies detail");
        });
    },
    fetchSimilarMovies({ commit }, MovieId) {
      // console.log(MovieId, "movieId store fetch similar movie detail");
      axios({
        url: `/movies/similar`,
        method: "POST",
        data: { MovieId }
      })
        .then(({ data }) => {
          console.log(data.results, "similar movie data");
          commit("SET_SIMILAR_MOVIES", data.results);
        })
        .catch(err => {
          console.log(err, "err in fetch movies detail");
        });
    },
    addToWishlist(context, newWishlist) {}
  },
  modules: {}
});
