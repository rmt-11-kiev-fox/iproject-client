import Vue from 'vue'
import Vuex from 'vuex'
import { instanceAxios } from '@/api'
import router from '../router'
import Swal from 'sweetalert2'

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
    winners: {},
    history: [],
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
    },
    GET_HISTORY(state, payload) {
      state.history = payload
    }
  },
  actions: {
    async registerHandler({ commit }, payload) {
      commit('REGISTER_ERROR_HANDLER', {})

      try {
        await instanceAxios({
          url: '/register',
          method: 'POST',
          data: payload
        })
        Swal.fire({
          title: 'Yeay!',
          text: 'Berhasil Register',
          icon: 'success',
          confirmButtonText: 'Confirm'
        }).then(() => {
          commit('REGISTER_MODAL_HANDLER')
          commit('LOGIN_MODAL_HANDLER', true)
          commit('IS_LOADING')
        })
      } catch (err) {
        commit('IS_LOADING')

        const errors = {}

        if (err.response.data.errors.message === 'Username not avalaible') {
          errors.username = true
        } else {
          err.response.data.errors.message.forEach(item => {
            if (item.includes('Email')) errors.email = true
            if (item.includes('Password')) errors.password = true
            if (item.includes('Role')) errors.role = true
            if (item.includes('Location')) errors.location = true
            if (item.includes('Username')) errors.username = true
          })
        }

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

        Swal.fire({
          title: 'Yeay!',
          text: 'Berhasil Login',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(() => {
          localStorage.setItem('user_data_bidding', JSON.stringify(data))
          commit('IS_LOADING')
          commit('LOGIN_MODAL_HANDLER')
          commit('SET_ISLOGGED')
          router.push('/')
        })
      } catch (err) {
        Swal.fire({
          title: 'Opps!',
          text: 'Invalid Username or Password',
          icon: 'error',
          confirmButtonText: 'Confirm'
        }).then(() => {
          commit('IS_LOADING')
        })
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

        commit('IS_LOADING')

        Swal.fire({
          title: 'Yeay!',
          text: 'Berhasil Nambah Produk',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(() => {
          dispatch('getDataHandler')
          commit('PRODUCT_MODAL_HANDLER')
        })
      } catch (error) {
        Swal.fire({
          title: 'Oops!',
          text: 'Fieldnya Gaboleh ada yg kosong',
          icon: 'error',
          confirmButtonText: 'Ok'
        }).then(() => {
          commit('IS_LOADING')
        })
      }
    },
    async deleteProductHandler({ dispatch, commit }, payload) {
      try {
        await instanceAxios({
          url: `/products/${payload.productId}`,
          method: 'DELETE',
          headers: {
            access_token: JSON.parse(localStorage.user_data_bidding).accessToken
          }
        })

        Swal.fire({
          title: 'Yeay!',
          text: 'Berhasil Menghapus Produk',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(() => {
          dispatch('getDataHandler')
        })
      } catch (error) {
        Swal.fire({
          title: 'Oops!',
          text: 'Gagal Menghapus Produk',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        commit('IS_LOADING')
      }
    },
    async getDataHandler({ commit }) {
      commit('IS_LOADING', true)

      try {
        const getData = await instanceAxios({
          url: '/products',
          method: 'GET',
          headers: {
            access_token: JSON.parse(localStorage.user_data_bidding).accessToken
          }
        })
        commit('GET_DATA_PRODUCT', getData.data)
        commit('IS_LOADING')
      } catch (error) {
        commit('IS_LOADING')
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

        Swal.fire({
          title: 'Yeay!',
          text: 'Berhasil Edit Produk',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(() => {
          dispatch('getDataHandler')
          commit('PRODUCT_EDIT_MODAL_HANDLER')
        })
      } catch (error) {
        Swal.fire({
          title: 'Oops!',
          text: 'Fieldnya Gaboleh ada yg kosong',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
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
          url: `/auctions/${payload.ProductId}?size=3`,
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
    },
    async auctionEndedHandler({ dispatch }, payload) {
      try {
        await instanceAxios({
          url: `/products/${payload}`,
          method: 'patch',
          data: { status: false },
          headers: {
            access_token: JSON.parse(localStorage.user_data_bidding).accessToken
          }
        })
        dispatch('getDetailProduct', { productId: payload })
      } catch (error) {
        console.log(error)
      }
    },
    async addHistoryHandler({ dispatch }, payload) {
      try {
        await instanceAxios({
          url: '/history',
          method: 'post',
          data: payload,
          headers: {
            access_token: JSON.parse(localStorage.user_data_bidding).accessToken
          }
        })

        Swal.fire({
          title: 'Yeay!',
          text: 'Berhasil Konfirmasi',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(() => {
          router.push('/history')
        })
      } catch (error) {
        Swal.fire({
          title: 'Yahh!',
          text: 'Server Lagi Error',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    },
    async getHistoryHandler({ state, commit }) {
      try {
        commit('IS_LOADING', true)
        const { data } = await instanceAxios({
          url: `/history?role=${state.userRole}`,
          method: 'get',
          headers: {
            access_token: JSON.parse(localStorage.user_data_bidding).accessToken
          }
        })
        commit('IS_LOADING')

        commit('GET_HISTORY', data)
      } catch (error) {
        console.log(error)
        commit('IS_LOADING')
      }
    }
  },
  modules: {}
})
