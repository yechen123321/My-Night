<script setup>
import { useSharedStore } from '@/stores'

import { computed, onBeforeUnmount, onMounted, ref } from 'vue' // 确保导入了computed函数
const store = useSharedStore();
const sharedRef = computed(() => store.sharedRef);

const time1 = new Date();
const workTime = 120; // 单位：分钟
const storedTime2 = localStorage.getItem('endTime');
const time2 = storedTime2 ? new Date(storedTime2) : new Date(time1.getTime() + workTime * 60000);
localStorage.setItem('endTime', time2);
const remainingTime = ref(Math.floor((time2.getTime() - time1.getTime()) / 1000)); // 剩余秒数
let timer;

onMounted(() => {
  timer = setInterval(updateRemainingTime, 1000); // 每秒更新一次剩余时间
});

function updateRemainingTime() {
  const now = new Date();
  const timeRemaining = Math.floor((time2.getTime() - now.getTime()) / 1000);

  if (timeRemaining >= 0) {
    remainingTime.value = timeRemaining;
  } else {
    clearInterval(timer);
    remainingTime.value = -1;
  }
}

const formattedTime = computed(() => {
  if (remainingTime.value >= 0) {
    const hours = Math.floor(remainingTime.value / 3600);
    const minutes = Math.floor((remainingTime.value % 3600) / 60);
    const seconds = remainingTime.value % 60;
    return `${padNumber(hours)} : ${padNumber(minutes)} : ${padNumber(seconds)}`;
  } else {
    return "00 : 00 : 00";
  }
});

function padNumber(num) {
  return num.toString().padStart(2, '0');
}

const format = (percentage) => (percentage === 19 ? 'Full' : `${percentage}%`)
</script>

<template>
  <div class='WKBody'>
    <div class='WKBody-Title'>
      <img src='/src/assets/logo.png' alt=''>
      <div class='WKTime'>
        <div class='times' v-if="remainingTime >= 0"><span>考试剩余时间：</span>{{ formattedTime }}</div>
        <div class='times' v-else>时间已结束</div>
        <div class='shadow'></div>
      </div>
    </div>
    <div class='WKBody-Main'>
      <div class='Main-title'>
        <img src='/src/assets/h.png' alt=''>
        <div class='Title-Word'>试卷目录</div>
        <div class='Right'>
        </div>
      </div>
      <div class='Main'>
        <div class='tips'>
          <div class='title'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
  .WKBody {
    width: 100%;
    height: 100%;
    background: rgba(246,248,251);
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
        .tips {
          width: 57%;
          height: 10vh;
          position: absolute;
          margin: 2vh 1.5%;
          border-radius: 0.4vw;
          background: rgba(255, 237, 209, 0.4);
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