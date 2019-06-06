import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/discover'
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('./views/Discover.vue')
    },
    {
      path: '/destination/:id',
      name: 'destination',
      component: () => import('./views/Destination.vue')
    },
    {
      path: '/fooddrinks/:id',
      name: 'fooddrink',
      component: () => import('./views/FoodDrink.vue')
    },
    {
      path: '/advancedsearch/:id',
      name: 'advancedSearch',
      component: () => import('./views/AdvancedSearch.vue')
    },
    {
      path: '/places/:id',
      name: 'place',
      component: () => import('./views/Place.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
