import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Game from '../pages/Game.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/:gameid',
    component: Game
  }
]

export default new Router({
  routes
})
