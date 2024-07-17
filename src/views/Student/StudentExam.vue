<script setup>
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import ViewDown from '@/components/StudentComponent/ViewDown.vue'
import AutoPractice from '@/components/StudentComponent/StudentExam/AutoPractice.vue'
</script>

<template>
  <div class='StudentExam'>
    <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
    <div class='StudentExam-main'>
      <AutoPractice class='AutoPractice'></AutoPractice>
    </div>
    <ViewDown class='ViewDown'></ViewDown>
  </div>
</template>

<style scoped lang='scss'>
.StudentExam {
  width: 100%;
  height: 100%;

  .StudentExam-main {
    width: 70%;
    height: 100%;
    position: relative;
    margin-left: 15%;

    .AutoPractice {
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }


  .MainTopTitle-out {
    width: 100%;
    height: 5.5%;
    background: white;
  }

  .ViewDown {
    width: 100%;
    height: 10vh;
    margin-top: 10vh;
  }
}
</style>