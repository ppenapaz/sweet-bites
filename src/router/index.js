import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Shop from '@/components/home/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
