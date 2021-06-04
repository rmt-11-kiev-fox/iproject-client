import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

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
    component: () => import('../views/Register.vue')
  },
  {
    path: '/tracker',
    name: 'Tracker',
    component: () => import('../views/Tracker.vue')
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('../views/Report.vue')
  },
  {
    path: '/incomes',
    name: 'Income',
    component: () => import('../views/Income.vue')
  },
  {
    path: '/expenses',
    name: 'Expense',
    component: () => import('../views/Expense.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
