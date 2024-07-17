<script setup>

</script>

<template>
  <div class='SchoolInfo'>
    <div class='SchoolInfo-top'>
      <div class='word'>学籍信息</div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.SchoolInfo {
  width: 100%;
  height: 100%;

  .SchoolInfo-top {
    width: 100%;
    height: 6vh;
    background: url("/src/assets/StudentInfo/img.png") no-repeat;
    background-size: cover;

    .word {
      font-size: 1.3vw;
      color: white;
      font-weight: bold;
      padding-top: 1.2vh;
      margin-left: 1.5vw;
    }
  }
}
</style>