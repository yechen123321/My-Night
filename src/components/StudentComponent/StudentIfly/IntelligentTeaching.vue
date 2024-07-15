<script setup lang='ts'>
import { ref, onMounted, computed } from 'vue'
import BubbleBox from './BubbleBox.vue'
import MainTopTitle from '../MainTopTitle.vue'
import { postQuestionAnswer, postChatFile } from '../../../api/api.js'
import axios from 'axios'
import VuePdfApp from 'vue3-pdf-app'
import 'vue3-pdf-app/dist/icons/main.css'

interface Props {
  src: string | ArrayBuffer // pdf地址
  width?: string | number // 预览容器宽度
  height?: string | number // 预览容器高度
  pageScale?: number | string // 页面默认缩放规则，可选 'page-actual'|'page-width'|'page-height'|'page-fit'|'auto'
  theme?: string // 预览主题 可选 dark | light
  fileName?: string // 覆盖pdf文件名
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100vh',
  pageScale: 'page-fit', // 默认自适应展示一页
  theme: 'dark',
  fileName: ''
})
const viewerWidth = computed(() => {
  if (typeof props.width === 'number') {
    return props.width + 'vw'
  } else {
    return props.width
  }
})
const viewerHeight = computed(() => {
  if (typeof props.height === 'number') {
    return props.height + 'vh'
  } else {
    return props.height
  }
})
// emitted only once when Pdfjs library is binded to vue component
// Can be used to set Pdfjs config before pdf document opening.
// function afterCreated (pdfApp: any) {
//   console.log('afterCreated pdfApp:', pdfApp)
// }
// emitted when pdf is opened but pages are not rendered
// function openHandler (pdfApp: any) {
//   console.log('open pdfApp:', pdfApp)
// }
const emit = defineEmits(['loaded'])

// emitted when pdf document pages are rendered. Can be used to set default pages scale
function pagesRendered(pdfApp: any) {
  console.log('pagesRendered pdfApp:', pdfApp)
  emit('loaded', pdfApp)
}

onMounted(() => {

  const SendInput = document.getElementById('SendInput')
  const SendButton = document.getElementById('SendButton')

  SendInput.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      //  阻止默认行为（防止文本框换行）
      e.preventDefault()
      if (inputValue.value !== '' && isReadyToSend.value)
        //  触发按钮点击事件
        SendButton.click()
    }
  })

  isReadyToSend.value = true

  teacherName.value = localStorage.getItem('teacherName')

  setTimeout(() => {
    const IntelligentTeaching = document.getElementById('IntelligentTeaching')
    IntelligentTeaching.style.opacity = '1'
    const ChatGroup = document.getElementById('ChatGroup')
    ChatGroup.style.width = '18%'
  }, 200)
})

//  教师名
const teacherName = ref('')

//  输入框值
const message = ref('')
//  去除首尾空格
const inputValue = computed(() => {
  return message.value.trim()
})
//  准备就绪发问
const isReadyToSend = ref(false)
const leftShow = ref(true)
const asks = ref([])

const isLoading = ref(false)

const cancelTokenSource = axios.CancelToken.source()

//  进入 AI 教案界面
const AITeachingPlanValue = ref(0)

