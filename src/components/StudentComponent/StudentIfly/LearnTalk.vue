<script setup>
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import ViewDown from '@/components/StudentComponent/ViewDown.vue'

</script>

<template>
  <div class='LearnTalk'>
    <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
    <div class='LearnTalk-body'>
      <iframe class='in' src='/public/example/ise/index.html'></iframe>
    </div>
    <ViewDown class='ViewDown'></ViewDown>
  </div>
</template>

<style scoped lang='scss'>
.LearnTalk {
  width: 100%;
  height: 100%;

  .LearnTalk-body {
    width: 70%;
    height: 100%;
    margin: 2vh auto;
    background: white;
    position: relative;

    .in{
      position: absolute;
      width: 90%;
      height: 50%;
      border: none;
      margin-top: 10vh;
      margin-left: 5%;
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