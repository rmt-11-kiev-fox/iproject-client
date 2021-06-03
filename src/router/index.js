import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category/Category.vue'
import Profile from '../views/Profile/Profile.vue'

import CategoryData from '../views/Category/CategoryData.vue'
import CategorySample from '../views/CategorySample.vue'

import OrganizationByKeyword from '../views/OrganizationByKeyword.vue'
import OrganizationDetails from '../views/OrganizationDetails.vue'

import Checkout from '../views/Checkout.vue'
import CheckoutSuccess from '../views/CheckoutSuccess.vue'
import Donation from '../views/Donation.vue'
import About from '../views/About.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/donation',
        name: 'Donation',
        component: Donation
      },
  
      {
        path: '/categorysample/:id',
        name: 'CategorySample',
        component: CategorySample
      },

      {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
      },
      {
        path: '/checkout/success',
        name: 'CheckoutSuccess',
        component: CheckoutSuccess
      },
      {
        path: '/organization',
        name: 'OrganizationByKeyword',
        component: OrganizationByKeyword
      },
      {
        path: '/organization/:id',
        name: 'OrganizationDetails',
        component: OrganizationDetails
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')

      },
      {
        path: '/category',
        name: 'Category',
        component: Category,
        props: true,
        children: [
          {
            path: '/category/:id',
            name: 'CategoryData',
            component: CategoryData
          }
        ]
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
  
      }
    ],
    
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.access_token) next({ name: 'Login' })
  else next()
})
export default router
