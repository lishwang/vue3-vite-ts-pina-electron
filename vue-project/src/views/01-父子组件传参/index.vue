<template>
  <div>组件传参</div>
  <ChildVue content="1111" @aaa="aaa"></ChildVue>
</template>

<script setup>
import { ref } from 'vue'
import ChildVue from './ChildVue.vue'
const aaa = (...val) => {
  console.log(val)
}
</script>

<style lang="scss" scoped></style>
