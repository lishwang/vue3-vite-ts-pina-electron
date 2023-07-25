<template>
  <div class="Teleport-Box">
    <!-- <A /> -->
    <Teleport to="body">
      <A :info="info" />
    </Teleport>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import A from './A.vue'

const info = ref('Teleport 可以改变组件的位置，但不影响组件传参')
</script>

<style scoped>
.Teleport-Box {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
