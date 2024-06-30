<script setup>
// StudentHome //
import StudentHomeView from '@/components/StudentComponents/StudentHome/StudentHomeView.vue'
import StudentHomeRightTop from '@/components/StudentComponents/StudentHome/StudentHomeRightTop.vue'
import StudentHomeRightDown from '@/components/StudentComponents/StudentHome/StudentHomeRightDown.vue'
import StudentHomeRightCenter from '@/components/StudentComponents/StudentHome/StudentHomeRightCenter.vue'
// \StudentHome //

// StudentPersonal //

/// BaseInfor ///
import BaseInforHomeView from '@/components/StudentComponents/StudentPersonal/BaseInfor/BaseInforHomeView.vue'
/// \BaseInfor ///

/// SemesterSchedule ///
import SemesterScheduleHomeView
  from '@/components/StudentComponents/StudentPersonal/SemesterSchedule/SemesterScheduleHomeView.vue'

/// \SemesterSchedule ///

/// StatusInfor ///
/// \StatusInfor ///

/// SystemInfor ///
/// \SystemInfor ///

/// TraningPlan ///
import TraningPlan from '@/components/StudentComponents/StudentPersonal/TraningPlan/TraningPlan.vue'
/// \TraningPlan ///

// \StudentPersonal //

// StudentClass //

/// SelfStudy ///
import SelfStudy from '@/components/StudentComponents/StudentClass/SelfStudy/SelfStudy.vue'
/// \SelfStudy ///

/// LearnCenter ///
import LearnCenterHomeView from '@/components/StudentComponents/StudentClass/LearnCenter/LearnCenterHomeView.vue'
/// \LearnCenter ///

/// ProfessionalTree ///
/// \ProfessionalTree ///

/// ScheduleQuery ///
/// \ScheduleQuery ///

/// StudyInfo ///
import StudyInfo from '@/components/StudentComponents/StudentClass/StudyInfo/StudyInfo.vue'
/// \StudyInfo ///

// \StudentClass //

// StudentCourses //

/// CourseCenter ///
/// \CourseCenter ///

/// CourseForum ///
/// \CourseForum ///

/// CourseWork ///
import CourseWorks from '@/components/StudentComponents/StudentCourses/CourseWork/CourseWorks.vue'
/// \CourseWork ///

/// OnlineClass ///
import OnlineClass from '@/components/StudentComponents/StudentCourses/OnlineClass/OnlineClass.vue'
/// \OnlineClass ///

/// VirtualClass ///
/// \VirtualClass ///

// \StudentCourses //

// StudentStudyInfor //

/// ComprehensiveQuality ///
/// \ComprehensiveQuality ///

/// GradeInfor ///
import GradeInfor from '@/components/StudentComponents/StudentStudyInfor/GradeInfor/GradeInfor.vue'
/// \GradeInfor ///

/// PatentSituation ///
/// \PatentSituation ///

/// PersonalPlan ///
/// \PersonalPlan ///

/// SecondClass ///
import SecondClass from '@/components/StudentComponents/StudentStudyInfor/SecondClass/SecondClass.vue'
/// \SecondClass ///

// \StudentStudyInfor //

// StudentExams //

/// AutoPractice ///
import AutoPractice from '@/components/StudentComponents/StudentExams/AutoPractice/AutoPractice.vue'
/// \AutoPractice ///

/// ExamArrange ///
/// \ExamArrange ///

/// ExamScores ///
/// \ExamScores ///

/// OnlineExam ///
import OnlineExam from '@/components/StudentComponents/StudentExams/OnlineExam/OnlineExam.vue'
/// \OnlineExam ///

/// QuestionBank ///
import QuestionBank from '@/components/StudentComponents/StudentExams/QuestionBank/QuestionBank.vue'
/// \QuestionBank ///

// \StudentExams //

// StudentBusiness //

/// CreditApplication ///
/// \CreditApplication ///

/// InforFeedback ///
/// \InforFeedback ///

/// LeaveApplication ///
/// \LeaveApplication ///

/// ModifyApplication ///
/// \ModifyApplication ///

/// RaceRegistration ///
/// \RaceRegistration ///

