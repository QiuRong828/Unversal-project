import { createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/indexLogin.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

router.beforeEach((to, from, next) => {
  // 除了登录 都要守卫
  if (to.path === '/login') {
    next()
    return
  }

  //  判断是否登录  登录直接进入   没有登录 跳转到登录页
  if (localStorage.getItem('token')) {
    next()
  } else {
    next('/login')
  }
})

export default router
