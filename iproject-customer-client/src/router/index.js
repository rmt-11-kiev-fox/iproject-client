import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Like from '../views/Liked.vue'

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
    path: '/details/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/like',
    name: 'Like',
    component: Like
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if ((to.name !== 'Login' || to.name !== 'Home') && !localStorage.access_token) {
//     next({ name: 'Home' })
//   } else if ((to.name !== 'Login' || to.name !== 'Home') && localStorage.access_token) {
//     next()
//   }
// })

export default router
