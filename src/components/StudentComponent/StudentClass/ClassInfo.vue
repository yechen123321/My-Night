<script setup>
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import StudyInfo from '@/components/StudentComponent/StudentClass/StudyInfo.vue'
import ViewDown from '@/components/StudentComponent/ViewDown.vue'
</script>

<template>
<div class='ClassInfo'>
  <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
  <div class='ClassInfo-body'>
    <StudyInfo></StudyInfo>
  </div>
  <ViewDown class='ViewDown'></ViewDown>
</div>
</template>

<style scoped lang='scss'>
.ClassInfo {
  width: 100%;
  height: 100%;

  .ClassInfo-body{
    width: 70%;
    height: 100%;
    margin: -1vh auto;
  }


  .ViewDown {
    width: 100%;
    height: 10vh;
    margin-top: -1vh;
  }

  .MainTopTitle-out {
    width: 100%;
    height: 5.5%;
    background: white;
  }
}
</style>