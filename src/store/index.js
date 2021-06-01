import Vue from 'vue'
import Vuex from 'vuex'
import instanceAxios from '../helpers/api'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    organizations: [],
    profile: {}
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
    }


  },
  modules: {
  }
})
