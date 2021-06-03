import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import AddProduct from '../components/AddProduct.vue'
import Dashboard from '../components/Dashboard.vue'
import EditProduct from '../components/EditProduct.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard
      },
      {
        name: 'AddProduct',
        path: '/addProduct',
        component: AddProduct
      },
      {
        name: 'EditProduct',
        path: '/editProduct/:product_id',
        component: EditProduct
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name !== 'Login' && !localStorage.access_token){
    next({name: 'Login'})
  } else if (to.name === 'Login' && localStorage.access_token){
    next({name: 'Home'})
  } else next()
})

export default router
