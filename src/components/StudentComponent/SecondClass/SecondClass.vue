<script setup>
import AllRida from '@/components/StudentComponent/SecondClass/Eccharts/AllRida.vue'
import TopRoad from '@/components/StudentComponent/SecondClass/Eccharts/TopRoad.vue'
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import ViewDown from '@/components/StudentComponent/ViewDown.vue'
import { ref } from 'vue'

const ShowS = ref(true)

const ShowSS = () => {
  ShowS.value = true
  const NN = document.getElementById('firstChoose')
  const UU = document.getElementById('secondChoose')
  NN.classList.add('BeChoose')
  UU.classList.remove('BeChoose')
}

const UShowSS = () => {
  ShowS.value = false
  const NN = document.getElementById('firstChoose')
  const UU = document.getElementById('secondChoose')
  NN.classList.remove('BeChoose')
  UU.classList.add('BeChoose')
}

</script>

<template>
  <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
  <div class='SecondClass-body'>
    <div class='SecondClass-top'>
      <div class='Top-left'>
        <img src='/src/assets/p.png' alt=''>
        <div class='ST-right'>
          <div class='name'>姓名：<span>姜大玮</span></div>
          <div class='id'>学号：<span>3223011199</span></div>
          <div class='school'> 学校：<span>安徽信息工程学院</span></div>
          <div class='gard'>学院：<span>计算机与软件工程学院</span></div>
          <div class='class'>班级：<span>软件工程2203班</span></div>
          <div class='grade'>年级：<span>2022</span></div>
        </div>
      </div>
      <div class='Top-right'>
        <div class='leftTitle'>综合评价</div>
        <AllRida class='AllRida'></AllRida>
        <div class='rightTitle'>行为素质</div>
        <TopRoad class='TopRoad'></TopRoad>
      </div>
    </div>
    <div class='SecondClass-center'>
      <div class='Center-box'>
        <div class='box-title'>主修课程</div>
        <div class='ClassCard'>
          <div class='word'>C语言程序设计</div>
        </div>
        <div class='ClassCard'>
          <div class='word'>C语言程序设计</div>
        </div>
        <div class='ClassCard'>
          <div class='word'>C语言程序设计</div>
        </div>
        <div class='ClassCard'>
          <div class='word'>C语言程序设计</div>
        </div>
        <div class='ClassCard'>
          <div class='word'>C语言程序设计</div>
        </div>
      </div>
    </div>
    <div class='SecondClass-down'>
      <div class='down-box-left'>
        <div class='down-box-left-top'>
          <div class='chooseBox'>
            <div class='chooses BeChoose' id='firstChoose' @click='ShowSS'>综合成绩分析</div>
            <div class='chooses' id='secondChoose' @click='UShowSS'>图书借阅分析</div>
          </div>
        </div>

        <div class='first-down-box-left-down' v-if='ShowS'>
          <div class='left-down-left'>

          </div>
          <div class='left-down-center'>

          </div>
          <div class='left-down-right'>

          </div>
        </div>

        <div class='Second-down-box-left-down' v-if='!ShowS'>
          <div class='Second-left-down-left'>

          </div>
          <div class='Second-left-down-right'>

          </div>
        </div>
      </div>
    </div>
  </div>
  <ViewDown class='ViewDown'></ViewDown>
</template>

<style scoped lang='scss'>
.BeChoose {
  color: #0e87ff !important;
  border-bottom: 1px solid #0e87ff !important;
}

.MainTopTitle-out {
  width: 100%;
  height: 5.5% !important;
  background: white;
}

.ViewDown {
  width: 100%;
  height: 10vh !important;
  margin-top: 10vh;
}

