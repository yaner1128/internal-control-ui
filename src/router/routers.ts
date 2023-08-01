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
  },
  {
    path: '/basic',
    component: Layout,
    redirect: '/basic/manage/specif',
    meta: {
      title: '内控基础管理'
    },
    name: '内控基础管理',
    children: [
      {
        path: 'manage',
        meta: {
          title: '制度规范管理'
        },
        name: '制度规范管理',
        children: [
          {
            path: 'specif',
            meta: {
              title: '制度规范查询'
            },
            name: '制度规范查询',
            component: () => import('@/views/Basic/Manage/Specif/index.vue')
          },
          {
            path: 'files',
            meta: {
              title: '制度文件管理'
            },
            name: '制度文件管理',
            component: () => import('@/views/Basic/Manage/Files/index.vue')
          },
          {
            path: 'policy',
            meta: {
              title: '内控策略管理'
            },
            name: '内控策略管理',
            component: () => import('@/views/Basic/Manage/Policy/index.vue')
          }
        ]
      },
      {
        path: 'require',
        meta: {
          title: '内控规范要求'
        },
        name: '内控规范要求',
        children: [
          {
            path: 'env',
            meta: {
              title: '内控基础环境'
            },
            name: '内控基础环境',
            component: () => import('@/views/Basic/Require/Environment/index.vue')
          },
          {
            path: 'business',
            meta: {
              title: '主要业务内控'
            },
            name: '主要业务内控',
            component: () => import('@/views/Basic/Require/Business/index.vue')
          },
          {
            path: 'plan',
            meta: {
              title: '内控工作计划'
            },
            name: '内控工作计划',
            component: () => import('@/views/Basic/Require/Plan/index.vue')
          },
          {
            path: 'template',
            meta: {
              title: '内控任务模板'
            },
            name: '内控任务模板',
            component: () => import('@/views/Basic/Require/Template/index.vue')
          }
        ]
      },
      {
        path: 'test3',
        meta: {
          title: '内控指标体系'
        },
        name: '内控指标体系',
        component: () => import('@/views/Basic/Manage/Policy/index.vue')
      },
      {
        path: 'test4',
        meta: {
          title: '内控规则管理'
        },
        name: '内控规则管理',
        children: [
          {
            path: '4-1',
            meta: {
              title: '疑点名单管理'
            },
            name: '疑点名单管理',
            component: () => import('@/views/Basic/Manage/Policy/index.vue')
          },
          {
            path: '4-2',
            meta: {
              title: '疑点业务规则'
            },
            name: '疑点业务规则',
            component: () => import('@/views/Basic/Manage/Policy/index.vue')
          }
        ]
      },
      {
        path: 'test5',
        meta: {
          title: '内控组织架构管理'
        },
        name: '内控组织架构管理',
        component: () => import('@/views/Basic/Manage/Policy/index.vue')
      }
    ]
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRouterMap
})