const teachingPlanList = [
  {
    title: '计算机科学与技术专业人才培养方案.pdf',
    type: '计算机科学与技术',
    time: '2024.7.11',
    size: '1.08MB',
    src: '/src/assets/计科培养方案.pdf',
    fileId: '7b107aac7f6947ebb084188b23633a2a'
  },
  {
    title: '软件工程专业人才培养方案.pdf',
    type: '软件工程',
    time: '2024.7.11',
    size: '1.49MB',
    src: '/src/assets/pdf/软件培养方案.pdf',
    fileId: '2167bb563e894a83812ed3ff0b6fb840'
  },
  {
    title: '网络工程专业人才培养方案.pdf',
    type: '网络工程',
    time: '2024.7.12',
    size: '1.43MB',
    src: '/src/assets/pdf/网络培养方案.pdf',
    fileId: 'aa6e73ec8deb4abb8d219cae65b896e0'
  },
  {
    title: '人工智能专业人才培养方案.pdf',
    type: '人工智能',
    time: '2024.7.12',
    size: '1.82MB',
    src: '/src/assets/pdf/人工智能培养方案.pdf',
    fileId: '9f6a3a5d926d4dafba38f5cbeb99c836'
  },
  {
    title: '大数据专业人才培养方案.pdf',
    type: '大数据',
    time: '2024.7.13',
    size: '1.82MB',
    src: '/src/assets/pdf/大数据培养方案.pdf',
    fileId: '75c7d309ef4b464c9eea5a158f4dd95f'
  },
  {
    title: '英语专业人才培养方案.pdf',
    type: '英语',
    time: '2024.7.13',
    size: '2.10MB',
    src: '/src/assets/pdf/英语培养方案.pdf',
    fileId: 'd9e88dc7a30a487098ad0b87ac12326b'
  }
]

//  pdf 路径
const PDFSrc = ref('')
//  上传文档

//  AI 教案文字内容
const AITeachingContent = ref('')

function onLoaded(pdfApp: any) {
  console.log('loaded app:', pdfApp)
}

//  预问答列表
const preAskList = ref([
  {
    title: '秋招面试准备',
    content: '你要在8月要开始参加秋招，需要开始面向2个岗位准备面试的自我介绍，分别是【市场营销岗】和【数据分析岗】，需要在自我介绍中体现一下我申请岗位的匹配性和历史工作成果，我在大学期间的主要的经历是一份校内公众号的自媒体运营，和一份互联网公司的用户增长'
  },
  {
    title: '远程办公技巧分享',
    content: '随着远程办公模式的普及，许多人发现自己需要适应新的工作环境。请分享一些提高远程办公效率的技巧，包括时间管理、沟通技巧、工作空间的布置等方面的建议。'
  },
  {
    title: '绿色能源发展趋势',
    content: '近年来，绿色能源如太阳能和风能在全球范围内得到了快速发展。请分析这些绿色能源的发展趋势和未来的发展前景，以及它们对环境和经济的影响。'
  },
  {
    title: '人工智能在教育领域的应用',
    content: '人工智能技术在教育领域的应用越来越广泛，如智能辅导系统、个性化学习推荐等。请讨论人工智能对教育方式和学习效果的改变，以及未来可能的发展方向。'
  },
  {
    title: '创业初期市场推广策略',
    content: '作为一个初创企业的创始人，你面临着如何有效推广产品的挑战。请提出一些创业初期市场推广的策略，包括社交媒体营销、口碑传播、线下活动等方面的建议。'
  },
  {
    title: '未来五年云计算发展趋势',
    content: '云计算作为一项关键技术，在企业和个人生活中发挥着越来越重要的作用。请分析未来五年云计算的发展趋势，包括技术创新、市场应用和安全性等方面的变化。'
  },
  {
    title: '健康生活方式推广计划',
    content: '健康生活方式越来越受到人们的关注，包括健身、饮食和心理健康等方面。请设计一个推广健康生活方式的计划，结合社区活动、健康讲座和数字平台的运营等方式。'
  },
  {
    title: '跨文化沟通技巧',
    content: '在全球化背景下，跨文化沟通技巧对于企业和个人来说至关重要。请分享一些有效的跨文化沟通策略，包括文化敏感性、语言选择和非语言沟通等方面的建议。'
  }
])

//  收缩
const onShrink = () => {
  const ChatGroup = document.getElementById('ChatGroup')
  const ChatBox = document.getElementById('ChatBox')
  const ArrowImage = document.getElementById('ArrowImage')
  if (leftShow.value === false) {
    ChatGroup.style.width = '18%'
    ChatBox.style.width = '82%'
    leftShow.value = true
  } else {
    ChatGroup.style.width = '0%'
    ChatBox.style.width = '100%'
    leftShow.value = false
  }
  ArrowImage.classList.toggle('flipped')
}

