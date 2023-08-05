<template>
  <h1>{{ aaa }}</h1>
  <h1>{{ number0 }}</h1>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import Bus from './bus'

const aaa = ref('a')
Bus.on('aaa', (val: string) => {
  aaa.value = val
})
const number0 = ref(0)
// 数字也可以当做事件名
Bus.on(1, (val: number) => {
  number0.value = val
})
</script>

<style scoped></style>
