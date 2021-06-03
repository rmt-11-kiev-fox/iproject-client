import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/dashboard/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/chat/index')
  },
  {
    path: '/live-bid/:id',
    name: 'LiveBid',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/liveBid/index')
  },
  {
    path: '/list',
    name: 'ListProduct',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/product/index')
  },
  {
    path: '/history',
    name: 'History',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/history/index')
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/notfound/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLogged = localStorage.user_data_bidding
    ? JSON.parse(localStorage.user_data_bidding).accessToken
    : false
  if (!isLogged && to.name !== 'NotFound') {
    next({ name: 'NotFound' })
  } else next()
})

export default router
