<template>
  <Tree @tree-click="treeClick" :data="data"></Tree>
</template>
<script setup lang="ts">
import Tree from './TreeVue.vue'
import { reactive } from 'vue'
type treeData = {
  name: string
  check?: Boolean
  children?: treeData[] | []
}
const data = reactive<treeData[]>([
  {
    name: '1',
    children: [
      {
        name: '1-1',
        check: true,
        children: [
          {
            name: '1-1-1',
            check: false,
            children: [
              {
                name: '1-1-1-1',
                check: false
              },
              {
                name: '1-1-1-2',
                check: false
              }
            ]
          },
          {
            name: '1-1-2',
            check: false
          },

          {
            name: '1-1-3',
            check: false,
            children: [
              {
                name: '1-1-3-1',
                check: false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '2',
    check: true,
    children: [
      {
        name: '2-1',
        check: false,
        children: [
          {
            name: '2-1-1',
            check: false
          }
        ]
      }
    ]
  },
  {
    name: '3',
    check: false,
    children: []
  }
])
const treeClick = (item: treeData) => {
  console.log(item)
}
</script>
