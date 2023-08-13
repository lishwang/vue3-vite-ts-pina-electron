<template>
  <div>
    <img id="img" src="./img/7-14121ZT4063B11.png" alt="" />
  </div>
</template>
<script setup>
import useBase64 from './hooks/index'

useBase64({ el: '#img' }).then((res) => {
  console.log(res.baseUrl)
})
</script>

<style scoped></style>
