<script setup>
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
</script>

<template>
  <div class='StudentPersonal-body'>
    <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
  </div>
</template>

<style scoped lang='scss'>
.StudentPersonal-body {
  width: 100%;
  height: 100%;

  .MainTopTitle-out {
    width: 100%;
    height: 5.5%;
    position: absolute;
    z-index: 2;
    background: white;
  }
}
</style>