//  发送问题
const onPublish = (content) => {
  if (isReadyToSend.value === false) return

  isReadyToSend.value = false //  将待发送状态置为 false

  if (content !== '') {
    asks.value.push({ 'message': content, 'isLeft': false })
  } else {
    asks.value.push({ 'message': inputValue.value, 'isLeft': false })
  }
  let tempMessage = null  //  此次问答的值
  if (content !== '') {
    tempMessage = content
  } else {
    tempMessage = inputValue.value
  }
  message.value = '' //  清空 input 框

  //  在这里添加一个等待对话框，当请求成功后删除它，目的是为了让用户知道正在请求
  asks.value.push({ 'message': 'LiLoading..', 'isLeft': true })
  scrollToBottom()

  //  星火问答
  postQuestionAnswer('66', '姜大玮', tempMessage).then(response => {
    asks.value.pop()
    asks.value.push({ message: response.data, isLeft: true })
    isReadyToSend.value = true
  }).catch(error => {
    console.error(error)
    asks.value.pop()
    asks.value.push({ message: '请求超时，请稍后再试！', isLeft: true })
    isReadyToSend.value = true
  })


  scrollToBottom()
}

//  下载PDF聊天记录
const onDownload = () => {
  const scrollContainer = document.querySelector('.ChatBox .el-scrollbar__wrap')

  // 将 el-scrollbar 中的内容转换为 HTML 字符串
  const htmlContent = scrollContainer.innerHTML

  // 创建一个临时 div 元素，用于包裹 HTML 内容
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = htmlContent

  // 使用 html2pdf 将 HTML 内容转换为 PDF
  html2pdf().from(tempDiv).save()
}

//  滚动到底部
const scrollToBottom = () => {
  const scrollContainer = document.querySelector('.ChatBox .el-scrollbar__wrap')
  const scrollHeight = scrollContainer.scrollHeight
  const clientHeight = scrollContainer.clientHeight
  const currentScrollTop = scrollContainer.scrollTop // 获取当前滚动位置
  const scrollDuration = 300 // 滚动时间，单位为毫秒

  // 底部距离
  const scrollDistance = scrollHeight - clientHeight

  // 如果滚动距离小于等于0，无需滚动
  if (scrollDistance <= 0) return

  // 开始滚动到底部
  const startTime = performance.now()

  function scrollStep(timestamp) {
    const elapsedTime = timestamp - startTime
    const scrollRatio = Math.min(elapsedTime / scrollDuration, 1) // 计算滚动比率

    // 将滚动位置应用到滚动容器上
    scrollContainer.scrollTop = currentScrollTop + scrollDistance * scrollRatio

    // 继续滚动直到滚动到底部
    if (elapsedTime < scrollDuration) {
      requestAnimationFrame(scrollStep)
    }
  }

  // 使用 requestAnimationFrame 在下一帧开始滚动
  requestAnimationFrame(scrollStep)
}

//  进入 AI 教辅界面
const onAITeachingPlan = (index) => {
  AITeachingPlanValue.value = 1
  PDFSrc.value = teachingPlanList[index].src
  isLoading.value = true

  const question = '请帮我总结，针对教师的' + teachingPlanList[index].title + '组教学教案'
  const fileId = teachingPlanList[index].fileId
  let jsonData = {
    'question': question,
    'fileId': fileId
  }

  console.log(jsonData)

  postChatFile(jsonData, {
    cancelToken: cancelTokenSource.token
  }).then(response => {
    AITeachingContent.value = response.data.data.split(/\n|\*\*/).join('')
  }).catch(error => {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message)
    } else {
      console.error(error)
    }
  }).finally(() => {
    isLoading.value = false
  })
}

//  返回到问答界面按钮
const onReturn = () => {
  // 取消正在进行中的请求
  cancelTokenSource.cancel('Operation canceled by the user.')
  AITeachingPlanValue.value = 0
  AITeachingContent.value = ''
  PDFSrc.value = ''
}

</script>

