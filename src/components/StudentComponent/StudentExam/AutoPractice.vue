<script setup>
import { ref, onMounted, onBeforeMount, watch } from 'vue'
import router from '@/router'
import OnlineExam from '@/components/StudentComponent/StudentExam/OnlineExam.vue'
// import emitter from '@/plugins/Bus'
import { useSharedStore } from '@/stores'

const store = useSharedStore()
// import TTWss from './TalkHechen'
// let audio_url = ref('');
// const ttsinstance= ref(null)
//
// ttsinstance.value = TTWss.getInstance('hello world', 'xiaoyan', 50, 50, 50)
//
// ttsinstance.value.connectWebSocket();
//
// ttsinstance.value.getMessage().then((result) => {
//   console.log("成功",result);//测试
//
//
//   const binaryString = atob(result.data);
//   const len = binaryString.length;
//   const bytes = new Uint8Array(len);
//   for (let i = 0; i < len; i++) {
//     bytes[i] = binaryString.charCodeAt(i);
//   }
//   const blob = new Blob([bytes], { type: 'audio/mp3' }); // 根据音频格式修改MIME类型
//   const url = URL.createObjectURL(blob);
//   audio_url.value=url
//   let aTag = document.createElement('a');
//   aTag.href = url;
//   aTag.download = 'audio_file_name.mp3'; // 设置文件名
//   aTag.style.display = 'none';
//   document.body.appendChild(aTag);
//   aTag.click();
//   document.body.removeChild(aTag);
//
// }).catch((err) => {
//   console.log("失败",err);
//
// });
const goToTargetPage = () => {
  // const num = ref(true)
  // emitter.emit('Working', num)

  const refData = { value: text.value }
  store.setSharedRef(refData)
  router.push('/student/exam/workready')
}

const num = ref('')
const showq = ref(true)
const showqq = ref(false)
const showp = ref(false)
const showpp = ref(false)
const changep = () => {
  showp.value = true
  showq.value = false
  showqq.value = false
  showpp.value = false
  const targetElement1 = document.querySelector('.Strong')
  const targetElement2 = document.querySelector('.Rondo')
  const targetElement3 = document.querySelector('.Wrong')
  const targetElement4 = document.querySelector('.Time')
  targetElement1.classList.add('beChoose')
  targetElement2.classList.remove('beChoose')
  targetElement3.classList.remove('beChoose')
  targetElement4.classList.remove('beChoose')
  num.value = '1'
  localStorage.setItem('shows', num.value)
}

const changeq = () => {
  showq.value = true
  showp.value = false
  showqq.value = false
  showpp.value = false
  const targetElement1 = document.querySelector('.Strong')
  const targetElement2 = document.querySelector('.Rondo')
  const targetElement3 = document.querySelector('.Wrong')
  const targetElement4 = document.querySelector('.Time')
  targetElement2.classList.add('beChoose')
  targetElement1.classList.remove('beChoose')
  targetElement3.classList.remove('beChoose')
  targetElement4.classList.remove('beChoose')
  num.value = '2'
  localStorage.setItem('shows', num.value)
}

const changeqq = () => {
  showq.value = false
  showp.value = false
  showqq.value = true
  showpp.value = false
  const targetElement1 = document.querySelector('.Strong')
  const targetElement2 = document.querySelector('.Rondo')
  const targetElement3 = document.querySelector('.Wrong')
  const targetElement4 = document.querySelector('.Time')
  targetElement3.classList.add('beChoose')
  targetElement1.classList.remove('beChoose')
  targetElement2.classList.remove('beChoose')
  targetElement4.classList.remove('beChoose')
  num.value = '3'
  localStorage.setItem('shows', num.value)
}

const changepp = () => {
  showq.value = false
  showp.value = false
  showqq.value = false
  showpp.value = true
  const targetElement1 = document.querySelector('.Strong')
  const targetElement2 = document.querySelector('.Rondo')
  const targetElement3 = document.querySelector('.Wrong')
  const targetElement4 = document.querySelector('.Time')
  targetElement4.classList.add('beChoose')
  targetElement1.classList.remove('beChoose')
  targetElement3.classList.remove('beChoose')
  targetElement2.classList.remove('beChoose')
  num.value = '4'
  localStorage.setItem('shows', num.value)
}

