<template>
  <div>
    <div v-for="(item, index) in data" :key="index">
      <div @click.stop="handleTreeItem(item)" style="margin-left: 20px">
        <input v-model="item.check" type="checkBox" />
        {{ item.name }}
        <!-- 
          递归组件使用：
          方式一：直接使用文件名即可
          方式二：使用 export default 导出的name属性值
        -->
        <TreeVue
          @tree-click="handleTreeItem"
          v-if="item?.children?.length"
          :data="item.children"
        ></TreeVue>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
type treeData = {
  name: string
  icon?: string
  children?: treeData[] | []
}
type Props = {
  data: treeData[]
}

defineProps<Props>()

const emit = defineEmits(['tree-click'])

const handleTreeItem = (item: treeData) => {
  emit('tree-click', item)
}
</script>
