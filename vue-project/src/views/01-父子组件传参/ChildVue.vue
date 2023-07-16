<template>
  <div>{{ content }}</div>
  <button @click="btn">向父组件发送事件</button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
const router = useRouter()
// 向父组件发送事件 方式一：
// const emit = defineEmits(['aaa'])
// 向父组件发送事件 方式二：
const emit = defineEmits<{
  (e: 'aaa', name: string, name2: string, name3: string): any
}>()
const btn = () => {
  emit('aaa', '111', '222', '333')
}

// props接收方式一：非ts
// const props = defineProps({
//   propData: {
//    type: String,
//    default: '',
//   },
// });
// props接收方式二：ts专用
type Props = {
  content: string
  arr?: number[]
}
withDefaults(defineProps<Props>(), {
  content: '默认值',
  arr: () => [666]
})
</script>

<style scoped></style>
