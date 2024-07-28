<script setup>
import router from '@/router'

const Send = () => {
  router.push('/student/exam/workready')
}
const add1 = () => {
  const aa = document.getElementById('aa')
  const bb = document.getElementById('bb')
  const cc = document.getElementById('cc')
  const dd = document.getElementById('dd')

  aa.classList.add('bec')
  bb.classList.remove('bec')
  cc.classList.remove('bec')
  dd.classList.remove('bec')
}
const add2 = () => {
  const aa = document.getElementById('aa')
  const bb = document.getElementById('bb')
  const cc = document.getElementById('cc')
  const dd = document.getElementById('dd')
  aa.classList.remove('bec')
  bb.classList.add('bec')
  cc.classList.remove('bec')
  dd.classList.remove('bec')
}
const add3 = () => {
  const aa = document.getElementById('aa')
  const bb = document.getElementById('bb')
  const cc = document.getElementById('cc')
  const dd = document.getElementById('dd')
  aa.classList.remove('bec')
  bb.classList.remove('bec')
  cc.classList.add('bec')
  dd.classList.remove('bec')
}
const add4 = () => {
  const aa = document.getElementById('aa')
  const bb = document.getElementById('bb')
  const cc = document.getElementById('cc')
  const dd = document.getElementById('dd')
  aa.classList.remove('bec')
  bb.classList.remove('bec')
  cc.classList.remove('bec')
  dd.classList.add('bec')
}
</script>

<template>
  <div class='ExamMain-choose' >
    <div class='ExamLeftList-choose'>
      <div class='top'>
        <div class='top-word'>已做题目数<span> 0/5</span></div>
      </div>
      <div class='QuestionBody'>
        <div class='Questionss' id='beChoose' @click='showQ'>1</div>
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
    <div class='ExamBody-choose'>
      <div class='QuestionTitle-choose'>
        <div class='title'>选择题第 <span>1</span> 题</div>
        <div class='TitleWord'>
          说明：以下选择题有四个选项，请选择正确答案。
        </div>
      </div>
      <div class='WorkBody-choose'>
        <div class='QuestionWord-choose'>
          She ______ (study) for her exams every night this week.
        </div>
        <div class='choose-box'>
          <div id='aa' class='chooses' @click='add1'>
            <div class='letter'>
              <div class='letters'>A</div>
            </div>
            <div class='chooseThing'>is studying</div>
          </div>
          <div id='bb' class='chooses' @click='add2'>
            <div class='letter'>
              <div class='letters'>B</div>
            </div>
            <div class='chooseThing'>studies</div>
          </div>
          <div id='cc' class='chooses' @click='add3'>
            <div class='letter'>
              <div class='letters'>C</div>
            </div>
            <div class='chooseThing'>has been studying</div>
          </div>
          <div id='dd' class='chooses' @click='add4'>
            <div class='letter'>
              <div class='letters'>D</div>
            </div>
            <div class='chooseThing'>will study</div>
          </div>
        </div>
        <div class='down'>
          <div class='next' @click='Send'>提交</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.bec {
  .letters{
    background: #ff8802 !important;
    color: #fff;
    font-weight: bold;
  }
}

.ExamMain-choose {
  width: 100%;
  height: 100%;

  .WorkBody-choose {
    width: 90%;
    margin: -2vh auto;
    height: 68vh;
    border-radius: 0.4vw;
    background: rgba(245, 246, 246, 0.7);

    .QuestionWord-choose {
      width: 90%;
      padding-top: 2vh;
      margin: auto;
      line-height: 3vh;
      font-size: 1.2vw;
      font-weight: bolder;
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
        float: right;
        background: #ff8802;
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

  .ExamBody-choose {

    width: 60%;
    height: 85%;
    position: absolute;
    background: white;
    border-radius: 0.3vw;
    margin: -46vh 20%;
    box-shadow: 0 4px 16px 0 rgba(114, 112, 112, 0.5);

    .QuestionTitle-choose {
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

  .ExamLeftList-choose {
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