import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/api'
import router from '../router'
import Swal from 'sweetalert2'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    selectedProduct: {}
  },
  mutations: {
    SET_PRODUCTS(state, payload){
      // console.log(payload, 'sadasda')
      state.products = payload
    },
    SET_SELECTED_PRODUCTS(state, payload){
      state.selectedProduct = payload
    }
  },
  actions: {
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
        if(!data.isAdmin){
          Swal.fire({
            title: 'Error!',
            text: 'Youre not allowed',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        } else {
          localStorage.setItem('access_token', data.access_token)
          router.push('/dashboard')
        }
      })
      .catch(err => {
        console.log({err})
      })
    },
    fetchProducts(context){
      axios({
        url: '/',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        // console.log(data,'aaaaa')
        context.commit('SET_PRODUCTS', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    deleteProduct(context, id){
      axios({
        url: `/products/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        context.dispatch('fetchProducts')
      })
      .catch(err => {
        console.log(err)
      })
    },
    addProduct(context, payload){
      // console.log('masuk', 'asdawa');
      axios({
        url: '/products',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data:{
          title: payload.title,
          artist: payload.artist,
          category_id: payload.category,
          description: payload.description,
          image_url:payload.image_url,
          status: payload.status,
          startBid: payload.startBid,
          endBid: payload.endBid
        }
      })
      .then(({data}) => {
        console.log('success add', data)
        router.push('/dashboard')
      })
      .catch(err => {
        console.log(err)
      })
    },
    getProduct(context, id){
      axios({
        url: `/products/${id}`,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
       console.log('success get');
       context.commit('SET_SELECTED_PRODUCTS', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    updateProduct(context, payload){
      axios({
        url: `/products/${payload.id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data:{
          title: payload.title,
          artist: payload.artist,
          category_id: +payload.category_id,
          description: payload.description,
          image_url:payload.image_url,
          status: payload.status,
          startBid: payload.startBid,
          endBid: payload.endBid
        }
      })
      .then(({data}) => {
        console.log('success update', data)
        router.push('/dashboard')
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
