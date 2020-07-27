import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '',
    redirect: 'login'
  }, {
    path: '/',
    component: Layout,
    redirect: '/overview',
    children: [
      {
        name: 'Overview',
        path: '/overview',
        component: () => import('@/views/overview/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
