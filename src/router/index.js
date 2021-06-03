import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/user/Login.vue'
import Register from '../views/user/Register.vue'
import MainMenu from '../views/home/MainMenu.vue'
import Game from '../views/game/Game.vue'
import PickTopic from '../views/game/Topic.vue'
import GameStart from '../views/game/GameStart.vue'
import QuestionPage from '../views/game/QuestionPage.vue'
import GameEnd from '../views/game/GameEnd.vue'
import Profile from '../views/profile/Profile.vue'
import Leaderboard from '../views/profile/Leaderboard.vue'
import MostPlayed from '../views/profile/MostPlayed.vue'
import UserHistory from '../views/profile/UserHistory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/mainMenu',
        name: 'MainMenu',
        component: MainMenu,
        props: true
      },
      {
        path: '/profile/user',
        name: 'ProfileUser',
        component: Profile,
        children: [
          {
            path: '/profile/user/leaderboard',
            name: 'LeaderboardPage',
            component: Leaderboard,
            props: true
          },
          {
            path: '/profile/user/mostPlayed',
            name: 'MostPlayed',
            component: MostPlayed,
            props: true
          },
          {
            path: '/profile/user/userHistory',
            name: 'UserHistory',
            component: UserHistory,
            props: true
          }
        ]
      }
    ]
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
    children: [
      {
        path: '/game/pickTopic',
        name: 'PickTopic',
        component: PickTopic,
        props: true
      },
      {
        path: '/game/start',
        name: 'GameStart',
        component: GameStart,
        props: true
      },
      {
        path: '/game/question/:number',
        name: 'QuestionPage',
        component: QuestionPage,
        props: true
      },
      {
        path: '/game/end',
        name: 'GameEnd',
        component: GameEnd,
        props: true
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
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