onMounted(() => {
  const nums = localStorage.getItem('shows')
  if (nums === '1') {
    changep()
  }
  if (nums === '2') {
    changeq()
  }
  if (nums === '3') {
    changeqq()
  }
  if (nums === '4') {
    changepp()
  }
})
const handleClear = () => {
  // 清除时自动选择第一个选项
  values.value = options[0].value
}

const values = ref('10001')
const options = [
  {
    value: '10001',
    label: 'C语言',
    type: '编程'
  },
  {
    value: '10003',
    label: 'JAVA',
    type: '编程'
  },
  {
    value: '10010',
    label: '英语',
    type: '英语'
  },
  {
    value: '11000',
    label: '数据结构',
    type: '编程'
  },
  {
    value: '10101',
    label: '数据库技术',
    type: '编程'
  }
]

const datas = ref([
  {
    id: '10001',
    body: ['数据类型', '循环', '分支', '指针']
  },
  {
    id: '10003',
    body: ['线程', '并发', '分支', '字符串']
  },
  {
    id: '10010',
    body: ['四级', '六级', '专八', '雅思']
  },
  {
    id: '11000',
    body: ['链表', '查找', '排序', '数论']
  },
  {
    id: '10101',
    body: ['关系模型', 'SQL', '特性', '范式']
  }
])
const valuess = ref()
const bb = ref(['数据类型', '循环', '分支', '指针'])
const forQuestions = ref([
  {
    name: '单选题',
    number: 0
  },
  {
    name: '多选题',
    number: 0
  },
  {
    name: '判断题',
    number: 0
  },
  {
    name: '填空题',
    number: 0
  },
  {
    name: '简答题',
    number: 0
  },
  {
    name: '编程题',
    number: 0
  }
])

onBeforeMount(() => {
  // 监听 values 的变化，当它发生变化时更新 BigtitleData
  watch(values, (newValue) => {
    const option = options.find(opt => opt.value === newValue)
    const item = datas.value.find(item => item.id === newValue)
    const items = questionData.value.find(items => items.id === newValue)
    if (option && item) {
      bb.value = item.body
    }
    forQuestions.value = items.question
    console.log(forQuestions)
  })
})

const text = ref('')
const text1 = ref('')
const questionData = ref([
  {
    id: '10001',
    question: [
      {
        name: '单选题',
        number: 0
      },
      {
        name: '多选题',
        number: 0
      },
      {
        name: '判断题',
        number: 0
      },
      {
        name: '填空题',
        number: 0
      },
      {
        name: '简答题',
        number: 0
      },
      {
        name: '编程题',
        number: 0
      }
    ]
  },
  {
    id: '10003',
    question: [
      {
        name: '单选题',
        number: 0
      },
      {
        name: '多选题',
        number: 0
      },
      {
        name: '判断题',
        number: 0
      },
      {
        name: '填空题',
        number: 0
      },
      {
        name: '简答题',
        number: 0
      },
      {
        name: '编程题',
        number: 0
      }
    ]
  },
  {
    id: '11000',
    question: [
      {
        name: '单选题',
        number: 0
      },
      {
        name: '多选题',
        number: 0
      },
      {
        name: '判断题',
        number: 0
      },
      {
        name: '填空题',
        number: 0
      },
      {
        name: '简答题',
        number: 0
      },
      {
        name: '编程题',
        number: 0
      }
    ]
  },
  {
    id: '10101',
    question: [
      {
        name: '单选题',
        number: 0
      },
      {
        name: '多选题',
        number: 0
      },
      {
        name: '判断题',
        number: 0
      },
      {
        name: '填空题',
        number: 0
      },
      {
        name: '简答题',
        number: 0
      },
      {
        name: '编程题',
        number: 0
      }
    ]
  },
  {
    id: '10010',
    question: [
      {
        name: '听力题',
        number: 0
      },
      {
        name: '单选题',
        number: 0
      },
      {
        name: '多选题',
        number: 0
      },
      {
        name: '判断题',
        number: 0
      },
      {
        name: '填空题',
        number: 0
      },
      {
        name: '翻译题',
        number: 0
      },
      {
        name: '口语',
        number: 0
      },
      {
        name: '写作',
        number: 0
      }
    ]
  }
])
const handleInput = (index) => {
  if (forQuestions.value[index].number < 0) {
    forQuestions.value[index].number = 0
  }
  if (forQuestions.value[index].number > 20) {
    forQuestions.value[index].number = 20
  }
}
</script>

