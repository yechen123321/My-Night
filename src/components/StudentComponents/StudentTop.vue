<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import emitter from '@/plugins/Bus'

const choose01 = ref(false)
const choose02 = ref(false)
const choose03 = ref(false)
const choose04 = ref(false)
const choose05 = ref(false)
const choose06 = ref(false)
const choose07 = ref(false)

const str = ref(['第二课堂', '课程作业', '自主练习', '虚拟课堂', '个性教案'])

const str1 = ref(['基本信息', '学籍信息', '培养方案', '系统信息', '学期课表'])

const str2 = ref(['学习中心', '自修课程', '课堂资料', '课表查询', '专业树'])

const str3 = ref(['在线课堂', '课程论坛', '课程作业', '虚拟课堂', '课程中心'])

const str4 = ref(['成绩信息', '综合素质', '第二课堂', '个性教案', '专利情况'])

const str5 = ref(['自主练习', '考试安排', '在线考试', '考试成绩', '考试题库'])

const str6 = ref(['竞赛报名', '请假申请', '修改申请', '学分申请', '信息反馈'])

const s = ref(['第二课堂', '课程作业', '自主练习', '虚拟课堂', '个性教案'])

onBeforeMount(() => {
  // 保存最新的 s.value 到 localStorage
  emitter.on('fn', (e) => {
    if (e && typeof e === 'object') {
      s.value = e.value // 检查 e 是否是一个对象，确保正确赋值
      localStorage.setItem('previousData', JSON.stringify(s.value))
    }
    const li1 = document.querySelectorAll('.d1')
    const li2 = document.querySelectorAll('.d2')
    const li3 = document.querySelectorAll('.d3')
    const li4 = document.querySelectorAll('.d4')
    const li5 = document.querySelectorAll('.d5')
    li1.forEach((icon) => {
      icon.className = ''
      icon.classList.add('d1')
    })
    li2.forEach((icon) => {
      icon.className = ''
      icon.classList.add('d2')
    })
    li3.forEach((icon) => {
      icon.className = ''
      icon.classList.add('d3')
    })
    li4.forEach((icon) => {
      icon.className = ''
      icon.classList.add('d4')
    })
    li5.forEach((icon) => {
      icon.className = ''
      icon.classList.add('d5')
    })
    choose01.value = false
    choose02.value = false
    choose03.value = false
    choose04.value = false
    choose05.value = false
    choose06.value = false
    choose07.value = false
    if (s.value.toString() === str.value.toString()) {
      num.value = '00'
      emitter.emit('fn1', num)
      choose01.value = true
    }
    if (s.value.toString() === str1.value.toString()) {
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
        icon.classList.add('choose')
      })
      choose02.value = true
      num.value = '11'
      emitter.emit('fn1', num)
    }
    if (s.value.toString() === str2.value.toString()) {
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
        icon.classList.add('choose')
      })
      choose03.value = true
      num.value = '21'
      emitter.emit('fn1', num)
    }
    if (s.value.toString() === str3.value.toString()) {
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
        icon.classList.add('choose')
      })
      choose04.value = true
      num.value = '31'
      emitter.emit('fn1', num)
    }
    if (s.value.toString() === str4.value.toString()) {
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
        icon.classList.add('choose')
      })
      choose05.value = true
      num.value = '41'
      emitter.emit('fn1', num)
    }
    if (s.value.toString() === str5.value.toString()) {
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
        icon.classList.add('choose')
      })
      choose06.value = true
      num.value = '51'
      emitter.emit('fn1', num)
    }
    if (s.value.toString() === str6.value.toString()) {
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
        icon.classList.add('choose')
      })
      choose07.value = true
      num.value = '61'
      emitter.emit('fn1', num)
    }
    localStorage.setItem('chosenStyle01', num.value)
  })
})

onMounted(() => {
  const savedStyle01 = localStorage.getItem('chosenStyle01')
  const previousData = JSON.parse(localStorage.getItem('previousData'))
  if (previousData && JSON.stringify(previousData) !== JSON.stringify(str.value)) {
    s.value = previousData // 将之前的数据重新赋值给 s
  }
  localStorage.setItem('previousData', JSON.stringify(s.value)) // 保存当前数据
  if (
    savedStyle01 === '00' ||
    savedStyle01 === '01' ||
    savedStyle01 === '02' ||
    savedStyle01 === '03' ||
    savedStyle01 === '04' ||
    savedStyle01 === '05'
  ) {
    choose01.value = true
  }
  if (
    savedStyle01 === '11' ||
    savedStyle01 === '12' ||
    savedStyle01 === '13' ||
    savedStyle01 === '14' ||
    savedStyle01 === '15'
  ) {
    choose02.value = true
  }
  if (
    savedStyle01 === '21' ||
    savedStyle01 === '22' ||
    savedStyle01 === '23' ||
    savedStyle01 === '24' ||
    savedStyle01 === '25'
  ) {
    choose03.value = true
  }
  if (
    savedStyle01 === '31' ||
    savedStyle01 === '32' ||
    savedStyle01 === '33' ||
    savedStyle01 === '34' ||
    savedStyle01 === '35'
  ) {
    choose04.value = true
  }
  if (
    savedStyle01 === '41' ||
    savedStyle01 === '42' ||
    savedStyle01 === '43' ||
    savedStyle01 === '44' ||
    savedStyle01 === '45'
  ) {
    choose05.value = true
  }
  if (
    savedStyle01 === '51' ||
    savedStyle01 === '52' ||
    savedStyle01 === '53' ||
    savedStyle01 === '54' ||
    savedStyle01 === '55'
  ) {
    choose06.value = true
  }
  if (
    savedStyle01 === '61' ||
    savedStyle01 === '62' ||
    savedStyle01 === '63' ||
    savedStyle01 === '64' ||
    savedStyle01 === '65'
  ) {
    choose07.value = true
  }
  if (
    savedStyle01 === '01' ||
    savedStyle01 === '11' ||
    savedStyle01 === '21' ||
    savedStyle01 === '31' ||
    savedStyle01 === '41' ||
    savedStyle01 === '51' ||
    savedStyle01 === '61'
  ) {
    if (s.value.toString() === str.value.toString()) {
      const li1 = document.querySelectorAll('.d1')
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
      })
    } else {
      const li1 = document.querySelectorAll('.d1')
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
        icon.classList.add('choose')
      })
    }
  }

  if (
    savedStyle01 === '02' ||
    savedStyle01 === '12' ||
    savedStyle01 === '22' ||
    savedStyle01 === '32' ||
    savedStyle01 === '42' ||
    savedStyle01 === '52' ||
    savedStyle01 === '62'
  ) {
    const li2 = document.querySelectorAll('.d2')
    li2.forEach((icon) => {
      icon.className = ''
      icon.classList.add('d2')
      icon.classList.add('choose')
    })
  }

  if (
    savedStyle01 === '03' ||
    savedStyle01 === '13' ||
    savedStyle01 === '23' ||
    savedStyle01 === '33' ||
    savedStyle01 === '43' ||
    savedStyle01 === '53' ||
    savedStyle01 === '63'
  ) {
    const li3 = document.querySelectorAll('.d3')
    li3.forEach((icon) => {
      icon.className = ''
      icon.classList.add('d3')
      icon.classList.add('choose')
    })
  }

  if (
    savedStyle01 === '04' ||
    savedStyle01 === '14' ||
    savedStyle01 === '24' ||
    savedStyle01 === '34' ||
    savedStyle01 === '44' ||
    savedStyle01 === '54' ||
    savedStyle01 === '64'
  ) {
    const li4 = document.querySelectorAll('.d4')
    li4.forEach((icon) => {
      icon.className = ''
      icon.classList.add('d4')
      icon.classList.add('choose')
    })
  }

  if (
    savedStyle01 === '05' ||
    savedStyle01 === '15' ||
    savedStyle01 === '25' ||
    savedStyle01 === '35' ||
    savedStyle01 === '45' ||
    savedStyle01 === '55' ||
    savedStyle01 === '65'
  ) {
    const li5 = document.querySelectorAll('.d5')
    li5.forEach((icon) => {
      icon.className = ''
      icon.classList.add('d5')
      icon.classList.add('choose')
    })
  }
})
const num = ref('')
const bt1 = () => {
  choose01.value = false
  choose02.value = false
  choose03.value = false
  choose04.value = false
  choose05.value = false
  choose06.value = false
  choose07.value = false
  if (s.value.toString() === str.value.toString()) {
    choose01.value = true
    num.value = '01'
  }
  if (s.value.toString() === str1.value.toString()) {
    choose02.value = true
    num.value = '11'
    console.log(choose02.value)
  }
  if (s.value.toString() === str2.value.toString()) {
    choose03.value = true
    num.value = '21'
  }
  if (s.value.toString() === str3.value.toString()) {
    choose04.value = true
    num.value = '31'
  }
  if (s.value.toString() === str4.value.toString()) {
    choose05.value = true
    num.value = '41'
  }
  if (s.value.toString() === str5.value.toString()) {
    choose06.value = true
    num.value = '51'
  }
  if (s.value.toString() === str6.value.toString()) {
    choose07.value = true
    num.value = '61'
  }

  emitter.emit('fn1', num)
  localStorage.setItem('chosenStyle01', num.value)
  const li1 = document.querySelectorAll('.d1')
  li1.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d1')
    icon.classList.add('choose')
  })
  const li2 = document.querySelectorAll('.d2')
  li2.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d2')
  })
  const li3 = document.querySelectorAll('.d3')
  li3.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d3')
  })
  const li4 = document.querySelectorAll('.d4')
  li4.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d4')
  })
  const li5 = document.querySelectorAll('.d5')
  li5.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d5')
  })
}

const bt2 = () => {
  choose01.value = false
  choose02.value = false
  choose03.value = false
  choose04.value = false
  choose05.value = false
  choose06.value = false
  choose07.value = false

  if (s.value.toString() === str.value.toString()) {
    choose01.value = true
    num.value = '02'
  }
  if (s.value.toString() === str1.value.toString()) {
    choose02.value = true
    num.value = '12'
  }
  if (s.value.toString() === str2.value.toString()) {
    choose03.value = true
    num.value = '22'
  }
  if (s.value.toString() === str3.value.toString()) {
    choose04.value = true
    num.value = '32'
  }
  if (s.value.toString() === str4.value.toString()) {
    choose05.value = true
    num.value = '42'
  }
  if (s.value.toString() === str5.value.toString()) {
    choose06.value = true
    num.value = '52'
  }
  if (s.value.toString() === str6.value.toString()) {
    choose07.value = true
    num.value = '62'
  }

  emitter.emit('fn1', num)
  localStorage.setItem('chosenStyle01', num.value)
  const li1 = document.querySelectorAll('.d1')
  li1.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d1')
  })
  const li2 = document.querySelectorAll('.d2')
  li2.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d2')
    icon.classList.add('choose')
  })
  const li3 = document.querySelectorAll('.d3')
  li3.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d3')
  })
  const li4 = document.querySelectorAll('.d4')
  li4.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d4')
  })
  const li5 = document.querySelectorAll('.d5')
  li5.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d5')
  })
}

const bt3 = () => {
  choose01.value = false
  choose02.value = false
  choose03.value = false
  choose04.value = false
  choose05.value = false
  choose06.value = false
  choose07.value = false

  if (s.value.toString() === str.value.toString()) {
    choose01.value = true
    num.value = '03'
  }
  if (s.value.toString() === str1.value.toString()) {
    choose02.value = true
    num.value = '13'
  }
  if (s.value.toString() === str2.value.toString()) {
    choose03.value = true
    num.value = '23'
  }
  if (s.value.toString() === str3.value.toString()) {
    choose04.value = true
    num.value = '33'
  }
  if (s.value.toString() === str4.value.toString()) {
    choose05.value = true
    num.value = '43'
  }
  if (s.value.toString() === str5.value.toString()) {
    choose06.value = true
    num.value = '53'
  }
  if (s.value.toString() === str6.value.toString()) {
    choose07.value = true
    num.value = '63'
  }

  emitter.emit('fn1', num)
  localStorage.setItem('chosenStyle01', num.value)
  const li1 = document.querySelectorAll('.d1')
  li1.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d1')
  })
  const li2 = document.querySelectorAll('.d2')
  li2.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d2')
  })
  const li3 = document.querySelectorAll('.d3')
  li3.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d3')
    icon.classList.add('choose')
  })
  const li4 = document.querySelectorAll('.d4')
  li4.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d4')
  })
  const li5 = document.querySelectorAll('.d5')
  li5.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d5')
  })
}

const bt4 = () => {
  choose01.value = false
  choose02.value = false
  choose03.value = false
  choose04.value = false
  choose05.value = false
  choose06.value = false
  choose07.value = false

  if (s.value.toString() === str.value.toString()) {
    choose01.value = true
    num.value = '04'
  }
  if (s.value.toString() === str1.value.toString()) {
    choose02.value = true
    num.value = '14'
  }
  if (s.value.toString() === str2.value.toString()) {
    choose03.value = true
    num.value = '24'
  }
  if (s.value.toString() === str3.value.toString()) {
    choose04.value = true
    num.value = '34'
  }
  if (s.value.toString() === str4.value.toString()) {
    choose05.value = true
    num.value = '44'
  }
  if (s.value.toString() === str5.value.toString()) {
    choose06.value = true
    num.value = '54'
  }
  if (s.value.toString() === str6.value.toString()) {
    choose07.value = true
    num.value = '64'
  }

  emitter.emit('fn1', num)
  localStorage.setItem('chosenStyle01', num.value)
  const li1 = document.querySelectorAll('.d1')
  li1.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d1')
  })
  const li2 = document.querySelectorAll('.d2')
  li2.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d2')
  })
  const li3 = document.querySelectorAll('.d3')
  li3.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d3')
  })
  const li4 = document.querySelectorAll('.d4')
  li4.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d4')
    icon.classList.add('choose')
  })
  const li5 = document.querySelectorAll('.d5')
  li5.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d5')
  })
}

