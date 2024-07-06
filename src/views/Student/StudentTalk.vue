<script setup>
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import ViewDown from '@/components/StudentComponent/ViewDown.vue'
</script>

<template>
  <div class='StudentTalk-body'>
    <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
    <div class='StudentTalk-main'>
      <div class='StudentTalk-main-left'>

      </div>

      <div class='StudentTalk-main-right'>

      </div>
    </div>
    <ViewDown class='ViewDown'></ViewDown>
  </div>
</template>

<style scoped lang='scss'>
.StudentTalk-body {
  width: 100%;
  height: 100%;
  background: rgba(245, 245, 245);

  .ViewDown {
    width: 100%;
    height: 15vh;
    margin-top: 10vh;
  }

  .StudentTalk-main {
    height: 100%;
    width: 70%;
    margin-left: 15%;
    padding-top: 5.5vh;

    .StudentTalk-main-left {
      width: 29%;
      height: 100%;
      float: left;
      background: white;
      border-radius: 0.3vw;
    }

    .StudentTalk-main-right {
      width: 70%;
      height: 100%;
      margin-left: 1%;
      float: left;
      background: white;
      border-radius: 0.3vw;
    }
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