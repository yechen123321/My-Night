<script setup>
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import ViewDown from '@/components/StudentComponent/ViewDown.vue'
</script>

<template>
  <div class='SendHomeWork'>
    <MainTopTitle class='MainTopTitle-out'></MainTopTitle>

    <div class='SendHomeWork-main'>

    </div>

    <ViewDown class='ViewDown'></ViewDown>
  </div>
</template>

<style scoped lang='scss'>
.SendHomeWork {
  width: 100%;
  height: 100%;

  .SendHomeWork-main{
    width: 100%;
    height: 100%;

  }

  .ViewDown {
    width: 100%;
    height: 10vh;
    margin-top: -10vh;
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