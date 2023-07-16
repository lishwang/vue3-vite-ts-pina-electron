<template>
  <div class="card">
    <div class="card-header">
      <div>标题</div>
      <div>副标题</div>
    </div>
    <div v-if="content" class="card-content">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  content: string
  arr?: number[]
}
// withDefaults 组件传参默认值（ts专用）
withDefaults(defineProps<Props>(), {
  content: '默认值',
  arr: () => [666]
})
</script>

<style scoped lang="scss">
$border: #ccc;
.card {
  width: 300px;
  border: 1px solid $border;
  border-radius: 3px;
  &:hover {
    box-shadow: 0 0 10px $border;
  }

  &-content {
    padding: 10px;
    height: 300px;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid $border;
  }
}
</style>