// \StudentBusiness //
import { ref, onBeforeMount, watch, onMounted } from 'vue'
import emitter from '@/plugins/Bus'
import { imageProps } from 'element-plus'
// 定义 BeChoose 为一个对象，以便使用动态属性
const BeChoose = {
  BeChoose00: ref(true),
  BeChoose01: ref(false),
  BeChoose02: ref(false),
  BeChoose03: ref(false),
  BeChoose04: ref(false),
  BeChoose05: ref(false),

  BeChoose11: ref(false),
  BeChoose12: ref(false),
  BeChoose13: ref(false),
  BeChoose14: ref(false),
  BeChoose15: ref(false),

  BeChoose21: ref(false),
  BeChoose22: ref(false),
  BeChoose23: ref(false),
  BeChoose24: ref(false),
  BeChoose25: ref(false),

  BeChoose31: ref(false),
  BeChoose32: ref(false),
  BeChoose33: ref(false),
  BeChoose34: ref(false),
  BeChoose35: ref(false),

  BeChoose41: ref(false),
  BeChoose42: ref(false),
  BeChoose43: ref(false),
  BeChoose44: ref(false),
  BeChoose45: ref(false),

  BeChoose51: ref(false),
  BeChoose52: ref(false),
  BeChoose53: ref(false),
  BeChoose54: ref(false),
  BeChoose55: ref(false),

  BeChoose61: ref(false),
  BeChoose62: ref(false),
  BeChoose63: ref(false),
  BeChoose64: ref(false),
  BeChoose65: ref(false)
}

const num = ref('')

onBeforeMount(() => {
  emitter.on('fn1', (e) => {
    if (e && typeof e === 'object') {
      num.value = e.value // 检查 e 是否是一个对象，确保正确赋值
      localStorage.setItem('BeChoose', num.value)
    }
    // 使用localStorage.getItem来获取之前保存的值
    if (num.value) {
      // 初始化 BeChoose 对象的值
      updateBeChooseValues(num.value)
    }
  })
  // emitter.on('Working', (e) => {
  //   emitter.emit('ToWork', e)
  // })
})

// 监听 s.value 的变化，确保与 BeChoose 同步
watch(num, (newValue) => {
  updateBeChooseValues(newValue)
})

// 更新 BeChoose 对象的值
function updateBeChooseValues(value) {
  for (const key in BeChoose) {
    BeChoose[key].value = key === 'BeChoose' + value
  }
}

onMounted(() => {
  const Be = localStorage.getItem('BeChoose')
  updateBeChooseValues(Be)
})

const SpeakShows = ref(false)

const Chatsshow = ref(false)

const showChats = () => {
  Chatsshow.value = true
}

const ShowSpeak = () => {
  SpeakShows.value = true
}

const CloseSpeak = () => {
  SpeakShows.value = false
}

import { QuestionGo } from '@/api/Student' // 引入新的函数
import { onUpdated } from 'vue'
import axios from 'axios'

import '/src/voice-utils/utilJS/crypto-js.js' //鉴权的引用地址
import '/src/voice-utils/utilJS/index.umd.js' // 调用Web Speech API 的依赖，应该是官方的写的工具类
const btnText = ref('开始录音')
const btnStatus = ref('UNDEFINED') // "UNDEFINED" "CONNECTING" "OPEN" "CLOSING" "CLOSED"
const recorder = new RecorderManager('/src/voice-utils/dist')
const APPID = '4d432e1b' // 这里填写从科大讯飞获取的appid
const API_SECRET = 'YTA0M2EwNDgyNGY3Y2Y3MGVkOTFlNDRj'
const API_KEY = '4eeea1063b2f6ba480124c1cbe24641a'
let iatWS //监听录音的变量
let resultText = ref('') // 识别结果
let resultTexts = ref('') // 识别结果
let resultTextTemp = ref('')
let countdownInterval

// 生成 WebSocket URL 生成规则由平台决定
function getWebSocketUrl() {
  // 请求地址根据语种不同变化
  var url = 'wss://iat-api.xfyun.cn/v2/iat'
  var host = 'iat-api.xfyun.cn'
  var apiKey = API_KEY
  var apiSecret = API_SECRET
  var date = new Date().toGMTString()
  var algorithm = 'hmac-sha256'
  var headers = 'host date request-line'
  var signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2/iat HTTP/1.1`
  var signatureSha = CryptoJS.HmacSHA256(signatureOrigin, apiSecret)
  var signature = CryptoJS.enc.Base64.stringify(signatureSha)
  var authorizationOrigin = `api_key="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`
  var authorization = btoa(authorizationOrigin)
  url = `${url}?authorization=${authorization}&date=${date}&host=${host}`
  return url
}

// 加密工具函数
function toBase64(buffer) {
  var binary = ''
  var bytes = new Uint8Array(buffer)
  var len = bytes.byteLength
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}

// 计数函数
function countdown() {
  let seconds = 60
  btnText.value = `录音中（${seconds}s）`
  countdownInterval = setInterval(() => {
    seconds = seconds - 1
    if (seconds <= 0) {
      clearInterval(countdownInterval)
      recorder.stop()
    } else {
      btnText.value = `录音中（${seconds}s）`
    }
  }, 1000)
}

