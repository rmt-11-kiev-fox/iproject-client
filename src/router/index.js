import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../components/Login.vue')
      },
      {
        path: 'collect',
        name: 'Collect',
        component: () => import('../components/Collect.vue')
      },
      {
        path: 'history',
        name: 'History',
        component: () => import('../components/History.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Collect' && !localStorage.getItem('access_token')) next({ name: 'Login' })
  else next()
})

export default router
