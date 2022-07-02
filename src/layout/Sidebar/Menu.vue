<template>
  <el-menu
    active-text-color="#fff"
    background-color="#304156"
    :default-active="$route.path"
    text-color="#bfcbd9"
    unique-opened
    router
  >
    <menuItem v-for="item in menuList" :key="item" :menuList="item"></menuItem>
  </el-menu>
</template>

<script setup>
/**
 * 1. 先定义菜单最终所需要的数据
 *
 * 2. 通过递归组件动态渲染菜单的数据
 *
 * 3. 获取到路由表的所有数据 router.getRoutes() 完整路由表的数据
 *
 * 4. 将路由表的数据过滤成菜单最终所需要的数据
 *
 * 没有children   el-menu-item
 * 有children     el-sub-menu
 */
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterMenuData } from '../../utils/menu'
import { filterRouters, generateMenus } from '../../utils/router'
import menuItem from './MenuItem.vue'

const router = useRouter()

// 获取路由表的所有数据
console.log('routes=>', router.getRoutes())

const menuList = computed(() => {
  const routes = filterRouters(router.getRoutes())
  return filterMenuData(generateMenus(routes))
})
</script>

<style scoped lang="scss"></style>
