import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    alias: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        name: 'AnimalFiltered',
        path: '/home/:type',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && to.name !== 'Register') {
    if (!localStorage.access_token) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else if (to.name === 'Login' || to.name === 'Register') {
    if (localStorage.access_token) {
      next({
        name: 'Home'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
