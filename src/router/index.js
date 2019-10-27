import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BeerDetail from '../views/BeerDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/beer/:beerId',
        name: 'beer',
        component: BeerDetail
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
