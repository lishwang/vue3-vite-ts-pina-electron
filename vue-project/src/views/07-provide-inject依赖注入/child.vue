<template>
  <div>
    <h1 class="son_style">son: {{ aaa }}</h1>
    <nextSonVue />
    <button @click="change">修改</button>
  </div>
</template>
<script setup lang="ts">
import { ref, inject } from 'vue'
// 引入类型
import { Ref } from 'vue'
import nextSonVue from './nextChild.vue'

/**
 * inject(参数一, 参数二);
 * 参数一：接收祖先级组件provide注入的变量key；
 * 参数二：默认值，可以不填
 * inject接收的数据可以被修改，并且会影响到所有用到该值的组件，响应式的
 */
const aaa = inject<Ref<string>>('aaa', ref('green'))
const bbb = inject<Ref<string>>('bbb')
const change = () => {
  // 如果inject接收的aaa数据没有定义默认值，在修改时需要加上非空断言
  aaa!.value = 'pink'
  // aaa.value = 'pink'
  bbb!.value = 'pink' // 警告提示，不允许修改bbb
}
</script>

<style scoped>
.son_style {
  /* 动态样式 */
  background: v-bind(bbb);
}
</style>
