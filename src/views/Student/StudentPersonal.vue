<script setup>
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
</script>

<template>
  <div class='StudentPersonal-body'>
    <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
    <div class='StudentPersonal-main'>

    </div>
  </div>
</template>

<style scoped lang='scss'>
.StudentPersonal-body {
  width: 100%;
  height: 100%;

  .StudentPersonal-main {
    height: 100%;
    width: 70%;
    margin-left: 15%;
    padding-top: 8vh;
  }
  .MainTopTitle-out {
    width: 100%;
    height: 5.5%;
    position: absolute;
    z-index: 2;
    background: white;
  }
}
</style>