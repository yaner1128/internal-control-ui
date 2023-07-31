import { createRouter, createWebHistory } from 'vue-router'

/* Layout */
import Layout from '@/views/layout/index.vue'

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/home/index.vue'),
        name: '首页',
        meta: { title: '首页', noCache: true, affix: true }
      }
    ]
  }
  // {
  //   path: '/system',
  //   component: Layout,
  //   redirect: '/system/role',
  //   meta: {
  //     title: '系统管理'
  //   },
  //   name: '系统管理',
  //   children: [
  //     {
  //       path: 'role',
  //       meta: {
  //         title: '角色管理'
  //       },
  //       name: '角色管理',
  //       component: () => import('@/views/BasicManage/index.vue')
  //     },
  //     {
  //       path: 'user',
  //       meta: {
  //         title: '管理'
  //       },
  //       name: '管理',
  //       component: () => import('@/views/login/index.vue')
  //     }
  //   ]
  // }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRouterMap
})
