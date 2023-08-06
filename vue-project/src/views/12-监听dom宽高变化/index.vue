<template>
  <div v-resize="resizeChange" class="div">去监听 dom 宽高的变化</div>
</template>
<script setup lang="ts">
import useResize from './index'
import * as vue from 'vue'

// 方法一：作为自定义指令使用
// 首先需要在 main.ts 中使用 use() 注册成全局指令，然后就可以在该文件内使用了
const resizeChange = (args: any) => {
  console.log(args)
}

// 方法二：作为hook使用
// useResize(document.querySelector('div'), (val) => {
//   console.log(val)
// })
</script>

<style scoped>
.div {
  width: 100%;
  height: 300px;
  background-color: red;
}
</style>
