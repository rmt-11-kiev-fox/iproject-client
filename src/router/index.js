import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AddPatient from '../views/AddPatient.vue'
import PatientDetails from '../views/PatientDetails.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/addPatient',
    name: 'AddPatient',
    component: AddPatient
  },
  {
    path: '/patient',
    name: 'PatientDetail',
    component: PatientDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Register'  && !localStorage.access_token) {
    next()
  } else if (to.name !== 'Login'  && !localStorage.access_token) {
    next({ name: 'Login' })
  } else {
    next()
    store.commit('SET_IS_LOGGED_IN', true)
  }
})

export default router