.SecondClass-body {
  width: 70%;
  height: 100%;
  margin: auto;

  .SecondClass-top {
    width: 100%;
    height: 36%;
    position: relative;

    .Top-right {
      top: 5%;
      right: 1.5%;
      width: 57.5%;
      height: 90%;
      border-radius: 8px;
      position: absolute;
      background: #fff;
      box-shadow: 0.2px 0.2px 1px 0.2px rgba(114, 112, 112, 0.3);

      .rightTitle {
        position: absolute;
        font-size: 18px;
        top: 4%;
        left: 50.5%;
        font-weight: bold;
        letter-spacing: 1px;
      }

      .leftTitle {
        position: absolute;
        font-size: 18px;
        top: 4%;
        left: 4.5%;
        font-weight: bold;
        letter-spacing: 1px;
      }

      .TopRoad {
        width: 48%;
        height: 110%;
        top: 5%;
        position: absolute;
        z-index: 2;
        right: 0;
      }

      .AllRida {
        width: 52%;
        height: 80%;
        top: 15%;
        position: absolute;
        z-index: 2;
      }
    }

    .Top-left {
      top: 5%;
      left: 1.5%;
      width: 38%;
      height: 90%;
      position: absolute;
      border-radius: 8px;
      background: #fff;
      box-shadow: 0.2px 0.2px 1px 0.2px rgba(114, 112, 112, 0.3);

      img {
        width: 35%;
        height: 82%;
        top: 8%;
        left: 5%;
        position: absolute;
      }

      .ST-right {
        width: 50%;
        height: 90%;
        position: absolute;
        right: 5%;
        top: 4%;
        overflow: hidden;

        div {
          font-size: 16px;
          margin-top: 1.2vh;
          font-weight: bold;
        }
      }
    }


  }

  .SecondClass-center {
    width: 100%;
    height: 6%;
    position: relative;

    .Center-box {
      width: 97%;
      height: 95%;
      border-radius: 8px;
      position: absolute;
      background: #fff;
      box-shadow: 0.2px 0.2px 1px 0.2px rgba(114, 112, 112, 0.3);
      top: 1.5%;
      left: 1.5%;
      overflow: hidden;

      div {
        float: left;
      }

      .ClassCard {
        width: 12%;
        height: 100%;
        text-align: center;
        line-height: 3.7vh;

        .word {
          line-height: 1.5;
          margin-top: 8.5%;
          font-size: 16px;
          color: #004ef6;
          background: rgba(14, 135, 255, 0.2);
        }
      }

      .box-title {
        text-align: center;
        width: 12%;
        height: 100%;
        font-size: 18px;
        font-weight: bold;
        line-height: 4.5vh;
      }
    }
  }

  .SecondClass-down {
    width: 100%;
    height: 58%;
    position: relative;

    .down-box-left {
      width: 97%;
      height: 93.5%;
      top: 3%;
      border-radius: 8px;
      position: absolute;
      background: #fff;
      box-shadow: 0.2px 0.2px 1px 0.2px rgba(114, 112, 112, 0.3);
      left: 1.5%;

      .down-box-left-top {
        width: 100%;
        height: 10%;
        position: relative;

        .chooseBox {
          width: 95%;
          height: 80%;
          position: absolute;
          left: 2.5%;
          top: 20%;
          border-bottom: 1px solid #b9b9b9;

          .chooses:first-child {
            margin-left: 2vw;
          }

          .chooses:hover {
            cursor: pointer;
          }

          .chooses {
            width: 7vw;
            height: 3.6vh;
            float: left;
            color: #727070;
            font-size: 16px;
            text-align: center;
            margin-top: 0.8vh;
            border-bottom: 1px solid #b9b9b9;
          }
        }
      }

      .first-down-box-left-down {
        width: 100%;
        height: 90%;

        div {
          float: left;
        }

        .left-down-left {
          width: 20%;
          height: 100%;
        }

        .left-down-center {
          width: 40%;
          height: 100%;
        }

        .left-down-right {
          width: 40%;
          height: 100%;
        }
      }

      .Second-down-box-left-down {
        width: 100%;
        height: 90%;

        div {
          float: left;
        }

        .Second-left-down-left {
          width: 20%;
          height: 100%;
        }

        .Second-left-down-right {
          width: 40%;
          height: 100%;
        }
      }
    }

  }
}
</style>