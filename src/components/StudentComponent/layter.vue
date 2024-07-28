<script setup>
import { ref } from 'vue'

const carousel = ref([
  { src: '/src/assets/StudentMainTop/zmd/1.png' },
  { src: '/src/assets/StudentMainTop/zmd/2.png' },
  { src: '/src/assets/StudentMainTop/zmd/3.png' },
  { src: '/src/assets/StudentMainTop/zmd/4.png' }
])
</script>

<template>
<div class='Layter-body'>
  <el-carousel height='38vh' class='carousel' indicator-position='outside'>
    <el-carousel-item height='38vh' v-for='item in carousel' :key='item'>
      <img width='100%' height='100%' :src='item.src' alt=''>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<style scoped lang='scss'>
.Layter-body {
  width: 100%;
  height: 100%;
  .carousel {
    width: 100%;
    height: 38vh;
    border-radius: 0.5vw;
  }
}
</style>