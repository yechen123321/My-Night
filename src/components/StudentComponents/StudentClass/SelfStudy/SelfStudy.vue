<script setup>
import { ref } from 'vue'

const showq = ref(true)
const showp = ref(false)
const changeq = () => {
  showq.value = false
  showp.value = true
  const targetElement1 = document.querySelector('.four-left');
  const targetElement2 = document.querySelector('.four-right');
  targetElement1.classList.remove('beChoose');
  targetElement2.classList.add('beChoose');
}

const changep = () => {
  showq.value = true
  showp.value = false
  const targetElement1 = document.querySelector('.four-left');
  const targetElement2 = document.querySelector('.four-right');
  targetElement2.classList.remove('beChoose');
  targetElement1.classList.add('beChoose');
}
</script>

<template>
  <div class="Body">
    <div class="LC">
      <div class="LC-title">
        <div class="title-one">
          <div class="word">我的课程 <span style='font-weight: 200; font-size: 0.75vw'>（我需要学习的课程和自主学习的课程）</span></div>
          <div class="bbk"></div>
        </div>
        <div class="title-four">
          <div class="four-left beChoose" @click='changep'>进行中 14</div>
          <div class="four-right" @click='changeq'>已完成 5</div>
        </div>
      </div>
      <div class='LC-body' v-if='showq'>
        <div class='LessonCard'>
          <img src='/src/assets/2f.png' alt=''>
          <div class='shadow'>
            <div class='word'>已学习  14%</div>
          </div>
          <div class='ClassName'>
            <div class='name'>Python程序设计</div>
          </div>
        </div>
        <div class='LessonCard'>
          <img src='/src/assets/2f.png' alt=''>
          <div class='shadow'>
            <div class='word'>已学习  14%</div>
          </div>
          <div class='ClassName'>
            <div class='name'>Python程序设计</div>
          </div>
        </div>
        <div class='LessonCard'>
          <img src='/src/assets/2f.png' alt=''>
          <div class='shadow'>
            <div class='word'>已学习  14%</div>
          </div>
          <div class='ClassName'>
            <div class='name'>Python程序设计</div>
          </div>
        </div>
        <div class='LessonCard'>
          <img src='/src/assets/2f.png' alt=''>
          <div class='shadow'>
            <div class='word'>已学习  14%</div>
          </div>
          <div class='ClassName'>
            <div class='name'>Python程序设计</div>
          </div>
        </div>
        <div class='LessonCard'>
          <img src='/src/assets/2f.png' alt=''>
          <div class='shadow'>
            <div class='word'>已学习  14%</div>
          </div>
          <div class='ClassName'>
            <div class='name'>Python程序设计</div>
          </div>
        </div>
        <div class='LessonCard'>
          <img src='/src/assets/2f.png' alt=''>
          <div class='shadow'>
            <div class='word'>已学习  14%</div>
          </div>
          <div class='ClassName'>
            <div class='name'>Python程序设计</div>
          </div>
        </div>
      </div>

      <div class='LC-body' v-if='showp'>
        <div class='LessonCard'>
          <img src='/src/assets/2f.png' alt=''>
          <div class='shadow'>
            <div class='word'>已学习  14%</div>
          </div>
          <div class='ClassName'>
            <div class='name'>Python程序设计1</div>
          </div>
        </div>
        <div class='LessonCard'>
          <img src='/src/assets/2f.png' alt=''>
          <div class='shadow'>
            <div class='word'>已学习  14%</div>
          </div>
          <div class='ClassName'>
            <div class='name'>Python程序设计</div>
          </div>
        </div>
        <div class='LessonCard'>
          <img src='/src/assets/2f.png' alt=''>
          <div class='shadow'>
            <div class='word'>已学习  14%</div>
          </div>
          <div class='ClassName'>
            <div class='name'>Python程序设计</div>
          </div>
        </div>
        <div class='LessonCard'>
          <img src='/src/assets/2f.png' alt=''>
          <div class='shadow'>
            <div class='word'>已学习  14%</div>
          </div>
          <div class='ClassName'>
            <div class='name'>Python程序设计</div>
          </div>
        </div>
        <div class='LessonCard'>
          <img src='/src/assets/2f.png' alt=''>
          <div class='shadow'>
            <div class='word'>已学习  14%</div>
          </div>
          <div class='ClassName'>
            <div class='name'>Python程序设计</div>
          </div>
        </div>
        <div class='LessonCard'>
          <img src='/src/assets/2f.png' alt=''>
          <div class='shadow'>
            <div class='word'>已学习  14%</div>
          </div>
          <div class='ClassName'>
            <div class='name'>Python程序设计</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Body {
  width: 100%;
  height: 100%;
  .beChoose {
    color: #0e87ff;
    border-color: #0e87ff !important;
  }
  .LC {
    width: 97%;
    height: 95.5%;
    margin: 2vh auto;
    border-radius: 0.5vw;
    background: #f8f6f6;

    .LC-body {
      width: 94%;
      margin: 9vh 1.5%;
      border-radius: 0.5vw;
      height: 83%;
      position: absolute;
      background: white;
      overflow: auto;
      .LessonCard:hover {
        cursor: pointer;
      }
      .LessonCard {
        display: inline-block;
        position: relative;
        width: 22%;
        height: 20vh;
        margin-top: 2.5vh;
        margin-left: 2.1%;
        border-radius: 0.3vw;
        border: 2px solid rgba(106, 169, 153, 0.3);
        box-shadow: 0 2px 14px 0 rgba(106, 169, 153, 0.3);
        overflow: hidden;
        img {
          position: absolute;
          width: 100%;
          height: 80%;
        }
        .shadow {
          width: 100%;
          position: absolute;
          margin-top: 11.5vh;
          height: 4vh;
          background: rgba(114, 112, 112, 0.7);
          .word {
            line-height: 4vh;
            font-size: 0.8vw;
            margin-left: 5%;
            color: white;
          }
        }
        .ClassName {
          position: absolute;
          width: 100%;
          height: 4.5vh;
          bottom: 0;
          .name {
            line-height: 4.5vh;
            font-weight: bolder;
            font-size: 1vw;
            margin-left: 5%;
          }
        }
      }
    }

    .LC-title {
      width: 94%;
      margin: 2vh 1.5%;
      height: 5vh;
      border-radius: 0.5vw;
      position: absolute;
      background: white;

      .title-one {
        width: 20%;
        height: 100%;
        margin-top: -1vh;
        display: inline-block;

        .word {
          position: absolute;
          margin-left: 3%;
          margin-top: 2vh;
          font-size: 1.2vw;
          z-index: 2;
          font-weight: bolder;
        }

        .bbk {
          width: 4.7vw;
          height: 1.5vh;
          margin-top: 3.5vh;
          margin-left: 3.1%;
          position: absolute;
          border-radius: 0.5vw;
          background: rgba(106, 169, 153, 0.2);
        }
      }

      .title-four {
        display: inline-block;
        margin-left: 56%;
        .four-left {
          width: 5vw;
          height: 3.5vh;
          text-align: center;
          border: 1px solid #727070;
          margin-top: -3.3vh;
          line-height: 3.5vh;
          position: absolute;
          border-radius: 0.8vw 0 0 0.8vw;
        }
        .four-right {
          width: 5vw;
          height: 3.5vh;
          line-height: 3.5vh;
          text-align: center;
          border-right: 1px solid #727070;
          border-top: 1px solid #727070;
          border-bottom: 1px solid #727070;
          margin-top: -3.3vh;
          position: absolute;
          margin-left: 5.1vw;
          border-radius: 0 0.8vw 0.8vw 0;
        }
        div:hover {
          cursor: pointer;
          color: #0e87ff;
        }
      }
    }
  }
}
</style>
