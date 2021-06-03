import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/standings',
        name: 'Standings',
        component: () => import('../views/Standings.vue')
      },
      {
        path: '/players',
        name: 'Players',
        component: () => import('../views/Players.vue')
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('../views/News.vue')
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
  const token = localStorage.getItem('access_token')
  if (!token) {
    if (to.name === 'Login' || to.name === 'Register') {
      return next()
    } else {
      return next('/login')
    }
  } else {
    if (to.name === 'Login' || to.name === 'Register') {
      next('/')
    } else {
      return next()
    }
  }
})
export default router
