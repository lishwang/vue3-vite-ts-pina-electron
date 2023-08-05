<template>
  <button @click="btnClick">emit</button>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import Bus from './bus'

const btnClick = () => {
  Bus.emit('aaa', 'aaa')
  Bus.emit(1, 111)
}
</script>

<style scoped></style>
