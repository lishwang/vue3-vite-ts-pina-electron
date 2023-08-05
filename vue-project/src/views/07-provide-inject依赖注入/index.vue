<template>
  <div>
    <input v-model="spanText" />
    <childVue />
  </div>
</template>
<script setup lang="ts">
import { ref, provide, readonly } from 'vue'
import childVue from './child.vue'

const spanText = ref<string>('red')
const color = ref<string>('black')
// 这种方式传递的数据可以被子孙组件修改，如果不想被修改，需要用 readonly 包裹
provide('aaa', spanText)
provide('bbb', readonly(color))
</script>

<style scoped></style>
