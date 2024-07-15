<script setup>
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import ViewDown from '@/components/StudentComponent/ViewDown.vue'
</script>

<template>
  <div class='StudentPersonal-body'>
    <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
    <div class='StudentPersonal-main'>
      <div class='main-left'>
        <div class='main-left-top'>
          <div class='one'>
            <img src='/src/assets/head.png' alt=''>
            <div class='changeHead'>修改头像</div>
          </div>
        </div>

        <div class='main-left-down'>
          <div class='chooseBox'>
            <div class='Chooses ChoosesBe'><span class='left'></span><div>个人信息</div></div>
            <div class='Chooses'>学籍信息</div>
            <div class='Chooses'>培养方案</div>
          </div>
        </div>
      </div>

      <div class='main-right'>
        <router-view></router-view>
      </div>
    </div>
    <ViewDown class='ViewDown'></ViewDown>
  </div>
</template>

<style scoped lang='scss'>

.ChoosesBe {
  color: rgba(253,122,5);
  background: rgba(253,244,216);
  font-weight: bold;
}

.StudentPersonal-body {
  width: 100%;
  height: 100%;

  .StudentPersonal-main {
    height: 100%;
    width: 60%;
    margin: auto;
    padding-top: 8vh;

    .main-left {
      width: 23%;
      height: 80%;
      float: left;
      background: white;
      border-radius: 0.3vw;

      .main-left-down {
        width: 100%;
        height: 50%;
        margin-top: 10%;

        .chooseBox {
          width: 100%;
          height: 80%;

          .Chooses:hover {
            cursor: pointer;
          }

          .Chooses {
            width: 100%;
            height: 5vh;
            line-height: 5vh;
            font-size: 1vw;
            text-align: center;
          }
        }
      }

      .main-left-top {
        width: 100%;
        height: 35%;
        background: url("/src/assets/StudentMainTop/studybg1.png") no-repeat;
        background-size: cover;
        border-radius: 0.3vw;

        .tow {
          width: 100%;
          height: 30%;

          .name {
            margin-top: 0.7vh;
            width: 100%;
            text-align: center;
            font-size: 1.1vw;
            color: white;
          }
        }

        .one {
          width: 100%;
          height: 70%;

          img {
            width: 50%;
            margin-top: 7vh;
            margin-left: 25%;
            border-radius: 50%;
          }

          .changeHead:hover {
            cursor: pointer;
          }

          .changeHead {
            width: 100%;
            color: white;
            font-size: 0.95vw;
            line-height: 5vh;
            text-align: center;
          }
        }
      }
    }

    .main-right {
      width: 74%;
      height: 100%;
      margin-left: 3%;
      float: left;
      background: white;
      border-radius: 0.3vw;
    }
  }

  .ViewDown {
    width: 100%;
    height: 10vh;
    margin-top: 10vh;
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