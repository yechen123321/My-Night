<script setup>
import { QuestionGo } from '@/api/Student' // 引入新的函数
import { ref, onMounted, onUpdated } from 'vue'
import axios from 'axios'

import '/src/voice-utils/utilJS/crypto-js.js'; //鉴权的引用地址
import '/src/voice-utils/utilJS/index.umd.js'; // 调用Web Speech API 的依赖，应该是官方的写的工具类
const btnText = ref("开始录音");
const btnStatus =  ref("UNDEFINED"); // "UNDEFINED" "CONNECTING" "OPEN" "CLOSING" "CLOSED"
const recorder = new RecorderManager('/src/voice-utils/dist')
const APPID = '4d432e1b' // 这里填写从科大讯飞获取的appid
const API_SECRET = 'YTA0M2EwNDgyNGY3Y2Y3MGVkOTFlNDRj'
const API_KEY = '4eeea1063b2f6ba480124c1cbe24641a'
let iatWS; //监听录音的变量
let resultText = ref(''); // 识别结果
let resultTexts = ref(''); // 识别结果
let resultTextTemp = ref('');
let countdownInterval;
// 生成 WebSocket URL 生成规则由平台决定
function getWebSocketUrl() {
  // 请求地址根据语种不同变化
  var url = "wss://iat-api.xfyun.cn/v2/iat";
  var host = "iat-api.xfyun.cn";
  var apiKey = API_KEY;
  var apiSecret = API_SECRET;
  var date = new Date().toGMTString();
  var algorithm = "hmac-sha256";
  var headers = "host date request-line";
  var signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2/iat HTTP/1.1`;
  var signatureSha = CryptoJS.HmacSHA256(signatureOrigin, apiSecret);
  var signature = CryptoJS.enc.Base64.stringify(signatureSha);
  var authorizationOrigin = `api_key="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`;
  var authorization = btoa(authorizationOrigin);
  url = `${url}?authorization=${authorization}&date=${date}&host=${host}`;
  return url;
}
// 加密工具函数
function toBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
// 计数函数
function countdown() {
  let seconds = 60;
  btnText.value = `录音中（${seconds}s）`;
  countdownInterval = setInterval(() => {
    seconds = seconds - 1;
    if (seconds <= 0) {
      clearInterval(countdownInterval);
      recorder.stop();
    } else {
      btnText.value = `录音中（${seconds}s）`;
    }
  }, 1000);
}
// 录音状态变化函数
function changeStatus(status) {
  btnStatus.value = status;
  if (status === "CONNECTING") {
    btnText.value = "建立连接中";
    resultText.value = '';
    resultTextTemp.value = "";
  } else if (status === "OPEN") {
    countdown();
  } else if (status === "CLOSED") {
    btnText.value = "开始录音";
  }
}
// 结果解析函数
function renderResult(resultData) {
  // 识别结束
  let jsonData = JSON.parse(resultData);
  if (jsonData.data && jsonData.data.result) {
    let data = jsonData.data.result;
    let str = "";
    let ws = data.ws;
    for (let i = 0; i < ws.length; i++) {
      str = str + ws[i].cw[0].w;
    }
    // 开启wpgs会有此字段(前提：在控制台开通动态修正功能)
    // 取值为 "apd"时表示该片结果是追加到前面的最终结果；取值为"rpl" 时表示替换前面的部分结果，替换范围为rg字段
    if (data.pgs) {
      if (data.pgs === "apd") {
        // 将resultTextTemp同步给resultText
        resultText.value = resultTextTemp.value;
      }
      // 将结果存储在resultTextTemp中
      resultTextTemp.value = resultText.value + str;
    } else {
      resultText.value = resultText.value + str;
    }
  }
  resultTexts.value += resultText.value
  if (jsonData.code === 0 && jsonData.data.status === 2) {
    iatWS.close();
  }
  if (jsonData.code !== 0) {
    iatWS.close();
    console.error(jsonData);
  }
}
// 连接 WebSocket
function connectWebSocket() {
  const websocketUrl = getWebSocketUrl();
  if ("WebSocket" in window) {
    iatWS = new WebSocket(websocketUrl);
  } else if ("MozWebSocket" in window) {
    iatWS = new MozWebSocket(websocketUrl);
  } else {
    alert("浏览器不支持WebSocket");
    return;
  }
  changeStatus("CONNECTING");
  iatWS.onopen = (e) => {
    // 开始录音
    recorder.start({
      sampleRate: 16000,
      frameSize: 1280,
    });
    var params = {
      common: {
        app_id: APPID,
      },
      business: {
        language: "zh_cn",
        domain: "iat",
        accent: "mandarin",
        vad_eos: 5000,
        dwa: "wpgs",
      },
      data: {
        status: 0,
        format: "audio/L16;rate=16000",
        encoding: "raw",
      },
    };
    iatWS.send(JSON.stringify(params));
  };
  iatWS.onmessage = (e) => {
    renderResult(e.data);
  };
  iatWS.onerror = (e) => {
    console.error(e);
    recorder.stop();
    changeStatus("CLOSED");
  };
  // iatWS.onclose = (e) => {
  //   recorder.stop();
  //   changeStatus("CLOSED");
  // };
}
// 定义监听开始的函数
recorder.onStart = () => {
  changeStatus("OPEN");
}
// 处理回调的结果
recorder.onFrameRecorded = ({ isLastFrame, frameBuffer }) => {
  if (iatWS.readyState === iatWS.OPEN) {
    iatWS.send(
      JSON.stringify({
        data: {
          status: isLastFrame ? 2 : 1,
          format: "audio/L16;rate=16000",
          encoding: "raw",
          audio: toBase64(frameBuffer),
        },
      })
    );
    if (isLastFrame) {
      changeStatus("CLOSING");
    }
  }
};
// 停止录音的处理
recorder.onStop = () => {
  clearInterval(countdownInterval);
};
// 按钮点击的启动 | 结束函数
const startRecording = () => {
  if (btnStatus.value === "UNDEFINED" || btnStatus.value === "CLOSED") {
    connectWebSocket();
  } else if (btnStatus.value === "CONNECTING" || btnStatus.value === "OPEN") {
    // 结束录音
    recorder.stop();
    changeStatus("CLOSED");
  }
}

