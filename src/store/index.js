import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/server'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    patients: [],
    patientDetails: {},
    symptoms: []
  },
  mutations: {
    SET_IS_LOGGED_IN (state, payload) {
      state.isLoggedIn = payload
    },
    SET_PATIENTS (state, payload) {
      state.patients = payload
    },
    SET_PATIENT_DETAILS (state, payload) {
      state.patientDetails = payload
    },
    SET_SYMPTOMS (state, payload) {
      state.symptoms = payload
    }
  },
  actions: {
    alertSuccess (context, message, detail) {
      Swal.fire(`${message}`, '', 'success')
    },
    alertError (context, message, detail) {
      Swal.fire({
        icon: 'error',
        title: `${message}`
      })
    },
    register (context, payload) {
      axios({
        url: '/register',
        method: 'POST',
        data: {
          full_name: payload.full_name,
          email: payload.email,
          password: payload.password
        }
      })
      .then((response) => {
        context.dispatch('alertSuccess', 'Register successful!')
        router.push('/login').catch(() => {})
      })
      .catch((error) => {
        console.log(error);
        context.dispatch('alertError', 'Email has been taken!')
      })
    },
    login (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then((response) => {
          context.dispatch('alertSuccess', 'Login successful!')
          localStorage.setItem('access_token', response.data.access_token)
          context.commit('SET_IS_LOGGED_IN', true)
          router.push('/').catch(() => {})
        })
        .catch((error) => {
          console.log(error);
          context.dispatch('alertError', 'Email or password incorrect!')
        })
    },
    logout (context, payload) {
      context.dispatch('alertSuccess', 'Logout successful!')
      context.commit('SET_IS_LOGGED_IN', false)
      localStorage.removeItem('access_token')
      router.push('/login').catch(() => {})
    },
    fetchAllPatients (context, payload) {
      axios({
        url: '/patients',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((response) => {
          context.commit('SET_PATIENTS', response.data.data)
        })
        .catch((error) => {
          console.log(error);
        })
    },
    examine (context, patientId) {
      axios({
        url: `/patients/${patientId}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((response) => {
          context.commit('SET_PATIENT_DETAILS', response.data)
          router.push('/patient').catch(() => {})
        })
        .catch((error) => {
          console.log(error);
        })
    },
    fetchSymptoms (context, payload) {
      axios({
        url: `/symptoms`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((response) => {
          context.commit('SET_SYMPTOMS', response.data.data)
        })
        .catch((error) => {
          console.log(error);
        })
    },
    addPatient (context, payload) {
      axios({
        url: '/patients',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
            first_name: payload.first_name,
              last_name: payload.last_name,
              gender: payload.gender,
              birth_year: payload.birth_year,
              symptom1: payload.symptom1,
              symptom2: payload.symptom2,
              symptom3: payload.symptom3,
              symptom4: payload.symptom4,
              symptom5: payload.symptom5
        }
      })
        .then((response) => {
          context.dispatch('alertSuccess', 'New patient added successfully!')
          router.push('/').catch(() => {})
        })
        .catch((error) => {
          context.dispatch('alertError', 'Please make sure the data is filled correctly')
          log.error(error)
        })
    },
    deletePatient(context, patientId) {
      axios({
        url: `/patients/${patientId}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((response) => {
          context.dispatch('alertSuccess', 'Patient deleted successfully!')
          context.dispatch('fetchAllPatients')
        })
        .catch((error) => {
          context.dispatch('alertError', 'You are not authorized!')
          console.log(error);
        })
    }
  },
  modules: {
  }
})
