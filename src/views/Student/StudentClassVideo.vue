<script setup>
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import ViewDown from '@/components/StudentComponent/ViewDown.vue'
import OnlineClass from '@/components/StudentComponent/StudentClass/OnlineClass.vue'
</script>

<template>
  <div class='StudentClassVideo'>
    <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
    <div class='StudentClassVideo-body'>
      <OnlineClass class='OnlineClass'></OnlineClass>
    </div>
    <ViewDown class='ViewDown'></ViewDown>
  </div>
</template>

<style scoped lang='scss'>
.StudentClassVideo {
  width: 100%;
  height: 130%;

  .StudentClassVideo-body {
    width: 65%;
    height: 120%;
    margin: auto;

    .OnlineClass {
      padding-top: 1vh;
      height: 120vh;
    }
  }

  .MainTopTitle-out {
    width: 100%;
    height: 6vh;
    background: white;
  }

  .ViewDown {
    width: 100%;
    height: 10vh;
    margin-top: 10vh;
  }
}
</style>