///////////////////////////////////////////////////////////
const question = ref('')
const responseData = ref([])
const centerDialogVisible = ref(false)
const submitQuestion = async () => {
  try {
    await QuestionGo({
      id: '2',
      name: '朱耿键',
      question: question.value
    })
  } catch (error) {
    console.error('Error Sending data:', error)
  }
  await fetchData()
}

const fetchData = async () => {
  try {
    const response = await axios.post('http://172.18.7.47:8084/question/select', { id: '2' })
    responseData.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
  console.log(responseData.value)
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
  <div class="Body">
    <el-dialog v-model="centerDialogVisible" destroy-on-close center class="read">
      <div class="title">语音转写</div>
      <div class="reading" @click="startRecording()">
        <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M704 192v368c0 52.8-21.6 100.8-56.4 135.6S564.8 752 512 752c-105.6 0-192-86.4-192-192V192C320 86.4 406.4 0 512 0s192 86.4 192 192z"
            fill="#707070"
          ></path>
          <path
            d="M816 496v144c0 2.8-0.4 5.6-1.1 8.4-18.5 68.2-58.9 126.1-112.3 166.9-43.5 33.2-95.6 55.2-151.6 62.2-4 0.5-7 3.9-7 7.9V944c0 8.8 7.2 16 16 16h80c35.3 0 64 28.7 64 64H320c0-35.3 28.7-64 64-64h80c8.8 0 16-7.2 16-16v-58.5c0-4-3-7.4-7-7.9-124.8-15.7-230.3-105.5-263.9-229.2-0.7-2.7-1.1-5.6-1.1-8.4V496.7c0-17.4 13.7-32.2 31.1-32.7 18.1-0.5 32.9 14 32.9 32v129.8c0 6.9 1.1 13.8 3.3 20.3C309.3 746.9 404.6 816 512 816s202.7-69.1 236.7-169.9c2.2-6.5 3.3-13.4 3.3-20.3V496.7c0-17.4 13.7-32.2 31.1-32.7 18.1-0.5 32.9 14 32.9 32z"
            fill="#707070"
          ></path>
        </svg>
      </div>
      <div
        style="
          margin: -3vh auto;
          width: 20vw;
          height: 10vh;
          text-align: center;
          font-size: 1vw;
          font-weight: bolder;
        "
      >
        {{ btnText }}
      </div>
      <div class="readWhat">{{ resultTexts }}</div>
    </el-dialog>
    <div class="title">问答助手</div>
    <ul class="message" ref="messageContainer">
      <li v-for="(item, index) in responseData" :key="index">
        <div class="question">{{ item.question }}</div>
        <div class="answer">{{ item.answer }}</div>
      </li>
    </ul>
    <textarea id="result" ref="resultDiv" rows="4" cols="50" class="in" v-model="resultTexts" />
    <div class="button" @click="submitQuestion">
      <svg class="go" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24">
        <path
          fill="white"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634L21.044 2.32c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8l-8 6z"
        ></path>
      </svg>
    </div>
    <button
      @click="centerDialogVisible = true"
      id="btn_control"
      style="margin-top: -15vh; margin-left: -10vw; position: absolute"
    >
      <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M704 192v368c0 52.8-21.6 100.8-56.4 135.6S564.8 752 512 752c-105.6 0-192-86.4-192-192V192C320 86.4 406.4 0 512 0s192 86.4 192 192z"
          fill="#707070"
        ></path>
        <path
          d="M816 496v144c0 2.8-0.4 5.6-1.1 8.4-18.5 68.2-58.9 126.1-112.3 166.9-43.5 33.2-95.6 55.2-151.6 62.2-4 0.5-7 3.9-7 7.9V944c0 8.8 7.2 16 16 16h80c35.3 0 64 28.7 64 64H320c0-35.3 28.7-64 64-64h80c8.8 0 16-7.2 16-16v-58.5c0-4-3-7.4-7-7.9-124.8-15.7-230.3-105.5-263.9-229.2-0.7-2.7-1.1-5.6-1.1-8.4V496.7c0-17.4 13.7-32.2 31.1-32.7 18.1-0.5 32.9 14 32.9 32v129.8c0 6.9 1.1 13.8 3.3 20.3C309.3 746.9 404.6 816 512 816s202.7-69.1 236.7-169.9c2.2-6.5 3.3-13.4 3.3-20.3V496.7c0-17.4 13.7-32.2 31.1-32.7 18.1-0.5 32.9 14 32.9 32z"
          fill="#707070"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
.Body {
  width: 100%;
  height: 100%;
  #btn_control {
    width: 2.5vw;
    height: 4vh;
    border: none;
    position: absolute;
    background: rgba(0, 157, 255, 0.7);
    margin: -0.8vh 0.2vw !important;
    border-radius: 0.4vw;
    transition: background 0.5s ease; /* 定义背景颜色过渡效果 */
    path {
      fill: white;
    }
  }
  #btn_control:hover {
    cursor: pointer;
    background: rgba(0, 157, 255);
  }
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
  .message {
    width: 88%;
    margin: 2vh auto;
    height: 26.9vh;
    background: #f8f6f6;
    border-radius: 0.5vw;
    overflow: auto;
    //scrollbar-width: none; /* Firefox */
    //-ms-overflow-style: none; /* IE 10+ */
    li {
      width: 100%;
      margin-top: 2vh;
      list-style: none;
      div {
        margin-top: 1vh;
        white-space: pre-wrap;
      }
      .question {
        margin-left: 3vw;
        width: 70%;
        line-height: 3vh;
        font-weight: bolder;
        background: rgba(106, 169, 153, 0.3);
        border-radius: 1vw;
        padding: 1vh 0.2vw 1vh 1vw;
      }
      .answer {
        width: 80%;
        line-height: 3vh;
        font-weight: bolder;
        background: rgba(114, 112, 112, 0.2);
        border-radius: 1vw;
        padding: 1vh 0.2vw 1vh 1vw;
      }
    }
  }
  /* WebKit 内核浏览器中滚动条的基本样式 */
  ul::-webkit-scrollbar {
    width: 10px; /* 滚动条宽度 */
  }

  /* 滚动条轨道 */
  ul::-webkit-scrollbar-track {
    background: #f1f1f1; /* 轨道背景色 */
  }

  /* 滚动条滑块 */
  ul::-webkit-scrollbar-thumb {
    background: rgba(136, 136, 136, 0.6); /* 滑块颜色 */
  }

  /* 鼠标悬停在滑块上时 */
  ul::-webkit-scrollbar-thumb:hover {
    background: rgba(85, 85, 85, 0.8); /* 滑块悬停颜色 */
  }

  .button {
    width: 2.5vw;
    height: 4vh;
    right: 0;
    position: absolute;
    margin: -4.6vh 1vw;
    border-radius: 0.4vw;
    background: rgba(24, 160, 88, 0.45);
    .go {
      width: 1.5vw;
      margin: 0.5vh 0.5vw;
    }
  }
  .button:hover {
    background: rgba(24, 160, 88, 1);
    cursor: pointer;
  }
  .in {
    width: 68%;
    height: 3.5vh;
    border-radius: 0.4vw;
    border: 2px solid #a4a4a4;
    margin-left: 1vw;
    font-size: 0.8vw;
    margin-top: -0.9vh;
    resize: none;
  }
  .title {
    width: 100%;
    height: 5%;
    font-weight: bolder;
    font-size: 1vw;
    margin-left: 5%;
    margin-top: 3%;
  }
}
</style>
