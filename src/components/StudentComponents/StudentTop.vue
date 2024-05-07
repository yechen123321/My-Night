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

const str = ref(['第二课堂', '作业评测', '自主练习', '虚拟课堂', '个性教案'])

const str1 = ref(['基本信息', '学籍信息', '培养方案', '系统信息', '学期课表'])

const str2 = ref(['学习中心', '自修课程', '课堂资料', '课表查询', '专业树'])

const str3 = ref(['在线课堂', '课程论坛', '课程作业', '虚拟课堂', '课程中心'])

const str4 = ref(['成绩信息', '综合素质', '第二课堂', '个性教案', '专利情况'])

const str5 = ref(['自主练习', '考试安排', '在线考试', '考试成绩', '考试题库'])

const str6 = ref(['竞赛报名', '请假申请', '修改申请', '学分申请', '信息反馈'])

const s = ref(['第二课堂', '作业评测', '自主练习', '虚拟课堂', '个性教案'])

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
    if (s.value.toString() === str.value.toString()) {
      num.value = '00'
      emitter.emit('fn1', num)
    }
    if (s.value.toString() === str1.value.toString()) {
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
        icon.classList.add('choose')
      })
      num.value = '11'
      emitter.emit('fn1', num)
    }
    if (s.value.toString() === str2.value.toString()) {
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
        icon.classList.add('choose')
      })
      num.value = '21'
      emitter.emit('fn1', num)
    }
    if (s.value.toString() === str3.value.toString()) {
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
        icon.classList.add('choose')
      })
      num.value = '31'
      emitter.emit('fn1', num)
    }
    if (s.value.toString() === str4.value.toString()) {
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
        icon.classList.add('choose')
      })
      num.value = '41'
      emitter.emit('fn1', num)
    }
    if (s.value.toString() === str5.value.toString()) {
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
        icon.classList.add('choose')
      })
      num.value = '51'
      emitter.emit('fn1', num)
    }
    if (s.value.toString() === str6.value.toString()) {
      li1.forEach((icon) => {
        icon.className = ''
        icon.classList.add('d1')
        icon.classList.add('choose')
      })
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
</script>

<template>
  <div class="body">
    <div class="fix">
      <div class="d1" @click="bt1">
        <img src="" alt="" />
        <div class="name">{{ s[0] }}</div>
      </div>
      <div class="d2" @click="bt2">
        <img src="" alt="" />
        <div class="name">{{ s[1] }}</div>
      </div>
      <div class="d3" @click="bt3">
        <img src="" alt="" />
        <div class="name">{{ s[2] }}</div>
      </div>
      <div class="d4" @click="bt4">
        <img src="" alt="" />
        <div class="name">{{ s[3] }}</div>
      </div>
      <div class="d5" @click="bt5">
        <img src="" alt="" />
        <div class="name">{{ s[4] }}</div>
      </div>
      <div class="use">
        <div class="time">2024/3/14 13:52:11</div>
        <div class="user">
          <img src="../../assets/1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.choose {
  background: #cddedb;
  .name {
    color: #413f3f !important;
  }
}
.choose path {
  color: #413f3f;
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
    div:first-child {
      margin-left: 1vw;
    }
    .use {
      position: relative;
      .time {
        position: absolute;
        margin-top: 6vh;
      }
    }
    div {
      width: 10vw;
      height: 80%;
      display: inline-block;
      margin-left: 1.5vw;
      position: relative;
      margin-top: -0.8vh;
      border-radius: 0.8vw;
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
