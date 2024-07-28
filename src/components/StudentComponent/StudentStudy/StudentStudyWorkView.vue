<script setup>
import SelfStudy from '@/components/StudentComponent/StudentStudy/SelfStudy.vue'

</script>

<template>
  <div class='StudentStudyWorkView-body'>
    <div class='StudentStudyWorkView-main'>
      <SelfStudy></SelfStudy>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.StudentStudyWorkView-body {
  width: 100%;
  height: 100%;

  .StudentStudyWorkView-main{
    border-radius: 0.3vw;
    width: 94%;
    height: 90%;
    margin: 4vh auto;
  }
}

</style>