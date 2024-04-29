<script setup>
import { ref, onMounted } from 'vue'
import emitter from '@/plugins/Bus'

const choose1 = ref('false')
const choose2 = ref('false')
const choose3 = ref('false')
const choose4 = ref('false')
const choose5 = ref('false')
const choose6 = ref('false')

onMounted(() => {
  const savedStyle1 = localStorage.getItem('chosenStyle1')
  const savedStyle2 = localStorage.getItem('chosenStyle2')
  const savedStyle3 = localStorage.getItem('chosenStyle3')
  const savedStyle4 = localStorage.getItem('chosenStyle4')
  const savedStyle5 = localStorage.getItem('chosenStyle5')
  const savedStyle6 = localStorage.getItem('chosenStyle6')
  if (savedStyle1 === 'true') {
    const li1 = document.querySelectorAll('.li1')
    li1.forEach((icon) => {
      icon.className = ''
      icon.classList.add('li1')
      icon.classList.add('choose')
    })
  }
  if (savedStyle2 === 'true') {
    const li2 = document.querySelectorAll('.li2')
    li2.forEach((icon) => {
      icon.className = ''
      icon.classList.add('li2')
      icon.classList.add('choose')
    })
  }
  if (savedStyle3 === 'true') {
    const li3 = document.querySelectorAll('.li3')
    li3.forEach((icon) => {
      icon.className = ''
      icon.classList.add('li3')
      icon.classList.add('choose')
    })
  }
  if (savedStyle4 === 'true') {
    const li4 = document.querySelectorAll('.li4')
    li4.forEach((icon) => {
      icon.className = ''
      icon.classList.add('li4')
      icon.classList.add('choose')
    })
  }
  if (savedStyle5 === 'true') {
    const li5 = document.querySelectorAll('.li5')
    li5.forEach((icon) => {
      icon.className = ''
      icon.classList.add('li5')
      icon.classList.add('choose')
    })
  }
  if (savedStyle6 === 'true') {
    const li6 = document.querySelectorAll('.li6')
    li6.forEach((icon) => {
      icon.className = ''
      icon.classList.add('li6')
      icon.classList.add('choose')
    })
  }
})

const str = ref(['第二课堂', '作业评测', '自主练习', '虚拟课堂', '个性教案'])

const str1 = ref(['基本信息', '学籍信息', '培养方案', '系统信息', '学期课表'])

const str2 = ref(['学习中心', '自修课程', '课堂资料', '课表查询', '专业树'])

const str3 = ref(['在线课堂', '课程论坛', '课程作业', '虚拟课堂', '课程中心'])

const str4 = ref(['成绩信息', '综合素质', '第二课堂', '个性教案', '专利情况'])

const str5 = ref(['自主练习', '考试安排', '在线考试', '考试成绩', '考试题库'])

const str6 = ref(['竞赛报名', '请假申请', '修改申请', '学分申请', '信息反馈'])

const btn = () => {
  emitter.emit('fn', str)
  const li1 = document.querySelectorAll('.li1')
  const li2 = document.querySelectorAll('.li2')
  const li3 = document.querySelectorAll('.li3')
  const li4 = document.querySelectorAll('.li4')
  const li5 = document.querySelectorAll('.li5')
  const li6 = document.querySelectorAll('.li6')
  choose1.value = 'false'
  choose2.value = 'false'
  choose3.value = 'false'
  choose4.value = 'false'
  choose5.value = 'false'
  choose6.value = 'false'
  localStorage.setItem('chosenStyle1', choose1.value)
  localStorage.setItem('chosenStyle2', choose2.value)
  localStorage.setItem('chosenStyle3', choose3.value)
  localStorage.setItem('chosenStyle4', choose4.value)
  localStorage.setItem('chosenStyle5', choose5.value)
  localStorage.setItem('chosenStyle6', choose6.value)
  li1.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li1')
  })
  li2.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li2')
  })
  li3.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li3')
  })
  li4.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li4')
  })
  li5.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li5')
  })
  li6.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li6')
  })
}