<template>
  <MainTopTitle class='MainTopTitle-out'></MainTopTitle>

  <div class='IntelligentTeaching' id='IntelligentTeaching'>
    <div class='ChatGroup' id='ChatGroup' v-if='AITeachingPlanValue === 0'>
      <div class='ChatGroupTop' v-if='leftShow'>
        <div class='Title'>
          <span>各专业人才培养方案</span>
        </div>
      </div>

      <div class='CharGroupCenter'>
        <el-scrollbar>
          <div style='width: 100%; height: 70vh;'>
            <div class='AITeachingPlanItem' v-if='leftShow' v-for='(item, index) in teachingPlanList' :key='index'>

              <div class='ItemIcon'>
                <img src='../../assets/pic/pdf.png' alt=''>
              </div>

              <el-tooltip
                class='box-item'
                effect='dark'
                :content='item.title'
                placement='top'
              >
                <div class='ItemTitle' @click='onAITeachingPlan(index)'>
                  <span>{{ item.title }}</span>
                </div>
              </el-tooltip>

              <div class='ItemTime'>
                <span>{{ item.time }}</span>
              </div>

              <div class='ItemSize'>
                <span>{{ item.size }}</span>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>

      <div class='ChatGroupDown' v-if='leftShow'>
        <div class='UserGroup'>
          <img class='Avatar' src='../../assets/pic/bear.jpg' alt=''>
          <p>{{ teacherName }}</p>
        </div>

        <!--====  操作组  ====-->
        <div class='OperationGroup'>
          <!--====  设置按钮  ====-->
          <div class='SetUpButton'>
            <svg t='1720119650045' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'
                 p-id='4290' width='200' height='200'>
              <path
                d='M419.539168 950.854073l-37.358863-107.437941-47.571459-22.890336-107.306958 37.748742-115.745141-145.084353 60.70764-96.213295-11.768021-51.456952-96.404654-60.34539 41.271986-180.879604 113.130593-12.606109 32.878828-41.252543-12.985756-113.025193 167.181627-80.503499 80.30907 80.571037 52.79953 0 80.319304-80.571037 167.171394 80.503499-12.975523 112.962771 32.901341 41.314964 113.134687 12.606109 41.2331 180.879604-96.366791 60.350506-11.738345 51.451836 60.706617 96.208179L797.325397 858.275561l-107.312074-37.748742-47.542806 22.890336-37.383422 107.437941L419.539168 950.855096 419.539168 950.854073zM459.363176 894.805546l105.799628 0 31.934317-91.722004 89.517803-43.144636 91.683119 32.266891 66.025763-82.794681-51.768037-82.167395 22.096251-96.843652 82.371032-51.601238L873.496218 375.628076l-96.645131-10.747785-61.944817-77.630055 11.079336-96.505961-95.375208-45.950542-68.629054 68.797899-99.369172 0-68.635193-68.797899-95.370091 45.950542 11.079336 96.511077-61.910025 77.624938-96.645131 10.747785L127.600143 478.834646l82.33624 51.566446 22.125927 96.838535-51.861158 82.167395 66.025763 82.799798 91.680049-32.266891 89.521896 43.144636L459.363176 894.805546 459.363176 894.805546zM512.214894 681.236426c-92.651167 0-168.022785-75.396177-168.022785-168.065763 0-92.63684 75.372641-167.999249 168.022785-167.999249 92.65219 0 168.033018 75.362408 168.033018 167.999249C680.247912 605.841272 604.866061 681.236426 512.214894 681.236426L512.214894 681.236426zM512.214894 396.796188c-64.277956 0-116.570949 52.292993-116.570949 116.566856 0 64.316841 52.292993 116.644627 116.570949 116.644627 64.298422 0 116.605741-52.327786 116.605741-116.644627C628.820636 449.089182 576.512293 396.796188 512.214894 396.796188L512.214894 396.796188zM512.214894 396.796188'
                fill='#272636' p-id='4291'></path>
            </svg>
          </div>
        </div>
      </div>

      <!--====  收缩按钮  ====-->
      <div class='ShrinkButton' @click='onShrink'>
        <img id='ArrowImage' src='../../assets/pic/ShrinkButtonIcon.png' alt=''>
      </div>
    </div>

    <!--====  智能问答  ====-->
    <div class='ChatBox' id='ChatBox' v-if='AITeachingPlanValue === 0'>
      <el-scrollbar max-height='985px' style='max-height: 985px;'>
        <div
          style='width: 100%; height: 88%;  display: flex; flex-direction: column; '>
          <div v-if='asks.length !== 0' v-for='(ask, index) in asks' :key='index'
               style='width: 100%; display: inline-block;'>
            <div v-if='index % 2 === 1'
                 style='position: relative; display: flex; flex-direction: row; align-items: center; margin-bottom: 1.2vw;margin-top: 3vh'>
              <img src='/src/assets/littlelogo.png' alt=''
                   style='position:absolute; top:0; width: 2.5vw; height: 2.8vw; margin: 0 0.5vw; border-radius: 50%'>
              <BubbleBox :message='ask.message' :isLeft='ask.isLeft' style='margin-left: 3.2vw;'></BubbleBox>
            </div>
            <div v-if='index % 2 === 0'
                 style='position: relative; display: flex; flex-direction: row-reverse; align-items: center; margin-bottom: 1.2vw;margin-top: 3vh'>
              <img src='/src/assets/head.png' alt=''
                   style='position:absolute; top: 0; width: 2.5vw; height: 2.5vw; margin: 0 0.5vw;border-radius: 50%'>
              <BubbleBox :message='ask.message' :isLeft='ask.isLeft' style='margin-right: 3.2vw;'></BubbleBox>
            </div>
          </div>
          <div v-else
               style='width: 100%; height: 70vh; display: flex; align-items: center; justify-content: center; flex-direction: column'>
            <span
              style='color: #999999; font-size: 35px; font-family: -apple-system; font-weight: bolder;'>ZhiZhi</span>
            <div
              style='width: 10vw; height: 5vh; background: #f6f8fd; border-radius: 6px; display: flex; align-items: center; justify-content: center;'><span
              style="color: #121212; font-size: 18px; font-weight: bolder; font-family: '微软雅黑 Light';">你可以试着问我...</span>
            </div>
            <div class='PreAskButtonGroup'>
              <div class='PreAskButton' v-for='(item, index) in preAskList  ' :key='index'
                   @click='onPublish(item.content)'>
                <span class='Title'>{{ item.title }}</span>
                <span class='Content'>{{ item.content }}</span>
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>

      <div class='InputBox'>
        <input id='SendInput' class='InputLeft' type='text' v-model='message' placeholder='请输入您的问题' />
        <div class='InputRight'>
          <div class='InputButton1'>
            <img src='../../assets/pic/DownloadIcon.png' alt='' style='width: 1vw; height: 1vw; background: none;'
                 @click='onDownload' />
          </div>
          <div class='InputButton1'>
            <img src='../../assets/pic/SpeechIcon.png' alt='' style='width: 1.2vw; height: 1.2vw; background: none;' />
          </div>
          <button class='InputButton2' id='SendButton' @click='onPublish' :disabled="message === ''"
                  :class="{'InputButton2Hover': inputValue !== ''}">发送
          </button>
        </div>
      </div>
    </div>

    <!--====  AI教案  ====-->
    <div class='AITeachingPlanLeft' v-else>
      <!--====  返回按钮  ====-->
      <div class='ReturnButton' @click='onReturn'>
        <svg x='1720426493288' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'
             p-id='3970' width='200' height='200'>
          <path
            d='M369.728 512l384.768-384.704a48.64 48.64 0 0 0 0.896-68.8 48.64 48.64 0 0 0-68.736 0.96L269.44 476.736a48.704 48.704 0 0 0-11.136 17.344c-1.024 2.304-1.024 4.736-1.472 7.04-0.896 3.648-2.048 7.168-2.048 10.88 0 3.712 1.152 7.232 1.984 10.88 0.512 2.368 0.512 4.8 1.472 7.04a48.704 48.704 0 0 0 11.136 17.344l417.216 417.28a48.576 48.576 0 0 0 68.736 0.96 48.576 48.576 0 0 0-0.896-68.736L369.728 512z'
            fill='#030000' p-id='3971'></path>
        </svg>
        <p>返回</p>
      </div>

      <el-divider style='margin: 1vh 0;' />

      <!--====  文档问答  ====-->
      <div class='DocumentQA' v-loading='isLoading' element-loading-text='致知拼命加载中...'>
        <el-scrollbar style='width: 100%; height: 80vh;'>
          <span>
            {{ AITeachingContent }}
          </span>
        </el-scrollbar>
      </div>
    </div>

    <div class='AITeachingPlanRight' v-if='AITeachingPlanValue !== 0'>
      <VuePdfApp
        style='border-radius: 0.7vw;width: 100%;height: 100%'
        :page-scale='pageScale'
        :theme='theme'
        :style='`width: ${viewerWidth}; height: ${viewerHeight};`'
        :pdf='PDFSrc'
        :fileName='fileName'
        @pages-rendered='pagesRendered'
        v-bind='$attrs'></VuePdfApp>
    </div>
  </div>
