<template>
  <div>
    <h1>nextSon: {{ aaa }}</h1>
  </div>
</template>
<script setup lang="ts">
import { ref, inject } from 'vue'
import { Ref } from 'vue'

const aaa = inject<Ref<string>>('aaa')
</script>

<style scoped></style>
