import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
/* Layout */
import Layout from '@/views/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Home.vue'),
        name: '首页',
        meta: { title: '首页', icon: 'index', noCache: true, affix: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
