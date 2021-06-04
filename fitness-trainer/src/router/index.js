import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Register from '../views/Register'
import FoodList from '../views/FoodList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/createExercise',
        name: 'CreateExercise',
        component: () => import('../components/CreateExercise')
      },
      // {
      //   path: '/',
      //   name: 'About',
      //   component: () => import('../components/CreateExercise')
      // },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/foodList',
    name: 'FoodList',
    component: FoodList,
    children: [
      {
        path: '/createFood',
        name: 'CreateFood',
        component: () => import('../components/ManualCreateFood')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token) {
    if (to.name !== 'Login' && to.name !== 'Register') return next('/login')
    else return next()
  }
  else {
    if (to.name !== 'Login' && to.name !== 'Register') return next()
    else return next('/')
  }
})

export default router