<template>
  <div class='AP'>
    <div class='AP-body'>
      <div class='Body-Main'>
        <div class='MM'>
          <div class='left-tips'>
            <img src='/src/assets/class.png' alt=''>
            <div class='ul'>
              <div class='Strong li beChoose' @click='changep'>
                <svg t='1715865605267' class='icon' viewBox='0 0 1024 1024' version='1.1'
                     xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M659.267147 0c55.252587 0 100.857897 42.389551 106.046963 96.253515l0.511598 10.231961v7.67397h67.311684c53.352366 0 97.495967 43.485833 102.465777 99.030762l0.511598 10.524302v689.70723c0 57.006638-40.927842 103.927486-93.037756 109.262722l-9.866534 0.511598H139.848976c-53.352366 0-97.422882-43.558918-102.465777-99.103847L36.944686 913.567911V223.71451c0-56.860467 40.927842-103.781315 93.037756-109.116551l9.866534-0.438513h67.384769v-7.67397c0-55.252587 42.389551-100.857897 96.253515-105.973878L313.719221 0h345.547926zM207.233745 188.414246h-67.384769c-15.494112 0-28.576404 16.224966-28.576404 35.300264v689.70723c0 19.221469 13.155378 35.300264 28.576404 35.300264h693.434587c15.494112 0 28.64949-16.224966 28.64949-35.300264V223.71451c0-19.148383-13.155378-35.300264-28.64949-35.300264h-67.457855v8.039398a106.704732 106.704732 0 0 1-106.558561 106.485475H313.719221A106.704732 106.704732 0 0 1 207.233745 196.453644v-8.039398z m326.180287 191.045321c19.002213 10.962815 25.433731 35.227179 14.470916 54.156306L458.86689 587.899222h141.054886c12.863036 2.338734 20.829348 8.989508 24.045107 19.879238 3.069588 10.231961 0.877025 22.217972-6.577689 35.884947l-122.345014 213.774891a39.100707 39.100707 0 0 1-54.083221 14.25166 39.393048 39.393048 0 0 1-15.640282-52.036828l89.018057-154.283349H389.216473c-52.840768-5.846835-33.180787-57.006638-33.034616-57.591321L479.111555 393.930483a39.68539 39.68539 0 0 1 54.229391-14.617086z m125.853115-305.277853H313.719221a32.303761 32.303761 0 0 0-32.157591 32.157591v89.895082c0 17.75976 14.470916 32.303761 32.157591 32.303762h345.547926c17.75976 0 32.15759-14.544001 32.157591-32.230676v-89.895083a32.303761 32.303761 0 0 0-32.157591-32.15759z'
                    p-id='4300'></path>
                </svg>
                <div class='words'>强化训练</div>
              </div>
              <div class='Rondo li' @click='changeq'>
                <svg t='1715865768636' class='icon' viewBox='0 0 1024 1024' version='1.1'
                     xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M752.89 356.741h57.565v97.06L957.44 283.095l-146.939-167.04v110.817h-57.559c-164.813 0-272.317 127.002-354.427 239.053-73.697 100.72-137.492 195.748-240.292 195.748H66.56v129.92h91.617c164.813 0 257.813-135.014 339.968-247.07 73.698-100.773 151.7-187.782 254.746-187.782z m-446.632 74.291l21.335-28.907c17.515-23.803 35.835-49.045 55.777-74.092-59.044-57.267-130.12-99.533-225.193-99.533H66.56v129.874s24.699-1.239 91.617 0c64.784 1.434 105.416 28.954 148.08 72.658zM810.5 666.665h-57.559c-62.766 0-125.42-36.373-170.312-84.629a929.229 929.229 0 0 1-13.557 18.463c-19.702 26.87-40.832 55.824-64.144 84.337 60.585 61.368 148.383 111.703 248.013 111.703h57.56v111.406L957.44 736.947 810.501 570.214v96.451z'
                    p-id='4298'></path>
                </svg>
                <div class='words'>随机考试</div>
              </div>
              <div class='Wrong li' @click='changeqq'>
                <svg t='1715865824850' class='icon' viewBox='0 0 1024 1024' version='1.1'
                     xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M650.667 58.667A122.667 122.667 0 0 1 773.248 176.64l0.085 4.693v4.054a186.752 186.752 0 0 1 128 177.28v426.666A186.667 186.667 0 0 1 714.667 976H309.333a186.667 186.667 0 0 1-186.666-186.667V176A122.88 122.88 0 0 1 240.64 58.752l4.693-0.085h405.334z m64 192H197.333v538.666c0 61.867 50.134 112 112 112h405.334c61.866 0 112-50.133 112-112V362.667c0-61.867-50.134-112-112-112z m-64-117.334H245.333A48 48 0 0 0 197.632 176h500.736a48 48 0 0 0-44.416-42.56l-3.285-0.107z'
                    p-id='4348'></path>
                  <path
                    d='M716.715 522.133a32 32 0 0 1-42.966 47.318l-2.282-2.07-150.848-150.826a32 32 0 0 1 42.965-47.36l2.283 2.09 150.848 150.827z'
                    p-id='4349'></path>
                  <path
                    d='M716.715 371.285a32 32 0 0 1 2.069 42.966l-2.07 2.282-150.826 150.848a32 32 0 0 1-47.36-42.965l2.09-2.283 150.827-150.848a32 32 0 0 1 45.27 0z'
                    p-id='4350'></path>
                </svg>
                <div class='words'>在线考试</div>
              </div>
              <div class='Time li' @click='changepp'>
                <svg style='width: 2vw; margin-left: -29%' t='1715865870396' class='icon' viewBox='0 0 1879 1024'
                     version='1.1' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M1166.20578 236.763006l-0.44393-75.912139s6.65896-53.863584-61.410405-53.863584H581.549133S535.824277 105.063584 535.824277 150.936416v657.905202s4.883237 53.419653 57.415029 53.419654h133.623122s27.079769 4.883237 27.079769 33.442774-25.304046 29.447399-25.304047 29.447399l-167.361849-0.295954s-88.63815-15.981503-89.082081-99.884393-0.443931-667.375723-0.443931-667.375722-10.802312-113.646243 113.054335-113.646243 543.075145 0.887861 543.075145 0.887861 97.66474 0.739884 99.292485 90.709827c1.775723 89.969942 1.479769 103.139884 1.479769 103.139884s-3.699422 29.299422-30.483237 29.299422c-26.487861 0-31.815029-27.375723-31.963006-31.223121z'
                    fill='#212121' p-id='4323'></path>
                  <path
                    d='M1040.57341 510.816185v127.260116s-1.331792 14.797688 12.134104 28.707514c13.465896 14.057803 124.004624 126.076301 124.004625 126.076301s21.160694 10.506358 38.917919-7.250867-2.515607-41.581503-2.515607-41.581503l-102.843931-108.615029s-7.546821-4.883237-7.546821-25.008093-0.295954-99.736416-0.295953-99.736416-8.434682-26.191908-29.743353-26.191907c-21.160694 0-31.815029 17.905202-32.110983 26.339884z'
                    fill='#212121' p-id='4324'></path>
                  <path
                    d='M1101.983815 361.063584c-172.836994 0-312.971098 140.134104-312.971098 312.971098S929.146821 987.00578 1101.983815 987.00578s312.971098-140.134104 312.971098-312.971098S1274.820809 361.063584 1101.983815 361.063584z m0 565.271676c-139.39422 0-252.300578-112.906358-252.300578-252.300578S962.589595 421.734104 1101.983815 421.734104s252.300578 112.906358 252.300578 252.300578S1241.378035 926.33526 1101.983815 926.33526zM735.001156 484.476301h-84.642774c-13.613873 0-24.860116-11.098266-24.860116-24.860116v-13.317919c0-13.613873 11.098266-24.860116 24.860116-24.860116h84.642774c13.613873 0 24.860116 11.098266 24.860116 24.860116v13.317919c0 13.76185-11.246243 24.860116-24.860116 24.860116zM1050.191908 295.657803H650.506358c-13.613873 0-24.860116-11.098266-24.860115-24.860115v-13.317919c0-13.613873 11.098266-24.860116 24.860115-24.860116h399.68555c13.613873 0 24.860116 11.098266 24.860115 24.860116v13.317919c0 13.76185-11.246243 24.860116-24.860115 24.860115z'
                    fill='#212121' p-id='4325'></path>
                </svg>
                <div class='words'>答题记录</div>
              </div>
            </div>
          </div>
          <div class='Control' v-if='showq || showp'>
            <div v-if='showq || showp' class='Control-title'>
              <svg t='1715866882435' class='icon' viewBox='0 0 1024 1024' version='1.1'
                   xmlns='http://www.w3.org/2000/svg'>
                <path d='M512 512m-384 0a384 384 0 1 0 768 0 384 384 0 1 0-768 0Z' p-id='8678'></path>
                <path d='M512 512m-384 0a384 384 0 1 0 768 0 384 384 0 1 0-768 0Z' fill='#f4ea2a' p-id='8679'
                      data-spm-anchor-id='a313x.search_index.0.i1.b29a3a811pbj8Z' class='selected'></path>
                <path d='M416 352m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z' fill='#FFFFFF' p-id='8680'></path>
              </svg>
              <div class='words'>练习须知</div>
            </div>
            <div v-if='showq || showp' class='tip'>
              <div class='tips'><span>1、</span>在您看完“练习须知”后，配置嫁习规则，点击“开始练习”按钮进入答题界面，考试开始计时。
              </div>
              <div class='tips'><span>2、</span>在练习过程中，您可以通过顶部的考试时问来掌握自己的做题时间。</div>
              <div class='tips'><span>3、</span>提交试卷后，可以通过“查看答案和解析”功能进行总结学习。</div>
            </div>
            <div v-if='showq || showp' class='midden'>
              <div class='word'>配卷规则</div>
            </div>
            <div v-if='showq || showp' class='Down'>
              <div style='margin-left: 3.5%; padding-top: 0' class='one'>
                <span style='color: red;'>* </span>
                <span>科目</span>
                <el-select
                  v-model='values'
                  clearable
                  placeholder='Select'
                  style='width: 10vw; margin-left: 4%'
                  @clear='handleClear'
                >
                  <el-option
                    v-for='item in options'
                    :key='item.value'
                    :label='item.label'
                    :value='item.value'
                  />
                </el-select>
                <span style='margin-left: 4%'>知识点</span>
                <el-select
                  v-model='valuess'
                  multiple
                  :disabled='showq'
                  placeholder='请选择知识点'
                  collapse-tags
                  collapse-tags-tooltip
                  style='width: 10vw; margin-left: 4%'
                >
                  <el-option
                    v-for='item in bb'
                    :key='item'
                    :value='item'
                  />
                </el-select>
              </div>
              <div class='tow' style='margin-left: 3.5%; margin-top: 1.5vh'>
                <span style='color: red;'>*</span>
                <span>试卷名称：</span>
                <el-input
                  v-model='text'
                  style='width: 14vw'
                  maxlength='20'
                  placeholder='输入试卷名'
                  show-word-limit
                  type='text'
                />
                <span style='font-size: 0.7vw; margin-top: 1.3vh; margin-left: 1vw;position:absolute; color: #727070;'>请填入适合查找的试卷名称</span>
              </div>
              <div class='three' style='margin-top: 1.5vh;margin-left: 3.5%'>
                <span style='color: red;'>*</span>
                <span>做题时间</span>
                <el-input
                  v-model='text1'
                  style='width: 10vw; margin-left: 2.5%'
                  placeholder='设定时间'
                  type='text'
                />
                <span style='margin-left: 2%'>分钟</span>
                <span style='margin-left: 2%; font-size: 0.7vw; color: #727070;'>请填写本次练习的时长</span>
              </div>
              <div class='four' style='margin-top: 1.5vh;margin-left: 3.5%'>
                <span style='color: red;'>*</span>
                <span>题 型：如果您不希望做某种题型，请在选题数值框内填 0。</span>
              </div>
              <div class='question' style='width: 100%'>
                <div class='questions' style='margin-top: 1.7vh; display: inline-block; margin-left: 1vw'
                     v-for='(item, index) in forQuestions' :key='index.value'>
                  <div style='width: 3vw; position:absolute; text-align: center'>
                    {{ item.name }}
                  </div>
                  <div style='position:absolute;width: 7vw; margin-left: 3vw'>
                    （共 {{ item.number }} 题）
                    <span>选</span>
                  </div>
                  <el-input
                    type='number'
                    v-model='item.number'
                    style='margin-left: 9vw; width: 3.5vw; margin-top: -0.3vh'
                    placeholder='Please input'
                    :min='0'
                    :max='20'
                    @input='handleInput(index)'
                  />
                  <span style='margin-left: 0.4vw'>题</span>
                </div>
              </div>
              <div class='GotoWork' @click='goToTargetPage'>开始练习</div>
            </div>
          </div>
          <div class='Control' v-if='showqq'>
            <OnlineExam></OnlineExam>
          </div>
          <div class='Control' v-if='showpp'>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.beChoose {
  color: #f5890d !important;
  border-bottom: 2px solid #f5890d !important;

  .icon {
    path {
      fill: #f5890d !important;
    }
  }
}

