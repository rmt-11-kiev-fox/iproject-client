import Vue from 'vue'
import Vuex from 'vuex'
import { instanceAxios } from '@/api'
// import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    loginModal: false,
    registerModal: false,
    productModal: false,
    productEditModal: false,
    registerErrorHandler: {},
    productData: [],
    allProduct: [],
    detailProduct: {},
    count: 0,
    auctionData: [],
    city: [],
    ongkir: [],
    isLogged: localStorage.user_data_bidding
      ? JSON.parse(localStorage.user_data_bidding).accessToken
      : false,
    userImage: localStorage.user_data_bidding
      ? JSON.parse(localStorage.user_data_bidding).image
      : '',
    userRole: localStorage.user_data_bidding
      ? JSON.parse(localStorage.user_data_bidding).role
      : '',
    userName: localStorage.user_data_bidding
      ? JSON.parse(localStorage.user_data_bidding).username
      : ''
  },
  mutations: {
    IS_LOADING(state, payload) {
      state.isLoading = payload
    },
    LOGIN_MODAL_HANDLER(state, payload) {
      state.loginModal = payload
      state.registerModal = false
    },
    REGISTER_MODAL_HANDLER(state, payload) {
      state.registerModal = payload
      state.loginModal = false
    },
    PRODUCT_MODAL_HANDLER(state, payload) {
      state.productModal = payload
    },
    PRODUCT_EDIT_MODAL_HANDLER(state, payload) {
      state.productEditModal = payload
    },
    REGISTER_ERROR_HANDLER(state, payload) {
      state.registerErrorHandler = payload
    },
    LOGOUT_HANDLER(state) {
      localStorage.clear()
      state.isLogged = false
      state.userImage = false
      state.userName = false
      state.userRole = false
      state.loginModal = false
      state.registerModal = false
      state.productModal = false
      state.productEditModal = false
      state.registerErrorHandler = {}
      state.productData = []
      state.detailProduct = {}
    },
    SET_ISLOGGED(state) {
      state.isLogged = JSON.parse(localStorage.user_data_bidding).accessToken
      state.userImage = JSON.parse(localStorage.user_data_bidding).image
      state.userName = JSON.parse(localStorage.user_data_bidding).username
      state.userRole = JSON.parse(localStorage.user_data_bidding).role
    },
    GET_DATA_PRODUCT(state, payload) {
      state.productData = payload
    },
    GET_DETAIL_PRODUCT(state, payload) {
      state.detailProduct = payload
    },
    GET_ALL_DATA_PRODUCT(state, payload) {
      state.allProduct = payload
    },
    GET_COUNT_DATA_PRODUCT(state, payload) {
      state.count = payload
    },
    AUCTION_DATA(state, payload) {
      state.auctionData = payload
    },
    SOCKET_sendMessage(state, payload) {
      new Vue().$socket.emit('live-bidding', payload)
    },
    CITY_DATA(state, payload) {
      state.city = payload
    },
    GET_ONGKIR_DATA(state, payload) {
      state.ongkir = payload
    }
  },
  actions: {
    async registerHandler({ commit }, payload) {
      try {
        await instanceAxios({
          url: '/register',
          method: 'POST',
          data: payload
        })

        commit('REGISTER_MODAL_HANDLER')
        commit('LOGIN_MODAL_HANDLER', true)
      } catch (err) {
        const errors = {}

        err.response.data.errors.message.forEach(item => {
          if (item.includes('Email')) errors.email = true
          if (item.includes('Password')) errors.password = true
          if (item.includes('Role')) errors.role = true
          if (item.includes('Location')) errors.location = true
        })

        commit('REGISTER_ERROR_HANDLER', errors)
      }
    },
    async loginHandler({ commit }, payload) {
      try {
        const { data } = await instanceAxios({
          url: '/login',
          method: 'POST',
          data: payload
        })

        localStorage.setItem('user_data_bidding', JSON.stringify(data))
        commit('LOGIN_MODAL_HANDLER')
        commit('SET_ISLOGGED')
      } catch (err) {
        console.log(err)
      }
    },
    async addProductHandler({ dispatch, commit }, payload) {
      try {
        await instanceAxios({
          url: '/products',
          method: 'POST',
          data: payload,
          headers: {
            access_token: JSON.parse(localStorage.user_data_bidding).accessToken
          }
        })
        dispatch('getDataHandler')
        commit('PRODUCT_MODAL_HANDLER')
      } catch (error) {
        console.log(error)
      }
    },
    async deleteProductHandler({ dispatch }, payload) {
      try {
        await instanceAxios({
          url: `/products/${payload.productId}`,
          method: 'DELETE',
          headers: {
            access_token: JSON.parse(localStorage.user_data_bidding).accessToken
          }
        })
        dispatch('getDataHandler')
      } catch (error) {
        console.log(error)
      }
    },
    async getDataHandler({ commit }) {
      try {
        const getData = await instanceAxios({
          url: '/products',
          method: 'GET',
          headers: {
            access_token: JSON.parse(localStorage.user_data_bidding).accessToken
          }
        })
        commit('GET_DATA_PRODUCT', getData.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getDetailProduct({ commit }, payload) {
      try {
        const getData = await instanceAxios({
          url: `/products/${payload.productId}`,
          method: 'GET',
          headers: {
            access_token: JSON.parse(localStorage.user_data_bidding).accessToken
          }
        })
        commit('GET_DETAIL_PRODUCT', getData.data)
      } catch (error) {
        console.log(error)
      }
    },
    async editProductHandler({ dispatch, commit }, payload) {
      try {
        await instanceAxios({
          url: `/products/${payload.productId}`,
          method: 'PUT',
          data: payload.data,
          headers: {
            access_token: JSON.parse(localStorage.user_data_bidding).accessToken
          }
        })
        dispatch('getDataHandler')
        commit('PRODUCT_EDIT_MODAL_HANDLER')
      } catch (error) {
        console.log(error)
      }
    },
    async getAllDataHandler({ commit }, payload) {
      try {
        const getData = await instanceAxios({
          url: `/all-product?size=6&page=${payload.page}`,
          method: 'GET',
          headers: {
            access_token: JSON.parse(localStorage.user_data_bidding).accessToken
          }
        })
        commit('GET_ALL_DATA_PRODUCT', getData.data.cards)
        commit('GET_COUNT_DATA_PRODUCT', getData.data.count)
      } catch (error) {
        console.log(error)
      }
    },
    async postAuctionHandler({ dispatch, commit }, payload) {
      try {
        try {
          await instanceAxios({
            url: '/auctions',
            method: 'POST',
            data: payload,
            headers: {
              access_token: JSON.parse(localStorage.user_data_bidding)
                .accessToken
            }
          })

          dispatch('getDetailProduct', { productId: payload.ProductId })
          dispatch('getAuctionHandler', { ProductId: payload.ProductId })
          commit('SOCKET_sendMessage', { ProductId: payload.ProductId })
        } catch (error) {
          console.log(error)
        }
      } catch (error) {}
    },
    async getAuctionHandler({ commit }, payload) {
      try {
        const getData = await instanceAxios({
          url: `/auctions/${payload.ProductId}`,
          method: 'GET',
          headers: {
            access_token: JSON.parse(localStorage.user_data_bidding).accessToken
          }
        })

        commit('AUCTION_DATA', getData.data)
      } catch (error) {
        console.log(error)
      }
    },
    SOCKET_liveBiddingMessage({ dispatch, state }, payload) {
      if (state.detailProduct.id === payload.ProductId) {
        dispatch('getAuctionHandler', { ProductId: payload.ProductId })
      }
    },
    async getCityHandler({ commit }, payload) {
      try {
        const getData = await instanceAxios({
          url: '/ongkir/city',
          method: 'GET'
        })

        commit('CITY_DATA', getData.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getOngkirHandler({ commit }, payload) {
      try {
        const { data } = await instanceAxios({
          url: `/ongkir/${payload.userId}?courier=${payload.courier}&destination=${payload.destination}`,
          method: 'GET'
        })
        commit('IS_LOADING', false)
        commit('GET_ONGKIR_DATA', data.costs)
      } catch (error) {
        console.log(error)
        commit('IS_LOADING', false)
      }
    }
  },
  modules: {}
})
