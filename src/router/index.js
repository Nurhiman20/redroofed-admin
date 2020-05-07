import Vue from 'vue'
import Router from 'vue-router'

import FullLayout from '@/layouts/Full'
import HomeLayout from '@/layouts/Home'

const DashboardPage = () => import('@/views/Dashboard')

// Member
const MemberPage = () => import('@/views/Member')
const StudentMember = () => import('@/views/Member/views/Student')
const TeacherMember = () => import('@/views/Member/views/Teacher')
const AdminMember = () => import('@/views/Member/views/Admin')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      redirect: '/dashboard',
      component: HomeLayout,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: DashboardPage
        },
        {
          path: '/member',
          name: 'Member',
          redirect: '/member/student',
          component: MemberPage,
          children: [
            {
              path: 'student',
              name: 'Student',
              component: StudentMember
            },
            {
              path: 'teacher',
              name: 'Teacher',
              component: TeacherMember
            },
            {
              path: 'admin',
              name: 'Admin',
              component: AdminMember
            }
          ]
        },
      ]
    }
  ]
})
