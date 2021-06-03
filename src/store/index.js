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
    organizationData: {},
    profile: {},
    productId: "",
    donations: [],
    totalPage: 0,
    pageLimit: 5
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
    },
    GET_DONATIONS(state, donations) {
      state.donations = donations
    },
    SET_TOTAL_PAGE(state, totalPage) {
      state.totalPage = totalPage
    },
    GET_ORGANIZATION_DATA(state, organizationData) {
      state.organizationData = organizationData
    }
  },
  actions: {

    async fetchOrganizationById({ commit }, id) {
      try {
        const organization = await instanceAxios({
          url: `/organization/${id}`,
          method: 'GET',
        })
        commit('GET_ORGANIZATION_DATA', organization.data)
      } catch ({ response }) {
        const message = response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }

    },
    async fetchDonation({ commit }) {
      try {
        const donations = await instanceAxios({
          url: '/donation',
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        })
        commit('GET_DONATIONS', donations.data)
        const totalPage = await Math.ceil(this.state.donations.length / this.state.pageLimit)
        await commit('SET_TOTAL_PAGE', totalPage)
      } catch ({ response }) {
        const message = response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },

    async fetchProfile({ commit }) {

      try {
        const profile = await instanceAxios({
          url: '/profile',
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        })
        await commit('SET_PROFILE', profile.data)
      } catch ({ response }) {
        const message = response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },

    async editProfile({ commit }, profileData) {
      try {
        const profile = await instanceAxios({
          url: '/profile/edit',
          method: 'PUT',
          data:profileData,
          headers: {
            access_token: localStorage.access_token
          }
        })
        await commit('SET_PROFILE', profile.data)
        Swal.fire({
          icon: 'success',
          text: "Profile updated"
        })
      } catch ({ response }) {
        const message = response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },
    async fetchCategories({ commit }) {
      try {
        const categories = await instanceAxios({
          url: '/categories',
          method: 'GET',
        })
        const categoryData = categories.data.data
        commit('GET_CATEGORIES', categoryData)

      } catch ({ response }) {
        const message = response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
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
      } catch ({ response }) {
        const message = response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },

    async findOrganizations({ commit }, keyword) {
      try {
        const organizations = await instanceAxios({
          url: `/search?keyword=${keyword}`,
          method: 'GET'
        })
        commit('GET_ORGANIZATIONS', organizations.data)

        const totalPage = await Math.ceil(this.state.organizations.length / this.state.pageLimit)
        await commit('SET_TOTAL_PAGE', totalPage)

      } catch ({ response }) {
        const message = response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
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
        const donation = newProduct.data
        await dispatch('checkout', donation)
      } catch ({ response }) {
        const message = response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
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
      } catch ({ response }) {
        const message = response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
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
      } catch ({ response }) {
        const message = response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
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
        let paymentType = 'One-Time'
        if (lineItems.price.recurring) {
          paymentType = lineItems.price.recurring.interval
        }
        const donation = {
          organizationName: product.data.name,
          donationAmount: lineItems.amount_total,
          paymentType
        }
        await dispatch('createDonation', donation)
      } catch ({ response }) {
        const message = response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    },

    async createDonation({ dispatch }, donation) {
      try {
        const createdDonation = await instanceAxios({
          url: '/donation',
          method: "POST",
          data: donation,
          headers: {
            access_token: localStorage.access_token
          }
        })
        dispatch('fetchDonation')
      } catch ({ response }) {
        const message = response.data.message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message
        })
      }
    }



  },
  modules: {
  }
})
