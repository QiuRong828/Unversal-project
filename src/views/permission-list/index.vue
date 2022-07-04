<template>
  <div>
    <el-card>
      <Table :cols="cols" :data="dataList"></Table>
    </el-card>
  </div>
</template>

<script setup>
import Table from '../../components/Table.vue'
import { reactive, ref } from 'vue'
import UserApi from '../../api/user'

const dataList = ref(null)

const cols = reactive([
  {
    title: '权限名称',
    name: 'permissionName',
    type: 'expand',
    id: 'id',
    width: '100',
    align: 'center'
  },
  { name: 'permissionMark', title: '权限标识', align: 'center' },
  { name: 'permissionDesc', title: '权限描述', align: 'center' }
])

const getPermission = async () => {
  try {
    const res = await UserApi.getUserPermission()
    dataList.value = res
  } catch (error) {
    console.log(error)
  }
}
getPermission()
</script>
<style scoped lang="scss"></style>
