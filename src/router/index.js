import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let isLogin = localStorage.access_token
  let nonAuthPages = [ 'Login', 'Register' ]
  if (to.name === 'Home' && !isLogin) {
    next("/login");
  } else if (to.name === "Login" && isLogin) {
    next("/");
  } else {
    next();
  }
  // if (isLogin){
  //   next('/')
  //   // if (nonAuthPages.includes(to.name)) {
  //   // } else {
  //   //   next()
  //   // }
  // } else {
  //   if (to.name === 'Login') {
  //     next('/Login')
  //   } else (
  //     next('/Register')
  //   )
  // }
  // if (to.name !== 'Login' && !localStorage.access_token) next({ name: 'Login' })
  // if (to.name !== 'Register' && !localStorage.access_token) next({ name: 'Register' })
  // if (to.name === 'Login' && localStorage.access_token) next({ name: 'Home' })
  // else next()
})

export default router
