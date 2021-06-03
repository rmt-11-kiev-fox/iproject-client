import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && localStorage.access_token) {
    next({ name: 'Home' })
  }
  if (to.name === 'Register' && localStorage.access_token) {
    next({ name: 'Home' })
  }
  if (to.name !== 'Login' && !localStorage.access_token && to.name !== 'Register') {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
