import store from '@/store'
import { createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/indexLogin.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout/index.vue')
  }
]

// 私有路由
const privateRoutes = [
  {
    path: '/profile',
    component: () => import('../views/two/profile.vue')
  },
  {
    path: '/user',
    redirect: '/user/manage',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        component: () => import('../views/two/user/manage.vue')
      },
      {
        path: '/user/role',
        component: () => import('../views/two/user/role.vue')
      },
      {
        path: '/user/permission',
        component: () => import('../views/two/user/permission.vue')
      }
    ]
  },
  {
    path: '/article',
    redirect: '/article/ranking',
    children: [
      {
        path: '/article/ranking',
        component: () => import('../views/two/article/ranking.vue')
      },
      {
        path: '/article/create',
        component: () => import('../views/two/article/create.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [publicRoutes, privateRoutes]
})

router.beforeEach((to, from, next) => {
  // 除了登录 都要守卫
  if (to.path === '/login') {
    next()
    return
  } else {
    // 判断用户资料是否获取，若不存在需要获取
    if (!store.getters.hasUserInfo) {
      // store.dispatch('user/getUserInfo')
    }
    next()
  }

  //  判断是否登录  登录直接进入   没有登录 跳转到登录页
  if (localStorage.getItem('token')) {
    next()
  } else {
    next('/login')
  }
})

export default router
