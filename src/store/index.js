/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/api'
import swal from 'sweetalert'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bidans: []
  },
  mutations: {
    SET_BIDANS(state, fetchedBidans){
      state.bidans = fetchedBidans
    }
  },
  actions: {
    login(context, payload){
      axios({
        url: 'login',
        method: 'POST',
        data: payload
      })
      .then(({data}) => {  
        localStorage.access_token = data.access_token
        context.commit('SET_USERACTIVE', data.email)
        swal("Login success", {
          buttons: false,
          timer: 1500,
          icon: "success",
        });
        router.push('/')
      })
      .catch(err => {
        swal("",err.response.data.message, "warning");
      })
    },
    fetchBidan(context){
      console.log('masuuuuk');
      axios({
        url: 'bidan/',
        method: 'GET'
      })
      .then(({data}) => {  
        console.log(data,'====>>>>');
        context.commit('SET_BIDANS', data)
      })
      .catch(err => {
        console.log(err,'===>error');
      })
    }
  },
  modules: {
  }
})
