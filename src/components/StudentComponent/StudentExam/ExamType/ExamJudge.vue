<script setup>

</script>

<template>
  <div class='ExamMain-judge'>
    <div class='ExamLeftList-judge'>
      <div class='top'>
        <div class='top-word'>已做题目数<span> 0/5</span></div>
      </div>
      <div class='QuestionBody'>
        <div class='Questionss' id='beChoose' @click='showQ'>1</div>
        <div class='Questionss' @click='showQ'>2</div>
        <div class='Questionss' @click='showQ'>3</div>
        <div class='Questionss' @click='showQ'>4</div>
        <div class='Questionss' @click='showQ'>5</div>
      </div>
      <svg t='1716184068983' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M467.05836289 497.11504151a63.64133262 63.64133262 0 0 0 65.13877529 8.98465869 32.94374854 32.94374854 0 0 0 11.23082315-5.98977247l393.82753974-350.40168984A45.67201523 45.67201523 0 0 0 960.46586914 111.52343867a45.67201523 45.67201523 0 0 0-17.2205956-34.44119121 62.14388906 62.14388906 0 0 0-79.36448468 0L511.23293457 394.54018789 158.58508115 77.08224746A62.14388906 62.14388906 0 0 0 79.2205956 75.58480391a42.67712901 42.67712901 0 0 0 0 67.38494062z'
          fill='#707070' p-id='2630'></path>
        <path
          d='M863.88078887 527.81262471L511.23293457 843.77312246 158.58508115 526.31518203a62.14388906 62.14388906 0 0 0-79.36448555 0 42.67712901 42.67712901 0 0 0 0 67.38493975l390.08393174 354.14529697a63.64133262 63.64133262 0 0 0 65.13877529 8.98465869 32.94374854 32.94374854 0 0 0 11.23082403-5.98977246l393.82753886-350.40168896a45.67201523 45.67201523 0 0 0 20.96420362-39.68224277 45.67201523 45.67201523 0 0 0-17.2205956-34.44119122 62.14388906 62.14388906 0 0 0-79.36448468 1.49744268z'
          fill='#707070' p-id='2631'></path>
      </svg>
    </div>
    <div class='ExamBody-judge'>
      <div class='QuestionTitle-judge'>
        <div class='title'>判断题第 <span>1</span> 题</div>
        <div class='TitleWord'>
          说明：请判断以下陈述的对错，并在选择“正确”或“错误”。
        </div>
      </div>
      <div class='WorkBody-judge'>
        <div class='QuestionWord-judge'>
          中华人民共和国公民享有言论、出版、集会、结社、罢工和游行示威的自由。
        </div>
        <div class='choose-box'>
          <div class='chooses'>
            <div class='letter'>
              <div class='letters'>A</div>
            </div>
            <div class='chooseThing'>正确</div>
          </div>
          <div class='chooses'>
            <div class='letter'>
              <div class='letters'>B</div>
            </div>
            <div class='chooseThing'>错误</div>
          </div>
        </div>
        <div class='down'>
          <div class='next'>下一题</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.ExamMain-judge {
  width: 100%;
  height: 100%;

  .WorkBody-judge {
    width: 90%;
    margin: -2vh auto;
    height: 68vh;
    border-radius: 0.4vw;
    background: rgba(245, 253, 254);

    .QuestionWord-judge {
      width: 90%;
      padding-top: 2vh;
      margin: auto;
      line-height: 3vh;
      font-size: 1.2vw;
      word-wrap: break-word;
      word-break: break-all;
    }

    .down {
      width: 90%;
      margin: 2vh auto;

      .next:hover {
        cursor: pointer;
      }

      .next {
        width: 10%;
        height: 4vh;
        color: white;
        border-radius: 3px;
        text-align: center;
        font-size: 1vw;
        line-height: 4vh;
        background: #73c0ae;
      }
    }

    .choose-box {
      width: 90%;
      margin: 2vh auto;

      .chooses:hover {
        cursor: pointer;
      }

      .chooses {
        width: 100%;
        word-wrap: break-word;
        word-break: break-all;
        margin-top: 2.5vh;

        .letter {
          width: 10%;
          vertical-align: top;
          height: 100%;
          display: inline-block;

          .letters {
            width: 50%;
            height: 70%;
            font-size: 1.2vw;
            line-height: 4vh;
            text-align: center;
            background: rgba(240, 240, 240);
            border-radius: 4px;
          }
        }

        .chooseThing {
          max-width: 90%;
          height: 100%;
          display: inline-block;
          font-size: 1.2vw;
        }
      }
    }
  }

  .ExamBody-judge {

    width: 60%;
    height: 85%;
    position: absolute;
    background: white;
    border-radius: 0.3vw;
    margin: -46vh 20%;
    box-shadow: 0 4px 16px 0 rgba(114, 112, 112, 0.5);

    .QuestionTitle-judge {
      width: 90%;
      height: 14%;
      margin: auto;

      .title {
        width: 100%;
        height: 4vh;
        text-align: center;
        font-size: 1.2vw;
        border-bottom: 1px dotted #999; /* 设置边框样式为虚线 */
        margin-top: 2vh;
      }

      .TitleWord {
        margin-top: 2vh;
        font-weight: bolder;
        font-size: 1vw;
      }

    }
  }

  .ExamLeftList-judge {
    width: 15%;
    height: 40%;
    margin-left: 0.5%;
    margin-top: 5%;
    box-shadow: 0 1px 2px 0 #727070;
    border-radius: 0.3vw;
    background: rgb(185, 185, 185, 0.1);

    .icon:hover {
      cursor: pointer;
    }

    .icon {
      width: 1vw;
      bottom: 44.5%;
      left: 13.5%;
      position: absolute;
      transform: rotate(90deg);
    }

    .QuestionBody {
      width: 14%;
      height: 25%;
      margin: 12vh 0;
      position: absolute;

      .Questionss:hover {
        cursor: pointer;
      }

      .Questionss {
        width: 2.5vw;
        font-size: 0.9vw;
        height: 3.7vh;
        border-radius: 0.3vw;
        line-height: 3.7vh;
        text-align: center;
        background: white;
        display: inline-block;
        margin-left: 1vw;
        margin-top: 3vh;
        box-shadow: 0 1px 1px 0 rgba(114, 112, 112, 0.5);
      }
    }

    .top {
      width: 13%;
      height: 10%;
      margin: 2vh 1%;
      border-radius: 0.3vw;
      background: white;
      position: absolute;

      .top-word {
        width: 100%;
        text-align: center;
        font-size: 0.9vw;
        margin-top: 1vh;
        color: #727070;
      }
    }
  }
}
</style>