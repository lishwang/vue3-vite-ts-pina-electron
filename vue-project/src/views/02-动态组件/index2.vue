<template>
  <div>动态组件 使用方式2</div>
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
import { ref, shallowRef, markRaw, reactive } from 'vue'

const tags = reactive([
  {
    label: 'AVue',
    value: 'AVue',
    com: 'AVue'
  },
  {
    label: 'BVue',
    value: 'BVue',
    com: 'BVue'
  }
])

const comId = shallowRef('AVue')
const currentTag = ref('AVue')
const tagClick = (item) => {
  comId.value = item.com
  currentTag.value = item.value
}
</script>

<script>
import AVue from './AVue.vue'
import BVue from './BVue.vue'
export default {
  components: {
    AVue,
    BVue
  }
}
</script>

<style lang="scss" scoped>
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
