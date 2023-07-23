<template>
  <ul class="tags">
    <li
      :class="{ active: currentTag === item.value }"
      v-for="item in tags"
      :key="item.value"
      @click="tagClick(item)"
    >
      {{ item.label }}
    </li>
  </ul>

  <div class="study-vue">
    <!-- 动态组件 -->
    <component :is="comId"></component>
    <!-- 全局组件 -->
    <CardVue content="xxx" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, shallowRef, markRaw } from 'vue'
import PropsVue from './01-父子组件传参/index.vue'
import ActiveComVue from './02-动态组件/index.vue'
import TreeVue from './04-递归组件/index.vue'
import asyncVue from './05-异步组件/index.vue'

const tags = reactive([
  {
    label: '父子组件传参',
    value: 'props',
    com: markRaw(PropsVue)
  },
  {
    label: '动态组件',
    value: 'activeCom',
    com: markRaw(ActiveComVue)
  },
  {
    label: '递归组件',
    value: 'Tree',
    com: markRaw(TreeVue)
  },
  {
    label: '异步组件',
    value: 'async',
    com: markRaw(asyncVue)
  }
])

const comId = shallowRef(PropsVue)
const currentTag = ref('props')
const tagClick = (item) => {
  comId.value = item.com
  currentTag.value = item.value
}
</script>

<style lang="scss">
.study-vue {
  padding: 1rem;
}
.tags {
  display: flex;
  li {
    padding: 0 0.5rem;
    cursor: pointer;
  }
  li.active {
    background-color: #369;
    color: #fff;
  }
}
</style>
