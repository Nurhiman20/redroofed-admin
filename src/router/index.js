import Vue from 'vue'
import Router from 'vue-router'

import FullLayout from '@/layouts/Full'
import HomeLayout from '@/layouts/Home'

const DashboardPage = () => import('@/views/Dashboard')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      redirect: '/dashboard',
      component: HomeLayout,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: DashboardPage
        }
      ]
    }
  ]
})
