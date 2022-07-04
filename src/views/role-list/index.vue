<template>
  <div>
    <el-card>
      <Table :cols="cols" :data="dataList">
        <template v-slot:action="{ row }">
          <el-button @click="orow(row)" type="primary">分配权限 </el-button>
        </template>
      </Table>
    </el-card>
  </div>
</template>

<script setup>
import Table from '../../components/Table.vue'
import { reactive, ref } from 'vue'
import UserApi from '../../api/user'

const dataList = ref(null)

const cols = reactive([
  { title: '序号', type: 'index', width: '60', align: 'center' },
  { name: 'title', title: '名称', align: 'center' },
  { name: 'describe', title: '描述', align: 'center' },
  { title: '操作', slot: 'action', align: 'center', width: '300' }
])

const orow = (row) => {
  console.log(row)
}

const getRoles = async () => {
  try {
    const res = await UserApi.getUserRole()
    dataList.value = res
  } catch (error) {
    console.log(error)
  }
}
getRoles()
</script>
<style scoped lang="scss"></style>
