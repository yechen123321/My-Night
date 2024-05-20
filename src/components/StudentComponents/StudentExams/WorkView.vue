<script setup>
import { useSharedStore } from '@/stores'
import router from '@/router'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue' // 确保导入了computed函数
const store = useSharedStore()
const sharedRef = computed(() => store.sharedRef)
import axios from 'axios'

const TTT = ref('')

const url = 'http://172.18.7.14:8081/interaction/reply/repair'
// const token = '210a4060295049a9a6f01fd4d50f4b23';
const responseData = ref(null)

let error = ref('')

let info = ref('')

const infos = {
  black_list: [],
  punc: [],
  leader: [],
  org: [],
  pol: [],
  grammar_pc: [],
  order: [],
  idm: [],
  word: [],
  char: [],
  redund: [],
  miss: [],
  dapei: [],
  number: [],
  addr: [],
  name: []
}

const fetchData = async () => {
  try {
    const response = await axios.get(url, {
      params: {
        text: TTT.value
      }
    })
    responseData.value = response.data
    error.value = response.data
    info.value = error.value.data

    // 去掉info中的最前面和最后面两个大括号
    info.value = info.value.replace(/\s/g, '')
    console.log(info.value)
    // 将字符串解析为对象
    try {
      var strings = ''
      strings = info.value.toString()
      console.log(typeof strings)
      var obj = JSON.parse(strings)
      // 更新 infos 对象
      Object.keys(infos).forEach(key => {
        if (obj.hasOwnProperty(key)) {
          infos[key] = obj[key]
        }
      })
      console.log(infos)
    } catch (error) {
      console.error('Error parsing the response data:', error)
    }
  } catch (error) {
    console.error('There has been a problem with your axios operation:', error)
  }
}

const ShowError = ref(false)
const ShowS = ref(false)
const handleClick = () => {
  fetchData()
}

const showEE = () => {
  ShowError.value = true
}

const showSS = () => {
  ShowS.value = true
}

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
    <div class='ExamMain'>
      <div class='ExamLeftList'>
        <div class='top'>
          <div class='top-word'>已做题目数<span> 0/5</span></div>
        </div>
        <div class='QuestionBody'>
          <div class='Questionss'>1</div>
          <div class='Questionss'>2</div>
          <div class='Questionss'>3</div>
          <div class='Questionss'>4</div>
          <div class='Questionss'>5</div>
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
          <div class='title'>翻译题第 <span>1</span> 题</div>
          <div class='TitleWord'>
            Directions: Translate the following paragraphs into English/Chinese.
          </div>
        </div>
        <div class='WorkBody'>
          <div class='QuestionWord'>
            <span style='font-weight:bolder;'>1)····</span>
            China has vast land and a large population. Although Chinese is spoken throughout the country, people in
            different regions have different ways of speaking Chinese, which is called dialects. Dialects are generally
            referred to as local dialects, which are branches of Chinese language in different regions and are only used
            in specific areas. Chinese dialects are very complex, and they have the following three differences:
            pronunciation, vocabulary, and grammar, with the most significant differences in pronunciation. Over 2000
            years ago, Chinese people discovered that they should use the same language when socializing. Compared to
            dialects, Mandarin can be understood by everyone. Mandarin is conducive to information transmission and
            cultural exchange among people of different races and regions.
          </div>
          <div class='TextBox'>
            <textarea v-model='TTT' class='Text' name='' id='' cols='30' rows='10'></textarea>
            <div class='Error' @click='handleClick'>文本纠错</div>
            <div class='show' @click='showEE' style='position: absolute; margin-left: 25%; margin-top: 2vh'>展示</div>
            <div class='ErrorBox' v-if='ShowError'>
              <div class='one'>
                <div class='title'>拼写纠错：</div>
                <div class='in'>
                  <div class='what'><span>{{infos.char[0][1]}}</span> -> <span>{{infos.char[0][2]}}</span></div>
                  <div class='where'>错误位置：<span>第{{ infos.char[0][0]+1 }}个字</span></div>
                </div>
              </div>
              <div class='one'>
                <div class='title'>语法纠错：</div>
              </div>
              <div class='one'>
                <div class='title'>搭配纠错：</div>
              </div>
              <div class='one'>
                <div class='title'>标点纠错：</div>
              </div>
              <div class='one'>
                <div class='title'>成语纠错：</div>
              </div>
              <div class='one'>
                <div class='title'>机构名叫错：</div>
              </div>
              <div class='one'>
                <div class='title'>领导人职务：</div>
              </div>
              <div class='one'>
                <div class='title'>时间格式错误：</div>
              </div>
            </div>
            <div class='S' @click='handleClick'>范文生成</div>
            <div class='show' @click='showSS' style='position: absolute; right: 20%; margin-top: 2vh'>展示</div>
            <div class='show'></div>
            <div v-if='ShowS' class='SBox' style='line-height: 3vh; overflow: auto'>
              中国幅员辽阔，人口众多。虽然全国各地都说汉语，但不同地区的人说汉语的方式不同，这就是方言。方言一般指地方方言，是汉语在不同地区的分支，只在特定地区使用。汉语方言非常复杂，有以下三个差异：发音、词汇和语法，其中发音差异最为显著。2000多年前，中国人发现他们在社交时应该使用相同的语言。与方言相比，普通话人人都能听懂。普通话有利于不同种族和地区的人们之间的信息传递和文化交流。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='WKBody-Main' v-if='0'>
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
              <div class='ToExam' @click=''>开始答题</div>
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
          <div class='button'>我要交卷</div>
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

  .ExamMain {
    width: 100%;
    height: 100%;

    .ExamBody {
      width: 60%;
      height: 85%;
      position: absolute;
      background: white;
      border-radius: 0.3vw;
      margin: -44vh 20%;
      box-shadow: 0 4px 16px 0 rgba(114, 112, 112, 0.5);

      .WorkBody {
        width: 90%;
        margin: auto;
        height: 68vh;
        border-radius: 0.4vw;
        background: rgba(245, 253, 254);

        .TextBox {
          width: 90%;
          height: 40vh;
          margin: 2vh auto;

          .Text {
            width: 100%;
            height: 15vh;
            font-size: 1vw;
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