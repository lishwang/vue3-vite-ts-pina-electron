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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PropsVue from './01-父子组件传参/index.vue'
import ActiveComVue from './02-动态组件/index.vue'

const tags = ref([
  {
    label: '传参',
    value: 'props',
    com: PropsVue
  },
  {
    label: '传参2',
    value: 'activeCom',
    com: ActiveComVue
  }
])

const comId = ref(PropsVue)
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
