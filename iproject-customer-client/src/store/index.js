import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/api'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    artworks: [],
    selectedArtWorks: [],
    liked: []
  },
  mutations: {
    SET_ARTWORKS(state, payload){
      state.artworks = payload.product
    },
    SET_SELECTED_ARTWORKS(state, payload){
      state.selectedArtWorks = payload
      console.log(state.selectedArtWorks, 'mutation')
    },
    SET_LIKED(state, payload){
      state.liked = payload
    }
  },
  actions: {
    register(context, payload){
      axios({
        method:'POST',
        url:'/register',
        data:{
          fullname: payload.fullname,
          email: payload.email,
          password: payload.password,
          address: payload.address
        }
      })
      .then(() => {
        Swal.fire({

          title: "'Your registration complete!",
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        .then((result) => {
          if (result.isConfirmed) {
              router.push('/login')
          }
        })
      })
      .catch(err => {
        console.log({err})
          Swal.fire({
            title: 'Uupppss!',
            text: `Something  Wrong With Your Input`,
            icon: 'warning',
            confirmButtonText: 'Ok'
          })
      })
    },
    login(context, payload){
      axios({
        url: '/login',
        method: 'POST',
        data:{
          email: payload.email,
          password: payload.password
        }
      })
      .then(({data}) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('fullname', data.fullname)
          router.push('/')

      })
      .catch(err => {
        Swal.fire({
          title: 'Uupppss!',
          text: `Something  Wrong With Your Input`,
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
      })
    },
    fetchProducts(context){
      axios({
        url: '/',
        method: 'GET',
      })
      .then(({data}) => {
        // console.log(data.product, 'masuk');
        context.commit('SET_ARTWORKS', data)
      })
      .catch(err => {
        console.log(err);
      })
    },
    getProductDetails(context, payload){
      axios({
        url: `/products/${payload}`,
        method: 'GET',
      })
      .then(({data}) => {
        // console.log(data, 'details');
        context.commit('SET_SELECTED_ARTWORKS', data)
      })
      .catch(err => {
        console.log(err);
      })
    },
    getLike(context){
      axios({
        url: 'like',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        // console.log(data, 'getlike');
        context.commit('SET_LIKED', data)
      })
    },
    postLike(context, payload){
      axios({
        url: '/like',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          product_id: payload
        }
      })
      .then(({data}) => {
        // console.log(data, 'dapet nih');
        context.dispatch('getLike')
        router.push('/like')
      })
      .catch((err) => {
        console.log(err, 'like');
      })
    },
    addBid(context, payload){
      axios({
        url: '/addBid',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          product_id: payload.product_id,
          money_offer: payload.money_offer
        }
      })
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
    },
    googleSubmit(context, token_id){
      // console.log(token_id)
      axios({
        method: 'POST',
        url: '/googleLogin',
        data:{
          token: token_id
        }
      })
      .then(({data}) =>{
        console.log(data, 'masuk')
        localStorage.setItem('access_token', data.access_token)
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
      }
  },
  modules: {
  }
})