const bt5 = () => {
  choose01.value = false
  choose02.value = false
  choose03.value = false
  choose04.value = false
  choose05.value = false
  choose06.value = false
  choose07.value = false

  if (s.value.toString() === str.value.toString()) {
    choose01.value = true
    num.value = '05'
  }
  if (s.value.toString() === str1.value.toString()) {
    choose02.value = true
    num.value = '15'
  }
  if (s.value.toString() === str2.value.toString()) {
    choose03.value = true
    num.value = '25'
  }
  if (s.value.toString() === str3.value.toString()) {
    choose04.value = true
    num.value = '35'
  }
  if (s.value.toString() === str4.value.toString()) {
    choose05.value = true
    num.value = '45'
  }
  if (s.value.toString() === str5.value.toString()) {
    choose06.value = true
    num.value = '55'
  }
  if (s.value.toString() === str6.value.toString()) {
    choose07.value = true
    num.value = '65'
  }

  emitter.emit('fn1', num)
  localStorage.setItem('chosenStyle01', num.value)
  const li1 = document.querySelectorAll('.d1')
  li1.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d1')
  })
  const li2 = document.querySelectorAll('.d2')
  li2.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d2')
  })
  const li3 = document.querySelectorAll('.d3')
  li3.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d3')
  })
  const li4 = document.querySelectorAll('.d4')
  li4.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d4')
  })
  const li5 = document.querySelectorAll('.d5')
  li5.forEach((icon) => {
    icon.className = ''
    icon.classList.add('d5')
    icon.classList.add('choose')
  })
}

const currentTime = ref('')
const currentDate = ref('')
const updateTime = () => {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  currentTime.value = `${hours}:${minutes}:${seconds}`
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  currentDate.value = `${year}/${month}/${day}`
}

onMounted(() => {
  // 每秒钟更新一次时间
  setInterval(updateTime, 1000)
  // 页面加载时立即更新时间
  updateTime()
})
</script>

