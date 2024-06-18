<script setup>
import ExamChoose from '@/components/StudentComponents/StudentExams/ExamType/ExamChoose.vue'
import ExamTranslate from '@/components/StudentComponents/StudentExams/ExamType/ExamTranslate.vue'
import ExamCheckbox from '@/components/StudentComponents/StudentExams/ExamType/ExamCheckbox.vue'
import ExamJudge from '@/components/StudentComponents/StudentExams/ExamType/ExamJudge.vue'
import ExamWrite from '@/components/StudentComponents/StudentExams/ExamType/ExamWrite.vue'
import ExamAnswer from '@/components/StudentComponents/StudentExams/ExamType/ExamAnswer.vue'
import ExamListen from '@/components/StudentComponents/StudentExams/ExamType/ExamListen.vue'
import ExamSay from '@/components/StudentComponents/StudentExams/ExamType/ExamSay.vue'
import { useSharedStore } from '@/stores'
import router from '@/router'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue' // 确保导入了computed函数
const store = useSharedStore()
const sharedRef = computed(() => store.sharedRef)
import axios from 'axios'

const TTT = ref('')

let error = ref('')

const ShowError = ref(false)
const ShowS = ref(false)

const showEE = () => {
  ShowError.value = true
}

const showSS = () => {
  ShowS.value = true
}

const showQ = () => {

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
    <ExamChoose v-if='0'></ExamChoose>
    <ExamTranslate v-if='0'></ExamTranslate>
    <ExamCheckbox  v-if='0'></ExamCheckbox>
    <ExamJudge v-if='0'></ExamJudge>
    <ExamWrite v-if='0'></ExamWrite>
    <ExamAnswer v-if='0'></ExamAnswer>
    <ExamListen v-if='0'></ExamListen>
    <ExamSay v-if='0'></ExamSay>

  </div>
</template>

<style scoped lang='scss'>
#beChoose {
  background: rgba(106, 169, 153, 0.7);
  color: white;
}

.WKBody {
  width: 100%;
  height: 100%;
  background: rgba(246, 248, 251);

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