const btn1 = () => {
  emitter.emit('fn', str1)
  choose1.value = 'true'
  choose2.value = 'false'
  choose3.value = 'false'
  choose4.value = 'false'
  choose5.value = 'false'
  choose6.value = 'false'
  localStorage.setItem('chosenStyle1', choose1.value)
  localStorage.setItem('chosenStyle2', choose2.value)
  localStorage.setItem('chosenStyle3', choose3.value)
  localStorage.setItem('chosenStyle4', choose4.value)
  localStorage.setItem('chosenStyle5', choose5.value)
  localStorage.setItem('chosenStyle6', choose6.value)
  const li1 = document.querySelectorAll('.li1')
  const li2 = document.querySelectorAll('.li2')
  const li3 = document.querySelectorAll('.li3')
  const li4 = document.querySelectorAll('.li4')
  const li5 = document.querySelectorAll('.li5')
  const li6 = document.querySelectorAll('.li6')
  li1.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li1')
    icon.classList.add('choose')
  })
  li2.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li2')
  })
  li3.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li3')
  })
  li4.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li4')
  })
  li5.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li5')
  })
  li6.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li6')
  })
}
const btn2 = () => {
  emitter.emit('fn', str2)
  choose1.value = 'false'
  choose2.value = 'true'
  choose3.value = 'false'
  choose4.value = 'false'
  choose5.value = 'false'
  choose6.value = 'false'
  localStorage.setItem('chosenStyle1', choose1.value)
  localStorage.setItem('chosenStyle2', choose2.value)
  localStorage.setItem('chosenStyle3', choose3.value)
  localStorage.setItem('chosenStyle4', choose4.value)
  localStorage.setItem('chosenStyle5', choose5.value)
  localStorage.setItem('chosenStyle6', choose6.value)
  const li1 = document.querySelectorAll('.li1')
  const li2 = document.querySelectorAll('.li2')
  const li3 = document.querySelectorAll('.li3')
  const li4 = document.querySelectorAll('.li4')
  const li5 = document.querySelectorAll('.li5')
  const li6 = document.querySelectorAll('.li6')
  li1.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    icon.classList.add('li1')
  })
  li2.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    icon.classList.add('li2')
    icon.classList.add('choose')
  })
  li3.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li3')
  })
  li4.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li4')
  })
  li5.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li5')
  })
  li6.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li6')
  })
}
const btn3 = () => {
  emitter.emit('fn', str3)
  choose1.value = 'false'
  choose2.value = 'false'
  choose3.value = 'true'
  choose4.value = 'false'
  choose5.value = 'false'
  choose6.value = 'false'
  localStorage.setItem('chosenStyle1', choose1.value)
  localStorage.setItem('chosenStyle2', choose2.value)
  localStorage.setItem('chosenStyle3', choose3.value)
  localStorage.setItem('chosenStyle4', choose4.value)
  localStorage.setItem('chosenStyle5', choose5.value)
  localStorage.setItem('chosenStyle6', choose6.value)
  const li1 = document.querySelectorAll('.li1')
  const li2 = document.querySelectorAll('.li2')
  const li3 = document.querySelectorAll('.li3')
  const li4 = document.querySelectorAll('.li4')
  const li5 = document.querySelectorAll('.li5')
  const li6 = document.querySelectorAll('.li6')
  li1.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li1')
  })
  li2.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li2')
  })
  li3.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li3')
    icon.classList.add('choose')
  })
  li4.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li4')
  })
  li5.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li5')
  })
  li6.forEach((icon) => {
    icon.className = ''
    icon.classList.add('li6')
  })
}
const btn4 = () => {
  emitter.emit('fn', str4)
  choose1.value = 'false'
  choose2.value = 'false'
  choose3.value = 'false'
  choose4.value = 'true'
  choose5.value = 'false'
  choose6.value = 'false'
  localStorage.setItem('chosenStyle1', choose1.value)
  localStorage.setItem('chosenStyle2', choose2.value)
  localStorage.setItem('chosenStyle3', choose3.value)
  localStorage.setItem('chosenStyle4', choose4.value)
  localStorage.setItem('chosenStyle5', choose5.value)
  localStorage.setItem('chosenStyle6', choose6.value)
  const li1 = document.querySelectorAll('.li1')
  const li2 = document.querySelectorAll('.li2')
  const li3 = document.querySelectorAll('.li3')
  const li4 = document.querySelectorAll('.li4')
  const li5 = document.querySelectorAll('.li5')
  const li6 = document.querySelectorAll('.li6')
  li1.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li1')
  })
  li2.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li2')
  })
  li3.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li3')
  })
  li4.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li4')
    icon.classList.add('choose')
  })
  li5.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li5')
  })
  li6.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li6')
  })
}
const btn5 = () => {
  emitter.emit('fn', str5)
  choose1.value = 'false'
  choose2.value = 'false'
  choose3.value = 'false'
  choose4.value = 'false'
  choose5.value = 'true'
  choose6.value = 'false'
  localStorage.setItem('chosenStyle1', choose1.value)
  localStorage.setItem('chosenStyle2', choose2.value)
  localStorage.setItem('chosenStyle3', choose3.value)
  localStorage.setItem('chosenStyle4', choose4.value)
  localStorage.setItem('chosenStyle5', choose5.value)
  localStorage.setItem('chosenStyle6', choose6.value)
  const li1 = document.querySelectorAll('.li1')
  const li2 = document.querySelectorAll('.li2')
  const li3 = document.querySelectorAll('.li3')
  const li4 = document.querySelectorAll('.li4')
  const li5 = document.querySelectorAll('.li5')
  const li6 = document.querySelectorAll('.li6')
  li1.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li1')
  })
  li2.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li2')
  })
  li3.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li3')
  })
  li4.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li4')
  })
  li5.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li5')
    icon.classList.add('choose')
  })
  li6.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li6')
  })
}
const btn6 = () => {
  emitter.emit('fn', str6)
  choose1.value = 'false'
  choose2.value = 'false'
  choose3.value = 'false'
  choose4.value = 'false'
  choose5.value = 'false'
  choose6.value = 'true'
  localStorage.setItem('chosenStyle1', choose1.value)
  localStorage.setItem('chosenStyle2', choose2.value)
  localStorage.setItem('chosenStyle3', choose3.value)
  localStorage.setItem('chosenStyle4', choose4.value)
  localStorage.setItem('chosenStyle5', choose5.value)
  localStorage.setItem('chosenStyle6', choose6.value)
  const li1 = document.querySelectorAll('.li1')
  const li2 = document.querySelectorAll('.li2')
  const li3 = document.querySelectorAll('.li3')
  const li4 = document.querySelectorAll('.li4')
  const li5 = document.querySelectorAll('.li5')
  const li6 = document.querySelectorAll('.li6')
  li1.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li1')
  })
  li2.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li2')
  })
  li3.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li3')
  })
  li4.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li4')
  })
  li5.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li5')
  })
  li6.forEach((icon) => {
    // 移除当前所有类名
    icon.className = ''
    // 添加新的类名 'icon1'
    icon.classList.add('li6')
    icon.classList.add('choose')
  })
}
</script>

