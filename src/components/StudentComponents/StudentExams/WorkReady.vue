<script setup>
import { useSharedStore } from '@/stores'
import router from '@/router'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue' // 确保导入了computed函数
const store = useSharedStore()
const sharedRef = computed(() => store.sharedRef)
import axios from 'axios'
const GotoExam = () => {
  router.push('/student/exam')
}

const GoBackExam = () => {
  router.push('/student')
}

let error = ref('')

const time1 = new Date()
const workTime = 120 // 单位：分钟
const storedTime2 = localStorage.getItem('endTime')
const time2 = storedTime2 ? new Date(storedTime2) : new Date(time1.getTime() + workTime * 60000)
localStorage.setItem('endTime', time2)
const remainingTime = ref(Math.floor((time2.getTime() - time1.getTime()) / 1000)) // 剩余秒数
let timer


onMounted(() => {
  timer = setInterval(updateRemainingTime, 1000) // 每秒更新一次剩余时间
})

function updateRemainingTime() {
  const now = new Date()
  const timeRemaining = Math.floor((time2.getTime() - now.getTime()) / 1000)

  if (timeRemaining >= 0) {
    remainingTime.value = timeRemaining
  } else {
    clearInterval(timer)
    remainingTime.value = -1
  }
}

const formattedTime = computed(() => {
  if (remainingTime.value >= 0) {
    const hours = Math.floor(remainingTime.value / 3600)
    const minutes = Math.floor((remainingTime.value % 3600) / 60)
    const seconds = remainingTime.value % 60
    return `${padNumber(hours)} : ${padNumber(minutes)} : ${padNumber(seconds)}`
  } else {
    let num = new Date(9999999)
    localStorage.setItem('endTime', num)
  }
})

function padNumber(num) {
  return num.toString().padStart(2, '0')
}

</script>