.AP {
  width: 100%;
  height: 100%;

  .AP-body {
    width: 97.5%;
    height: 97%;
    border-radius: 0.5vw;
    margin: 1.3vh auto;
    background: #f8f6f6;

    .Body-Main {
      position: absolute;
      width: 97.5%;
      height: 109vh;
      margin-top: 1.7vh;

      .Control {
        background: white;
        border: 1px solid rgba(169, 134, 106, 0.3);
        width: 67%;
        height: 80vh;
        border-radius: 0.3vw;
        box-shadow: 0 2px 6px 0 rgba(255, 160, 27, 0.2);
        margin-left: 21.5%;
        position: absolute;

        .GotoWork:hover {
          cursor: pointer;
          width: 23%;
          height: 5vh;
          font-size: 1.4vw;
          font-weight: bolder;
        }

        .GotoWork:active {
          font-size: 1.3vw;
        }

        .GotoWork {
          width: 23%;
          height: 5vh;
          background: #f5890d;
          border-radius: 1vw;
          margin: 2.5vh 30%;
          color: white;
          font-size: 1.3vw;
          text-align: center;
          line-height: 4vh;
        }

        .question {
          width: 90%;
        }

        .Down {
          width: 85%;
          height: 6vh;
          margin-left: 13%;

          div {
            padding-top: 0.8vh;
          }

        }

        .midden {
          width: 85%;
          height: 4vh;
          margin: 2vh 6%;
          background: #e8e8e8;
          border-radius: 0.3vw;

          .word {
            font-size: 1vw;
            height: 4vh;
            line-height: 4vh;
            margin-left: 6%;
            color: #464646;
            font-weight: bolder;
          }
        }

        .tip {
          width: 85%;
          margin-left: 8%;

          .tips {
            margin-top: 1.5vh;
            line-height: 3vh;
            font-size: 0.85vw;

            span {
              font-weight: bolder;
            }
          }
        }

        .Control-title {
          width: 85%;
          height: 8vh;
          margin-top: -1vh;
          border-bottom: 2px solid #727070;
          margin-left: 5%;

          .icon {
            position: absolute;
            width: 1.5vw;
            margin-top: 3.2vh;
            margin-left: 2%;
          }

          .words {
            position: absolute;
            font-size: 1.5vw;
            margin-left: 7%;
            font-weight: bolder;
            color: #f5890d;
            margin-top: 2.5vh;
          }
        }
      }

      .MM {
        width: 90%;
        height: 100%;
        margin: auto;

        .left-tips {
          width: 18%;
          height: 40vh;
          margin-left: 1%;
          border: 1px solid #f5890d;
          position: absolute;
          border-radius: 0.4vw;
          box-shadow: 0 1px 2px 0 #f5890d;

          .ul {
            width: 100%;
            height: 25vh;

            .li:hover {
              cursor: pointer;
              color: #f5890d;
              border-bottom: 2px solid #f5890d;

              .icon {
                path {
                  fill: #f5890d;
                }
              }
            }

            .li {
              margin: 2vh auto;
              height: 3.3vh;
              width: 65%;
              font-size: 1vw;
              font-weight: bolder;
              text-align: center;
              border-bottom: 2px solid rgba(114, 112, 112, 0.8);
              color: #727070;

              .words {
                width: 60%;
                margin-left: 30%;
              }

              .icon {
                position: absolute;
                width: 1vw;
                margin-top: 0.35vh;
                margin-left: -25%;

                path {
                  fill: #727070;
                }
              }
            }
          }

          img {
            width: 100%;
          }
        }


      }
    }

    .AP-title {
      position: absolute;
      width: 97.5%;
      height: 9vh;
      border-radius: 0.5vw 0.5vw 0 0;
      background: #f5890d;

      .Title-word {
        font-size: 1.6vw;
        color: white;
        margin-top: 2vh;
        margin-left: 6%;
        font-weight: bolder;
      }
    }

    .title-foot {
      position: absolute;
      width: 97.5%;
      height: 2vh;
      margin-top: 9.7vh;
      border-radius: 0 0 0.5vw 0.5vw;
      background: #f5890d;
    }
  }

}
</style>