<template>
  <div class="body">
    <div
      class="logo"
      style="width: 5vw; position: absolute; z-index: 2; margin-left: 3.7vw; margin-top: 0.2vh"
    >
      <img style="width: 10vw" src="../../assets/logo.png" alt="" />
    </div>
    <div class="fix">
      <div class="d1" @click="bt1">
        <svg
          v-if="choose01"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M945.664 136.192h-419.328V39.424c0-7.68-6.144-13.824-13.824-13.824h-0.512c-7.68 0-13.824 6.144-13.824 13.824v96.768h-419.84C60.416 136.192 46.08 151.04 46.08 168.96v564.736c0 17.92 14.336 32.256 32.256 32.256h292.352L302.08 954.368c-2.56 7.168 1.024 15.36 8.192 17.92h0.512c7.168 2.56 14.848-1.024 17.92-8.192l71.68-198.144h96.768v218.624c0 7.68 6.144 13.824 13.824 13.824h0.512c7.68 0 13.824-6.144 13.824-13.824v-218.624h96.768l71.68 198.144c2.56 7.168 10.752 10.752 17.92 8.192h0.512c7.168-2.56 10.752-10.752 8.192-17.92l-68.608-188.416h292.352c17.92 0 32.256-14.336 32.256-32.256V168.96c1.536-17.92-12.8-32.768-30.72-32.768z m4.096 597.504c0 2.56-2.048 4.096-4.096 4.096H78.336c-2.56 0-4.096-2.048-4.096-4.096V168.96c0-2.56 2.048-4.096 4.096-4.096h867.328c2.56 0 4.096 2.048 4.096 4.096v564.736z"
            fill="#fff"
          ></path>
          <path
            d="M626.688 456.192c-3.584-3.584-9.728-3.584-13.312 0l-81.92 82.432c-3.584 3.584-3.584 9.728 0 13.312l81.92 82.432c3.584 3.584 9.728 3.584 13.312 0l81.92-82.432c3.584-3.584 3.584-9.728 0-13.312l-81.92-82.432z m-6.656 144.384l-55.296-55.808 55.296-55.808 55.296 55.808-55.296 55.808z m152.064-320c-41.984 0-75.776 33.792-75.776 75.776s33.792 75.776 75.776 75.776 75.776-33.792 75.776-75.776-33.792-75.776-75.776-75.776z m0 123.904c-26.112 0-47.616-21.504-47.616-47.616s21.504-47.616 47.616-47.616 47.616 21.504 47.616 47.616c0 26.112-20.992 47.616-47.616 47.616zM197.632 337.92h346.624v28.16H197.632V337.92zM197.632 519.168h249.344v28.16H197.632v-28.16z"
            fill="#fff"
          ></path>
        </svg>
        <svg
          v-if="choose02"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M496.5 928.8H261.7c-65 0-117.8-52.9-117.8-117.8V221.5c0-65 52.9-117.8 117.8-117.8h497.2c65 0 117.8 52.9 117.8 117.8v234.9c0 16.3-13.2 29.5-29.5 29.5s-29.5-13.2-29.5-29.5V221.5c0-32.4-26.4-58.8-58.8-58.8H261.7c-32.4 0-58.8 26.4-58.8 58.8V811c0 32.4 26.4 58.8 58.8 58.8h234.8c16.3 0 29.5 13.2 29.5 29.5s-13.2 29.5-29.5 29.5z m0 0"
            fill="#fff"
          ></path>
          <path
            d="M289.7 338.1h295.4c16.3 0 29.5-13.2 29.5-29.5s-13.2-29.5-29.5-29.5H289.7c-16.3 0-29.5 13.2-29.5 29.5s13.2 29.5 29.5 29.5zM443.3 398H289.7c-16.3 0-29.5 13.2-29.5 29.5s13.2 29.5 29.5 29.5h153.6c16.3 0 29.5-13.2 29.5-29.5 0.1-16.2-13.2-29.5-29.5-29.5zM685.9 513.8C586.1 513.8 505 595 505 694.7c0 99.8 81.2 180.9 180.9 180.9s180.9-81.2 180.9-180.9c0-99.8-81.1-180.9-180.9-180.9z m0 302.7c-67.2 0-121.8-54.7-121.8-121.8 0-67.2 54.7-121.8 121.8-121.8 67.2 0 121.8 54.7 121.8 121.8 0 67.2-54.6 121.8-121.8 121.8z"
            fill="#fff"
          ></path>
          <path
            d="M880.4 918.5l-83.3-83.3c-11.5-11.5-11.5-30.1 0-41.6s30.1-11.5 41.6 0l83.3 83.3c11.5 11.5 11.5 30.1 0 41.6-11.4 11.4-30.1 11.4-41.6 0z m0 0"
            fill="#fff"
          ></path>
        </svg>
        <svg
          v-if="choose03"
          class="icon"
          viewBox="0 0 1028 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M291.503 449.15h63.892v-63.873h-63.892v63.873z m-63.852-63.873h-63.893v63.873h63.893v-63.873z m63.852 319.362h63.892v-63.873h-63.892v63.873z m-63.852-63.873h-63.893v63.873h63.893v-63.873z m-63.893-63.872h191.637v-63.872H163.758v63.872z m0 255.49h191.637V768.51H163.758v63.872z m830.36-638.723H866.373V97.852a31.922 31.922 0 0 0-31.946-31.936V33.98a31.922 31.922 0 0 0-31.946-31.936h-63.852a31.922 31.922 0 0 0-31.946 31.936v31.936a31.922 31.922 0 0 0-31.947 31.936v95.809H36.014a31.918 31.918 0 0 0-31.926 31.936v766.477A31.918 31.918 0 0 0 36.014 1024h958.104a31.918 31.918 0 0 0 31.926-31.926V225.597a31.918 31.918 0 0 0-31.926-31.936z m-191.637 31.936v351.297h-63.852V129.788h63.852v95.809zM67.96 257.533H483.14v127.744h-31.946a31.936 31.936 0 1 0 0 63.873h31.946v63.872h-31.946a31.936 31.936 0 1 0 0 63.872h31.946v63.872h-31.946a31.936 31.936 0 1 0 0 63.873h31.946v63.872h-31.946a31.936 31.936 0 1 0 0 63.872h31.946v127.745H67.96V257.533z m894.21 702.595h-415.18V832.383h31.947a31.936 31.936 0 1 0 0-63.872h-31.946v-63.872h31.946a31.936 31.936 0 1 0 0-63.873h-31.946v-63.872h31.946a31.936 31.936 0 1 0 0-63.872h-31.946V449.15h31.946a31.936 31.936 0 1 0 0-63.873h-31.946V257.533h127.744V608.84a31.922 31.922 0 0 0 31.947 31.925v63.873a31.926 31.926 0 0 0 31.946 31.946v63.852a31.926 31.926 0 1 0 63.852 0v-63.852a31.926 31.926 0 0 0 31.946-31.946v-63.873a31.922 31.922 0 0 0 31.946-31.925V257.533h95.799v702.595z"
            fill="#e6e6e6"
          ></path>
        </svg>
        <svg
          v-if="choose04"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M922.4 838.6c0-27.8 15.2-52.3 26-73.7 9.7-19.1 5.7-46.2 5.7-46.2v-582c0-39.7-32.2-71.8-71.8-71.8H140.9c-39.7 0-71.8 32.2-71.8 71.8v688.4c-0.5 4.4-0.8 8.9-0.8 13.4 0 66.2 53.7 119.9 119.9 119.9h727.2c19 0 34.5-15.4 34.5-34.5 0-8.4-3-16.1-8-22.1-10.6-18.3-19.5-40-19.5-63.2zM140.9 133.2h741.4c0.9 0 1.8 0.4 2.5 1 0.7 0.7 1 1.5 1 2.5v582H188.2c-18.5 0-36 4.2-51.7 11.7l0.9-593.6c0-0.9 0.4-1.8 1-2.5 0.7-0.7 1.6-1.1 2.5-1.1z m721.9 756.9H188.2c-28.4 0-51.5-23.1-51.5-51.5s23.1-51.5 51.5-51.5h675.5c-3.3 11.4-6.8 23.5-7.9 36.1-1.2 5.1-1.8 10.2-1.7 15.4 0 18.2 3.9 35.4 8.7 51.5z m0 0"
          ></path>
          <path
            d="M391.1 608c5.3 3.1 11.2 4.6 17.1 4.6 5.9 0 11.8-1.5 17.1-4.6l253.6-146.4c10.4-6 16.9-17.1 17.1-29.1 0.2-12-6-23.3-16.3-29.6L426.1 246.7c-10.5-6.5-23.8-6.8-34.6-0.7-10.8 6-17.5 17.5-17.5 29.8v302.6c0 12.2 6.5 23.5 17.1 29.6z m51.3-271L595 431l-152.7 88.1V337z m0 0"
          ></path>
        </svg>
        <svg
          v-if="choose05"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M923.089758 0H125.840575A61.562568 61.562568 0 0 0 64.417288 61.423286v901.153428a61.562568 61.562568 0 0 0 61.423287 61.423286h638.050054a61.284004 61.284004 0 0 0 61.284004-61.284004V310.319913h86.772579a47.634385 47.634385 0 0 0 47.634385-47.634385V36.491839A36.491839 36.491839 0 0 0 923.089758 0zM886.180074 211.986942A25.210011 25.210011 0 0 1 861.387909 236.779108H788.682794a36.491839 36.491839 0 0 0-36.770402 36.352557v622.729053a54.737758 54.737758 0 0 1-54.877041 54.87704H192.278007a54.737758 54.737758 0 0 1-54.877041-54.87704V127.721436a54.737758 54.737758 0 0 1 54.877041-54.87704h657.270946A37.188248 37.188248 0 0 1 886.180074 110.032644zM249.244274 400.853101a17.828074 17.828074 0 0 0 15.181719-6.1284 103.486398 103.486398 0 0 0 11.281829-23.817193l11.560391-30.084875h95.825898l11.281828 29.527748c1.5321 3.621328 3.203482 7.799782 5.29271 12.535364a48.052231 48.052231 0 0 0 5.989118 10.724701 17.131665 17.131665 0 0 0 6.82481 5.29271 20.195865 20.195865 0 0 0 9.471164 1.949945 22.145811 22.145811 0 0 0 16.574538-6.824809 20.892274 20.892274 0 0 0 6.824809-14.903156 74.515778 74.515778 0 0 0-7.242655-25.349293l-61.841132-151.956474c-2.646355-7.660501-5.153428-13.928183-6.964091-18.24592a69.640914 69.640914 0 0 0-6.964091-12.674646 31.895539 31.895539 0 0 0-10.863983-9.749728 32.870511 32.870511 0 0 0-16.574538-3.760609 31.895539 31.895539 0 0 0-16.435255 3.760609 30.50272 30.50272 0 0 0-10.724701 9.88901 82.176279 82.176279 0 0 0-7.799782 15.321001c-2.507073 6.1284-4.457018 11.42111-6.128401 15.738847l-60.309031 153.21001c-2.367791 6.1284-4.178455 10.863983-5.153428 13.928183a33.149075 33.149075 0 0 0-1.810664 10.028292 20.474429 20.474429 0 0 0 6.964092 14.903155 20.892274 20.892274 0 0 0 15.738846 6.685528z m84.961915-193.183895l35.516866 97.497279h-70.476605z m588.883569 156.831338h-64.06964v294.85963h64.06964a36.491839 36.491839 0 0 0 36.491839-36.491839V400.992383a36.352557 36.352557 0 0 0-36.491839-36.491839z m0 348.20457h-64.06964v310.598477h64.06964a36.491839 36.491839 0 0 0 36.491839-36.491839v-236.779108a36.352557 36.352557 0 0 0-36.491839-36.631121z"
            fill="#fff"
          ></path>
          <path
            d="M652.74373 785.410229H236.848192a21.588683 21.588683 0 1 0 0 43.038084h415.895538a21.588683 21.588683 0 0 0 0-43.038084zM652.74373 642.646355H236.848192a21.588683 21.588683 0 1 0 0 43.177366h415.895538a21.588683 21.588683 0 0 0 0-43.177366zM236.848192 543.199129h415.895538a21.588683 21.588683 0 0 0 0-43.177366H236.848192a21.588683 21.588683 0 1 0 0 43.177366z"
            fill="#fff"
          ></path>
        </svg>
        <svg
          v-if="choose06"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M752.401909 955.349273l-135.981247-74.05157 266.921706-435.908111L1019.323616 519.441163 752.401909 955.349273z m-93.014534-84.853258l81.612752 44.406939L976.476921 530.24285l-81.612752-44.406938-235.476794 384.660103z m-59.289263-412.384435c-7.921238 0-15.482419-3.000469-21.123301-8.401313-5.7609-5.520863-8.881388-12.842007-9.001406-20.643225 0-7.801219 3.000469-15.242382 8.64135-20.763245 39.246132-38.646038 60.849508-89.654008 60.849507-143.422409 0-113.777778-96.975152-206.312236-216.033755-206.312237-119.178622 0-216.153774 92.534459-216.153774 206.312237 0 115.578059 83.413033 206.312236 193.950305 211.112986 8.041256-0.480075 16.202532-0.600094 24.243788-0.600094 95.894984 0 183.988748 30.244726 254.679794 80.532584-15.962494 12.601969-30.964838 26.524144-44.766995 41.406469C576.21438 557.847164 504.083109 533.843413 425.470826 533.843413c-2.88045 0-5.640881 0-8.521331 0.120019-2.160338 0.480075-4.440694 0.720113-6.721051 0.720112-2.760431 0-5.520863 0-8.281294-0.120018-187.829348 11.161744-334.852321 154.704173-334.85232 327.051101 0 16.082513-13.4421 29.284576-30.004688 29.284576S6.965435 877.817159 6.965435 861.614627c0-83.893108 28.804501-163.705579 83.172995-230.91608 47.887482-59.169245 114.257853-105.136428 188.789499-130.94046-81.852789-47.287389-131.780591-135.261135-131.780591-234.876699C147.147338 118.818565 271.12671 0 423.430507 0c152.303797 0 276.16315 118.818565 276.163151 264.881388 0 69.25082-27.724332 134.78106-78.132208 184.588842-5.7609 5.520863-13.322082 8.64135-21.363338 8.64135z m21.243319 562.647914l-4.920769-139.461791 135.981247 74.05157-131.060478 65.410221z m23.283638-40.326301l56.048757-28.204407-58.209095-31.684951 2.160338 59.889358z"
            fill="#fff"
          ></path>
        </svg>
        <svg
          v-if="choose07"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M196.266667 989.866667V896c0-21.333333 8.533333-42.666667 21.333333-55.466667 12.8-12.8 34.133333-21.333333 55.466667-21.333333h119.466666v-110.933333H384c-93.866667-34.133333-174.933333-98.133333-217.6-170.666667l-4.266667-4.266667h-4.266666c-42.666667-8.533333-85.333333-29.866667-110.933334-59.733333-29.866667-34.133333-42.666667-76.8-42.666666-119.466667V217.6c0-29.866667 25.6-51.2 51.2-51.2h76.8V102.4c0-38.4 29.866667-68.266667 68.266666-68.266667h622.933334c38.4 0 68.266667 29.866667 68.266666 68.266667v64h76.8c29.866667 0 51.2 25.6 51.2 51.2v132.266667c0 42.666667-17.066667 85.333333-42.666666 119.466666s-68.266667 55.466667-110.933334 59.733334h-4.266666l-4.266667 4.266666c-42.666667 72.533333-115.2 132.266667-204.8 166.4l-8.533333 4.266667v115.2h106.666666c21.333333 0 42.666667 8.533333 55.466667 21.333333 12.8 12.8 21.333333 34.133333 21.333333 55.466667v93.866667H196.266667z m81.066666-115.2c-12.8 0-25.6 12.8-25.6 25.6v38.4h524.8v-38.4c0-12.8-12.8-25.6-25.6-25.6H277.333333z m170.666667-55.466667h145.066667v-98.133333l-17.066667 4.266666c-21.333333 4.266667-42.666667 4.266667-64 4.266667-17.066667 0-34.133333 0-51.2-4.266667l-12.8-4.266666v98.133333zM200.533333 85.333333c-8.533333 0-17.066667 8.533333-17.066666 17.066667v311.466667c0 68.266667 38.4 132.266667 110.933333 187.733333 64 46.933333 145.066667 76.8 217.6 76.8 72.533333 0 153.6-29.866667 217.6-76.8 72.533333-51.2 110.933333-119.466667 110.933333-187.733333V102.4c0-4.266667 0-8.533333-4.266666-12.8-4.266667 0-8.533333-4.266667-12.8-4.266667H200.533333zM38.4 349.866667c0 51.2 25.6 98.133333 72.533333 123.733333l29.866667 12.8-4.266667-25.6c-4.266667-17.066667-4.266667-29.866667-4.266666-46.933333V204.8H38.4v145.066667z m853.333333 64c0 12.8 0 25.6-4.266666 34.133333l-4.266667 29.866667 29.866667-21.333334c21.333333-17.066667 68.266667-64 68.266666-110.933333V204.8h-89.6v209.066667z m-234.666666-170.666667c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6c8.533333 0 17.066667 4.266667 21.333333 12.8 4.266667 8.533333 4.266667 17.066667 0 25.6-4.266667 8.533333-12.8 12.8-21.333333 12.8z m-307.2 0c-12.8 0-21.333333-8.533333-21.333334-21.333333v-12.8c0-12.8 8.533333-21.333333 21.333334-21.333334h196.266666c12.8 0 21.333333 8.533333 21.333334 21.333334v12.8c0 12.8-8.533333 21.333333-21.333334 21.333333H349.866667z"
          ></path>
        </svg>
        <div class="name">{{ s[0] }}</div>
      </div>
      <div class="d2" @click="bt2">
        <svg
          v-if="choose01"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M842.472727 60.509091H372.363636c-18.618182 0-37.236364 18.618182-37.236363 37.236364s18.618182 37.236364 37.236363 37.236363h470.109091c32.581818 0 55.854545 23.272727 55.854546 55.854546v651.636363c0 32.581818-23.272727 55.854545-55.854546 55.854546h-651.636363c-32.581818 0-55.854545-23.272727-55.854546-55.854546V363.054545c0-18.618182-18.618182-37.236364-37.236363-37.236363s-37.236364 18.618182-37.236364 37.236363v479.418182c0 69.818182 60.509091 130.327273 130.327273 130.327273h651.636363c69.818182 0 130.327273-60.509091 130.327273-130.327273v-651.636363c0-74.472727-60.509091-130.327273-130.327273-130.327273z"
            fill="#fff"
          ></path>
          <path
            d="M777.309091 609.745455c23.272727 0 37.236364-18.618182 37.236364-37.236364s-18.618182-37.236364-37.236364-37.236364h-144.290909c-18.618182 0-37.236364 18.618182-37.236364 37.236364s18.618182 37.236364 37.236364 37.236364h144.290909zM437.527273 493.381818c13.963636 13.963636 37.236364 13.963636 55.854545 0 13.963636-13.963636 13.963636-37.236364 0-51.2l-377.018182-377.018182c-13.963636-13.963636-37.236364-13.963636-51.2 0s-13.963636 37.236364 0 51.2l372.363637 377.018182zM209.454545 744.727273c0 18.618182 18.618182 37.236364 37.236364 37.236363h530.618182c23.272727 0 37.236364-13.963636 37.236364-37.236363 0-18.618182-18.618182-37.236364-37.236364-37.236364h-530.618182c-18.618182 0-37.236364 18.618182-37.236364 37.236364z"
            fill="#fff"
          ></path>
        </svg>
        <svg
          v-if="choose02"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M832.810519 404.19958H336.644455c-43.21796 0-78.38759 35.168414-78.38759 78.387589v65.825531c0 43.21796 35.16963 78.388806 78.38759 78.388806h630.455304v-49.327489h-24.849232V453.52342h24.849232v-49.326273H832.810519v0.002433z m60.121033 173.276869H336.644455c-16.015166 0-29.018746-13.048584-29.06375-29.063749v-65.870534c0-16.012733 13.048584-29.019962 29.06375-29.019962h556.284664v123.954245h0.002433z"
            fill="#fff"
          ></path>
          <path
            d="M797.288159 105.685256h-773.664968c-1.718647 0-3.397156 0.178798-5.017283 0.514499v48.299707a24.885721 24.885721 0 0 0 5.017283 0.512067h21.144349V366.024445c-11.280067 7.828177-18.711727 20.835406-18.711727 35.609935 0 23.93335 19.464624 43.396757 43.399189 43.396757 23.930917 0 43.395541-19.46584 43.395541-43.396757 0-14.774529-7.43166-27.781758-18.712943-35.609935V155.010313H210.26002v194.511225c0 13.626331 11.013695 24.686246 24.683814 24.686247H797.288159c13.626331 0 24.642459-11.059915 24.642459-24.686247V155.010313h183.463474V105.685256H797.288159z m-70.115459 553.078468H129.083429c-46.493485 0-84.315889 37.846731-84.315889 84.337783v92.501662c0 46.493485 37.822404 84.314673 84.315889 84.314673h729.640594v-49.368844h-24.630296V708.109458h24.630296v-49.345734H727.1727z m57.772336 215.678685H160.97875c-17.915044 0-32.513207-17.87004-32.513207-39.858508v-90.464341c0-21.986036 14.598164-39.904729 32.513207-39.904729h623.966286V874.442409z"
            fill="#fff"
          ></path>
        </svg>
        <svg
          v-if="choose03"
          class="icon"
          viewBox="0 0 1186 1024"
          xmlns="http://www.w3.org/2000/svg"
          style="margin-top: 1vh"
        >
          <path
            d="M191.65 692.276h38.968c17.65 0 32.006-14.553 32.006-32.449 0-17.896-14.355-32.45-32.007-32.45H191.65c-55.274 0-100.243-45.59-100.243-101.63v-38.306c0-56.039 44.97-101.63 100.244-101.63h38.968c17.65 0 32.006-14.553 32.006-32.45 0-17.878-14.355-32.447-32.007-32.447H191.65c-55.274 0-100.243-45.592-100.243-101.63v-38.307c0-56.04 44.97-101.63 100.244-101.63h795.755c-22.085 28.83-34.279 64.313-34.279 101.63v38.306c0 37.317 12.194 72.8 34.279 101.63H573.676c-17.651 0-32.006 14.57-32.006 32.449 0 17.896 14.355 32.45 32.006 32.45h413.73c-22.085 28.847-34.279 64.297-34.279 101.63v38.306c0 37.332 12.194 72.799 34.279 101.63H570.14c-17.651 0-32.007 14.553-32.007 32.45 0 17.895 14.356 32.448 32.007 32.448h417.265c-22.085 28.83-34.279 64.298-34.279 101.63v38.306c0 37.333 12.194 72.784 34.279 101.631H191.65c-55.275 0-100.244-45.591-100.244-101.63v-38.306c0-56.04 44.97-101.631 100.244-101.631m925.748 0h6.546c17.652 0 32.006-14.553 32.006-32.449 0-17.896-14.354-32.45-32.006-32.45h-6.546c-55.275 0-100.258-45.59-100.258-101.63v-38.306c0-56.039 44.983-101.63 100.258-101.63 17.652 0 32.007-14.553 32.007-32.45 0-17.878-14.355-32.447-32.007-32.447-55.275 0-100.258-45.592-100.258-101.63v-38.307c0-56.04 44.983-101.63 100.258-101.63 17.652 0 32.007-14.57 32.007-32.45 0-17.895-14.355-32.449-32.007-32.449-2.08 0-4.112 0.114-6.16 0.26l-919.588-0.26c-90.562 0-164.256 74.698-164.256 166.529v38.306c0 53.703 25.156 102.977 67.085 134.079-41.929 31.087-67.085 80.361-67.085 134.08v38.306c0 53.702 25.156 102.976 67.085 134.08-41.929 31.101-67.085 80.375-67.085 134.079v38.305c0 91.814 73.694 166.529 164.256 166.529h916.29c1.2 0 2.257-0.13 3.153-0.276l0.193 0.016c2.032 0.13 4.048 0.26 6.112 0.26 17.652 0 32.007-14.57 32.007-32.45 0-17.895-14.355-32.448-32.007-32.448-55.275 0-100.258-45.591-100.258-101.63v-38.306c0-56.04 44.983-101.631 100.258-101.631"
            fill="#ffffff"
          ></path>
          <path
            d="M338.312 725.8V245.196h115.462v480.602l-35.095-35.58c-12.098-12.266-33.158-12.266-45.257 0l-35.11 35.58z m-44.265 108.282a31.47 31.47 0 0 0 24.501 0.016c3.952-1.672 7.457-4.04 10.402-7.042l67.101-68.013 67.069 67.981a31.498 31.498 0 0 0 10.402 7.058c3.936 1.655 8.065 2.498 12.259 2.498 4.207 0 8.338-0.843 12.242-2.482 7.906-3.326 14.05-9.556 17.315-17.54a32.568 32.568 0 0 0 2.45-12.427V212.748c0-17.895-14.356-32.449-32.007-32.449H306.304c-17.65 0-32.006 14.554-32.006 32.449v591.383c0 4.235 0.816 8.388 2.449 12.38 3.2 7.884 9.521 14.31 17.298 17.57z"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose04"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M810.666667 256h42.666666a128 128 0 0 1 128 128v363.221333A106.112 106.112 0 0 1 875.221333 853.333333h-39.168a42.666667 42.666667 0 0 0-41.386666 32.170667c-18.56 73.344-28.501333 96.512-68.949334 96.512-29.653333 0-56.149333-25.813333-134.485333-114.304a42.666667 42.666667 0 0 0-31.957333-14.378667h-131.84a42.666667 42.666667 0 0 1 0-85.333333h131.84a128 128 0 0 1 95.829333 43.136c22.058667 24.917333 40.448 44.970667 55.168 60.074667l1.706667-6.656A128 128 0 0 1 836.053333 768h39.168c11.477333 0 20.778667-9.301333 20.778667-20.778667V384a42.666667 42.666667 0 0 0-42.666667-42.666667h-42.666666v281.770667c0 47.36-38.357333 85.717333-85.333334 85.717333h-261.333333c-47.104 0-108.672 29.866667-137.642667 67.029334l-25.856 33.152c-28.885333 37.034667-55.381333 29.098667-59.178666-18.048l0.213333 2.986666c-3.797333-47.018667-44.8-86.016-92.202667-87.04l-21.333333-0.512a87.381333 87.381333 0 0 1-85.333333-86.997333V213.077333C42.666667 166.101333 80.768 128 127.786667 128h597.76C772.565333 128 810.666667 166.101333 810.666667 213.717333V256zM213.333333 256a42.666667 42.666667 0 1 0 0 85.333333h213.333334a42.666667 42.666667 0 1 0 0-85.333333H213.333333z m0 170.666667a42.666667 42.666667 0 1 0 0 85.333333h341.333334a42.666667 42.666667 0 0 0 0-85.333333H213.333333z"
            fill="#fff"
          ></path>
        </svg>
        <svg
          v-if="choose05"
          class="icon"
          viewBox="0 0 1067 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M533.497621 75.815777a18.184225 18.184225 0 0 1 15.970391 8.74879l116.622918 182.813025a169.979887 169.979887 0 0 0 100.912979 73.316997l209.911782 54.457966a18.941901 18.941901 0 0 1 9.873466 30.378074L848.986826 592.94152a169.979887 169.979887 0 0 0-38.546769 118.635496l13.105428 216.458577a18.018484 18.018484 0 0 1-4.924895 13.957813 19.521997 19.521997 0 0 1-13.863104 6.238989 19.036611 19.036611 0 0 1-7.103213-1.420643l-201.825958-79.319211a170.346886 170.346886 0 0 0-124.73242 0l-201.825958 79.319211a19.036611 19.036611 0 0 1-7.103213 1.420643 19.49832 19.49832 0 0 1-13.863104-6.238989 18.018484 18.018484 0 0 1-4.853862-13.957813l13.093589-216.458577a169.979887 169.979887 0 0 0-38.53493-118.635496L80.182408 425.51879a18.941901 18.941901 0 0 1 9.873466-30.378074l209.911782-54.457966a169.979887 169.979887 0 0 0 100.936656-73.305158l116.646596-182.813025A18.184225 18.184225 0 0 1 533.497621 75.815777m0-75.767605a93.95183 93.95183 0 0 0-79.840114 43.803146l-116.682112 182.76567a94.709506 94.709506 0 0 1-56.068027 40.736927l-209.911783 54.457966c-67.006976 17.379194-93.336219 98.426855-49.343652 151.866693l137.861525 167.42273a94.709506 94.709506 0 0 1 21.404348 65.965172L167.836056 923.465859c-3.421381 56.659962 42.311472 100.534141 94.413539 100.534141a94.709506 94.709506 0 0 0 34.770227-6.67702l201.825959-79.319212a94.709506 94.709506 0 0 1 69.303681 0l201.825958 79.319212a94.792377 94.792377 0 0 0 34.770227 6.67702c52.090229 0 97.83492-43.874179 94.41354-100.534141l-13.081751-216.399383a94.709506 94.709506 0 0 1 21.404349-65.905978l137.826009-167.493762c43.992566-53.439839 17.663323-134.487499-49.343653-151.866694l-209.911782-54.457966a94.709506 94.709506 0 0 1-56.032512-40.725088L613.337735 43.803964a93.95183 93.95183 0 0 0-79.840114-43.803147z"
            fill="#fff"
          ></path>
          <path
            d="M533.497621 709.943277a152.636208 152.636208 0 0 1-152.458628-152.458628 37.883803 37.883803 0 0 1 75.767605 0 76.702861 76.702861 0 0 0 153.393885 0 37.883803 37.883803 0 0 1 75.767605 0c0 84.066526-68.41578 152.458628-152.470467 152.458628z"
            fill="#fff"
          ></path>
        </svg>
        <svg
          v-if="choose06"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M234.913291 289.352745c0 74.176015 29.150576 141.768359 77.118346 191.74284-157.065232 61.411462-265.225266 196.659369-265.225266 390.566059 0 175.629556 930.495631 201.711365 940.525568 0 9.753585-194.21736-103.483732-330.090219-264.569609-391.227135 47.339206-49.943774 76.462689-116.940067 76.462689-191.117888 0-154.178893-126.372145-279.209017-282.156767-279.209017S234.913291 135.137728 234.913291 289.352745m62.699296 0c0-120.072051 98.131903-217.167185 219.455665-217.167184 121.327374 0 219.455665 97.124033 219.455665 217.167184 0 86.871931-51.726513 161.960087-126.372145 196.695494 180.267927 41.570141 314.480871 170.642584 314.48087 361.758665 0 147.380283-815.125169 139.602702-815.125168 0 0-191.116081 134.184044-320.154206 314.451971-361.758665-74.618538-34.735406-126.346858-109.823562-126.346858-196.695494m0 0z"
            fill="#ffffff"
          ></path>
          <path
            d="M581.877212 846.947143l-98.491341-96.874774-61.951521 165.214894 160.442862-68.34012m316.15343-309.806374l-101.681124-104.818528-294.713605 290.752565 105.674676 109.59056 290.720053-295.524597m83.748978-80.087771c13.808548-15.520844 0-45.307209 0-45.307209s-26.918089-29.786365-57.880303-52.42552c-30.99292-22.619286-54.83321 0-54.83321 0l-52.409264 52.42552 106.45135 106.053982c0-0.001806 44.880941-45.260247 58.671427-60.746773m0 0z"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose07"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M945.459136 473.527865a81.432686 81.432686 0 0 0-78.867877-76.944271h-4.167815a140.102693 140.102693 0 0 0-15.709455 5.770821c-1.923607-41.357545-21.800877-80.791484-61.234816-80.791485h-3.847213a176.33062 176.33062 0 0 0-32.060113 13.785849v-23.724483c0-45.204759-23.403882-76.944271-64.120225-76.944271h-6.412023a77.906074 77.906074 0 0 0-70.532248 76.944271 50.013776 50.013776 0 0 0-23.403882-3.847214h-8.65623a55.784596 55.784596 0 0 0-64.120226 64.120225v340.478397a256.480902 256.480902 0 0 0-75.020664-25.64809 329.257358 329.257358 0 0 0-88.806512 13.785849 81.753287 81.753287 0 0 0-57.067 70.852849c0 51.29618 82.715091 71.17345 106.439574 75.020664 114.454602 15.709455 179.536631 177.613024 179.536631 177.613024h281.167188s82.715091-161.903569 88.806513-226.985598c-1.923607-1.923607-1.923607-323.486537-1.923607-323.486537z m-39.433939 320.601127a574.196619 574.196619 0 0 1-78.867877 192.360676h-221.214778c-23.724483-41.357545-106.439574-169.597996-224.420789-185.628052-17.953663-1.923607-55.463995-21.480276-55.463995-29.495304s32.060113-35.586725 39.75454-37.510332c0 0 39.433939-1.923607 72.776456-1.923607a253.595492 253.595492 0 0 1 73.738259 35.586725l37.510332 39.433939V372.859111a29.815905 29.815905 0 0 1 27.571697-29.495304h3.847213a29.815905 29.815905 0 0 1 27.892299 29.495304v238.84784h39.433938V302.006262a32.060113 32.060113 0 0 1 27.571697-29.815905h3.847214a28.5335 28.5335 0 0 1 25.64809 29.815905v309.700689h39.433938v-209.352536a29.815905 29.815905 0 0 1 27.571697-29.495304h4.167815a32.060113 32.060113 0 0 1 29.495304 29.495304v209.352536h39.433938v-140.102693a35.907326 35.907326 0 0 1 29.495304-25.64809h4.167815a32.060113 32.060113 0 0 1 27.571697 25.64809zM542.78412 73.097057h4.167815V0H304.256882v70.852849h238.527238M679.039599 59.311209a58.028804 58.028804 0 0 1 49.372574 58.990607v78.867877h40.395742V118.301816c0-55.143394-27.571697-96.180338-88.806512-96.180338h-50.334377v37.189731h49.372573M116.705222 674.865373V106.439574a50.334377 50.334377 0 0 1 53.219787-47.128365h59.311209V23.724483H169.925009a85.921102 85.921102 0 0 0-92.653725 96.180339v543.098309c0 58.990607 32.060113 88.806512 96.180338 88.806512h73.417658v-35.586725h-64.120226c-27.571697-1.923607-64.120225-13.785848-64.120225-41.357545M571.317621 202.940513V116.69881h-123.110833V160.300564h64.120225v36.227927c0 10.900438-3.847214 15.709455-14.747652 14.747652h-49.372573V256.480902h73.417658c34.304321 0 50.654978-17.633062 49.693175-53.540389zM436.023945 315.471509h64.120225a83.356293 83.356293 0 0 1 64.120226-32.060113h10.259236v-11.862241h-138.499687z"
            fill="#ffffff"
          ></path>
          <path
            d="M431.214928 360.996869H369.018309v-32.060113h58.670007V286.296807H369.018309v-32.060113h19.556669c34.945523 2.244208 51.29618-15.068253 49.051973-52.257984V116.69881h-128.240451l3.206011-9.618034h-64.120225a148.758923 148.758923 0 0 1-43.922355 102.592361v42.319349a195.887289 195.887289 0 0 0 27.892298-11.541641V480.901691h58.670006V178.574828a224.420789 224.420789 0 0 0 16.030057-48.731372 48.41077 48.41077 0 0 1 3.526612-9.938634V480.901691H369.018309v-75.661866h62.196619zM369.018309 160.300564h21.480276v37.830933c0 10.900438-3.847214 15.709455-14.747652 14.747651H369.018309z"
            fill="#ffffff"
          ></path>
          <path
            d="M480.2669 367.729493a83.035692 83.035692 0 0 1 8.33563-35.586725l-2.244208-5.129618h-56.7464a288.541014 288.541014 0 0 0 35.586725 79.82968 176.010019 176.010019 0 0 1-47.128365 32.060113V480.901691a487.313713 487.313713 0 0 0 62.196618-27.892298z"
            fill="#ffffff"
          ></path>
          <path
            d="M200.702718 619.721979m23.403882 0l105.15717 0q23.403882 0 23.403882 23.403882l0 9.938635q0 23.403882-23.403882 23.403882l-105.15717 0q-23.403882 0-23.403882-23.403882l0-9.938635q0-23.403882 23.403882-23.403882Z"
            fill="#ffffff"
          ></path>
          <path
            d="M200.702718 540.854101m23.403882 0l222.497182 0q23.403882 0 23.403882 23.403883l0 9.938635q0 23.403882-23.403882 23.403882l-222.497182 0q-23.403882 0-23.403882-23.403882l0-9.938635q0-23.403882 23.403882-23.403883Z"
            fill="#ffffff"
          ></path>
        </svg>

        <div class="name">{{ s[1] }}</div>
      </div>
      <div class="d3" @click="bt3">
        <svg
          v-if="choose01"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M128 128a64 64 0 0 0-64 64v704a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H128z m0-64h768a128 128 0 0 1 128 128v704a128 128 0 0 1-128 128H128a128 128 0 0 1-128-128V192a128 128 0 0 1 128-128z"
            fill="#ffffff"
          ></path>
          <path
            d="M960 288a32 32 0 1 1 0 64H64a32 32 0 0 1 0-64h896zM288 32a32 32 0 0 1 64 0v128a32 32 0 0 1-64 0v-128zM672 32a32 32 0 1 1 64 0v128a32 32 0 1 1-64 0v-128zM832 512a32 32 0 1 1 0 64H448a32 32 0 0 1 0-64h384zM297.088 476.864a32 32 0 0 1 45.888 44.672l-74.688 76.8a32 32 0 0 1-45.888 0l-53.312-54.912a32 32 0 1 1 45.888-44.608l30.4 31.296 51.712-53.248zM832 704a32 32 0 1 1 0 64H448a32 32 0 1 1 0-64h384zM297.088 668.864a32 32 0 1 1 45.888 44.672l-74.688 76.8a32 32 0 0 1-45.888 0l-53.312-54.912a32 32 0 0 1 45.888-44.608l30.4 31.296 51.712-53.248z"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose02"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M625.90949835 750.17847188l-48.31838208 19.52370841-1.4643817 0.97763529c0.48881765 0.4867464 31.72343707 21.47483648 43.44056188 50.76039909 12.20179993 29.28349133 4.39314508 68.32883687 4.39314508 68.32883686l49.29394612-20.01045478c0-0.97763531 7.32190846-38.55652788-4.87989147-68.32883688-11.22416464-30.2631979-42.46499783-51.25128799-42.46499783-51.25128799z m241.59812418-92.73243673c-8.29747251 0-16.59494501 1.46438169-24.40359987 4.87989147h0.48881766l-197.67081593 78.09276233c0.97556404 3.41550978 32.70107237 18.54607309 44.9028723 47.83163569 12.20179993 30.25905538 6.34427316 71.25760025 6.34427317 71.25760025l34.65220045-14.15499927 37.5830351 92.73450799 15.61730972-44.90494356 43.4384906 13.17736398-34.65220045-85.41259954 97.61647072-39.53416318c32.69900112-13.17736397 48.80512848-50.75832781 35.14101811-83.94614658-9.7618542-23.91478221-32.70107237-40.02090957-59.05787158-40.02090958zM515.60862382 23.92593142c-2.44201699 0-4.87989147 0.48881765-7.32190847 1.4643817L26.55691994 245.02271191C16.30831936 249.90260338 11.91517427 262.10647457 16.79506574 272.35507517c2.43994573 4.87989147 6.34427316 8.29747251 11.22623589 10.25067184l134.21979927 62.96012774v0.48881766l40.02090957 19.03489075v-0.48881767l295.28521538 137.63738031h0.97556405c2.92876339 1.46438169 6.34427316 2.43994573 9.27303654 2.43994574 2.43994573 0 4.87989147-0.4867464 6.83309082-1.46438169l266.48847044-120.55361764 140.07732603-64.91332709 0.48674639 0.9776353 75.65074532-34.65220045c9.7618542-4.39314508 14.64174567-16.10612736 10.2486006-26.35679921-2.43994573-4.87989147-6.34427316-8.78629015-11.71298229-11.22623591L526.34397079 26.36794843h-0.97349277-0.48881765c-2.44201699-1.46438169-5.85752677-2.44201699-9.27303655-2.44201701z m30.25905537 757.48923114l-235.25177976 95.17445374c-32.70107237 13.17736397-48.80719973 50.27158142-35.62983575 83.46147143 9.75978293 24.40359987 33.67663641 40.50972723 59.54461796 40.50972724 8.29747251 0 16.59494501-1.46438169 24.40359987-4.87989147l235.74059742-91.75687269c0-0.97763531 7.31983721-38.55859915-4.39314508-67.84209048-11.71298228-29.77230899-44.41405465-54.66679776-44.41405466-54.66679777z"
            fill="#ffffff"
          ></path>
          <path
            d="M866.53205849 386.56441964l-339.21252366 171.31401671c-16.59494501 8.29747251-35.62983575 8.29747251-52.22478076 0L158.82559111 394.86189214v378.74461557c0 20.49720117 7.80865485 40.50972723 21.96365414 55.1514729l0.48881765 0.48674638c15.13056332 15.13263458 35.14101811 23.91685347 56.61585458 23.91685348 10.24860059 0 20.49720117-1.95112809 30.25905538-5.85752676l575.43986746-232.80976278c12.68854633-4.87989147 20.49720117-17.0816914 20.98601882-30.74994428l1.95319935-197.17992701zM83.17484579 609.61439947c-18.54814435 0-33.18781876-14.64174567-33.18781877-33.18781877V286.02125678c0-18.54607309 14.64174567-33.18781876 33.18781877-33.18781875s33.18781876 14.64174567 33.18781876 33.18781875v290.40325266c0 18.54814435-14.64174567 33.18989003-33.18781876 33.18989003zM49.98495577 665.25469001c0 18.54607309 14.64174567 33.18781876 33.18781876 33.18781876s33.18781876-14.64174567 33.18781875-33.18781876-14.64174567-33.18781876-33.18781875-33.18781877-33.18781876 15.12849205-33.18781876 33.18781877z"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose03"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M232.727273 828.509091V218.763636h69.818182v609.745455h-69.818182z m-107.054546-55.854546V272.290909h69.818182v500.363636h-69.818182z m214.109091-619.054545h542.254546v716.8H339.781818V153.6z m-18.618182 751.709091h577.163637c9.309091 0 18.618182-6.981818 18.618182-18.618182V137.309091c0-9.309091-6.981818-18.618182-18.618182-18.618182H321.163636c-9.309091 0-18.618182 6.981818-18.618181 18.618182v46.545454H214.109091c-9.309091 0-18.618182 6.981818-18.618182 18.618182v37.236364H109.381818c-9.309091 0-18.618182 6.981818-18.618182 18.618182v535.272727c0 9.309091 6.981818 18.618182 18.618182 18.618182h88.436364v37.236363c0 9.309091 6.981818 18.618182 18.618182 18.618182h88.436363v23.272728c0 6.981818 6.981818 13.963636 16.290909 13.963636z"
            fill="#ffffff"
          ></path>
          <path
            d="M425.890909 244.363636h186.181818v130.327273h-186.181818v-130.327273z m-18.618182 165.236364H628.363636c9.309091 0 18.618182-6.981818 18.618182-18.618182V225.745455c0-9.309091-6.981818-16.290909-18.618182-16.29091h-221.090909c-9.309091 0-18.618182 6.981818-18.618182 18.618182v165.236364c2.327273 9.309091 9.309091 16.290909 18.618182 16.290909z m0 109.381818h404.945455c9.309091 0 18.618182-6.981818 18.618182-18.618182 0-9.309091-6.981818-18.618182-18.618182-18.618181H407.272727c-9.309091 0-18.618182 6.981818-18.618182 18.618181 2.327273 11.636364 9.309091 18.618182 18.618182 18.618182z m0 109.381818h404.945455c9.309091 0 18.618182-6.981818 18.618182-18.618181 0-9.309091-6.981818-18.618182-18.618182-18.618182H407.272727c-9.309091 0-18.618182 6.981818-18.618182 18.618182 2.327273 11.636364 9.309091 18.618182 18.618182 18.618181z m0 109.381819h404.945455c9.309091 0 18.618182-6.981818 18.618182-18.618182 0-9.309091-6.981818-18.618182-18.618182-18.618182H407.272727c-9.309091 0-18.618182 6.981818-18.618182 18.618182 2.327273 9.309091 9.309091 18.618182 18.618182 18.618182z"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose04"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M842.472727 60.509091H372.363636c-18.618182 0-37.236364 18.618182-37.236363 37.236364s18.618182 37.236364 37.236363 37.236363h470.109091c32.581818 0 55.854545 23.272727 55.854546 55.854546v651.636363c0 32.581818-23.272727 55.854545-55.854546 55.854546h-651.636363c-32.581818 0-55.854545-23.272727-55.854546-55.854546V363.054545c0-18.618182-18.618182-37.236364-37.236363-37.236363s-37.236364 18.618182-37.236364 37.236363v479.418182c0 69.818182 60.509091 130.327273 130.327273 130.327273h651.636363c69.818182 0 130.327273-60.509091 130.327273-130.327273v-651.636363c0-74.472727-60.509091-130.327273-130.327273-130.327273z"
            fill="#fff"
          ></path>
          <path
            d="M777.309091 609.745455c23.272727 0 37.236364-18.618182 37.236364-37.236364s-18.618182-37.236364-37.236364-37.236364h-144.290909c-18.618182 0-37.236364 18.618182-37.236364 37.236364s18.618182 37.236364 37.236364 37.236364h144.290909zM437.527273 493.381818c13.963636 13.963636 37.236364 13.963636 55.854545 0 13.963636-13.963636 13.963636-37.236364 0-51.2l-377.018182-377.018182c-13.963636-13.963636-37.236364-13.963636-51.2 0s-13.963636 37.236364 0 51.2l372.363637 377.018182zM209.454545 744.727273c0 18.618182 18.618182 37.236364 37.236364 37.236363h530.618182c23.272727 0 37.236364-13.963636 37.236364-37.236363 0-18.618182-18.618182-37.236364-37.236364-37.236364h-530.618182c-18.618182 0-37.236364 18.618182-37.236364 37.236364z"
            fill="#fff"
          ></path>
        </svg>
        <svg
          v-if="choose05"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M945.664 136.192h-419.328V39.424c0-7.68-6.144-13.824-13.824-13.824h-0.512c-7.68 0-13.824 6.144-13.824 13.824v96.768h-419.84C60.416 136.192 46.08 151.04 46.08 168.96v564.736c0 17.92 14.336 32.256 32.256 32.256h292.352L302.08 954.368c-2.56 7.168 1.024 15.36 8.192 17.92h0.512c7.168 2.56 14.848-1.024 17.92-8.192l71.68-198.144h96.768v218.624c0 7.68 6.144 13.824 13.824 13.824h0.512c7.68 0 13.824-6.144 13.824-13.824v-218.624h96.768l71.68 198.144c2.56 7.168 10.752 10.752 17.92 8.192h0.512c7.168-2.56 10.752-10.752 8.192-17.92l-68.608-188.416h292.352c17.92 0 32.256-14.336 32.256-32.256V168.96c1.536-17.92-12.8-32.768-30.72-32.768z m4.096 597.504c0 2.56-2.048 4.096-4.096 4.096H78.336c-2.56 0-4.096-2.048-4.096-4.096V168.96c0-2.56 2.048-4.096 4.096-4.096h867.328c2.56 0 4.096 2.048 4.096 4.096v564.736z"
            fill="#fff"
          ></path>
          <path
            d="M626.688 456.192c-3.584-3.584-9.728-3.584-13.312 0l-81.92 82.432c-3.584 3.584-3.584 9.728 0 13.312l81.92 82.432c3.584 3.584 9.728 3.584 13.312 0l81.92-82.432c3.584-3.584 3.584-9.728 0-13.312l-81.92-82.432z m-6.656 144.384l-55.296-55.808 55.296-55.808 55.296 55.808-55.296 55.808z m152.064-320c-41.984 0-75.776 33.792-75.776 75.776s33.792 75.776 75.776 75.776 75.776-33.792 75.776-75.776-33.792-75.776-75.776-75.776z m0 123.904c-26.112 0-47.616-21.504-47.616-47.616s21.504-47.616 47.616-47.616 47.616 21.504 47.616 47.616c0 26.112-20.992 47.616-47.616 47.616zM197.632 337.92h346.624v28.16H197.632V337.92zM197.632 519.168h249.344v28.16H197.632v-28.16z"
            fill="#fff"
          ></path>
        </svg>
        <svg
          v-if="choose06"
          class="icon"
          viewBox="0 0 1042 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M916.114286 109.714286h-804.571429c-20.114286 0-36.571429 16.457143-36.571428 36.571428v621.714286c0 20.114286 16.457143 36.571429 36.571428 36.571429h804.571429c20.114286 0 36.571429-16.457143 36.571428-36.571429V146.285714c0-20.114286-16.457143-36.571429-36.571428-36.571428z m-36.571429 621.714285h-731.428571V182.857143h731.428571v548.571428zM788.114286 841.142857h-548.571429v73.142857h548.571429v-73.142857z"
            fill="#ffffff"
          ></path>
          <path
            d="M469.942857 431.542857c-12.8 3.657143-21.942857 14.628571-25.6 27.428572L405.942857 621.714286c-3.657143 12.8 0 25.6 9.142857 34.742857 7.314286 7.314286 16.457143 10.971429 25.6 10.971428 3.657143 0 5.485714 0 9.142857-1.828571l162.742858-38.4c12.8-3.657143 23.771429-12.8 27.428571-25.6 0-3.657143 1.828571-5.485714 1.828571-9.142857l181.028572-181.028572c14.628571-14.628571 14.628571-36.571429 0-51.2l-109.714286-109.714285c-14.628571-14.628571-38.4-14.628571-51.2 0l-181.028571 181.028571c-3.657143-1.828571-7.314286-1.828571-10.971429 0z m21.942857 148.114286l9.142857-42.057143 31.085715 31.085714-40.228572 10.971429z m195.657143-254.171429l58.514286 58.514286-148.114286 148.114286-58.514286-58.514286 148.114286-148.114286zM501.028571 274.285714h-256v73.142857h256v-73.142857zM354.742857 438.857143h-109.714286v73.142857h109.714286v-73.142857z"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose07"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M282.8 709.5l10.2 110 78.2-78.1 120-332-88.4-31.9zM429 305.1l-16.3 45.1 88.4 32 16.3-45.1c3-8.3-1.3-17.5-9.6-20.5l-58.3-21.1c-8.3-3-17.5 1.3-20.5 9.6zM288.7 224.1c17.7 0 32-14.3 32-31.9v-96c0-17.6-14.3-31.9-32-31.9h-0.1c-17.6 0-31.9 14.3-31.9 31.9v95.9c0.1 17.6 14.4 32 32 32zM384.7 192.1h64.1c17.6 0 31.9-14.3 31.9-31.9 0-17.6-14.3-31.9-31.9-31.9h-64.1c-17.6 0-32 14.3-32 31.9 0 17.5 14.3 31.9 32 31.9zM544.7 224.1c17.7 0 32-14.3 32-31.9v-96c0-17.6-14.3-31.9-32-31.9h-0.1c-17.6 0-31.9 14.3-31.9 31.9v95.9c0 17.6 14.3 32 32 32z"
            fill="#ffffff"
          ></path>
          <path
            d="M544.5 895.4H160.8c-17.7 0-32-14.3-32-32V224.1c0-17.7 14.3-32 32-32h32c17.6 0 32-14.3 32-31.9 0-17.6-14.3-31.9-32-31.9h-32c-53 0-95.9 42.9-95.9 95.9v639.3c0 53 43 95.9 95.9 95.9h383.7c17.6 0 31.9-14.3 31.9-32 0.1-17.7-14.2-32-31.9-32zM736.6 575.8c17.6 0 32-14.3 32-31.9V224.1c0-53-43-95.9-95.9-95.9h-32c-17.6 0-32 14.3-32 31.9 0 17.6 14.3 31.9 32 31.9h32c17.7 0 32 14.3 32 32v319.8c-0.1 17.6 14.2 32 31.9 32z"
            fill="#ffffff"
          ></path>
          <path
            d="M650.2 639.7h-35.8c-17.7 0-32 14.3-32 32s14.3 32 32 32h35.8c17.7 0 32-14.3 32-32 0-17.6-14.3-32-32-32zM927.2 639.7H769.4c-17.7 0-32 14.3-32 32s14.3 32 32 32h157.8c17.7 0 32-14.3 32-32 0-17.6-14.3-32-32-32zM927.2 767.7H671.4c-17.7 0-32 14.3-32 32s14.3 32 32 32h255.8c17.7 0 32-14.3 32-32 0-17.6-14.3-32-32-32zM927.2 895.7H671.4c-17.7 0-32 14.3-32 32s14.3 32 32 32h255.8c17.7 0 32-14.3 32-32 0-17.6-14.3-32-32-32z"
            fill="#ffffff"
          ></path>
        </svg>
        <div class="name">{{ s[2] }}</div>
      </div>
      <div class="d4" @click="bt4">
        <svg
          v-if="choose01"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M312.233302 338.483537c20.952023 63.458137 78.991533 63.337723 99.943556 0 6.863594-3.612418 13.847601-14.329257 15.05174-23.119473 1.204139-9.271872 0.481656-21.674506-8.790216-21.674506-2.047037-29.742239-18.302916-54.908749-55.390405-54.908749-36.244591 0-54.667921 21.79492-56.955785 54.908749-9.392286 0-10.11477 12.402634-8.790216 21.674506 1.083725 8.790216 8.067733 19.507056 14.931326 23.119473z m0 0"
            fill="#ffffff"
          ></path>
          <path
            d="M446.494826 702.253998v-22.156162c24.203198 0 43.951082-19.627469 43.951082-43.951082v-1.444967l170.867356-170.867356c2.167451-2.167451 3.492004-5.177799 3.492004-8.308561 0-3.130762-1.204139-6.14111-3.492004-8.30856-2.167451-2.167451-5.177799-3.492004-8.30856-3.492004-3.130762 0-6.14111 1.204139-8.308561 3.492004l-154.129821 154.129821v-145.700847c0-31.668862-23.119473-59.002822-55.390405-65.866416l-23.601129-4.816557-49.249294 98.016934-49.249295-98.016934-23.601128 4.816557c-32.270931 6.74318-55.390405 34.197554-55.390405 65.866416v180.50047c0 24.203198 19.627469 43.951082 43.951082 43.951082v22.156162h168.459078z m0 0"
            fill="#ffffff"
          ></path>
          <path
            d="M94.765757 550.171214c0.120414 67.431797 54.667921 122.099718 122.099718 122.220131h1.444967c-6.74318-10.837253-10.235183-23.480715-10.235183-36.244591v-16.737535c-34.920038-4.455315-61.170273-34.07714-61.170273-69.238005V218.069614c0-38.652869 31.428034-70.080903 70.080903-70.080903h583.164628c38.652869 0 70.080903 31.428034 70.080904 70.080903V550.291627c0 38.773283-31.428034 70.080903-70.080904 70.080904H541.501411l-26.009407 26.009407c-1.685795 9.271872-5.057385 18.062088-10.11477 26.009407h294.652869c67.431797-0.120414 122.099718-54.788335 122.220132-122.220131V217.9492c-0.120414-67.431797-54.788335-122.099718-122.220132-122.220131H216.985889C149.433678 95.849483 94.886171 150.517404 94.765757 217.9492v332.222014z m171.108185 194.950141h-91.15334c-21.19285 0-41.542803 8.428975-56.594544 23.360301-15.05174 14.931326-23.480715 35.281279-23.480715 56.594543v105.603011h251.06303v-105.603011c0-21.19285-8.428975-41.542803-23.360302-56.594543a78.931326 78.931326 0 0 0-56.474129-23.360301z m289.595484 0h-91.153339c-21.19285 0-41.542803 8.428975-56.594544 23.360301-15.05174 15.05174-23.360301 35.281279-23.360301 56.594543v105.603011h251.063029v-105.603011c0-21.19285-8.428975-41.542803-23.360301-56.594543-15.05174-15.05174-35.401693-23.360301-56.594544-23.360301z m289.715899 0h-91.15334c-21.19285 0-41.542803 8.428975-56.594544 23.360301-15.05174 14.931326-23.480715 35.281279-23.480715 56.594543v105.603011h250.942615v-105.603011c0-21.19285-8.308561-41.542803-23.360301-56.594543-14.810913-15.05174-35.160865-23.480715-56.353715-23.360301z m0 0"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose02"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M960.364169 254.738775c-2.433422 20.125363-11.332093 39.523155-26.590612 54.870702L577.759191 665.623843c-36.450167 36.450167-96.011704 36.450167-132.444475 0L89.30035 309.609477c-15.364943-15.347546-24.264637-34.834366-26.609031-54.870702-0.462534 3.836375-0.74599 7.673773-0.74599 11.617595l0 487.037469c0 51.513234 42.134633 93.665263 93.66731 93.665263l711.833281 0c51.514257 0 93.684706-42.152029 93.684706-93.665263L961.130625 266.355347C961.128579 262.411525 960.845123 258.57515 960.364169 254.738775L960.364169 254.738775zM577.759191 597.448114l373.244796-373.245819c-15.45397-30.535457-47.216371-51.513234-83.559091-51.513234L155.611615 172.689061c-36.344766 0-68.087725 20.977777-83.541695 51.513234l373.244796 373.245819C481.747487 633.880885 541.308001 633.880885 577.759191 597.448114L577.759191 597.448114zM577.759191 597.448114"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose03"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M682.688 64c21.376 0 39.104 15.808 42.24 36.352l0.384 6.336V128h149.376c44.352 0 80.768 33.856 84.928 77.12l0.384 8.192V704a42.688 42.688 0 0 1-84.864 6.336L874.688 704l-0.128-256H149.248l0.064 426.688H512a42.688 42.688 0 0 1 6.336 84.864L512 960H149.312a85.312 85.312 0 0 1-84.928-77.12L64 874.688V213.312C64 166.208 102.208 128 149.312 128h149.312v-21.312a42.688 42.688 0 0 1 84.928-6.336L384 106.688V128h256v-21.312c0-23.616 19.072-42.688 42.688-42.688zM640 490.688a192 192 0 0 1 171.136 279.104l112.192 93.44a42.688 42.688 0 0 1-48.96 69.568l-5.696-4.032-112.192-93.44A192 192 0 1 1 640 490.688zM640 576a106.688 106.688 0 1 0 0 213.312A106.688 106.688 0 0 0 640 576zM298.624 213.312H149.312v149.312h725.312V213.312h-149.312v64a42.688 42.688 0 0 1-84.864 6.336L640 277.312v-64H384v64a42.688 42.688 0 0 1-84.864 6.336l-0.448-6.336-0.064-64z"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose04"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M312.233302 338.483537c20.952023 63.458137 78.991533 63.337723 99.943556 0 6.863594-3.612418 13.847601-14.329257 15.05174-23.119473 1.204139-9.271872 0.481656-21.674506-8.790216-21.674506-2.047037-29.742239-18.302916-54.908749-55.390405-54.908749-36.244591 0-54.667921 21.79492-56.955785 54.908749-9.392286 0-10.11477 12.402634-8.790216 21.674506 1.083725 8.790216 8.067733 19.507056 14.931326 23.119473z m0 0"
            fill="#ffffff"
          ></path>
          <path
            d="M446.494826 702.253998v-22.156162c24.203198 0 43.951082-19.627469 43.951082-43.951082v-1.444967l170.867356-170.867356c2.167451-2.167451 3.492004-5.177799 3.492004-8.308561 0-3.130762-1.204139-6.14111-3.492004-8.30856-2.167451-2.167451-5.177799-3.492004-8.30856-3.492004-3.130762 0-6.14111 1.204139-8.308561 3.492004l-154.129821 154.129821v-145.700847c0-31.668862-23.119473-59.002822-55.390405-65.866416l-23.601129-4.816557-49.249294 98.016934-49.249295-98.016934-23.601128 4.816557c-32.270931 6.74318-55.390405 34.197554-55.390405 65.866416v180.50047c0 24.203198 19.627469 43.951082 43.951082 43.951082v22.156162h168.459078z m0 0"
            fill="#ffffff"
          ></path>
          <path
            d="M94.765757 550.171214c0.120414 67.431797 54.667921 122.099718 122.099718 122.220131h1.444967c-6.74318-10.837253-10.235183-23.480715-10.235183-36.244591v-16.737535c-34.920038-4.455315-61.170273-34.07714-61.170273-69.238005V218.069614c0-38.652869 31.428034-70.080903 70.080903-70.080903h583.164628c38.652869 0 70.080903 31.428034 70.080904 70.080903V550.291627c0 38.773283-31.428034 70.080903-70.080904 70.080904H541.501411l-26.009407 26.009407c-1.685795 9.271872-5.057385 18.062088-10.11477 26.009407h294.652869c67.431797-0.120414 122.099718-54.788335 122.220132-122.220131V217.9492c-0.120414-67.431797-54.788335-122.099718-122.220132-122.220131H216.985889C149.433678 95.849483 94.886171 150.517404 94.765757 217.9492v332.222014z m171.108185 194.950141h-91.15334c-21.19285 0-41.542803 8.428975-56.594544 23.360301-15.05174 14.931326-23.480715 35.281279-23.480715 56.594543v105.603011h251.06303v-105.603011c0-21.19285-8.428975-41.542803-23.360302-56.594543a78.931326 78.931326 0 0 0-56.474129-23.360301z m289.595484 0h-91.153339c-21.19285 0-41.542803 8.428975-56.594544 23.360301-15.05174 15.05174-23.360301 35.281279-23.360301 56.594543v105.603011h251.063029v-105.603011c0-21.19285-8.428975-41.542803-23.360301-56.594543-15.05174-15.05174-35.401693-23.360301-56.594544-23.360301z m289.715899 0h-91.15334c-21.19285 0-41.542803 8.428975-56.594544 23.360301-15.05174 14.931326-23.480715 35.281279-23.480715 56.594543v105.603011h250.942615v-105.603011c0-21.19285-8.308561-41.542803-23.360301-56.594543-14.810913-15.05174-35.160865-23.480715-56.353715-23.360301z m0 0"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose05"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M898.439335 373.279078a121.879959 121.879959 0 0 0-111.879552 73.753001H396.543913a199.799797 199.799797 0 0 0-193.410647-150.770024A199.660902 199.660902 0 0 0 3.680705 495.714615a199.660902 199.660902 0 0 0 199.452561 199.45256 198.410851 198.410851 0 0 0 118.754832-39.307155l298.623262 219.592269a121.324381 121.324381 0 0 0-2.986233 26.876094 121.810512 121.810512 0 0 0 121.671618 121.671617 121.810512 121.810512 0 0 0 121.671617-121.671617 121.810512 121.810512 0 0 0-121.671617-121.671618 121.046592 121.046592 0 0 0-61.044151 16.459003L383.487826 580.509732a198.410851 198.410851 0 0 0 12.917193-35.973686h390.640895a121.879959 121.879959 0 0 0 111.115632 72.225161 121.810512 121.810512 0 0 0 121.671618-121.671617 121.810512 121.810512 0 0 0-121.393829-121.810512zM203.202713 581.204205a85.559037 85.559037 0 0 1-85.48959-85.48959 85.559037 85.559037 0 0 1 85.48959-85.48959 85.559037 85.559037 0 0 1 85.489589 85.48959 85.559037 85.559037 0 0 1-85.628484 85.48959z m536.202373 296.748186a24.375992 24.375992 0 0 1 24.306545 24.306544 24.375992 24.375992 0 0 1-24.306545 24.306545 24.375992 24.375992 0 0 1-24.375991-24.306545 24.375992 24.375992 0 0 1 24.237097-24.306544z m159.103697-358.625704a24.375992 24.375992 0 0 1-24.306545-24.306545 24.375992 24.375992 0 0 1 24.306545-24.306544 24.375992 24.375992 0 0 1 24.375991 24.306544 24.375992 24.375992 0 0 1-24.445439 24.306545z"
            fill="#ffffff"
          ></path>
          <path
            d="M425.711767 391.127026l250.774093-165.145609a120.977145 120.977145 0 0 0 62.502543 17.361818 121.810512 121.810512 0 0 0 121.671617-121.671618A121.810512 121.810512 0 0 0 738.988403 0a121.810512 121.810512 0 0 0-121.671618 121.671617 121.60217 121.60217 0 0 0 2.569549 24.931571L367.37606 312.859953a247.162835 247.162835 0 0 1 58.335707 78.267073z m313.346083-293.761953a24.375992 24.375992 0 0 1 24.306545 24.306544 24.375992 24.375992 0 0 1-24.306545 24.306545 24.375992 24.375992 0 0 1-24.306544-24.306545 24.375992 24.375992 0 0 1 24.375991-24.306544z"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose06"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.781938 0C20.085042 0 0 20.109125 0 44.818062v934.363876c0 24.708937 20.085042 44.812041 44.781938 44.812041h390.737159a21.897272 21.897272 0 0 0 0-43.794543h-356.365005a35.4619 35.4619 0 0 1-35.407714-35.425777V79.208278a35.4619 35.4619 0 0 1 35.407714-35.425776h744.513265a35.467921 35.467921 0 0 1 35.407714 35.425776v376.052682a21.891251 21.891251 0 0 0 21.861147 21.88523 21.897272 21.897272 0 0 0 21.873189-21.88523V44.818062c0-24.708937-20.085042-44.8-44.787958-44.8H44.781938V0z"
            fill="#ffffff"
          ></path>
          <path
            d="M210.796613 380.694638c-13.974036 0-25.329069 10.229163-25.329068 22.812418 0 12.577234 11.355033 22.806397 25.329068 22.806396h546.047037c13.961994 0 25.329069-10.229163 25.329069-22.806396 0-12.583255-11.367074-22.812418-25.329069-22.812418H210.796613zM210.796613 517.292192c-13.974036 0-25.329069 10.229163-25.329068 22.812418 0 12.571214 11.355033 22.800376 25.329068 22.800376h232.976858c13.968015 0 25.329069-10.229163 25.329069-22.800376 0-12.583255-11.361054-22.812418-25.329069-22.812418H210.796613zM210.796613 244.109125c-13.974036 0-25.329069 10.229163-25.329068 22.812418 0 12.571214 11.355033 22.800376 25.329068 22.800376h546.047037c13.961994 0 25.329069-10.229163 25.329069-22.800376 0-12.577234-11.367074-22.812418-25.329069-22.812418H210.796613zM556.222013 629.674506v-17.249294a542.109501 542.109501 0 0 1 15.328693-13.040828 498.814675 498.814675 0 0 1 17.369708-13.606773 309.066416 309.066416 0 0 1 19.765945-14.052305 300.673565 300.673565 0 0 1 23.203763-13.829539c7.652305 11.192474 11.547695 21.945437 11.547695 32.114393 0 5.611289-1.137912 11.770461-3.540169 18.640075a260.84666 260.84666 0 0 1-9.711383 23.528881c-4.130198 8.808278-9.265851 19.898401-15.431044 33.149953-16.580997 36.58175-28.935466 66.637065-37.039323 90.418814-8.21825 23.763688-12.215992 39.887112-12.215992 48.34017 0 0.680339 0.457573 3.419755 1.481091 8.21825 1.03556 4.810536 1.493133 8.350706 1.493133 10.746943 0 4.118156-1.149953 6.291627-3.431797 6.526434-2.281844 0.222766-5.599247-0.590028-9.711383-2.528692-10.740922-5.36444-17.935654-10.397742-21.602258-15.075823-3.648542-4.810536-5.478833-10.98175-5.478833-18.519662 0-13.606773 4.900847-34.631044 14.859078-63.205268a466.092192 466.092192 0 0 1 17.604515-43.07206 673.794167 673.794167 0 0 1 22.39699-43.33095 2069.734713 2069.734713 0 0 1 23.203763-40.453058c-16.153528 6.616745-32.716463 15.412982-50.092192 26.280339zM835.654563 630.589652c0-13.040828-1.481091-22.860583-4.449295-29.48937-3.100659-6.634807-7.772719-11.439323-14.413546-14.407526-1.023518-9.500659-6.05682-15.31063-15.310631-17.496143-14.064346-3.082596-30.729633 0.577987-50.290875 10.758984-19.54318 10.162935-38.279586 24.799247-56.233302 43.662089a261.689558 261.689558 0 0 0-44.462841 63.560489c-11.656068 23.414487-17.47206 45.823518-17.47206 67.076576 0 15.322672 2.631044 28.574224 7.995485 40.013546 5.256068 11.421261 12.4508 20.223518 21.36745 26.406774 9.031044 6.177234 18.628034 9.247789 28.79699 9.247789 13.1492 0 30.055315-7.303104 50.634054-21.825024 18.284854-12.920414 34.631044-29.477328 48.797743-49.484101 14.166698-20.006773 25.25682-41.368203 33.137911-64.240828 7.905174-22.752211 11.902916-44.011289 11.902917-63.783255z m-28.002258 36.575729c-5.376482 14.853057-13.1492 29.946943-23.318156 45.131138a222.380433 222.380433 0 0 1-35.431797 41.392286c-13.92587 12.793979-27.201505 22.740169-39.760677 30.055315s-22.174224 10.969708-28.923425 10.969709c-11.75842 0-17.592474-8.808278-17.592474-26.280339 0-12.125682 3.642521-26.972719 11.090122-44.342427 7.303104-17.38175 18.399247-35.443838 32.909126-54.059831 8.90461-11.204516 17.478081-20.452305 25.714393-27.899906 8.230292-7.429539 15.431044-13.1492 21.716651-17.243273 6.279586-4.009784 16.225776-9.940169 21.825023-12.354469 5.599247-2.516651 19.886359-4.449294 24.341675-4.575729 4.455315 0 8.115898 1.938664 11.090122 5.61731 2.962183 3.762935 4.455315 8.90461 4.455315 15.65381 0 10.37968-2.739417 23.071308-8.115898 37.936406zM1019.532643 601.100282c-3.082596-6.634807-7.772719-11.439323-14.401505-14.407526-1.03556-9.500659-6.05682-15.31063-15.322671-17.496143-14.052305-3.082596-30.729633 0.577987-50.284855 10.758984-19.54318 10.162935-38.285607 24.799247-56.22126 43.662089a261.18984 261.18984 0 0 0-44.462841 63.560489c-11.656068 23.414487-17.484102 45.823518-17.484102 67.076576 0 15.322672 2.637065 28.574224 7.995485 40.013546 5.256068 11.421261 12.462841 20.223518 21.379492 26.406774 9.031044 6.177234 18.628034 9.247789 28.796989 9.247789 13.137159 0 30.055315-7.303104 50.622014-21.825024 18.296896-12.920414 34.631044-29.477328 48.797742-49.484101 14.166698-20.006773 25.2508-41.368203 33.149953-64.240828 7.881091-22.740169 11.890875-44.011289 11.890875-63.777234 0.012041-13.046849-1.481091-22.866604-4.455316-29.495391z m-23.649294 66.065099c-5.382502 14.853057-13.155221 29.946943-23.318156 45.131138a222.416557 222.416557 0 0 1-35.437818 41.392286c-13.937912 12.793979-27.201505 22.740169-39.760677 30.055315s-22.168203 10.969708-28.917404 10.969709c-11.770461 0-17.592474-8.808278-17.592474-26.280339 0-12.125682 3.648542-26.972719 11.078081-44.342427 7.315146-17.38175 18.411289-35.443838 32.915146-54.059831 8.90461-11.204516 17.484102-20.452305 25.714393-27.899906 8.230292-7.429539 15.431044-13.1492 21.716651-17.243273 6.279586-4.009784 17.592474-9.940169 21.825024-12.354469 4.340922-2.516651 19.988711-4.449294 24.341674-4.575729 4.455315 0 8.115898 1.938664 11.090123 5.61731 2.974224 3.762935 4.455315 8.90461 4.455315 15.65381 0.006021 10.37968-2.745437 23.071308-8.109878 37.936406zM1015.318156 831.849483c-11.096143 1.836312-22.282596 4.009784-33.378739 6.291627-11.090122 2.293885-22.180245 4.58777-33.149953 7.09238a1473.487112 1473.487112 0 0 0-65.709878 16.460583 1463.059266 1463.059266 0 0 0-64.794732 19.085607c-21.475823 6.737159-42.752963 13.817498-63.777234 21.590217-21.030292 7.664346-41.723424 16.580997-62.067357 25.726434a1830.857573 1830.857573 0 0 1-61.477328 26.177987c-5.147695 2.047037-10.409784 3.985701-15.545437 6.171214-5.147695 2.059078-10.28937 4.220508-15.545438 6.291627-5.256068 2.047037-10.28937 4.340922-15.545437 6.279586-5.256068 2.059078-10.397742 4.106115-15.65381 6.291628-2.637065 1.131891-5.256068 2.047037-7.772719 3.196989l-7.893133 3.070555c-5.256068 2.185513-10.403763 4.352963-15.768203 6.4l-7.995484 3.106679c-2.637065 1.023518-5.256068 2.173471-8.007526 3.184949-5.36444 2.071119-10.734901 4.136218-16.225776 5.948447l-1.938664-3.094637c4.118156-4.106115 8.230292-8.21825 12.565192-12.113641 2.173471-1.938664 4.232549-3.88937 6.406021-5.828034l6.622766-5.599247c4.455315-3.648542 9.031044-7.315146 13.606773-10.861336 2.287865-1.709878 4.678081-3.425776 6.971966-5.141675 2.396237-1.72794 4.678081-3.425776 7.080339-5.02126 2.396237-1.631609 4.690122-3.329445 7.098401-4.906868l7.315146-4.702163a516.166322 516.166322 0 0 1 14.732643-9.151458c4.918909-2.962183 10.066604-5.701599 14.973471-8.675824 5.021261-2.859831 10.168956-5.478833 15.310631-8.115898 5.141675-2.631044 10.277328-5.268109 15.545437-7.652305 5.256068-2.396237 10.512135-4.678081 15.768203-6.971966 5.256068-2.281844 10.734901-4.220508 16.111383-6.279586l8.133961-2.974224 8.21825-2.739417c5.472813-1.715898 10.963688-3.552211 16.442521-5.256067l16.580997-4.912888c5.478833-1.709878 11.078081-3.190969 16.568956-4.810537 5.478833-1.601505 10.969708-3.317404 16.568956-4.798494 22.059831-6.4 44.234055-11.993227 66.51063-17.249295a1483.710254 1483.710254 0 0 1 67.20301-13.480339 1260.011289 1260.011289 0 0 1 67.660584-9.849858c22.625776-2.625024 45.251552-4.798495 68.112135-5.70762l0.138476 3.528128zM1023.181185 892.893321c-9.247789 1.258325-18.393227 2.739417-27.659078 4.232549-9.139417 1.481091-18.393227 3.082596-27.538664 4.798495-18.278833 3.431797-36.563688 6.971966-54.740169 11.090122a1423.172154 1423.172154 0 0 0-54.174224 12.920414c-4.455315 1.131891-9.031044 2.281844-13.468297 3.54017l-13.390029 3.648541c-8.90461 2.516651-17.827281 5.033302-26.623518 7.772719-8.90461 2.631044-17.604516 5.605268-26.400753 8.579492a981.608278 981.608278 0 0 0-25.943179 9.609031l-51.434807 19.669614c-17.134901 6.634807-34.173471 13.371966-50.856821 20.92192-16.791722 7.52587-33.360677 15.65381-50.050047 24.341674l-1.378739-1.824271c12.920414-14.064346 27.881844-25.961242 43.650047-36.690122 15.780245-10.746943 32.565945-19.777987 49.827281-27.911947 4.346943-1.932643 8.573471-3.997742 13.028787-5.822014 4.346943-1.842333 8.796237-3.552211 13.251552-5.268109a532.193415 532.193415 0 0 1 26.966698-9.019003c4.58777-1.258325 9.031044-2.739417 13.618815-3.889369l13.703104-3.654563 13.709125-3.419755c4.575729-1.258325 9.145437-2.293885 13.709125-3.431797 9.151458-2.281844 18.284854-4.340922 27.436312-6.4l13.82954-2.974224c4.563688-1.023518 9.25381-1.836312 13.829539-2.739417a1305.744497 1305.744497 0 0 1 55.420508-9.374224 1299.747883 1299.747883 0 0 1 55.781749-6.869614c9.25381-0.903104 18.628034-1.824271 27.990217-2.504609 9.374224-0.680339 18.628034-1.378739 27.996237-1.715899l-0.090311 2.384196z"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose07"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M512.1 428c-108.1 0-196 88-196 196s88 196 196 196 196-88 196-196-87.9-196-196-196z m0 336.1c-77.2 0-140-62.8-140-140s62.8-140 140-140 140 62.8 140 140-62.8 140-140 140z"
            fill="#ffffff"
          ></path>
          <path
            d="M960.2 120c0-30.8-25.2-56-56-56H120c-30.8 0-56 25.2-56 56v112l195.4 171C207.7 462.1 176 539.3 176 624.1c0 185.6 150.5 336.1 336.1 336.1s336.1-150.5 336.1-336.1c0-84.8-31.6-162-83.4-221.1l195.4-171V120z m-336.1 0v187.6c-35.1-12.4-72.7-19.5-112-19.5s-76.9 7.1-112 19.5V120h224zM120 120h224v213.4c-15.6 9-30.5 19.1-44.4 30.4L120 206.6V120z m161.6 259.9c-1 1-2.1 1.9-3.1 2.8 1-0.9 2.1-1.8 3.1-2.8z m230.5 524.2c-154.4 0-280.1-125.6-280.1-280C232 469.6 357.7 344 512.1 344s280.1 125.6 280.1 280.1c0 154.4-125.7 280-280.1 280zM742.7 380l3 2.7-3-2.7z m161.5-173.4L724.5 363.7c-13.9-11.3-28.8-21.4-44.4-30.4V120h224.1v86.6z"
            fill="#ffffff"
          ></path>
        </svg>
        <div class="name">{{ s[3] }}</div>
      </div>
      <div class="d5" @click="bt5">
        <svg
          v-if="choose01"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M898.439335 373.279078a121.879959 121.879959 0 0 0-111.879552 73.753001H396.543913a199.799797 199.799797 0 0 0-193.410647-150.770024A199.660902 199.660902 0 0 0 3.680705 495.714615a199.660902 199.660902 0 0 0 199.452561 199.45256 198.410851 198.410851 0 0 0 118.754832-39.307155l298.623262 219.592269a121.324381 121.324381 0 0 0-2.986233 26.876094 121.810512 121.810512 0 0 0 121.671618 121.671617 121.810512 121.810512 0 0 0 121.671617-121.671617 121.810512 121.810512 0 0 0-121.671617-121.671618 121.046592 121.046592 0 0 0-61.044151 16.459003L383.487826 580.509732a198.410851 198.410851 0 0 0 12.917193-35.973686h390.640895a121.879959 121.879959 0 0 0 111.115632 72.225161 121.810512 121.810512 0 0 0 121.671618-121.671617 121.810512 121.810512 0 0 0-121.393829-121.810512zM203.202713 581.204205a85.559037 85.559037 0 0 1-85.48959-85.48959 85.559037 85.559037 0 0 1 85.48959-85.48959 85.559037 85.559037 0 0 1 85.489589 85.48959 85.559037 85.559037 0 0 1-85.628484 85.48959z m536.202373 296.748186a24.375992 24.375992 0 0 1 24.306545 24.306544 24.375992 24.375992 0 0 1-24.306545 24.306545 24.375992 24.375992 0 0 1-24.375991-24.306545 24.375992 24.375992 0 0 1 24.237097-24.306544z m159.103697-358.625704a24.375992 24.375992 0 0 1-24.306545-24.306545 24.375992 24.375992 0 0 1 24.306545-24.306544 24.375992 24.375992 0 0 1 24.375991 24.306544 24.375992 24.375992 0 0 1-24.445439 24.306545z"
            fill="#ffffff"
          ></path>
          <path
            d="M425.711767 391.127026l250.774093-165.145609a120.977145 120.977145 0 0 0 62.502543 17.361818 121.810512 121.810512 0 0 0 121.671617-121.671618A121.810512 121.810512 0 0 0 738.988403 0a121.810512 121.810512 0 0 0-121.671618 121.671617 121.60217 121.60217 0 0 0 2.569549 24.931571L367.37606 312.859953a247.162835 247.162835 0 0 1 58.335707 78.267073z m313.346083-293.761953a24.375992 24.375992 0 0 1 24.306545 24.306544 24.375992 24.375992 0 0 1-24.306545 24.306545 24.375992 24.375992 0 0 1-24.306544-24.306545 24.375992 24.375992 0 0 1 24.375991-24.306544z"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose02"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M903.264172 1024H120.725438A104.792348 104.792348 0 0 1 16.050834 919.325396v-719.417133a104.792348 104.792348 0 0 1 104.674604-104.6639h782.538734a104.792348 104.792348 0 0 1 104.674604 104.6639v303.319793a26.760048 26.760048 0 0 1-53.520096 0V199.908263a51.24014 51.24014 0 0 0-51.175916-51.165212H120.725438a51.24014 51.24014 0 0 0-51.175916 51.165212v719.417133a51.24014 51.24014 0 0 0 51.175916 51.154508h782.538734a51.24014 51.24014 0 0 0 51.154508-51.154508V811.600146a26.760048 26.760048 0 1 1 53.520096 0v107.72525a104.792348 104.792348 0 0 1-104.674604 104.674604z"
            fill="#ffffff"
          ></path>
          <path
            d="M981.178728 767.446067a26.760048 26.760048 0 0 1-26.760048-26.760048v-73.247604a26.760048 26.760048 0 0 1 53.520096 0v73.258308a26.760048 26.760048 0 0 1-26.760048 26.749344zM981.178728 622.749135a26.760048 26.760048 0 0 1-26.760048-26.760048v-11.924278a26.760048 26.760048 0 0 1 53.520096 0v11.892166a26.760048 26.760048 0 0 1-26.760048 26.79216zM264.651681 245.582313a26.760048 26.760048 0 0 1-26.760048-26.760048l0.171264-192.062217a26.760048 26.760048 0 0 1 26.760048-26.760048 26.760048 26.760048 0 0 1 26.760048 26.760048l-0.171264 192.062217a26.760048 26.760048 0 0 1-26.760048 26.760048zM512.888591 245.582313a26.760048 26.760048 0 0 1-26.760048-26.760048l0.181968-192.062217a26.760048 26.760048 0 0 1 26.760048-26.760048 26.760048 26.760048 0 0 1 26.760048 26.760048l-0.181968 192.062217a26.760048 26.760048 0 0 1-26.760048 26.760048zM762.195903 245.582313a26.760048 26.760048 0 0 1-26.760048-26.760048l0.181968-192.062217a26.760048 26.760048 0 0 1 26.760048-26.760048 26.760048 26.760048 0 0 1 26.760048 26.760048l-0.181968 192.062217a26.760048 26.760048 0 0 1-26.760048 26.760048z"
            fill="#ffffff"
          ></path>
          <path
            d="M243.42561 394.303957m52.428287 0l0 0q52.428286 0 52.428286 52.428286l0 0q0 52.428286-52.428286 52.428286l0 0q-52.428286 0-52.428287-52.428286l0 0q0-52.428286 52.428287-52.428286Z"
            fill="#ffffff"
          ></path>
          <path
            d="M460.631569 394.303957m52.428286 0l0 0q52.428286 0 52.428286 52.428286l0 0q0 52.428286-52.428286 52.428286l0 0q-52.428286 0-52.428286-52.428286l0 0q0-52.428286 52.428286-52.428286Z"
            fill="#ffffff"
          ></path>
          <path
            d="M677.837527 394.303957m52.428286 0l0 0q52.428286 0 52.428286 52.428286l0 0q0 52.428286-52.428286 52.428286l0 0q-52.428286 0-52.428286-52.428286l0 0q0-52.428286 52.428286-52.428286Z"
            fill="#ffffff"
          ></path>
          <path
            d="M243.42561 550.518413m52.428287 0l0 0q52.428286 0 52.428286 52.428286l0 0q0 52.428286-52.428286 52.428287l0 0q-52.428286 0-52.428287-52.428287l0 0q0-52.428286 52.428287-52.428286Z"
            fill="#ffffff"
          ></path>
          <path
            d="M460.631569 550.518413m52.428286 0l0 0q52.428286 0 52.428286 52.428286l0 0q0 52.428286-52.428286 52.428287l0 0q-52.428286 0-52.428286-52.428287l0 0q0-52.428286 52.428286-52.428286Z"
            fill="#ffffff"
          ></path>
          <path
            d="M677.837527 550.518413m52.428286 0l0 0q52.428286 0 52.428286 52.428286l0 0q0 52.428286-52.428286 52.428287l0 0q-52.428286 0-52.428286-52.428287l0 0q0-52.428286 52.428286-52.428286Z"
            fill="#ffffff"
          ></path>
          <path
            d="M243.42561 706.743574m52.428287 0l0 0q52.428286 0 52.428286 52.428286l0 0q0 52.428286-52.428286 52.428286l0 0q-52.428286 0-52.428287-52.428286l0 0q0-52.428286 52.428287-52.428286Z"
            fill="#ffffff"
          ></path>
          <path
            d="M460.631569 706.743574m52.428286 0l0 0q52.428286 0 52.428286 52.428286l0 0q0 52.428286-52.428286 52.428286l0 0q-52.428286 0-52.428286-52.428286l0 0q0-52.428286 52.428286-52.428286Z"
            fill="#ffffff"
          ></path>
          <path
            d="M677.837527 706.743574m52.428286 0l0 0q52.428286 0 52.428286 52.428286l0 0q0 52.428286-52.428286 52.428286l0 0q-52.428286 0-52.428286-52.428286l0 0q0-52.428286 52.428286-52.428286Z"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose03"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M199.091298 659.005624H100.175663A97.547807 97.547807 0 0 1 2.627856 561.457818V462.182227a97.547807 97.547807 0 0 1 97.547807-97.547806h98.843644A97.547807 97.547807 0 0 1 296.639105 462.182227v98.843645a97.547807 97.547807 0 0 1-97.547807 97.979752zM100.247654 430.00225a32.539933 32.539933 0 0 0-32.539933 32.539932v98.843645a32.539933 32.539933 0 0 0 32.539933 32.539932h98.843644a32.539933 32.539933 0 0 0 32.539933-32.539932V462.182227a32.539933 32.539933 0 0 0-32.539933-32.539932z m824.224972-135.991001H824.765089a97.547807 97.547807 0 0 1-97.547806-97.547807V97.547807A97.547807 97.547807 0 0 1 824.765089 0h99.563555a97.547807 97.547807 0 0 1 96.971878 97.547807v98.843644a97.547807 97.547807 0 0 1-96.899887 97.547807zM824.765089 65.079865a32.539933 32.539933 0 0 0-32.539932 32.539933v98.843644a32.539933 32.539933 0 0 0 32.539932 32.539933h99.563555a31.892013 31.892013 0 0 0 31.892013-32.539933V97.547807a31.892013 31.892013 0 0 0-31.892013-32.539933z m99.563555 593.925759H824.765089a97.547807 97.547807 0 0 1-97.547806-97.547806V462.182227a97.547807 97.547807 0 0 1 97.547806-97.259842h99.563555A97.547807 97.547807 0 0 1 1021.300522 462.182227v98.843645a97.547807 97.547807 0 0 1-96.899887 97.547806zM824.765089 430.00225a32.539933 32.539933 0 0 0-32.539932 32.539932v98.843645a32.539933 32.539933 0 0 0 32.539932 32.539932h99.563555a31.892013 31.892013 0 0 0 31.892013-32.539932V462.182227a31.892013 31.892013 0 0 0-31.892013-32.539932z m99.563555 593.925759H824.765089a97.547807 97.547807 0 0 1-97.547806-97.547807v-98.915635a97.547807 97.547807 0 0 1 97.547806-97.547807h99.563555a97.547807 97.547807 0 0 1 96.899887 97.547807v98.843644a97.547807 97.547807 0 0 1-96.827896 97.403825z m-99.563555-229.003375a32.539933 32.539933 0 0 0-32.539932 32.539933v98.843644a32.539933 32.539933 0 0 0 32.539932 32.611924h99.563555a31.892013 31.892013 0 0 0 31.892013-32.539933v-98.915635a31.892013 31.892013 0 0 0-31.892013-32.539933z m-151.181102 124.904387H474.240905a32.539933 32.539933 0 0 1-32.539933-32.539932V147.005624a32.539933 32.539933 0 0 1 32.539933-32.539932H673.583987a32.539933 32.539933 0 0 1 0 64.791901H508.724594v675.27559h166.515186a32.539933 32.539933 0 1 1-1.943757 64.791901z"
            fill="#ffffff"
          ></path>
          <path
            d="M664.225157 549.723285H338.969814a33.187852 33.187852 0 0 1-32.539933-32.539933 32.539933 32.539933 0 0 1 32.539933-32.539932H664.225157a32.539933 32.539933 0 0 1 0 64.791901z"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose04"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M875.642919 0h-92.75127v430.801432l-103.829479-76.218869-103.829478 76.218869V0H148.476953C87.262114 0 37.135471 50.126643 37.135471 111.341482v801.317036c0 61.21484 50.126643 111.341482 111.341482 111.341482h727.046094c61.21484 0 111.341482-50.126643 111.341482-111.341482V111.22161C986.864529 50.00677 936.847769 0 875.642919 0zM207.833771 831.574828c0 24.483938-16.742179 44.462672-37.07054 44.462671-20.448234 0-37.07054-19.978734-37.070541-44.462671V192.3053c0-24.483938 16.752168-44.472661 37.070541-44.472661 20.438244 0 37.07054 19.978734 37.07054 44.472661v639.269528z m0 0"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose05"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M487.3 25.2c-4.1-5.6-6.3 0-6.3 0l-121 994.9 130.6 2.7-3.3-997.6zM272.3 815l-9.2-60-32 49.2-64.9-1.9 41.2 43.4-25.9 57.2 58-29.5 43.4 41.3-3-62.2 56.4-25.6-64-11.9z m112.8-370.1l-65.6 20.7-30.5-58.1-19.8 82.9-70.2 36.4 55.7 12.8-12.9 83.9 54.1-70.1 64.1 19.9-23-65.2 48.1-63.2zM83.8 584.1l-36.5 49.3L0 641.3l28.9 31.6-26.7 54.3 47.3-37.5L83 722.3l2.3-52.2 41.2-33.6-43.5-2 0.8-50.4z m87-170.7l21.3-26.7-27.4 6.9-14.5-25.6-13 39.5-35.7 17.8 24.4 6-6.1 35.5 28.9-32.5 29 10.8-6.9-31.7z m125-140.1l13.8 8 6.1-19.9 21.3-16.7-16.7-3v-15.8l-17.6 20.8-23.7 4 8.3 15.7-14.5 20.7 23-13.8z m594.3-146.9S788.3 61.3 595.8 107c0 0 246.1-23.5 308.2 164.9 0 0 42.9 191.2-103.7 338.1 0 0-106 117.8-176.7 146.9L529.4 4.5s-7.5-12.4-7.5 7v1000.3s114.5-40.1 125.2-59.6l-15-124.6s314.7-158 378.9-419.8c-0.1 0 59.9-192.7-120.9-281.4z m0 0"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose06"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M653.787 71.512v891.052H425.55V71.512h228.237m2.792-27.849H422.754c-13.83 0-25.052 12.469-25.052 27.849v891.052c0 15.376 11.223 27.85 25.052 27.85h233.825c13.842 0 25.056-12.474 25.056-27.85V71.512c0-15.38-11.214-27.849-25.056-27.849z"
            fill="#ffffff"
          ></path>
          <path
            d="M632.5 182.568c0 12.193-10.842 22.088-24.222 22.088H471.049c-13.367 0-24.209-9.895-24.209-22.088v-48.654c0-12.193 10.842-22.087 24.209-22.087h137.229c13.38 0 24.222 9.895 24.222 22.087v48.654zM996.15 262.829v699.735H767.919V262.829H996.15m2.792-27.85H765.127c-13.833 0-25.056 12.47-25.056 27.849v699.735c0 15.376 11.223 27.85 25.056 27.85h233.815c13.844 0 25.058-12.474 25.058-27.85V262.829c0-15.38-11.214-27.85-25.058-27.85z"
            fill="#ffffff"
          ></path>
          <path
            d="M974.865 373.885c0 12.193-10.842 22.087-24.214 22.087H813.42c-13.372 0-24.215-9.895-24.215-22.087V325.23c0-12.193 10.843-22.088 24.215-22.088h137.231c13.372 0 24.214 9.895 24.214 22.088v48.655z"
            fill="#ffffff"
          ></path>
          <path
            d="M152.455 157.524l-0.004 0.005 225.357 36.13-123.222 768.524-225.354-36.134 123.223-768.525m-1.963-28.225c-12.274 0-23.32 9.981-25.537 23.819L1.737 921.643c-2.434 15.176 6.672 29.264 20.325 31.457l230.874 37.023c1.21 0.191 2.416 0.29 3.613 0.29 12.284 0 23.32-9.98 25.537-23.824l123.218-768.52c2.434-15.184-6.663-29.272-20.325-31.466L154.104 129.59a22.686 22.686 0 0 0-3.612-0.291z"
            fill="#ffffff"
          ></path>
          <path
            d="M341.459 293.973c-1.863 12.052-14.092 20.171-27.305 18.126l-135.619-20.991c-13.213-2.044-22.41-13.48-20.547-25.532l7.442-48.079c1.863-12.052 14.092-20.17 27.301-18.126l135.618 20.991c13.213 2.044 22.415 13.48 20.552 25.533l-7.442 48.078z"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          v-if="choose07"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M838.4 454.4 512 601.6 512 601.6c0 0-6.4 0-6.4 0l-320-147.2c-6.4 0-12.8 0-19.2 6.4 0 6.4 0 12.8 6.4 19.2l313.6 147.2c6.4 6.4 12.8 6.4 19.2 6.4 6.4 0 12.8 0 19.2-6.4l326.4-147.2c6.4 0 6.4-12.8 6.4-19.2C851.2 454.4 844.8 448 838.4 454.4z"
            fill="#ffffff"
          ></path>
          <path
            d="M896 288l-89.6 0L806.4 102.4l-57.6-57.6L249.6 44.8c-12.8 0-25.6 12.8-25.6 25.6l0 211.2L128 281.6c-70.4 0-128 57.6-128 128l0 435.2c0 70.4 57.6 128 128 128l768 0c70.4 0 128-57.6 128-128L1024 416C1024 345.6 966.4 288 896 288zM300.8 153.6l422.4 0c6.4 0 12.8 6.4 12.8 12.8s-6.4 12.8-12.8 12.8L300.8 179.2c-6.4 0-12.8-6.4-12.8-12.8S294.4 153.6 300.8 153.6zM294.4 275.2l435.2 0c6.4 0 12.8 6.4 12.8 12.8 0 6.4-6.4 12.8-12.8 12.8L294.4 300.8c-6.4 0-12.8-6.4-12.8-12.8C281.6 281.6 288 275.2 294.4 275.2zM972.8 851.2c0 44.8-32 76.8-76.8 76.8L128 928c-44.8 0-76.8-32-76.8-76.8L51.2 416c0-44.8 32-76.8 76.8-76.8l89.6 0 0 70.4c0 12.8 12.8 25.6 25.6 25.6l531.2 0c12.8 0 25.6-12.8 25.6-25.6L800 339.2 896 339.2c44.8 0 76.8 32 76.8 76.8L972.8 851.2z"
            fill="#ffffff"
          ></path>
        </svg>
        <div class="name">{{ s[4] }}</div>
      </div>
      <div class="use">
        <div class="time">{{ currentDate }} {{ currentTime }}</div>
        <div class="user">
          <img src="../../assets/1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.choose {
  background: #cddedb !important;
  .name {
    color: #413f3f !important;
    background: #cddedb !important;
  }
}
.choose path {
  fill: #413f3f !important;
}
.body {
  width: 100%;
  height: 100%;
  position: relative;
  .fix {
    width: 81vw;
    height: 100%;
    margin-top: 0.8vh;
    right: 0;
    position: absolute;
    z-index: 3;
    .icon {
      position: absolute;
      width: 2vw;
      margin-top: 0.7vh;
      margin-left: 1vw;
    }
    div:first-child {
      margin-left: 1vw;
    }
    .use {
      position: relative;
      .time {
        position: absolute;
        margin-top: 6vh;
        background: none;
      }
    }
    .use:hover,
    .time:hover {
      cursor: default !important;
    }
    div {
      width: 10vw;
      height: 80%;
      display: inline-block;
      margin-left: 1.5vw;
      position: relative;
      margin-top: -0.8vh;
      border-radius: 0.8vw;
      background: #2f2e2e;
      img {
        width: 2.8vw;
        height: 100%;
        position: absolute;
      }
      .name {
        width: 7vw;
        height: 100%;
        color: white;
        line-height: 5vh;
        text-align: center;
        position: absolute;
        margin-left: 3vw;
        margin-top: 0vh;
        font-weight: bolder;
        font-size: 1.3vw;
      }
    }
    div:hover {
      cursor: pointer;
    }

    .use {
      width: 20vw;
      height: 90%;
      display: inline-block;
      position: relative;
      .time {
        position: absolute;
        width: 15vw;
        height: 100%;
        margin-left: -0.5vw;
        color: white;
        font-weight: bolder;
        font-size: 1.4vw;
        margin-top: 1.3vh;
      }
      .user {
        position: absolute;
        width: 4vw;
        height: 100%;
        right: 0;
        margin-top: 0.3vh;
        border-radius: 1vw;
        background: #cddedb;
        img {
          width: 2.7vw;
          height: 5vh;
          margin-top: 0.5vh;
          margin-left: 0.65vw;
          background: white;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
