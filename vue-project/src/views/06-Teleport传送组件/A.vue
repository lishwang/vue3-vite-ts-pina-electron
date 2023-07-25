<template>
  <div class="Teleport-A">
    Teleport传送组件生效时，该组件不受父组件的样式及v-show等因素影响
    <hr />
    <div>{{ info }}</div>
  </div>
</template>
<script setup>
import { toRefs } from 'vue'
const props = defineProps(['info'])
const { info } = toRefs(props)
console.log(info.value)
</script>

<style scoped>
.Teleport-A {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background-color: #000;
  color: #fff;
}
</style>