<template>
  <div class='WKBody'>
    <div class='WKBody-Title'>
      <img src='/src/assets/logo.png' alt=''>
      <div class='WKTime'>
        <div class='times' v-if='remainingTime >= 0'><span>考试剩余时间：</span>{{ formattedTime }}</div>
        <div class='times' v-else>时间已结束</div>
        <div class='shadow'></div>
      </div>
    </div>

    <div class='WKBody-Main'>
      <div class='Main-title'>
        <img src='/src/assets/h.png' alt=''>
        <div class='Title-Word'>试卷目录</div>
        <div class='Right'>
        </div>
      </div>
      <div class='Main'>
        <div class='tip'>
          <div class='title'>注意事项</div>
          <div class='tips'>
            1.本目录页为本场考试的全部题型，你可从任一部分开始作答，进入后需作答完毕，提交该部分答案才可返回目录页，答案提交后无法返回修改。
          </div>
          <div class='tips'>2.做题时禁止跳出页面，只能在考试页面进行作答，跳出三次以上将被强制交卷并视为作弊。</div>
        </div>
        <div class='Question'>
          <div class='Questions'>
            <div class='one'>
              <svg t='1716106396785' class='icon' viewBox='0 0 1024 1024' version='1.1'
                   xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M511.950005 512.049995m-447.956254 0a447.956254 447.956254 0 1 0 895.912508 0 447.956254 447.956254 0 1 0-895.912508 0Z'
                  fill='#20B759' p-id='2633'></path>
                <path
                  d='M458.95518 649.636559L289.271751 479.95313c-11.698858-11.698858-30.697002-11.698858-42.39586 0s-11.698858 30.697002 0 42.395859l169.683429 169.68343c11.698858 11.698858 30.697002 11.698858 42.39586 0 11.798848-11.598867 11.798848-30.597012 0-42.39586z'
                  fill='#FFFFFF' p-id='2634'></path>
                <path
                  d='M777.62406 332.267552c-11.698858-11.698858-30.697002-11.698858-42.39586 0L424.158578 643.437164c-11.698858 11.698858-11.698858 30.697002 0 42.39586s30.697002 11.698858 42.39586 0l311.069622-311.069622c11.798848-11.798848 11.798848-30.796992 0-42.49585z'
                  fill='#FFFFFF' p-id='2635'></path>
              </svg>
              <div class='round'></div>
              <div class='name'>翻译题</div>
            </div>
            <div class='tow'>
              <div class='number'><span>5</span>题</div>
            </div>
            <div class='three'>不计分</div>
            <div class='four'>-</div>
            <div class='five'>
              <div class='ToExam' @click='GotoExam'>开始答题</div>
            </div>
          </div>
          <div class='Questions'>
            <div class='one'>
              <svg t='1716106396785' class='icon' viewBox='0 0 1024 1024' version='1.1'
                   xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M511.950005 512.049995m-447.956254 0a447.956254 447.956254 0 1 0 895.912508 0 447.956254 447.956254 0 1 0-895.912508 0Z'
                  fill='#20B759' p-id='2633'></path>
                <path
                  d='M458.95518 649.636559L289.271751 479.95313c-11.698858-11.698858-30.697002-11.698858-42.39586 0s-11.698858 30.697002 0 42.395859l169.683429 169.68343c11.698858 11.698858 30.697002 11.698858 42.39586 0 11.798848-11.598867 11.798848-30.597012 0-42.39586z'
                  fill='#FFFFFF' p-id='2634'></path>
                <path
                  d='M777.62406 332.267552c-11.698858-11.698858-30.697002-11.698858-42.39586 0L424.158578 643.437164c-11.698858 11.698858-11.698858 30.697002 0 42.39586s30.697002 11.698858 42.39586 0l311.069622-311.069622c11.798848-11.798848 11.798848-30.796992 0-42.49585z'
                  fill='#FFFFFF' p-id='2635'></path>
              </svg>
              <div class='round'></div>
              <div class='name'>口语题</div>
            </div>
            <div class='tow'>
              <div class='number'><span>5</span>题</div>
            </div>
            <div class='three'>不计分</div>
            <div class='four'>-</div>
            <div class='five'>
              <div class='ToExam'>开始答题</div>
            </div>
          </div>
          <div class='Questions'>
            <div class='one'>
              <svg t='1716106396785' class='icon' viewBox='0 0 1024 1024' version='1.1'
                   xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M511.950005 512.049995m-447.956254 0a447.956254 447.956254 0 1 0 895.912508 0 447.956254 447.956254 0 1 0-895.912508 0Z'
                  fill='#20B759' p-id='2633'></path>
                <path
                  d='M458.95518 649.636559L289.271751 479.95313c-11.698858-11.698858-30.697002-11.698858-42.39586 0s-11.698858 30.697002 0 42.395859l169.683429 169.68343c11.698858 11.698858 30.697002 11.698858 42.39586 0 11.798848-11.598867 11.798848-30.597012 0-42.39586z'
                  fill='#FFFFFF' p-id='2634'></path>
                <path
                  d='M777.62406 332.267552c-11.698858-11.698858-30.697002-11.698858-42.39586 0L424.158578 643.437164c-11.698858 11.698858-11.698858 30.697002 0 42.39586s30.697002 11.698858 42.39586 0l311.069622-311.069622c11.798848-11.798848 11.798848-30.796992 0-42.49585z'
                  fill='#FFFFFF' p-id='2635'></path>
              </svg>
              <div class='round'></div>
              <div class='name'>写作题</div>
            </div>
            <div class='tow'>
              <div class='number'><span>5</span>题</div>
            </div>
            <div class='three'>不计分</div>
            <div class='four'>-</div>
            <div class='five'>
              <div class='ToExam'>开始答题</div>
            </div>
          </div>
          <div class='button' @click='GoBackExam'>我要交卷</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.WKBody {
  width: 100%;
  height: 100%;
  background: rgba(246, 248, 251);

  .WKBody-Main {
    width: 60%;
    margin: 3vh auto;
    height: 80vh;
    border-radius: 0.6vw;
    overflow: hidden;
    box-shadow: 0 4px 16px 0 rgba(114, 112, 112, 0.5);

    .Main {
      width: 100%;
      height: 73vh;
      background: white;
      z-index: 2;
      margin-top: 7vh;

      .Question {
        width: 57%;
        height: 55%;
        position: absolute;
        margin: 14.5vh 1.5%;

        .Questions {
          width: 100%;
          height: 5vh;
          background: rgb(173, 168, 168, 0.1);
          margin-top: 1.2vh;

          .one {
            width: 20%;
            height: 5vh;
            position: absolute;

            .name {
              position: absolute;
              margin-left: 32%;
              color: #727070;
              margin-top: 1.2vh;
              font-size: 0.9vw;
            }

            .round {
              position: absolute;
              width: 1.5vw;
              height: 2.9vh;
              border-radius: 50%;
              background: rgba(114, 112, 112, 0.2);
              margin-left: 13%;
              margin-top: 1vh;
            }

            .icon {
              position: absolute;
              width: 1.5vw;
              margin-left: 13%;
              margin-top: 1vh;
            }
          }

          .tow {
            width: 20%;
            height: 5vh;
            margin-left: 20%;
            position: absolute;

            .number {
              height: 5vh;
              font-size: 0.9vw;
              color: #727070;
              line-height: 5vh;
            }
          }

          .three {
            width: 20%;
            height: 5vh;
            margin-left: 40%;
            line-height: 5vh;
            color: #727070;
            font-size: 0.9vw;
            position: absolute;
          }

          .four {
            width: 30%;
            height: 5vh;
            margin-left: 60%;
            position: absolute;
            line-height: 5vh;
            color: #727070;
            font-size: 0.9vw;
          }

          .five {
            width: 10%;
            height: 5vh;
            margin-left: 90%;
            position: absolute;

            .ToExam:hover {
              cursor: pointer;
              font-size: 0.85vw;
            }

            .ToExam {
              width: 80%;
              border-radius: 0.3vw;
              height: 3vh;
              font-size: 0.8vw;
              color: white;
              line-height: 3vh;
              text-align: center;
              margin: 1vh auto;
              background: rgb(2, 176, 119);
            }
          }
        }

        .button:hover {
          background: rgb(2, 176, 119);
          color: white;
          cursor: pointer;
          font-size: 0.85vw;
        }

        .button:active {
          font-size: 0.8vw;
        }

        .button {
          width: 9%;
          height: 3.8vh;
          text-align: center;
          line-height: 3.5vh;
          color: rgb(2, 176, 119);
          font-size: 0.8vw;
          border-radius: 0.4vw;
          border: 1px solid rgb(2, 176, 119);
          background: white;
          margin: 2vh auto;
        }
      }

      .tip {
        width: 57%;
        height: 13vh;
        position: absolute;
        margin: 1vh 1.5%;
        border-radius: 0.4vw;
        background: rgba(255, 237, 209, 0.4);

        .tips {
          width: 94%;
          height: 3vh;
          font-size: 0.8vw;
          color: #727070;
          margin: 1vh auto;
        }

        .title {
          font-size: 1vw;
          margin-left: 3%;
          margin-top: 1vh;
        }
      }
    }

    .Main-title {
      .Right {
        position: absolute;
        width: 20%;
        height: 4vh;
        margin-top: 1.5vh;
        right: 23%;
      }

      .Title-Word {
        position: absolute;
        font-size: 1.3vw;
        color: white;
        margin-top: 1.6vh;
        margin-left: 2%;
      }

      img {
        width: 60%;
        height: 7vh;
        position: absolute;
      }
    }

  }

  .WKBody-Title {
    width: 100%;
    height: 7vh;
    background: white;
    box-shadow: 0 4px 16px 0 rgba(114, 112, 112, 0.2);

    img {
      position: absolute;
      width: 11%;
      margin-left: 4%;
    }

    .WKTime {
      width: 15%;
      height: 5vh;
      margin-top: 1vh;
      position: absolute;
      right: 10%;
      border-radius: 3vw;
      background: rgba(114, 112, 112, 0.1);

      .shadow {
        width: 80%;
        margin: 4.5vh auto;
        height: 0.3vh;
        background: #6aa999;
      }

      .times {
        margin-top: 1.3vh;
        position: absolute;
        width: 100%;
        font-size: 0.9vw;
        text-align: center;
      }
    }
  }
}
</style>