// 录音状态变化函数
function changeStatus(status) {
  btnStatus.value = status
  if (status === 'CONNECTING') {
    btnText.value = '建立连接中'
    resultText.value = ''
    resultTextTemp.value = ''
  } else if (status === 'OPEN') {
    countdown()
  } else if (status === 'CLOSED') {
    btnText.value = '开始录音'
  }
}

// 结果解析函数
function renderResult(resultData) {
  // 识别结束
  let jsonData = JSON.parse(resultData)
  if (jsonData.data && jsonData.data.result) {
    let data = jsonData.data.result
    let str = ''
    let ws = data.ws
    for (let i = 0; i < ws.length; i++) {
      str = str + ws[i].cw[0].w
    }
    // 开启wpgs会有此字段(前提：在控制台开通动态修正功能)
    // 取值为 "apd"时表示该片结果是追加到前面的最终结果；取值为"rpl" 时表示替换前面的部分结果，替换范围为rg字段
    if (data.pgs) {
      if (data.pgs === 'apd') {
        // 将resultTextTemp同步给resultText
        resultText.value = resultTextTemp.value
      }
      // 将结果存储在resultTextTemp中
      resultTextTemp.value = resultText.value + str
    } else {
      resultText.value = resultText.value + str
    }
  }
  resultTexts.value += resultText.value
  if (jsonData.code === 0 && jsonData.data.status === 2) {
    iatWS.close()
  }
  if (jsonData.code !== 0) {
    iatWS.close()
    console.error(jsonData)
  }
}

// 连接 WebSocket
function connectWebSocket() {
  const websocketUrl = getWebSocketUrl()
  if ('WebSocket' in window) {
    iatWS = new WebSocket(websocketUrl)
  } else if ('MozWebSocket' in window) {
    iatWS = new MozWebSocket(websocketUrl)
  } else {
    alert('浏览器不支持WebSocket')
    return
  }
  changeStatus('CONNECTING')
  iatWS.onopen = (e) => {
    // 开始录音
    recorder.start({
      sampleRate: 16000,
      frameSize: 1280
    })
    var params = {
      common: {
        app_id: APPID
      },
      business: {
        language: 'zh_cn',
        domain: 'iat',
        accent: 'mandarin',
        vad_eos: 5000,
        dwa: 'wpgs'
      },
      data: {
        status: 0,
        format: 'audio/L16;rate=16000',
        encoding: 'raw'
      }
    }
    iatWS.send(JSON.stringify(params))
  }
  iatWS.onmessage = (e) => {
    renderResult(e.data)
  }
  iatWS.onerror = (e) => {
    console.error(e)
    recorder.stop()
    changeStatus('CLOSED')
  }
  // iatWS.onclose = (e) => {
  //   recorder.stop();
  //   changeStatus("CLOSED");
  // };
}

// 定义监听开始的函数
recorder.onStart = () => {
  changeStatus('OPEN')
}
// 处理回调的结果
recorder.onFrameRecorded = ({ isLastFrame, frameBuffer }) => {
  if (iatWS.readyState === iatWS.OPEN) {
    iatWS.send(
      JSON.stringify({
        data: {
          status: isLastFrame ? 2 : 1,
          format: 'audio/L16;rate=16000',
          encoding: 'raw',
          audio: toBase64(frameBuffer)
        }
      })
    )
    if (isLastFrame) {
      changeStatus('CLOSING')
    }
  }
}
// 停止录音的处理
recorder.onStop = () => {
  clearInterval(countdownInterval)
}
// 按钮点击的启动 | 结束函数
const startRecording = () => {
  if (btnStatus.value === 'UNDEFINED' || btnStatus.value === 'CLOSED') {
    connectWebSocket()
  } else if (btnStatus.value === 'CONNECTING' || btnStatus.value === 'OPEN') {
    // 结束录音
    recorder.stop()
    changeStatus('CLOSED')
  }
}