</template>


<style scoped lang='scss'>

.MainTopTitle-out {
  width: 100%;
  height: 5.5vh;
  background: white;
}

.IntelligentTeaching {

  width: 99vw;
  height: 82vh;
  background: #FFFFFF;
  padding-bottom: 12vh;
  display: flex;
  flex-direction: row;
  opacity: 0;
  transition: all .5s ease-in-out;

  .ChatGroup {
    width: 18%;
    height: 92vh;
    margin-left: 1vw;
    margin-right: 10px;
    position: relative;
    background: rgba(102, 102, 255, 0.03);
    box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;
    display: flex;
    flex-direction: column;
    border: 1px solid #F5F5F8;
    padding-top: 2vh;
    transition: all .25s ease-in-out;

    .ChatGroupTop {
      width: 100%;
      height: 10vh;
      display: flex;
      flex-direction: column;
      align-items: center;

      .Title {
        width: 80%;
        height: 6vh;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background: rgba(102, 102, 255, 0.15);
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

        span {
          font-size: 1vw;
          font-family: -apple-system;
          color: #666666;
        }
      }
    }

    .CharGroupCenter {
      width: 100%;
      height: 70vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .AITeachingPlanItem {
        width: 14vw;
        height: 6vh;
        margin-bottom: 20px;
        border-radius: 5px;
        position: relative;

        .ItemIcon {
          position: absolute;
          left: 0.8vw;
          top: 1.5vh;

          img {
            width: 1.2vw;
            height: auto;
          }
        }

        .ItemTitle {
          width: 11vw;
          position: absolute;
          left: 2.5vw;
          top: 0;
          cursor: pointer;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          span {
            color: #666666;
          }

          span:hover {
            color: #6666FF;
          }
        }

        .ItemTime {
          position: absolute;
          left: 2.8vw;
          top: 2.6vh;

          span {
            font-size: 10px;
            font-family: -apple-system;
            color: #888888;
          }
        }

        .ItemSize {
          position: absolute;
          left: 6vw;
          top: 2.6vh;

          span {
            font-size: 10px;
            font-family: -apple-system;
            color: #888888;
          }
        }
      }

      .AITeachingPlanItem:hover {
        background: #e4e4ff;
      }
    }

    .ChatGroupDown {
      flex: 1 0 0;
      border-top: 1px solid #d6dae5;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;

      .UserGroup {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .Avatar {
          width: 3vw;
          height: auto;
          border-radius: 50%;
          margin-left: 1vw;
        }

        p {
          font-family: 幼圆;
          font-weight: bolder;
          margin-left: 0.6vw;
        }
      }

      .OperationGroup {
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;

        .SetUpButton {
          cursor: pointer;

          svg {
            width: 1vw;
            height: auto;
          }
        }
      }
    }

    .ChatGroupDown:hover {
      background: #F5F7FA;
    }

    .ShrinkButton {
      width: 1.5vw;
      height: 1.5vw;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 102%;
      transform: translate(-50%, -50%);
      cursor: pointer;

      img {
        width: 1.5vw;
        height: 1.5vw;
        object-position: center;
        object-fit: cover;
      }
    }
  }

  .ChatBox {
    width: 82%;
    height: 94vh;
    border: 1px solid #F5F5F8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: all .25s ease-in-out;

    .SendBox {
      width: 100%;
      height: 88%;
      padding-top: 10vh;
      display: flex;
      flex-direction: column;
      padding-left: 8%;
      padding-right: 8%;
      user-select: text;
    }

    .InputBox {
      width: 100%;
      height: 12%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .InputLeft {
        width: 70%;
        height: 5vh;
        padding: 0.5vw;
        border: 1px solid #E0E0E6;
        border-radius: 0.15vw;
        margin: 0 1vw;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
      }

      .InputLeft:focus {
        outline: none;
        border-color: #bfbfee;
        box-shadow: 0 0 5px rgba(102, 102, 255, 0.4);
      }

      .InputRight {
        display: flex;
        flex-direction: row;
        align-items: center;

        .InputButton1 {
          width: 2.3vw;
          height: 2.3vw;
          border-radius: 50%;
          color: white;
          margin: 0 0.3vw;
          cursor: pointer;
          transition: background 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;;
        }

        .InputButton1:hover {
          background: #F5F5F5;
        }

        .InputButton2 {
          width: 3.5vw;
          height: 4.5vh;
          font-size: 0.9vw;
          background: #bdbdfd;
          border-radius: 0.15vw;
          border: none;
          color: white;
          transition: background 0.3s ease;
          margin: 0 0.3vw;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: not-allowed;
        }

        .InputButton2Hover {
          background: #8a8aea;
        }

        .InputButton2Hover:hover {
          cursor: pointer;
          background: #6666FF;
        }
      }
    }
  }
}