<template>
  <div class="body">
    <div class="Title" @click="btn"></div>
    <div class="ul">
      <div class="D" style="height: 0.5vh"></div>
      <div class="li1" @click="btn1">
        <svg
          t="1714309782342"
          class="icon1"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8129"
        >
          <path
            d="M861.270443 777.987216H581.007714a42.318713 42.318713 0 0 1-42.318712-42.318713 42.318713 42.318713 0 0 1 42.318712-42.318712h280.262729a42.318713 42.318713 0 0 1 42.318713 42.318712 42.318713 42.318713 0 0 1-42.318713 42.318713z"
            fill="#707070"
            p-id="8130"
          ></path>
          <path
            d="M861.270443 896.479612H581.007714a42.318713 42.318713 0 0 1-42.318712-42.318713 42.318713 42.318713 0 0 1 42.318712-42.318713h280.262729a42.318713 42.318713 0 0 1 42.318713 42.318713 42.318713 42.318713 0 0 1-42.318713 42.318713z"
            fill="#707070"
            p-id="8131"
          ></path>
          <path
            d="M861.270443 1013.843509H581.007714a42.318713 42.318713 0 0 1-42.318712-42.318713 42.318713 42.318713 0 0 1 42.318712-42.318713h280.262729a42.318713 42.318713 0 0 1 42.318713 42.318713 42.318713 42.318713 0 0 1-42.318713 42.318713z"
            fill="#707070"
            p-id="8132"
          ></path>
          <path
            d="M809.641613 431.255896a226.094776 226.094776 0 0 1-43.334362 106.812431 289.403571 289.403571 0 0 1-120.692968 103.03196 267.39784 267.39784 0 0 1-145.519948 21.215781 42.318713 42.318713 0 0 1-36.845492-47.171259 42.318713 42.318713 0 0 1 47.171258-36.845492 182.873264 182.873264 0 0 0 96.825215-12.752039l0.620675-0.33855a208.038792 208.038792 0 0 0 90.787745-78.035706 141.626626 141.626626 0 0 0 27.591801-72.788186V411.902138l0.282124-2.426273A193.932555 193.932555 0 0 0 341.7095 362.248182a42.318713 42.318713 0 0 1-47.171259 36.845492 42.318713 42.318713 0 0 1-36.845492-47.171258 278.513555 278.513555 0 0 1 553.133788 65.791492 143.714349 143.714349 0 0 1-1.128499 13.541988z"
            fill="#707070"
            p-id="8133"
          ></path>
          <path
            d="M549.409742 621.125854a42.318713 42.318713 0 0 1-42.318713 42.318713A331.101609 331.101609 0 0 0 188.797884 981.737712a42.318713 42.318713 0 0 1-42.318713 42.318713 42.318713 42.318713 0 0 1-42.318713-42.318713 395.933877 395.933877 0 0 1 125.60194-285.453824 406.259643 406.259643 0 0 1 277.328631-117.476747 42.318713 42.318713 0 0 1 42.318713 42.318713z"
            fill="#707070"
            p-id="8134"
          ></path>
          <path
            d="M774.376019 243.191536a226.094776 226.094776 0 0 1 35.491294 109.690104 289.403571 289.403571 0 0 1-26.237602 156.522812 267.39784 267.39784 0 0 1-97.840864 109.746529 42.318713 42.318713 0 0 1-58.512673-12.413489 42.318713 42.318713 0 0 1 12.413489-58.569099 182.873264 182.873264 0 0 0 66.017192-71.998237l0.282125-0.620674a208.038792 208.038792 0 0 0 19.353757-118.153846 141.626626 141.626626 0 0 0-25.729777-73.52171l-1.523474-1.862024-1.354198-2.031298a193.932555 193.932555 0 0 0-325.233415 211.198589 42.318713 42.318713 0 0 1-12.413489 58.512674 42.318713 42.318713 0 0 1-58.569098-12.413489 278.513555 278.513555 0 0 1 466.07009-305.146132c1.749173 2.256998 4.513996 5.981045 7.786643 11.05929z"
            fill="#707070"
            p-id="8135"
          ></path>
        </svg>
        <div class="name1">个人信息</div>
      </div>

      <div class="li2" @click="btn2">
        <svg
          t="1714310130850"
          class="icon2"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6012"
        >
          <path
            d="M985.6 719.36c-20.48 0-38.4-17.92-38.4-38.4V176.64c0-46.08-35.84-81.92-81.92-81.92H76.8v465.92c0 46.08 35.84 81.92 81.92 81.92h655.36c20.48 0 38.4 17.92 38.4 38.4s-17.92 38.4-38.4 38.4H158.72c-87.04 0-158.72-71.68-158.72-158.72V56.32C0 35.84 17.92 17.92 38.4 17.92h826.88C952.32 17.92 1024 89.6 1024 176.64v504.32c0 20.48-17.92 38.4-38.4 38.4zM737.28 1006.08c-10.24 0-17.92-2.56-25.6-10.24l-176.64-158.72c-17.92-15.36-46.08-15.36-64 2.56l-156.16 153.6c-15.36 12.8-40.96 10.24-53.76-5.12-12.8-12.8-12.8-33.28 0-48.64l156.16-156.16c46.08-46.08 120.32-48.64 168.96-5.12l176.64 158.72c15.36 15.36 17.92 38.4 2.56 53.76-7.68 10.24-17.92 15.36-28.16 15.36z"
            p-id="6013"
            fill="#707070"
          ></path>
          <path
            d="M560.64 299.52h-358.4c-20.48 0-38.4-17.92-38.4-38.4S179.2 222.72 202.24 222.72h358.4c20.48 0 38.4 17.92 38.4 38.4s-17.92 38.4-38.4 38.4zM381.44 478.72h-179.2c-20.48 0-38.4-17.92-38.4-38.4s17.92-38.4 38.4-38.4h179.2c20.48 0 38.4 17.92 38.4 38.4s-17.92 38.4-38.4 38.4zM798.72 547.84h-10.24l-207.36-56.32c-20.48-5.12-33.28-25.6-28.16-46.08 2.56-7.68 5.12-12.8 10.24-17.92l153.6-151.04c15.36-15.36 38.4-15.36 53.76 0 5.12 5.12 7.68 10.24 10.24 17.92l56.32 207.36c5.12 20.48-7.68 40.96-28.16 46.08h-10.24zM665.6 435.2l79.36 20.48-20.48-76.8L665.6 435.2z"
            p-id="6014"
            fill="#707070"
          ></path>
        </svg>
        <div class="name2">我的课堂</div>
      </div>

      <div class="li3" @click="btn3">
        <svg
          t="1714310347896"
          class="icon3"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6121"
        >
          <path
            d="M261.2 827.3c0 25-18.4 45.3-43.4 45.3h-46.7c-25 0-43.4-20.3-43.4-45.3v-41.5h133.5v41.5z m0 0M127.7 378.7h133.5v361.8H127.7zM261.2 331.5l-133.5 1.4v-46.7c0-25 18.4-45.3 43.4-45.3h46.7c25 0 43.4 20.3 43.4 45.3v45.3z m0 0M489.6 827.3c0 25-20.3 45.3-45.3 45.3h-93.4c-25 0-41.5-20.3-41.5-45.3v-41h180.2v41z m0 0M489.6 739.1l-180.2-0.5V286.7h180.2v452.4z m0 0M489.6 241.9l-180.2-1.4v-47.2c0-25 16.5-45.3 41.5-45.3h93.4c25 0 45.3 20.3 45.3 45.3v48.6z m0 0M761.3 828.7c0 25-20.3 45.3-45.3 45.3H579.2c-25 0-45.3-20.3-45.3-45.3v-542c0-25 20.3-45.3 45.3-45.3H716c25 0 45.3 20.3 45.3 45.3v542z m0 0M897.1 828.7c0 25-17.4 45.3-42.5 45.3h-7.1c-25 0-40.6-18.4-40.6-43.4V741l90.1-1.9v89.6z m0 0M897.1 691.4l-90.1 1.9v-133l90.1-0.5v131.6z m0 0M897.1 512.2H807V423c0-25 15.6-47.2 40.6-47.2h7.1c25 0 42.5 20.3 42.5 45.3v91.1z m0 0"
            fill="#707070"
            p-id="6122"
          ></path>
        </svg>
        <div class="name3">课程学习</div>
      </div>
      <div class="li4" @click="btn4">
        <svg
          t="1714310509390"
          class="icon4"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4438"
        >
          <path
            d="M969.472 638.464h-3.0208V84.3776a27.0336 27.0336 0 0 0-27.136-27.136H84.5312a27.0336 27.0336 0 0 0-27.1872 27.136V638.464c0 15.0528 12.0832 27.136 27.136 27.136h857.7536a27.0336 27.0336 0 0 0 27.1872-27.136zM942.2848 0c45.312 0 84.5824 36.1472 81.5616 84.3264v557.1584c0 48.2304-36.2496 84.3264-84.5824 84.3264H84.5824C39.2704 725.8112 0 686.6944 0 641.536V84.3264C0 36.1472 39.2704 0 84.5824 0h857.7024z m-277.8624 813.1584v150.5792h271.872V1024H90.624v-60.2624h271.7696v-150.528h302.08z m-39.2704-367.4112l102.7072 96.3584h160.0512v60.2624h-187.2384l-120.832-120.4736a140.8512 140.8512 0 0 1-63.3856 15.0528 149.3504 149.3504 0 0 1-151.04-150.5792c0-18.0736 3.072-39.168 12.1344-57.2416L268.8 180.6848H129.8432V120.4736h163.1232l117.76 117.4528a144.0256 144.0256 0 0 1 102.7072-42.1376V256c-51.3536 0-90.624 39.168-90.624 90.368 0 51.2 39.2704 90.3168 90.624 90.3168 51.3536 0 90.624-39.1168 90.624-90.3168h60.416c0 39.1168-15.1552 72.2432-39.3216 99.328z m-12.0832-262.0416l63.488-63.232h208.384v60.2112h-184.2688l-45.312 45.2096c3.072 5.9904 3.072 9.0112 3.072 15.0528 0 33.1264-27.2384 60.2112-60.416 60.2112-33.28 0-60.416-27.136-60.416-60.2112 0-33.1264 27.136-60.2624 60.416-60.2624 2.9696 0 9.0112 0 15.0528 3.072z m-483.2256 418.6624v-60.2624h181.248v60.2624h-181.248z m0-210.8416V331.264h151.04v60.2624h-151.04z"
            fill="#707070"
            p-id="4439"
          ></path>
        </svg>
        <div class="name4">学习信息</div>
      </div>

      <div class="li5" @click="btn5">
        <svg
          t="1714310541387"
          class="icon5"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1200"
        >
          <path
            d="M841.984 413.610667a31.232 31.232 0 0 0 23.381333-30.378667V101.674667c0-32.256-26.154667-58.410667-58.410666-58.410667H144.128c-32.256 0-58.410667 26.154667-58.410667 58.453333v818.730667c0 32.256 26.154667 58.410667 58.453334 58.410667h222.634666c15.445333 0 28.586667-11.093333 31.274667-26.282667l17.621333-100.693333c6.058667-34.56 22.613333-66.389333 47.36-91.178667l305.621334-305.621333a158.293333 158.293333 0 0 1 73.301333-41.472z m-366.421333 151.850666c0 12.757333-10.368 23.082667-23.125334 23.082667H264.789333a23.125333 23.125333 0 0 1-23.125333-23.082667v-31.744c0-12.8 10.325333-23.125333 23.125333-23.125333h187.648c12.8 0 23.125333 10.368 23.125334 23.125333v31.744zM631.466667 409.514667c0 12.8-10.325333 23.125333-23.125334 23.125333H264.789333a23.125333 23.125333 0 0 1-23.125333-23.125333v-31.744c0-12.757333 10.325333-23.125333 23.125333-23.125334h343.552c12.8 0 23.125333 10.368 23.125334 23.125334v31.744z m77.952-155.904c0 12.757333-10.325333 23.125333-23.082667 23.125333h-421.546667a23.125333 23.125333 0 0 1-23.125333-23.125333V221.866667c0-12.8 10.325333-23.125333 23.125333-23.125334h421.546667c12.757333 0 23.125333 10.368 23.125333 23.125334v31.744z"
            fill="#707070"
            p-id="1201"
          ></path>
          <path
            d="M914.645333 538.24a116.565333 116.565333 0 0 0-82.688-34.218667c-29.909333 0-59.861333 11.392-82.688 34.218667l-220.586666 220.586667c-17.92 17.92-29.824 40.874667-34.176 65.792l-21.333334 121.685333a32.426667 32.426667 0 0 0 32.341334 32.554667l122.282666-20.608c25.216-4.266667 48.512-16.213333 66.56-34.346667l220.288-220.245333a116.949333 116.949333 0 0 0 0-165.418667z m-299.776 343.125333l-52.736 8.874667 9.130667-52.181333c0.853333-4.693333 2.432-9.130667 4.608-13.269334l52.181333 52.181334c-4.138667 2.133333-8.576 3.626667-13.226666 4.394666z m244.650667-232.874666l-3.072 3.114666-55.125333-55.125333 3.072-3.114667a38.826667 38.826667 0 0 1 55.125333 0 39.04 39.04 0 0 1 0 55.125334z"
            fill="#707070"
            p-id="1202"
          ></path>
        </svg>
        <div class="name5">考试练习</div>
      </div>

      <div class="li6" @click="btn6">
        <svg
          t="1714310603746"
          class="icon6"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1484"
        >
          <path
            d="M213.333333 85.333333H170.666667a42.666667 42.666667 0 0 0-42.666667 42.666667v512h85.333333zM938.666667 725.333333h-270.933334a42.666667 42.666667 0 0 0-30.72 12.373334 170.666667 170.666667 0 0 1-125.013333 51.2 170.666667 170.666667 0 0 1-125.013333-51.2 42.666667 42.666667 0 0 0-31.146667-12.373334H85.333333a42.666667 42.666667 0 0 0-42.666666 42.666667v213.333333a42.666667 42.666667 0 0 0 42.666666 42.666667h853.333334a42.666667 42.666667 0 0 0 42.666666-42.666667v-213.333333a42.666667 42.666667 0 0 0-42.666666-42.666667z"
            fill="#707070"
            p-id="1485"
          ></path>
          <path
            d="M512 725.333333a85.333333 85.333333 0 0 0 85.333333-85.333333h298.666667V42.666667a42.666667 42.666667 0 0 0-42.666667-42.666667H341.333333a42.666667 42.666667 0 0 0-42.666666 42.666667v597.333333h128a85.333333 85.333333 0 0 0 85.333333 85.333333zM469.333333 170.666667h256a42.666667 42.666667 0 0 1 0 85.333333h-256a42.666667 42.666667 0 0 1 0-85.333333z m0 213.333333h256a42.666667 42.666667 0 0 1 0 85.333333h-256a42.666667 42.666667 0 0 1 0-85.333333z"
            fill="#707070"
            p-id="1486"
          ></path>
        </svg>
        <div class="name6">业务中心</div>
      </div>
    </div>
    <div class="Down">
      <div class="KeB">
        <svg
          t="1714322972406"
          class="ic"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4379"
        >
          <path
            d="M735.5 866.9H295.7c-77.7 0-140.9-63.2-140.9-140.9V377.7c0-12.6 10.2-22.8 22.8-22.8s22.8 10.2 22.8 22.8V726c0 52.5 42.7 95.3 95.3 95.3h439.8c52.5 0 95.3-42.7 95.3-95.3V400.5H282.5c-12.6 0-22.8-10.2-22.8-22.8s10.2-22.8 22.8-22.8h593.9V726c0 77.7-63.2 140.9-140.9 140.9z"
            p-id="4380"
          ></path>
          <path
            d="M224.9 729.2V432.8h581.5v296.4c0 37.4-30.3 67.7-67.7 67.7H292.5c-37.3-0.1-67.6-30.4-67.6-67.7z"
            fill="#F4A651"
            p-id="4381"
          ></path>
          <path
            d="M876.4 399.5H282.5c-12.6 0-22.8-10.2-22.8-22.8s10.2-22.8 22.8-22.8h548.3v-66.7c0-36.8-29.9-66.7-66.7-66.7H267.2c-36.8 0-66.7 29.9-66.7 66.7v89.5c0 12.6-10.2 22.8-22.8 22.8s-22.8-10.2-22.8-22.8v-89.5c0-61.9 50.4-112.3 112.3-112.3h496.9c61.9 0 112.3 50.4 112.3 112.3v112.3z"
            p-id="4382"
          ></path>
          <path
            d="M295.6 537.1m-29.6 0a29.6 29.6 0 1 0 59.2 0 29.6 29.6 0 1 0-59.2 0Z"
            fill="#FFEB99"
            p-id="4383"
          ></path>
          <path
            d="M586.9 537.1m-29.6 0a29.6 29.6 0 1 0 59.2 0 29.6 29.6 0 1 0-59.2 0Z"
            fill="#FFEB99"
            p-id="4384"
          ></path>
          <path
            d="M441.2 537.1m-29.6 0a29.6 29.6 0 1 0 59.2 0 29.6 29.6 0 1 0-59.2 0Z"
            fill="#FFEB99"
            p-id="4385"
          ></path>
          <path
            d="M732.5 537.1m-29.6 0a29.6 29.6 0 1 0 59.2 0 29.6 29.6 0 1 0-59.2 0Z"
            fill="#FFEB99"
            p-id="4386"
          ></path>
          <path
            d="M295.6 690.6m-29.6 0a29.6 29.6 0 1 0 59.2 0 29.6 29.6 0 1 0-59.2 0Z"
            fill="#FFEB99"
            p-id="4387"
          ></path>
          <path
            d="M586.9 690.6m-29.6 0a29.6 29.6 0 1 0 59.2 0 29.6 29.6 0 1 0-59.2 0Z"
            fill="#FFEB99"
            p-id="4388"
          ></path>
          <path
            d="M441.2 690.6m-29.6 0a29.6 29.6 0 1 0 59.2 0 29.6 29.6 0 1 0-59.2 0Z"
            fill="#FFEB99"
            p-id="4389"
          ></path>
          <path
            d="M732.5 690.6m-29.6 0a29.6 29.6 0 1 0 59.2 0 29.6 29.6 0 1 0-59.2 0Z"
            fill="#FFEB99"
            p-id="4390"
          ></path>
          <path
            d="M339.3 254.1h-1.6c-12.6 0-22.8-10.2-22.8-22.8v-78.4c0-12.6 10.2-22.8 22.8-22.8h1.6c12.6 0 22.8 10.2 22.8 22.8v78.4c0 12.6-10.2 22.8-22.8 22.8zM671.4 254.1h-1.6c-12.6 0-22.8-10.2-22.8-22.8v-78.4c0-12.6 10.2-22.8 22.8-22.8h1.6c12.6 0 22.8 10.2 22.8 22.8v78.4c0 12.6-10.2 22.8-22.8 22.8z"
            p-id="4391"
          ></path>
        </svg>
        <div class="na">课表查询</div>
      </div>
      <div class="Tong">
        <svg
          t="1714323294617"
          class="ic1"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="22101"
        >
          <path
            d="M704 888.888889H149.333333c-31.288889 0-56.888889-25.6-56.888889-56.888889V192c0-31.288889 25.6-56.888889 56.888889-56.888889h725.333334c31.288889 0 56.888889 25.6 56.888889 56.888889v640c0 31.288889-25.6 56.888889-56.888889 56.888889H704z"
            fill="#f47b29"
            p-id="22102"
            data-spm-anchor-id="a313x.search_index.0.i14.4b113a812Vvtiu"
            class="selected"
          ></path>
          <path
            d="M704 888.888889H149.333333c-31.288889 0-56.888889-25.6-56.888889-56.888889V192c0-31.288889 25.6-56.888889 56.888889-56.888889h725.333334c31.288889 0 56.888889 25.6 56.888889 56.888889v469.333333l-227.555556 227.555556z"
            fill="#FFFFFF"
            p-id="22103"
          ></path>
          <path
            d="M92.444444 305.777778V192c0-31.288889 25.6-56.888889 56.888889-56.888889h725.333334c31.288889 0 56.888889 25.6 56.888889 56.888889v113.777778H92.444444z"
            fill="#FFC44F"
            p-id="22104"
          ></path>
          <path
            d="M704 888.888889v-170.666667c0-31.288889 25.6-56.888889 56.888889-56.888889h170.666667l-227.555556 227.555556z"
            fill="#FFFFFF"
            p-id="22105"
          ></path>
          <path
            d="M284.444444 497.777778h455.111112c15.644444 0 28.444444-12.8 28.444444-28.444445s-12.8-28.444444-28.444444-28.444444H284.444444c-15.644444 0-28.444444 12.8-28.444444 28.444444s12.8 28.444444 28.444444 28.444445z"
            fill="#f47b29"
            p-id="22106"
            data-spm-anchor-id="a313x.search_index.0.i12.4b113a812Vvtiu"
            class="selected"
          ></path>
          <path
            d="M874.666667 106.666667H149.333333c-23.466667 0-44.8 9.244444-60.444444 24.888889S64 168.533333 64 192v640c0 46.933333 38.4 85.333333 85.333333 85.333333h725.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V192c0-46.933333-38.4-85.333333-85.333333-85.333333z m28.444444 725.333333c0 15.644444-12.8 28.444444-28.444444 28.444444h-101.688889l130.133333-130.133333V832z m-170.666667-12.088889V718.222222c0-15.644444 12.8-28.444444 28.444445-28.444444h101.688889L732.444444 819.911111zM903.111111 632.888889h-142.222222c-46.933333 0-85.333333 38.4-85.333333 85.333333v142.222222H149.333333c-15.644444 0-28.444444-12.8-28.444444-28.444444V334.222222h782.222222v298.666667z m0-355.555556H120.888889V192c0-7.822222 2.844444-14.933333 8.533333-19.911111 4.977778-4.977778 12.088889-8.533333 19.911111-8.533333h725.333334c15.644444 0 28.444444 12.8 28.444444 28.444444v85.333333z"
            fill="#f47b29"
            p-id="22107"
            data-spm-anchor-id="a313x.search_index.0.i11.4b113a812Vvtiu"
            class="selected"
          ></path>
          <path
            d="M611.555556 625.777778H284.444444c-15.644444 0-28.444444-12.8-28.444444-28.444445s12.8-28.444444 28.444444-28.444444h327.111112c15.644444 0 28.444444 12.8 28.444444 28.444444s-12.8 28.444444-28.444444 28.444445zM455.111111 753.777778H284.444444c-15.644444 0-28.444444-12.8-28.444444-28.444445s12.8-28.444444 28.444444-28.444444h170.666667c15.644444 0 28.444444 12.8 28.444445 28.444444s-12.8 28.444444-28.444445 28.444445z"
            fill="#f47b29"
            p-id="22108"
            data-spm-anchor-id="a313x.search_index.0.i13.4b113a812Vvtiu"
            class="selected"
          ></path>
        </svg>
        <div class="na">待办事项</div>
      </div>
    </div>
    <div class="St">
      <svg
        t="1714317816017"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="8344"
      >
        <path
          d="M972.353753 405.620568l-98.014307-19.641248a387.002968 387.002968 0 0 0-17.178095-41.233826l55.53291-83.299366a63.946019 63.946019 0 0 0-7.997251-80.708257l-61.546843-61.546843a63.850052 63.850052 0 0 0-80.708256-7.997251l-83.299366 55.500922a386.747056 386.747056 0 0 0-41.297804-17.146106L618.203493 51.502296A63.91403 63.91403 0 0 0 555.473056 0.063978h-87.01009a63.978008 63.978008 0 0 0-62.730437 51.438318l-19.641248 98.046297c-14.171129 4.926307-27.9264 10.716316-41.233826 17.146106L261.590078 111.193777a63.850052 63.850052 0 0 0-80.740245 7.997251L119.334979 180.737871a63.978008 63.978008 0 0 0-7.997251 80.708257l55.500921 83.299366c-6.461779 13.339415-12.219799 27.094686-17.146106 41.265815l-98.078285 19.609259A63.978008 63.978008 0 0 0 0.17594 468.351004v87.010091a63.978008 63.978008 0 0 0 51.438318 62.730436l98.046296 19.673237c4.926307 14.171129 10.716316 27.9264 17.146106 41.233826L111.337728 762.29796a63.946019 63.946019 0 0 0 7.997251 80.708257l61.546843 61.546843a63.850052 63.850052 0 0 0 80.708256 7.997251l83.299366-55.532911c13.339415 6.493768 27.094686 12.251788 41.265815 17.178095l19.609259 98.014308a63.978008 63.978008 0 0 0 62.730437 51.470307h87.01009a63.978008 63.978008 0 0 0 62.730437-51.470307l19.673237-98.014308c14.171129-4.926307 27.9264-10.748305 41.233826-17.178095l83.299366 55.532911a63.91403 63.91403 0 0 0 80.708256-7.997251l61.546843-61.546843a63.978008 63.978008 0 0 0 7.997251-80.708257l-55.53291-83.299366c6.493768-13.371404 12.251788-27.126675 17.178095-41.297804l98.014307-19.609259A63.978008 63.978008 0 0 0 1023.82406 555.361095v-87.010091c0-30.485521-21.560589-56.748493-51.470307-62.730436z m-110.585986 169.381775a63.882041 63.882041 0 0 0-47.855549 41.74565c-4.126581 11.803942-8.924932 23.256006-14.299085 34.35619a63.850052 63.850052 0 0 0 4.318515 63.402205l55.532911 83.299366-61.546843 61.546844-83.299366-55.532911a63.882041 63.882041 0 0 0-63.338228-4.382494c-11.132173 5.374153-22.552248 10.236481-34.420168 14.363063a63.91403 63.91403 0 0 0-41.681672 47.85555l-19.673237 98.078285h-87.01009l-19.609259-98.078285a63.882041 63.882041 0 0 0-41.713661-47.85555 325.328168 325.328168 0 0 1-34.388179-14.299085 63.786074 63.786074 0 0 0-63.370217 4.318516l-83.299366 55.532911-61.546843-61.546844 55.500922-83.299366c12.571678-18.873512 14.203118-42.993221 4.382493-63.338227a323.280872 323.280872 0 0 1-14.331074-34.420168 63.978008 63.978008 0 0 0-47.855549-41.681672l-98.046297-19.673237L64.153947 468.351004l98.078286-19.609259a63.946019 63.946019 0 0 0 47.855549-41.713661c4.126581-11.803942 8.892943-23.287995 14.299085-34.388179a63.818063 63.818063 0 0 0-4.350504-63.370216L164.56743 225.970323 226.082284 164.423479l83.299366 55.500922a63.882041 63.882041 0 0 0 63.338228 4.382494 322.769048 322.769048 0 0 1 34.388179-14.331074 63.946019 63.946019 0 0 0 41.713661-47.85555l19.641248-98.046296 87.01009-0.031989 19.609259 98.078285a63.91403 63.91403 0 0 0 41.74565 47.85555c11.803942 4.126581 23.256006 8.892943 34.35619 14.299085a63.91403 63.91403 0 0 0 63.402206-4.350505l83.299366-55.500922 61.546843 61.546844-55.532911 83.299366a64.169942 64.169942 0 0 0-4.382493 63.338227c5.374153 11.100184 10.236481 22.552248 14.363063 34.388179a63.882041 63.882041 0 0 0 47.855549 41.713661l98.014308 19.641248 0.095967 87.010091-98.078286 19.641248z"
          fill="#707070"
          p-id="8345"
        ></path>
        <path
          d="M512 287.933023A223.923026 223.923026 0 1 0 512.031989 735.747087 223.923026 223.923026 0 0 0 512 287.901034z m0 419.887664a195.964637 195.964637 0 1 1 195.932648-195.932649A195.996626 195.996626 0 0 1 512 707.820687z"
          fill="#707070"
          p-id="8346"
        ></path>
        <path
          d="M512 383.900034a127.956015 127.956015 0 1 0 0 255.912031 127.956015 127.956015 0 0 0 0-255.912031z m0 223.955016a95.999 95.999 0 0 1 0-191.934023 95.999 95.999 0 0 1 0 191.934023z"
          fill="#707070"
          p-id="8347"
        ></path>
      </svg>
      <div class="names">账户设置</div>
    </div>
    <div class="Out">
      <svg
        t="1714319201750"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4739"
      >
        <path
          d="M437.377667 824.250485c0-21.280133-20.145193-18.442782-33.05514-18.442782H255.929066c-45.397617 0-82.425048-41.425326-82.425048-91.930175V309.413134c0-50.504849 37.169299-91.930175 82.425048-91.930175h164.991965c23.266279 0 16.456636-39.013577 16.456636-55.186478 0-9.788861-7.660848-18.442782-16.456636-18.442782H255.929066c-81.999446 0-148.393461 74.054863-148.393461 165.417567v404.464395c0 91.362704 66.535883 165.417567 148.393461 165.417567h164.991965c23.124411 0.283735 16.456636-38.87171 16.456636-54.902743z m478.37739-312.53422c0-9.788861-3.546689-19.010252-9.788861-25.819895L625.494043 173.36215c-6.242172-6.95151-14.47049-10.923802-23.266279-10.923801-18.017179 0-33.05514 16.598504-33.05514 36.743696V364.599612H338.354115c-18.017179 0-33.05514 16.598504-33.05514 36.743696v220.604046c0 20.145193 14.896093 36.743696 33.05514 36.743696h230.960377V824.250485c0 20.145193 14.896093 36.743696 33.055139 36.743696 8.795788 0 17.024106-3.972291 23.266279-10.923801l280.472153-312.53422c5.958437-6.809643 9.646994-16.031034 9.646994-25.819895z m0 0"
          p-id="4740"
          fill="#707070"
        ></path>
      </svg>
      <div class="names">账户登出</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.choose {
  background: #cdded6;
  color: white;
}

