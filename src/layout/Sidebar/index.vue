<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      router
    >
      <el-menu-item>
        <el-icon><Avatar /></el-icon>
        <span>个人中心</span>
      </el-menu-item>

      <el-sub-menu>
        <template #title>
          <el-icon><User /></el-icon>
          <span>用户</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>
            <el-icon><UserFilled /></el-icon>
            员工管理</el-menu-item
          >
          <el-menu-item>
            <el-icon><Stamp /></el-icon>
            角色列表</el-menu-item
          >
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item>
            <el-icon><Key /></el-icon>
            权限列表</el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>

      <el-sub-menu>
        <template #title>
          <el-icon><Tickets /></el-icon>
          <span>文章</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>
            <el-icon><Operation /></el-icon>
            文章排名</el-menu-item
          >
          <el-menu-item>
            <el-icon><Notebook /></el-icon>
            创建文章</el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script setup>
import {
  User,
  Avatar,
  Tickets,
  UserFilled,
  Stamp,
  Key,
  Operation,
  Notebook
} from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped></style>
