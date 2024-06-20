<script setup>

</script>

<template>
  <div class='OE'>
    <div class='OE-body'>
      <div class='OE-title'>
        <div class='Title-word'>在线考试</div>
      </div>
      <div class='title-foot'></div>
      <div class='Body-Main'>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
::-webkit-scrollbar {
  display: none;
}

.left-beChoose {
  background: rgba(106, 169, 153, 0.6) !important;
  color: white;
  font-weight: bolder;
  border-radius: 4px;
}

.beChoose {
  color: #6aa999 !important;
  font-weight: bolder;

  .icon {
    path {
      fill: #6aa999 !important;
    }
  }
}

.OE {
  width: 100%;
  height: 100%;

  .OE-body {
    width: 97.5%;
    height: 97%;
    border-radius: 0.5vw;
    margin: 1.3vh auto;
    background: #f8f6f6;

    .Body-Main {
      position: absolute;
      width: 97.5%;
      height: 72vh;
      margin-top: 12.7vh;
      background: red;
    }

    .OE-title {
      position: absolute;
      width: 97.5%;
      height: 9vh;
      border-radius: 0.5vw 0.5vw 0 0;
      background: #6aa999;

      .Title-word {
        font-size: 1.6vw;
        color: white;
        margin-top: 2vh;
        margin-left: 6%;
        font-weight: bolder;
      }
    }

    .title-foot {
      position: absolute;
      width: 97.5%;
      height: 2vh;
      margin-top: 9.7vh;
      border-radius: 0 0 0.5vw 0.5vw;
      background: #6aa999;
    }
  }

}
</style>