.body {
  width: 15vw;
  height: 96vh;
  background: #fff;
  overflow: hidden;

  .Down {
    width: 80%;
    height: 12vh;
    background: rgba(82, 79, 79, 0.1);
    border-radius: 0.7vw;
    margin: -1vh auto;
    .na {
      height: 4vh;
      line-height: 4vh;
      font-weight: bolder;
      text-align: center;
      font-size: 1vw;
      margin-top: -1vh;
    }
    .KeB {
      width: 50%;
      height: 100%;
      display: inline-block;
      .ic {
        width: 3.8vw;
        margin-top: 0.8vh;
        margin-left: 0.6vw;
      }
    }
    .Tong {
      width: 50%;
      height: 100%;
      display: inline-block;
      .ic1 {
        width: 3.4vw;
        margin: 0.4vh 1.8vh;
      }
    }

    .KeB:hover,
    .Tong:hover {
      cursor: pointer;
      .na {
        font-size: 1.2vw;
      }
    }
  }

  .ul {
    width: 80%;
    height: 55.4%;
    background: rgba(82, 79, 79, 0.1);
    margin: 2.5vh auto;
    border-radius: 0.7vw;

    .li1,
    .li2,
    .li3,
    .li4,
    .li5,
    .li6 {
      width: 9vw;
      margin: 2.2vh auto;
      height: 6vh;
      position: relative;
      //background: #2f2e2e;
      border-radius: 0.7vw;

      .icon1,
      .icon2,
      .icon4,
      .icon5,
      .icon6 {
        width: 2vw;
        position: absolute;
        margin-top: 1vh;
        margin-left: 1vw;
      }

      .icon3 {
        width: 2.5vw;
        position: absolute;
        margin-top: 0.5vh;
        margin-left: 0.8vw;
      }

      .name1,
      .name2,
      .name3,
      .name4,
      .name5,
      .name6 {
        width: 5.5vw;
        height: 6vh;
        margin-left: 3vw;
        position: absolute;
        line-height: 6vh;
        text-align: center;
        font-size: 1vw;
        font-weight: bolder;
      }
    }

    .li1:hover,
    .li2:hover,
    .li3:hover,
    .li4:hover,
    .li5:hover,
    .li6:hover {
      cursor: pointer;

      .name1,
      .name2,
      .name3,
      .name4,
      .name5,
      .name6 {
        font-size: 1.2vw;
      }
    }
  }

  .Out {
    width: 80%;
    height: 6vh;
    margin: -2vh auto;
    border-radius: 0.7vw;
    position: relative;
  }

  .Out:hover {
    cursor: pointer;

    .names {
      font-size: 1.2vw;
    }
  }

  .icon {
    width: 2.3vw;
    margin-top: 0.8vh;
    margin-left: 1.5vw;
    position: absolute;
  }

  .names {
    width: 65%;
    margin-left: 3vw;
    height: 100%;
    line-height: 6vh;
    text-align: center;
    font-size: 1vw;
    font-weight: bolder;
    position: absolute;
  }

  .St {
    width: 80%;
    height: 6vh;
    margin: 2vh auto;
    border-radius: 0.7vw;
    position: relative;
  }

  .St:hover {
    cursor: pointer;

    .names {
      font-size: 1.2vw;
    }
  }

  .Title {
    width: 80%;
    height: 10.5%;
    background: red;
    margin: 2.5vh auto;
    border-radius: 0.7vw;
  }

  .Title:hover {
    cursor: pointer;
  }
}
</style>