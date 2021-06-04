/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/api'
import swal from 'sweetalert'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bidans: [],
    messages: []
  },
  mutations: {
    SET_BIDANS(state, fetchedBidans){
      state.bidans = fetchedBidans
    },
    SEND_MESSAGE(state, payload){
      state.messages.push(payload)
    },
    SOCKET_sendMessage(state, payload){
      state.messages.push(payload)
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
        localStorage.username = data.username
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
    register(context, payload){
      axios({
        url: 'register',
        method: 'POST',
        data: payload
      })
      .then(({data}) => {  
        swal("Register success, please check your email for activation", {
          buttons: false,
          timer: 1500,
          icon: "success",
        });
        router.push('/login')
      })
      .catch(err => {
        swal("",err.response.data.message, "warning");
      })
    },
    fetchBidan(context){
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
    },
    activation(context, payload){
      axios({
        url: `activation/${payload.id}`,
        method: 'POST',
        data: payload
      })
      .then(({data}) => {  
        swal("Your account activated", {
          buttons: false,
          timer: 1500,
          icon: "success",
        });
        router.push('/login')
      })
      .catch(err => {
        console.log(err);
      })
    },
    rundomAvatar () {
      axios({
        method: 'GET',
        url: 'https://doppelme-avatars.p.rapidapi.com/bodytypes',
        headers: {
          'x-rapidapi-key': '5b2a937927mshb94dd2c3057a04ep118ab3jsn25439f2d8fb2',
          'x-rapidapi-host': 'doppelme-avatars.p.rapidapi.com'
        }
      })
      .then(({data})=>{
        console.log(data);
      })
      .catch(err=>{
        console.log(data);
      })
    }
  },
  modules: {
  }
})
