import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Login from '../views/Login'
import ActivePage from '../components/ActivePage'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/',
                name: 'ActivePage',
                component: ActivePage
            },
            {
                path: '/inactive',
                name: 'InactivePage',
                component: () => import('../components/InactivePage')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && to.name !== 'Register') {
        if (!localStorage.access_token) next({ name: 'Login' })
        else next()
    } else {
        if (localStorage.access_token) next({ name: 'Home' })
        else next()
    }
})

export default router