///////////////////////////////////////////////////////////
const responseData = ref([])
const centerDialogVisible = ref(false)
const submitQuestion = async () => {
  const questions = ref('')
  questions.value = resultTexts.value
  resultTexts.value = ''
  console.log(questions.value)
  axios.post('http://47.121.186.98:8084/question', {
    id: '2',
    name: '朱耿键',
    question: questions.value
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(async function(response) {
      console.log('成功', response.data)
      await fetchData()
      // 在这里处理成功后的逻辑
    })
    .catch(function(error) {
      console.error('失败', error)
      // 在这里处理失败后的逻辑
    })
}


const fetchData = async () => {
  try {
    const response = await axios.post('http://47.121.186.98:8084/question/select', { id: '2' })
    responseData.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchData()

const messageContainer = ref(null)

// 在组件挂载后和更新后滚动到底部
onMounted(scrollToBottom)
onUpdated(scrollToBottom)

function scrollToBottom() {
  if (messageContainer.value) {
    // 使用 $nextTick 确保 DOM 更新完成后再滚动
    setTimeout(() => {
      // 滚动到底部
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight
    })
  }
}

</script>

<template>

  <div class='Mainbody'>
    <el-dialog v-model='centerDialogVisible' destroy-on-close center class='read'>
      <div class='title'>语音转写</div>
      <div class='reading' @click='startRecording()'>
        <svg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M704 192v368c0 52.8-21.6 100.8-56.4 135.6S564.8 752 512 752c-105.6 0-192-86.4-192-192V192C320 86.4 406.4 0 512 0s192 86.4 192 192z'
            fill='#707070'
          ></path>
          <path
            d='M816 496v144c0 2.8-0.4 5.6-1.1 8.4-18.5 68.2-58.9 126.1-112.3 166.9-43.5 33.2-95.6 55.2-151.6 62.2-4 0.5-7 3.9-7 7.9V944c0 8.8 7.2 16 16 16h80c35.3 0 64 28.7 64 64H320c0-35.3 28.7-64 64-64h80c8.8 0 16-7.2 16-16v-58.5c0-4-3-7.4-7-7.9-124.8-15.7-230.3-105.5-263.9-229.2-0.7-2.7-1.1-5.6-1.1-8.4V496.7c0-17.4 13.7-32.2 31.1-32.7 18.1-0.5 32.9 14 32.9 32v129.8c0 6.9 1.1 13.8 3.3 20.3C309.3 746.9 404.6 816 512 816s202.7-69.1 236.7-169.9c2.2-6.5 3.3-13.4 3.3-20.3V496.7c0-17.4 13.7-32.2 31.1-32.7 18.1-0.5 32.9 14 32.9 32z'
            fill='#707070'
          ></path>
        </svg>
      </div>
      <div
        style='
          margin: -3vh auto;
          width: 20vw;
          height: 10vh;
          text-align: center;
          font-size: 1vw;
          font-weight: bolder;
        '
      >
        {{ btnText }}
      </div>
      <div class='readWhat'>{{ resultTexts }}</div>
    </el-dialog>
    <div class='left' v-if='!SpeakShows'>
      <StudentHomeView v-if="BeChoose['BeChoose00'].value" class='left-out'></StudentHomeView>

      <BaseInforHomeView v-if="BeChoose['BeChoose11'].value" class='left-out'></BaseInforHomeView>
      <TraningPlan v-if="BeChoose['BeChoose13'].value" class='left-out'></TraningPlan>
      <SemesterScheduleHomeView
        v-if="BeChoose['BeChoose15'].value"
        class='left-out'
      ></SemesterScheduleHomeView>

      <LearnCenterHomeView
        v-if="BeChoose['BeChoose21'].value"
        class='left-out'
      ></LearnCenterHomeView>
      <SelfStudy v-if="BeChoose['BeChoose22'].value" class='left-out'></SelfStudy>
      <StudyInfo v-if="BeChoose['BeChoose23'].value" class='left-out'></StudyInfo>
      <OnlineClass v-if="BeChoose['BeChoose31'].value" class='left-out'></OnlineClass>
      <CourseWorks v-if="BeChoose['BeChoose33'].value" class='left-out'></CourseWorks>

      <GradeInfor v-if="BeChoose['BeChoose41'].value" class='left-out'></GradeInfor>
      <SecondClass v-if="BeChoose['BeChoose43'].value" class='left-out'></SecondClass>

      <AutoPractice v-if="BeChoose['BeChoose51'].value" class='left-out'></AutoPractice>

      <OnlineExam v-if="BeChoose['BeChoose53'].value" class='left-out'></OnlineExam>
      <QuestionBank v-if="BeChoose['BeChoose55'].value" class='left-out'></QuestionBank>
    </div>
    <div class='right' v-if='!SpeakShows'>
      <div class='Top'>
        <StudentHomeRightTop class='Top-out'></StudentHomeRightTop>
      </div>
      <div class='Center'>
        <StudentHomeRightCenter class='Down-out'></StudentHomeRightCenter>
      </div>
      <div class='Down'>
        <svg @click='ShowSpeak' t='1716197668890' class='icon' viewBox='0 0 1024 1024' version='1.1'
             xmlns='http://www.w3.org/2000/svg' p-id='2635' width='200' height='200'>
          <path
            d='M470.624 553.376a32 32 0 0 1 2.656 42.24l-2.656 3.008L269.28 800l145.984 0.032a32 32 0 0 1 31.776 28.256l0.224 3.744a32 32 0 0 1-28.288 31.776l-3.712 0.224H192l-2.4-0.096-4.032-0.544-3.552-0.96-3.552-1.408-3.136-1.664-3.072-2.144-2.88-2.56a32.32 32.32 0 0 1-3.104-3.584l-2.272-3.52-1.728-3.648-1.12-3.36-0.96-4.8L160 832v-224.128a32 32 0 0 1 63.776-3.712l0.224 3.712-0.032 146.848 201.408-201.344a32 32 0 0 1 45.248 0zM608.736 160H832l2.4 0.096 4.032 0.544 3.552 0.96 3.552 1.408 3.136 1.664 3.072 2.144 2.88 2.56c1.152 1.12 2.176 2.336 3.104 3.584l2.272 3.52 1.728 3.648 1.12 3.36 0.96 4.8L864 192v224.128a32 32 0 0 1-63.776 3.712L800 416.128v-146.88l-201.376 201.376a32 32 0 0 1-47.904-42.24l2.656-3.008L754.688 224h-145.92a32 32 0 0 1-31.808-28.256L576.736 192a32 32 0 0 1 28.288-31.776L608.736 160z'
            fill='#707070' p-id='2636'></path>
        </svg>
        <StudentHomeRightDown class='Center-out'></StudentHomeRightDown>
      </div>
    </div>
    <div class='SpeakView' v-if='SpeakShows'>
      <div class='left'>
        <svg t='1716205134832' @click='CloseSpeak' class='out' viewBox='0 0 1024 1024' version='1.1'
             xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0 192v640c0 70.7 57.3 128 128 128h352c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h352c17.7 0 32-14.3 32-32s-14.3-32-32-32H128C57.3 64 0 121.3 0 192z'
            p-id='2630'></path>
          <path
            d='M1013.3 488.3L650.9 160.7c-41.2-37.2-106.9-8-106.9 47.5V339c0 4.4-3.6 8-8 8H224c-17.7 0-32 14.3-32 32v266c0 17.7 14.3 32 32 32h312c4.4 0 8 3.6 8 8v130.9c0 55.5 65.8 84.7 106.9 47.5l362.4-327.6c14.1-12.8 14.1-34.8 0-47.5zM256 597V427c0-8.8 7.2-16 16-16h304c17.7 0 32-14.3 32-32V244.9c0-13.9 16.4-21.2 26.7-11.9L938 506.1c3.5 3.2 3.5 8.7 0 11.9L634.7 791c-10.3 9.3-26.7 2-26.7-11.9V645c0-17.7-14.3-32-32-32H272c-8.8 0-16-7.2-16-16z'
            p-id='2631'></path>
        </svg>
        <div class='Top'>
          <img src='/src/assets/speak.png' alt=''>
        </div>
        <div class='talkList'>
          <div class='ListTitle'>
            <svg t='1716200291080' class='icon' viewBox='0 0 1879 1024' version='1.1'
                 xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1030.954913 474.265896c-26.043931 0-47.352601 21.160694-47.352601 47.352601s21.308671 47.352601 47.352601 47.352601 47.352601-21.308671 47.352601-47.352601-21.160694-47.352601-47.352601-47.352601zM1452.54104 109.946821c0-36.402312-29.595376-65.997688-65.997687-65.997688H675.514451c-36.402312 0-65.997688 29.595376-65.997688 65.997688V176.092486h57.267052V101.216185H1395.421965v466.571098h-74.8763v57.267052H1386.543353c36.402312 0 65.997688-29.595376 65.997687-65.997688V109.946821zM843.912139 474.265896c-26.043931 0-47.352601 21.160694-47.352601 47.352601s21.308671 47.352601 47.352601 47.352601 47.352601-21.308671 47.352601-47.352601-21.308671-47.352601-47.352601-47.352601z'
                fill='#707070' p-id='2854'></path>
              <path
                d='M1265.498266 297.137572c0-36.402312-29.595376-65.997688-65.997688-65.997688H488.323699c-36.402312 0-65.997688 29.595376-65.997687 65.997688v449.109827c0 36.402312 29.595376 65.997688 65.997687 65.997688h83.606937V987.00578l174.760693-174.760693h452.661272c36.402312 0 65.997688-29.595376 65.997688-65.997688V297.137572h0.147977zM1204.531792 751.278613H721.387283l-88.490173 88.490173v-88.490173H483.144509V291.958382H1204.531792v459.320231z'
                fill='#707070' p-id='2855'></path>
              <path
                d='M656.721387 474.265896c-26.043931 0-47.352601 21.160694-47.352601 47.352601s21.308671 47.352601 47.352601 47.352601 47.352601-21.308671 47.352601-47.352601-21.160694-47.352601-47.352601-47.352601z'
                fill='#707070' p-id='2856'></path>
            </svg>
            <div class='word'>对话列表</div>
            <svg t='1716200649029' class='icos' viewBox='0 0 1024 1024' version='1.1'
                 xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M511.9 819c-21.7 0-43.4-8.3-59.9-24.8-33.1-33.1-33.1-86.7 0-119.8l363.5-344.7c33.1-33.1 86.7-33.1 119.8 0s33.1 86.7 0 119.8L571.7 794.2c-16.5 16.6-38.2 24.8-59.8 24.8z'
                fill='#666666' p-id='2608'></path>
              <path
                d='M512.1 819c21.7 0 43.4-8.3 59.9-24.8 33.1-33.1 33.1-86.7 0-119.8L208.5 329.8c-33.1-33.1-86.7-33.1-119.8 0s-33.1 86.7 0 119.8l363.5 344.7c16.6 16.5 38.3 24.7 59.9 24.7z'
                fill='#666666' p-id='2609'></path>
            </svg>
          </div>
          <div class='ChatList' id='beChoose'>
            <div class='one'>默</div>
            <div class='tow'>
              <div class='top'>默认对话</div>
              <div class='down'>Request URL: http://172.18.7.14:8081/interaction/reply/repair?text=你</div>
            </div>
          </div>
          <div v-if='Chatsshow' class='ChatList'>
            <div class='one'>N</div>
            <div class='tow'>
              <div class='top'>New</div>
              <div class='down'>新对话</div>
            </div>
          </div>
          <div class='tools'>
            <div @click='showChats' class='New'><span style='font-weight: bolder;; font-size: 1.3vw'>+</span> 新建对话
            </div>
          </div>

        </div>
      </div>
      <div class='right'>
        <ul class='chatlist' ref='messageContainer'>
          <li v-for='(item, index) in responseData' :key='index'>
            <div class='ddd question'>{{ item.question }}</div>
            <div class='ddd answer'>{{ item.answer }}</div>
          </li>
        </ul>
        <div class='inputs'>
          <div class='Sing' @click='centerDialogVisible = true'
               id='btn_control'>
            <svg t='1716203833084' class='icon' viewBox='0 0 1024 1024' version='1.1'
                 xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M512 53.333333a202.666667 202.666667 0 0 1 202.666667 202.666667v181.333333h106.666666a21.333333 21.333333 0 0 1 21.333334 21.333334V554.666667c0 171.818667-131.050667 313.045333-298.666667 329.130666V949.333333a32 32 0 0 1-64 0v-65.536c-167.594667-16.085333-298.666667-157.312-298.666667-329.130666v-96a21.333333 21.333333 0 0 1 21.333334-21.333334h106.666666V256A202.666667 202.666667 0 0 1 512 53.333333z m-202.666667 448h-64V554.666667c0 147.285333 119.381333 266.666667 266.666667 266.666666S778.666667 701.952 778.666667 554.666667v-53.333334h-64V554.666667a202.666667 202.666667 0 0 1-405.333334 0v-53.333334z m202.666667-384a138.666667 138.666667 0 0 0-138.581333 133.696L373.333333 256h42.666667a32 32 0 0 1 0 64h-42.666667v64h42.666667a32 32 0 0 1 0 64h-42.666667v64h42.666667a32 32 0 0 1 0 64h-41.024a138.709333 138.709333 0 0 0 274.048 0H608a32 32 0 0 1 0-64h42.666667v-64h-42.666667a32 32 0 0 1 0-64h42.666667v-64h-42.666667a32 32 0 0 1 0-64h42.666667A138.666667 138.666667 0 0 0 512 117.333333z'
                fill='#707070' p-id='2746'></path>
            </svg>
          </div>
          <div class='one'>
            <svg t='1716202922835' class='icon' viewBox='0 0 1024 1024' version='1.1'
                 xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M923.00956367 369.5144583L766.92970039 290.19461592l87.41440899-173.27217129A32.48204589 32.48204589 0 0 0 854.62084707 71.81425742 32.68959873 32.68959873 0 0 0 809.30510615 71.08782207l-96.78888721 191.53683545-134.56353427-68.07738692c-14.42493457-7.26435527-27.98506406-10.9311249-40.2652837-10.9311249-22.24276435 0-36.73688291 11.62296826-42.99806513 22.62327803l-1.1415419 2.21389893C394.61419268 426.52235146 109.05584258 546.66095205 106.08091631 547.90626992c-12.45318047 5.50015488-21.23959131 15.25514589-24.76799209 27.43158955-5.7768917 19.95968145 5.1542332 37.80923994 7.40272412 41.19927275l3.49380879 5.25800919 521.4769374 322.95248349c18.33384903 11.27704658 33.96950947 16.77720146 47.7371918 16.77720146 13.14502383 0 21.2741833-5.05045635 25.04473067-8.19834345l1.45287069-1.27990986c188.56190918-179.60253838 249.27116484-443.64455859 255.22101827-504.5267751 5.05045635-52.23417451-10.30846641-71.19068203-20.13264229-78.00533965z m-37.32494942 72.29763193c-0.03459199 0.41510566-5.91526055 44.41634385-26.18627167 110.59116152-94.19447461-46.28432109-309.32316914-170.36642901-379.89119268-211.32355605a548.1820916 548.1820916 0 0 0 61.91998154-98.76064043c2.35226777 0.58806651 5.84607656 1.79879238 10.58520323 4.15106015 29.78385732 15.01300107 254.04488437 128.61368174 322.19145615 163.13666573l11.2078626 5.67311572c0.79562021 4.32402099 1.52205557 12.55695732 0.17296084 26.53219336z m-262.69292636 294.13720724a32.51663789 32.51663789 0 0 0 0.72643536-45.59247862 32.68959873 32.68959873 0 0 0-45.31574093-0.72643536l-100.14432714 97.54991456a28.36557773 28.36557773 0 0 0-3.11329512 3.56299365l-152.44768564-94.40202744L425.19366934 626.08457041a32.41286191 32.41286191 0 0 0 8.44048915-44.79685752 32.03234825 32.03234825 0 0 0-44.5201207-8.47508115l-115.22651308 78.97391982a31.30591201 31.30591201 0 0 0-8.61345 8.95937168l-112.9434293-69.91077217c56.93870917-26.56678536 185.48320693-94.26365859 288.91379004-204.95859696 72.78192247 42.34081377 301.81666904 174.72504199 399.47035957 221.87416727-30.64866153 82.05262295-87.17226416 198.35149307-184.20329619 294.10261524a86.68797363 86.68797363 0 0 1-12.62614131-6.60710391l-112.77046846-69.84158818 91.87679883-89.45534707z'
                p-id='2631' fill='#707070'></path>
            </svg>
          </div>
          <input id='result' ref='resultDiv' v-model='resultTexts' @keyup.enter='submitQuestion' class='input' />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
#beChoose {
  .one {
    background: rgba(114, 112, 112, 0.18);
  }

  .tow {
    .top {
      color: rgba(82, 65, 255);
    }

    .down {
      color: rgba(82, 65, 255);
    }
  }
}

.Mainbody {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .read {
    .title {
      width: 40%;
      margin: -2vh auto;
      font-weight: bolder;
      text-align: center;
      font-size: 1.3vw;
    }

    .readWhat {
      white-space: pre-wrap;
      width: 30vw;
      font-weight: bolder;
      font-size: 1vw;
      margin: auto;
      text-align: center;
    }

    .reading {
      width: 37%;
      height: 35vh;
      margin: 5vh auto;
      border-radius: 50%;
      background: rgba(0, 157, 255, 0.7);
      transition: background 0.5s ease; /* 定义背景颜色过渡效果 */
      .icon {
        width: 10vw;
        margin: 8vh 4vw;

        path {
          fill: white;
        }
      }
    }

    .reading:hover {
      cursor: pointer;
      background: rgba(0, 157, 255);
    }
  }

  .SpeakView {
    width: 100%;
    height: 100%;
    background: white;

    .right {
      width: 80%;
      height: 100%;
      position: absolute;
      background: rgba(242, 245, 254);
      border-radius: 0;

      .inputs {
        width: 95%;
        height: 8vh;
        margin: auto;

        .Sing {
          cursor: pointer;
        }

        .Sing {
          z-index: 3;
          position: absolute;
          right: 6%;
          margin-top: 0.5vh;

          .icon {
            position: absolute;
            width: 2vw;
          }
        }

        .input {
          width: 88%;
          height: 4.5vh;
          margin: -5vh 4vw;
          font-size: 1.2vw;
          border-radius: 1vw;
          border: 1px solid #727070;
          padding-left: 1.2vw;
          position: absolute;
        }

        .one:hover {
          cursor: pointer;
        }

        .one {
          margin-top: 2vh;
          width: 2.8vw;
          height: 5.1vh;
          background: white;
          box-shadow: 1px 1px 1px 1px #727070;
          border-radius: 50%;

          .icon {
            position: absolute;
            width: 2vw;
            margin: 0.7vh 0.3vw;
          }
        }
      }

      .chatlist {
        width: 95%;
        height: 90%;
        margin: auto;
        overflow: auto;

        li:first-child {
          margin-top: 5vh;
        }

        li {
          width: 100%;
          list-style: none;
          clear: both;
          .ddd {
            max-width: 80%;
            line-height: 3vh;
            white-space: pre-wrap;
            overflow-wrap: break-word; /* 允许单词内部换行 */
          }

          .answer {
            padding: 1vh 1vw;
            background: white;
            border-radius: 1vw 1vw 1vw 0;
            margin: 5vh 1vw;
            width: max-content;
            float: left;
          }

          .question {
            margin-right: 4vw;
            float: right;
            padding: 1vh 1vw;
            color: white;
            border-radius: 1vw 1vw 0 1vw;
            background: rgba(115, 101, 255);
            text-align: right;
            width: max-content;
          }
        }
      }

    }

    .left {
      width: 20%;
      height: 100%;
      position: absolute;
      border-radius: 0;

      .out:hover {
        cursor: pointer;
      }

      .out {
        position: absolute;
        width: 2vw;
        bottom: 2vh;
        right: 1vw;

        path {
          fill: rgba(82, 65, 255);
        }
      }

      .Top {
        img {
          width: 90%;
          height: 20vh;
          margin-left: 10%;
          margin-top: -3vh;
        }
      }

      .talkList {
        width: 100%;
        z-index: 2;
        position: absolute;
        margin-top: -4vh;
        overflow: auto;

        .tools {
          width: 85%;
          margin: auto;
          height: 5vh;

          .New:hover {
            cursor: pointer;
          }

          .New {
            margin-left: 4%;
            font-size: 1vw;
            color: rgba(82, 65, 255);
          }
        }

        .ChatList:hover {
          cursor: pointer;
        }

        .ChatList {
          width: 80%;
          height: 6vh;
          margin: 1vh 8%;

          .one {
            width: 3.2vw;
            height: 6vh;
            border-radius: 50%;
            text-align: center;
            line-height: 6vh;
            color: rgba(82, 65, 255);
            font-size: 1.3vw;
            font-weight: bold;
            background: rgba(114, 112, 112, 0.08);
          }

          .tow {
            width: 77%;
            margin-top: -6vh;
            margin-left: 3.5vw;
            height: 6vh;

            .top {
              font-size: 1vw;
              font-weight: bolder;
              margin-top: 0.4vh;
            }

            .down {
              width: 80%;
              height: 3vh;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              color: #727070;
            }
          }
        }

        .ListTitle {
          width: 85%;
          height: 6vh;
          margin: auto;
          background: rgba(228, 229, 255, 1);
          border-radius: 0.3vw;

          .icos:hover {
            cursor: pointer;
          }

          .icos {
            position: absolute;
            width: 1.5vw;
            margin-top: -4.5vh;
            right: 2vw;

            path {
              fill: rgba(82, 65, 255);
            }
          }

          .icon {
            position: absolute;
            width: 3vw;
            margin-top: 1.7vh;
            margin-left: 0.7vw;

            path {
              fill: rgba(82, 65, 255);
            }
          }

          .word {
            width: 50%;
            margin-left: 2.5vw;
            text-align: center;
            line-height: 6vh;
            font-size: 1.3vw;
            color: rgba(82, 65, 255);
          }
        }
      }
    }
  }

  .left {
    width: 70%;
    height: 100%;
    position: absolute;
    background: white;
    border-radius: 0.7vw;

    .left-out {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 0.7vw;
    }
  }

  .right {
    width: 29%;
    height: 100%;
    position: absolute;
    right: 0;
    border-radius: 0.7vw;

    .Top {
      height: 20%;
      width: 100%;
      background: white;
      border-radius: 0.7vw;

      .Top-out {
        position: absolute;
        width: 100%;
        height: 15.75%;
        border-radius: 0.7vw;
      }
    }

    .Center {
      height: 33.75%;
      width: 100%;
      background: white;
      border-radius: 0.7vw;
      margin-top: 1vh;

      .Down-out {
        position: absolute;
        width: 100%;
        height: 41%;
        border-radius: 0.7vw;
      }
    }

    .Down {
      height: 44%;
      width: 100%;
      background: white;
      margin-top: 1vh;
      border-radius: 0.7vw;

      .icon:hover {
        cursor: pointer;
      }

      .icon {
        width: 1.8vw;
        height: 5vh;
        right: 4%;
        position: absolute;
        z-index: 2;
      }

      .Center-out {
        position: absolute;
        width: 100%;
        height: 41%;
        border-radius: 0.7vw;
      }
    }
  }
}
</style>
