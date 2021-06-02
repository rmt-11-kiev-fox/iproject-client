import Vue from 'vue'
import Vuex from 'vuex'
import instanceAxios from '../helpers/api'
import Swal from 'sweetalert2'
import { stripe } from '../stripe/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    organizations: [],
    profile: {},
    productId: ""
  },
  mutations: {
    GET_CATEGORIES(state, categories) {
      const categoryList = categories.filter(el => el.categoryId && el.categoryId !== '?' && el.categoryId !== 'Z')
      state.categories = categoryList
    },
    GET_ORGANIZATIONS(state, organizations) {
      state.organizations = organizations
    },
    SET_PROFILE(state, profile) {
      state.profile = profile
    },
    SET_PRODUCT_ID(state, productId) {
      state.productId = productId
    }
  },
  actions: {
    async storeProfile({ commit }, profile) {
      await commit('SET_PROFILE', profile)
    },
    async fetchCategories({ commit }) {
      try {
        const categories = await instanceAxios({
          url: '/categories',
          method: 'GET',
        })
        const categoryData = categories.data.data
        commit('GET_CATEGORIES', categoryData)

      } catch (err) {
        console.log(err);
      }
    },

    async fetchOrganizationByCategory({ commit }, id) {
      try {
        const organizations = await instanceAxios({
          url: `categories/${id}`,
          method: 'GET'
        })
        const organizationData = organizations.data.data
        commit('GET_ORGANIZATIONS', organizationData)
      } catch (err) {
        console.log(err);
      }
    },

    async findOrganizations({ commit }, keyword) {
      try {
        const organizations = await instanceAxios({
          url: `/search?keyword=${keyword}`,
          method: 'GET'
        })
        commit('GET_ORGANIZATIONS', organizations.data)
      } catch ({ response }) {
        console.log(response);
      }
    },

    async createProduct({ commit, dispatch }, product) {
      try {
        const newProduct = await instanceAxios({
          url: `/products`,
          method: 'POST',
          data: {
            product
          },
          headers: {
            access_token: localStorage.access_token
          }
        })
        console.log(newProduct,"><><><><.");
        const donation = newProduct.data
        await dispatch('checkout', donation)
      } catch (err) {
        console.log(err);
      }
    },

    async checkout({ commit }, donation) {
      try {
        const session = await instanceAxios({
          url: '/checkout',
          method: 'POST',
          data: donation,
          headers: {
            access_token: localStorage.access_token
          }
        })
        const success = stripe.redirectToCheckout({ sessionId: session.data.id })
        console.info(success);

      } catch (err) {
        console.log(err);
      }
    },

    async fetchLineItems({ dispatch }, checkoutSession) {
      try {
        const lineItems = await instanceAxios({
          url: `/checkout/success?id=${checkoutSession}`,
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        })
        await dispatch('fetchProduct', lineItems.data)
      } catch (err) {
        console.log(err);
      }
    },

    async fetchProduct({ commit, dispatch }, lineItems) {
      const productId = lineItems.price.product
      try {
        const product = await instanceAxios({
          url: `/products/${productId}`,
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        })
        console.log(lineItems);
        const donation = {
          charityName: product.data.name,
          donationAmount: lineItems.amount_total,
        }
        await dispatch('createDonation', donation)
        console.info(product.data);
      } catch (err) {
        console.log(err);
      }
    },

    async createDonation({ commit }, donation) {
      console.log(donation,"<<><><><><><.");
      try {
        const createdonation = await instanceAxios({
          url: '/donation',
          method: "POST",
          data: donation,
          headers: {
            access_token: localStorage.access_token
          }
        })
      } catch (err) {
        console.log(err);
      }
    }



  },
  modules: {
  }
})
