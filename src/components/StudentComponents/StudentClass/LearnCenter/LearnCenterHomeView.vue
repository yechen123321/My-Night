<script setup>
import { ref } from 'vue'

const value = ref('Option1')
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
</script>

<template>
  <div class="Body">
    <div class="LC">
      <div class="LC-title">
        <div class="title-one">
          <div class="word">学期课程</div>
          <div class="bbk"></div>
        </div>
        <div class="title-tow">
          <el-select
            v-model="value"
            clearable
            placeholder="Select"
            style="width: 12vw; height: 5.3vh"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="title-three">
          <input type="text" />
          <div class="button">
            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M376.5 70c41.4 0 81.5 8.1 119.3 24.1 36.5 15.4 69.3 37.5 97.4 65.7 28.2 28.2 50.3 61 65.7 97.4 16 37.7 24.1 77.9 24.1 119.3s-8.1 81.5-24.1 119.3c-15.4 36.5-37.5 69.3-65.7 97.4-28.2 28.2-61 50.3-97.4 65.7-37.7 16-77.9 24.1-119.3 24.1s-81.5-8.1-119.3-24.1c-36.5-15.4-69.3-37.5-97.4-65.7s-50.3-61-65.7-97.4C78.1 458 70 417.9 70 376.5s8.1-81.5 24.1-119.3c15.4-36.5 37.5-69.3 65.7-97.4 28.2-28.2 61-50.3 97.4-65.7C295 78.1 335.1 70 376.5 70m0-70C168.6 0 0 168.6 0 376.5S168.6 753 376.5 753 753 584.4 753 376.5 584.4 0 376.5 0z"
                fill="#fff"
              ></path>
              <path
                d="M274.5 136.1c8.8-8.8 18-17 27.5-24.6-37.3 13.6-72.2 35.3-102.1 65.2-109.7 109.7-109.7 287.7 0 397.4 33.2 33.2 72.6 56.3 114.4 69.4-13.9-10.1-27.2-21.5-39.8-34.1-130.7-130.7-130.7-342.6 0-473.3zM998.3 998.3c-34.2 34.2-90.2 34.2-124.5 0L622.2 746.6c-34.2-34.2-34.2-90.2 0-124.5 34.2-34.2 90.2-34.2 124.5 0l251.7 251.7c34.2 34.3 34.2 90.3-0.1 124.5z"
                fill="#fff"
              ></path>
            </svg>
          </div>
        </div>
        <div class="title-four">
          <div class="four-left beChoose">进行中 14</div>
          <div class="four-right">已完成 5</div>
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
    border: 1px solid #0e87ff !important;
  }
  .LC {
    width: 97%;
    height: 95.5%;
    margin: 2vh auto;
    border-radius: 0.5vw;
    background: #f8f6f6;

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
          background: rgba(14, 135, 255, 0.4);
        }
      }

      .title-tow {
        display: inline-block;
        margin-left: 5%;
      }

      .title-three {
        display: inline-block;
        .button {
          width: 2vw;
          height: 3.5vh;
          background: rgba(24, 160, 88, 0.45);
          position: absolute;
          border-radius: 0.4vw;
          margin-top: -3.3vh;
          margin-left: 13.8vw;
          .icon {
            width: 1vw;
            margin-top: 0.6vh;
            margin-left: 0.5vw;
          }
        }
        input {
          width: 12vw;
          height: 2.8vh;
          border-radius: 0.7vw;
          border: 1px solid #727070;
          position: absolute;
          margin-top: -3.1vh;
          margin-left: 2%;
        }
      }

      .title-four {
        display: inline-block;
        margin-left: 30%;
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
