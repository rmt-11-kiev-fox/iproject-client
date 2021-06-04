import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todayData: [],
    listFood: [],
    quote: {}
  },
  mutations: {
    SET_TODAY_DATA (state, data) {
      state.todayData = data
      console.log('--------------------------------', state.todayData ,'------------------------------------------');
    },
    SET_FOODLIST (state, data) {
      state.listFood = data
    },
    SET_QUOTE (state, data) {
      state.quote = data
      console.log('--------------------------------', data.author, `ini di mutation` ,'------------------------------------------');
    }
  },
  actions: {
    fetchQuote ({ commit }) {
      axios({
        url: '/fetchQuotes',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        },
      })
      .then(({ data }) => {
        console.log('--------------------------------', data,` ini di action` ,'------------------------------------------');
  
        commit('SET_QUOTE', data)
        
      })
      .catch((error) => {
        console.log(error);
      })
    },
    addToFoodToday (context, data) {
      axios({
        url: '/fitness/food',
        method: 'post',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          foodName: data.foodName,
          calories: data.calories,
          protein: data.protein,
          carbohydrates: data.carbohydrates,
          fat: data.fat
        }
      })
      .then(({ data }) => {
        console.log('--------------------------------', data ,'------------------------------------------');
  
        context.dispatch('fetchTodayData')
        
      })
      .catch((error) => {
        console.log(error);
      })
    },
    fetchTodayData (context) {
      axios({
        url: '/fitness',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({ data }) => {
        console.log('--------------------------------', data ,'------------------------------------------');

        context.commit('SET_TODAY_DATA', data)
      })
      .catch((error) => {
        console.log(error);
      })
    },
    postTodayData (context, currentWeight) {
      axios({
        url: '/fitness',
        method: 'post',
        headers: {
          access_token: localStorage.access_token
        },
        data: { currentWeight }
      })
      .then(({ data }) => {
        console.log('--------------------------------', data ,'------------------------------------------');
        context.dispatch('fetchTodayData')
      })
      .catch((error) => {
        console.log(error);
      })
    },
    fetchFoodList (context, q) {
      console.log('--------------------------------', q,`ini q pas di action` ,'------------------------------------------');
      if (q == null) {
        return console.log(`ERROR: search cannot be null boss`);
      }

      axios({
        url: '/fetchFood/' + q,
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({ data }) => {
        console.log('--------------------------------', data.hits ,'------------------------------------------');
        context.commit('SET_FOODLIST', data.hits)
      })
      .catch((error) => {
        console.log(error);
      })

    }
  },
  modules: {
  }
})
