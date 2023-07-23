<template>
  <h1>{{ formData.name }}</h1>
  <dev>{{ formData.desc }}</dev>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { axios } from '@/server/axios.ts'

const formData = ref({})
interface Data {
  data: {
    name: string
    desc: string
  }
}
// 从本地public文件内可以直接获取静态数据
// 顶层await
const res = await axios.get<Data>('./data.json')
console.log(res.data, 'data')
formData.value = res.data
</script>

<style scoped></style>