.flipped {
  transform: scaleX(-1);
}

::-webkit-input-placeholder {
  color: #CCCCCC;
}


.PreAskButtonGroup {
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .PreAskButton {
    width: 45%;
    height: 100px;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    background: #f6f8fd;
    color: #6e6892;

    .Title {
      font-size: 19px;
      font-family: 幼圆;
      font-weight: bolder;
      color: #120649;
      display: inline-block;
    }

    .Content {
      width: 100%;
      font-family: "微软雅黑 Light";
      font-size: 12px;
      display: inline-block;
      margin-top: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .PreAskButton:hover {
    background: #e9ecfb;

    .Title {
      color: #6666FF;
    }

    .Content {
      color: #6666FF;
    }
  }
}

.AITeachingPlanLeft {
  width: 18%;
  height: 92vh;
  margin-left: 1vw;
  position: relative;
  background: rgba(102, 102, 255, 0.03);
  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border: 1px solid #F5F5F8;
  padding-top: 1.5vh;
  transition: all .25s ease-in-out;

  .DocumentQA {
    width: 100%;
    flex: 1;
    margin-top: -1vh;
    background: #dfe5f2;

    span {
      display: block;
      padding: 20px;
      line-height: 3vh;
      color: #4450c6;
      font-family: 方正粗黑宋简体;
      font-size: 15px;
    }
  }
  .ReturnButton {
    width: 90%;
    height: 4vh;
    background: #6666FF;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding: 0 0.2vw;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
    transition: all .1s ease-in-out;
    cursor: pointer;
    user-select: none;

    svg {
      width: 0.7vw;
      height: 0.7vw;
      margin-right: 0.3vw;

      path {
        fill: #e3e3e3;
      }
    }

    p {
      color: #e3e3e3;
      font-size: 0.75vw;
    }
  }

  .ReturnButton:hover {
    background: #3535d7;
  }
}

.AITeachingPlanRight {
  width: 90vw;
  height: 93vh;
  padding-top: 0.5vh;
  margin-left: 1vw;
  border: 1px solid #F5F5F8;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: all .25s ease-in-out;
}


</style>