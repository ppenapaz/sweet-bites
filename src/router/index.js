import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Shop from '@/components/home/Shop'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'

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
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
