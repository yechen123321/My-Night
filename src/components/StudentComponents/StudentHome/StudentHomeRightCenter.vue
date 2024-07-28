<script setup>
import { ref, computed } from 'vue'

const currentExperience = 340 // 当前经验值
const maxExperience = 1000 // 最大经验值

const currentExperiencePercentage = computed(() => {
  return `${(currentExperience / maxExperience) * 18}%`
})
const showPer = ref(true)
const showNum = ref(false)
</script>

<template>
  <div class="Body">
    <div class="title">学习段位</div>
    <div class="sell">
      <img src="../../../assets/dimon.png" alt="" />
      <div class="what">璀璨钻石</div>
      <div class="experience">
        <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M678.9 215.3l68.2-33-68.6-28.6H344l-69.5 25 57.2 32 45.3 11.7c6.9 1.8 11.4 7.9 11.6 14.7l281.6-7.3c-0.2-6 3-11.7 8.7-14.5zM810 227.6l-55.7 144.3 141.2-72.5zM285.6 372.5L204.9 230l-93.7 69.6zM681.1 448.4l-328.6 1.5 170.6 395.8zM388.5 306.9l-23.6 75.5 312.7 2.2-34.5-75.5z"
            fill="#FFD524"
          ></path>
          <path
            d="M953.2 335c-6.8-5.2-16.6-3.9-21.8 2.9l-360 470.7 141-354.5c3.2-8-0.7-17.1-8.7-20.2-8-3.2-17.1 0.7-20.2 8.7l-2.3 5.8-158 397.2-170.7-395.7-2.6-6.1c-3.4-7.9-12.6-11.6-20.5-8.1-7.9 3.4-11.5 12.6-8.1 20.5L478.5 821 92 346.5c-5.4-6.7-15.3-7.7-21.9-2.2-6.7 5.4-7.7 15.3-2.2 21.9L497 893c4.1 5 10.6 6.8 16.5 5.1 2.8 2.5 6.4 3.9 10.3 3.9h0.2c4.7-0.1 9-2.2 11.8-5.7h0.1c4.7 0 9.3-2.1 12.4-6.1l407.9-533.3c5.2-6.9 3.9-16.7-3-21.9z"
            fill="#6B400D"
          ></path>
          <path
            d="M73.9 317.8L292.1 409c2 0.8 4 1.2 6 1.2 6.1 0 11.9-3.6 14.4-9.6 3.3-7.9-0.4-17.1-8.4-20.4l-18.5-7.7-174.4-72.9 93.7-69.6 1.6-1.2c6.9-5.1 8.3-14.9 3.2-21.8-5.2-6.9-14.9-8.3-21.8-3.2L70.6 290.9c-4.5 3.3-6.9 8.8-6.2 14.4 0.7 5.6 4.3 10.3 9.5 12.5zM805.9 224.2l4.1 3.5 85.5 71.8L754.4 372l-15.6 8c-7.6 3.9-10.7 13.3-6.7 21 2.8 5.4 8.2 8.5 13.9 8.5 2.4 0 4.8-0.6 7.1-1.7l177.5-91.2c4.6-2.4 7.8-6.9 8.4-12.1 0.6-5.2-1.5-10.3-5.4-13.7L826 200.3c-6.6-5.5-16.4-4.7-22 1.9-5.5 6.6-4.7 16.4 1.9 22zM229.5 189.2l88.7 49.7c1.2 0.7 2.4 1.2 3.7 1.5l47.2 12.2c1.3 0.3 2.6 0.5 3.9 0.5 6.9 0 13.3-4.7 15.1-11.7 0.4-1.4 0.5-2.9 0.4-4.3-0.2-6.8-4.7-12.9-11.6-14.7l-45.3-11.7-57.2-32 69.5-25h334.5l68.6 28.6-68.2 33c-5.7 2.8-8.9 8.5-8.8 14.4 0.1 2.1 0.5 4.3 1.5 6.4 3.7 7.7 13 11 20.8 7.2l99.3-48c5.5-2.7 9-8.3 8.8-14.5-0.2-6.1-3.9-11.6-9.6-13.9l-103.4-43.2c-1.9-0.8-3.9-1.2-6-1.2H341.3c-1.8 0-3.6 0.3-5.3 0.9l-104.2 37.5c-5.7 2.1-9.7 7.3-10.3 13.4-0.5 6.1 2.6 11.9 8 14.9zM653.2 278.1l-276-2.4h-0.1c-6.8 0-12.8 4.4-14.9 10.9l-33.4 106.7c-1.5 4.7-0.6 9.8 2.3 13.8s7.5 6.4 12.5 6.4l358.2 2.4h0.1c5.3 0 10.2-2.7 13.1-7.1 2.9-4.5 3.3-10.1 1.1-14.9l-48.9-106.7c-2.5-5.5-7.9-9.1-14-9.1zM364.9 382.4l23.6-75.5 254.5 2.3 34.5 75.4-312.6-2.2z"
            fill="#6B400D"
          ></path>
        </svg>
        <div class='exp-intro'  @mouseover="showPer = false; showNum = true" @mouseleave="showNum = false; showPer = true" >经验值：</div>
        <div class='exp-out'  @mouseover="showPer = false; showNum = true" @mouseleave="showNum = false; showPer = true" ></div>
        <div class='exp-in'  @mouseover="showPer = false; showNum = true" @mouseleave="showNum = false; showPer = true"  :style="{ width: currentExperiencePercentage }"></div>
        <div class='per'  @mouseover="showPer = false; showNum = true" @mouseleave="showNum = false; showPer = true"  v-if='showPer'>{{ currentExperience / maxExperience * 100}}%</div>
        <div class='num'  @mouseover="showPer = false; showNum = true" @mouseleave="showNum = false; showPer = true"  v-if='showNum'>{{ currentExperience}} / {{ maxExperience }}</div>
      </div>
      <div class='sell-name'>
        <img src='../../../assets/1.png' alt=''>
        <div class='name'>
          <div class='names'>陈晔</div>
          <div class='class'>软件2203</div>
          <div class='where'>计算机与软件工程学院</div>
        </div>
        <div class='had-done'>
          <div class='done-class'>已完结课程：<span>23 门</span></div>
          <div class='done-tasks'>已完成任务：<span>56 项</span></div>
          <div class='done-work'>已完成作业：<span>11 项</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Body {
  width: 100%;
  height: 100%;
  .sell {
    width: 95%;
    height: 65%;
    margin: 1.8vh auto;
    font-weight: bolder;
    .sell-name {
      position: absolute;
      margin: -20vh 46%;
      .had-done {
        width: 10vw;
        font-size: 1vw;
        color: #727070;
        margin-left: 1vw;
        span {
          color: #4b4a4a;
          font-size: 1.3vw;
          position: absolute;
          margin-top: -0.4vh;
        }
        .done-class {
          margin-top: 2vh;
        }
        .done-tasks {
          margin-top: 1.5vh;
        }
        .done-work {
          margin-top: 1.5vh;
        }
      }
      .name {
        width: 10vw;
        height: 10vh;
        margin: -8.5vh 5vw;
        position: absolute;
        .names {
          font-size: 1.5vw;
          position: absolute;
          margin-left: -0.3vw;
        }
        .class {
          position: absolute;
          margin: 1.3vh 3.2vw;
          color: #727070;
          width: 10vw;
        }
        .where {
          position: absolute;
          margin-top: 5vh;
          margin-left: -0.5vw;
          font-size: 0.75vw;
        }
      }
      img {
        width: 4vw;
        box-shadow: 1px 1px 1px 1px #727070;
        height: 8vh;
        background: #f8f6f6;
        border-radius: 50%;
        border: 1px solid #727070;
      }
    }
    .per {
      position: absolute;
      margin: 0.8vh 6.5vw;
      font-size: 0.9vw;
    }
    .num {
      position: absolute;
      margin: 1.2vh 5.7vw;
      font-size: 0.65vw;
    }
    .exp-out {
      width: 18.2%;
      height: 2.2vh;
      position: absolute;
      border: 1px solid #727070;
      border-radius: 0.4vw;
      margin: 0.8vh 5.2vw;
    }
    .exp-in {
      width: 18%;
      height: 2vh;
      position: absolute;
      background: rgb(253, 199, 56);
      border-radius: 0.4vw;
      margin: 1vh 5.3vw;
      font-size: 0.75vw;
      text-align: center;
    }
    .exp-in:hover {
      cursor: pointer;
    }
    .exp-intro {
      margin: 0.9vh 2vw;
      position: absolute;
    }
    .icon {
      position: absolute;
      width: 1.2vw;
      margin: 0.8vh 0.5vw;
    }
    img {
      width: 11vw;
      margin-top: 1vh;
    }
    .what {
      width: 11vw;
      color: #0e87ff;
      font-size: 1.3vw;
      text-align: center;
    }
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
