import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category/Category.vue'
import Profile from '../views/Profile/Profile.vue'
import EditProfile from '../views/Profile/EditProfile.vue'
import ProfileData from '../views/Profile/ProfileData.vue'
import CategoryData from '../views/Category/CategoryData.vue'
import OrganizationByKeyword from '../views/OrganizationByKeyword.vue'
import Checkout from '../views/Checkout.vue'
import CheckoutSuccess from '../views/CheckoutSuccess.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [

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
        path: '/organization/keyword',
        name: 'OrganizationByKeyword',
        component: OrganizationByKeyword
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
        props: true,
        children: [
          {
            path: '/profile/edit',
            name: 'EditProfile',
            props: true,
            component: EditProfile
          },
          {
            path: '/profile/data',
            name: 'ProfileData',
            props: true,
            component: ProfileData
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
