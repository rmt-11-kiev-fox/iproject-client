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
    similarMovies: [],
    wishlist: [],
    movieNews: []
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
    },
    SET_WISHLIST(state, wishlist) {
      state.wishlist = wishlist;
    },
    SET_NEWS_MOVIES(state, news) {
      state.movieNews = news;
    }
  },
  actions: {
    register(context, userData) {
      return axios({
        url: "/register",
        method: "POST",
        data: userData
      });
    },
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
          // console.log(data, "data of fetch now playing movies");
          commit("SET_NOWPLAYING_MOVIES", data.results);
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
          console.log(data, "data of fetch upcoming movies");
          commit("SET_UPCOMING_MOVIES", data.results);
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
          console.log(err, "err in fetch movies detail store index");
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
          // console.log(data.results, "similar movie data");
          commit("SET_SIMILAR_MOVIES", data.results);
        })
        .catch(err => {
          console.log(err, "err in fetch movies detail");
        });
    },
    addToWishlist(context, newWishlist) {
      // console.log(newWishlist, "new wish list add to wishlist store.vue");
      axios({
        url: `/watchWishlist`,
        method: "POST",
        headers: {
          access_token: localStorage.access_token
        },
        data: { newWishlist }
      })
        .then(({ data }) => {
          // console.log(data, "add wishlist data");
          context.dispatch("fetchWishlist");
        })
        .catch(err => {
          console.log(err, "err in add wishlist");
        });
    },
    fetchWishlist({ commit }) {
      axios({
        url: `/watchWishlist`,
        method: "GET",
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data, "fetch wishlist data");
          commit("SET_WISHLIST", data);
        })
        .catch(err => {
          console.log(err, "err in fetch wisthlist");
        });
    },
    fetchMovieNews({ commit }) {
      axios({
        url: "/news/movies",
        method: "GET"
      })
        .then(({ data }) => {
          // console.log(data.data.value, "fetch movie news data in store");
          commit("SET_NEWS_MOVIES", data.data.value);
        })
        .catch(err => {
          console.log(err, "err in fetch popular movies");
        });
    }
  },
  modules: {},
  getters: {
    wantWishlist: state => {
      return state.wishlist.filter(
        wishlist => wishlist.category == "Want To Watch"
      );
    },
    watchingWishlist: state => {
      return state.wishlist.filter(wishlist => wishlist.category == "Watching");
    },
    doneWishlist: state => {
      return state.wishlist.filter(
        wishlist => wishlist.category == "Already Watched"
      );
    },
    favoriteWishlist: state => {
      return state.wishlist.filter(wishlist => wishlist.category == "Favorite");
    },
    dislikeWishlist: state => {
      return state.wishlist.filter(wishlist => wishlist.category == "Dislike");
    }
  }
});
