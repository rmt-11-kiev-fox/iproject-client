import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book'
import Location from '../views/Location'
import Admin from '../views/admin'
import EditBook from '../views/EditBook'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Menu.vue')
  },
  {
    path: '/location',
    name: 'Location',
    component: Location
  },
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter (to, from, next) {
      if (!localStorage.access_token) {
        next({
          name: 'AdminLogin'
        })
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'AdminLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue'),
    beforeEnter (to, from, next) {
      if (localStorage.access_token) {
        next({
          name: 'Admin'
        })
      } else {
        next()
      }
    }
  },
  {
    path: '/editBook',
    name: 'EditBook',
    component: EditBook,
    beforeEnter (to, from, next) {
      if (!localStorage.access_token) {
        next({
          name: 'AdminLogin'
        })
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
