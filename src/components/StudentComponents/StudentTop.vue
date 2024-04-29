<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import emitter from '@/plugins/Bus'

const data = ref(['基本信息', '作业评测', '成绩分析', '素质评价', '个性教案'])
const s = ref(['基本信息', '作业评测', '成绩分析', '素质评价', '个性教案'])

onBeforeMount(() => {
  // 保存最新的 s.value 到 localStorage
  emitter.on('fn', (e) => {
    if (e && typeof e === 'object') {
      s.value = e.value // 检查 e 是否是一个对象，确保正确赋值
      localStorage.setItem('previousData', JSON.stringify(s.value))
    }
  })
})

onMounted(() => {
  const previousData = JSON.parse(localStorage.getItem('previousData'))
  if (previousData && JSON.stringify(previousData) !== JSON.stringify(data.value)) {
    console.log('Restoring data from localStorage:', previousData)
    s.value = previousData // 将之前的数据重新赋值给 s
  }
  console.log('Current data to save:', s.value)
  localStorage.setItem('previousData', JSON.stringify(s.value)) // 保存当前数据
})

</script>


<template>
  <div class="body">
    <div class="fix">
      <div>
        <img src="" alt="" />
        <div class="name">{{ s[0] }}</div>
      </div>
      <div>
        <img src="" alt="" />
        <div class="name">{{ s[1] }}</div>
      </div>
      <div>
        <img src="" alt="" />
        <div class="name">{{ s[2] }}</div>
      </div>
      <div>
        <img src="" alt="" />
        <div class="name">{{ s[3] }}</div>
      </div>
      <div>
        <img src="" alt="" />
        <div class="name">{{ s[4] }}</div>
      </div>
      <div class="use">
        <div class="time">2024/3/14 13:52:11</div>
        <div class="user">
          <img src='../../assets/1.png' alt=''>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
    div:first-child{
      margin-left: 1vw;
    }
    div {
      width: 10vw;
      height: 90%;
      display: inline-block;
      margin-left: 1.5vw;
      position: relative;
      img {
        width: 2.8vw;
        height: 90%;
        position: absolute;
      }

      .name {
        width: 7vw;
        height: 100%;
        color: white;
        line-height: 4.5vh;
        text-align: center;
        position: absolute;
        margin-left: 3vw;
        font-weight: bolder;
        font-size: 1.3vw;
      }
      div:hover {
        cursor: pointer;
      }
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
        margin-top: 0.6vh;
      }
      .user {
        position: absolute;
        width: 4vw;
        height: 100%;
        right: 0;
        margin-top: -0.5vh;
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
