<template>
  <!-- 
  异步组件必须用 Suspense 组件包裹;
  Suspense 组件提供两个插槽：
    default 用来展示异步组件内容，如果要展示多个组件或元素，需要用dev包裹
    fallback 用来展示一些默认内容，当异步组件还未渲染或者渲染失败时展示
 -->
  <Suspense>
    <template #default>
      <div>
        <span>异步组件展示内容：</span>
        <SyncVue></SyncVue>
      </div>
    </template>
    <template #fallback>
      <span>异步组件SyncVue还未展示之前展示该插槽内容</span>
    </template>
  </Suspense>
</template>
<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

// 定义异步组件
const SyncVue = defineAsyncComponent(() => import('./async.vue'))
</script>

<style scoped></style>
