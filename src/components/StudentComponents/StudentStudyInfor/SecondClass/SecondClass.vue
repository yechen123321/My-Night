<script setup>

</script>

<template>
  <div class='SecondClass-body'>
    <div class='SecondClass-top'>
      <div class='Top-left'></div>
      <div class='Top-right'></div>
    </div>
    <div class='SecondClass-center'>
      <div class='Center-box'></div>
    </div>
    <div class='SecondClass-down'>
      <div class='down-box'>

      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.SecondClass-body {
  width: 100%;
  height: 100%;

  .SecondClass-top {
    width: 100%;
    height: 35%;
    position: relative;

    .Top-left {
      top: 5%;
      left: 1.5%;
      width: 40%;
      height: 90%;
      position: absolute;
      border-radius: 8px;
      background: red;
    }

    .Top-right {
      top: 5%;
      right: 1.5%;
      width: 55.5%;
      height: 90%;
      border-radius: 8px;
      position: absolute;
      background: green;
    }
  }

  .SecondClass-center {
    width: 100%;
    height: 10%;
    position: relative;

    .Center-box {
      width: 97%;
      height: 95%;
      position: absolute;
      top: 1.5%;
      left: 1.5%;
      background: black;
    }
  }

  .SecondClass-down {
    width: 100%;
    height: 55%;
    position: relative;

    .down-box {
      width: 97%;
      height: 93.5%;
      background: red;
      top: 3%;
      position: absolute;
      left: 1.5%;
    }
  }
}
</style>