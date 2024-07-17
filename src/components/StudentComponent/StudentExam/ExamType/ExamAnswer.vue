<script setup>

</script>

<template>
  <div class='ExamMain-answer'>
    <div class='ExamLeftList'>
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
    <div class='ExamBody'>
      <div class='QuestionTitle'>
        <div class='title'>简答题第 <span>1</span> 题</div>
        <div class='TitleWord'>
          说明：请简要给出问题答案
        </div>
      </div>
      <div class='WorkBody'>
        <div class='QuestionWord'>
            <span style='font-size: 1vw'>
              虚拟性是OS的基本特征之一，请问什么是虚拟性？请从虚拟处理机、虚拟内存、虚拟设备等角度谈谈OS的虚拟性是如何体现的。
            </span>
        </div>
        <div class='TextBox'>
          <textarea v-model='TTT' class='Text' name='' id='' cols='30' rows='10'></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.ExamMain-answer {
  width: 100%;
  height: 100%;

  .ExamBody {
    width: 60%;
    height: 85%;
    position: absolute;
    background: white;
    border-radius: 0.3vw;
    margin: -46vh 20%;
    box-shadow: 0 4px 16px 0 rgba(114, 112, 112, 0.5);

    .WorkBody {
      width: 90%;
      margin: -2vh auto;
      height: 68vh;
      border-radius: 0.4vw;
      background: rgba(245, 253, 254);

      .TextBox {
        width: 90%;
        margin: 1vh auto;
        .Text {
          width: 100%;
          font-size: 1vw;
          height: 45vh;
        }

        .SBox {
          width: 40%;
          height: 20vh;
          margin-top: 5.5vh;
          border-radius: 0.3vw;
          box-shadow: 0 1px 1px 0 #727070;
          border: 1px solid #727070;
          right: 8%;
          position: absolute;
        }

        .S:hover {
          cursor: pointer;
        }

        .show:hover {
          cursor: pointer;
        }

        .S {
          position: absolute;
          width: 5vw;
          height: 4vh;
          color: white;
          margin-top: 0.5vh;
          right: 24%;
          border-radius: 0.4vw;
          text-align: center;
          line-height: 4vh;
          font-size: 0.9vw;
          font-weight: bolder;
          background: rgba(106, 169, 153, 0.7);
        }

        .Error:hover {
          cursor: pointer;
        }

        .ErrorBox {
          width: 40%;
          height: 20vh;
          border: 1px solid #727070;
          box-shadow: 0 1px 1px 0 #727070;
          margin-top: 5.5vh;
          position: absolute;
          overflow: auto;

          .one {
            margin-left: 1vw;
            margin-top: 1vh;

            .in {
              margin-top: 0.5vh;
              margin-left: 1vw;
            }
          }
        }

        .Error {
          position: absolute;
          width: 5vw;
          height: 4vh;
          color: white;
          margin-top: 0.5vh;
          margin-left: 15%;
          border-radius: 0.4vw;
          text-align: center;
          line-height: 4vh;
          font-size: 0.9vw;
          font-weight: bolder;
          background: rgba(106, 169, 153, 0.7);

        }
      }

      .QuestionWord {
        width: 90%;
        padding-top: 2vh;
        margin: auto;
        line-height: 3vh;
      }
    }

    .QuestionTitle {
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

  .ExamLeftList {
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