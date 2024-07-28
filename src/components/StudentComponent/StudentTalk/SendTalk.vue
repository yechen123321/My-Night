<script setup>
import { ref, onMounted } from 'vue'
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import ViewDown from '@/components/StudentComponent/ViewDown.vue'

const selectedGender = ref('')
const TalkTitle = ref('')
const selectedHobbies = ref([])

const markdown = ref('')

// onMounted(async () => {
//   try {
//     const response = await fetch('/src/assets/StudentTalk/1.md')
//     markdown.value = await response.text()
//   } catch (error) {
//     console.error('Error loading markdown file:', error)
//   }
// })

onMounted(() => {
  console.log(localStorage.getItem('MDLoad'))
  LoadButton()
})
const LoadButton = () => {
  localStorage.setItem('MDLoad', markdown.value)
  console.log(localStorage.getItem('MDLoad'))
}

</script>

<template>
  <div class='SendTalk-body'>
    <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
    <div class='Main-body'>
      <div class='SendBox'>
        <div class='InputBox'>
          <div class='TalkType'>
            <label for='gender'><span style='color: red'>*</span>类型：</label>
            <input type='radio' id='male' name='gender' value='male' v-model='selectedGender'>
            <label for='male'>男</label>
            <input type='radio' id='female' name='gender' value='female' v-model='selectedGender'>
            <label for='female'>女</label>
          </div>
          <div class='select'>
            <label for='hobbies'><span style='color: red'>*</span>板块：</label>
            <input type='checkbox' id='sports' name='hobbies' value='sports' v-model='selectedHobbies'>
            <label for='sports'>运动</label>
            <input type='checkbox' id='music' name='hobbies' value='music' v-model='selectedHobbies'>
            <label for='music'>音乐</label>
            <input type='checkbox' id='reading' name='hobbies' value='reading' v-model='selectedHobbies'>
            <label for='reading'>阅读</label>
          </div>
          <div class='TitleInput'>
            <label for='sports'><span style='color: red'>*</span>标题：</label>
            <input type='text' id='sports' name='title' v-model='TalkTitle'>
          </div>
        </div>
        <div class='MDBox'>
          <div class='MDBox-left'>
            <span style='color: red'>*</span>内容：
          </div>
          <div class='MDBox-right'>
            <v-md-editor :model-value='markdown' class='perviews'></v-md-editor>
          </div>
        </div>
        <div class='MD-button'>
          <div class='LoadButton' @click='LoadButton'>暂存</div>
          <div class='SendButton'>发布</div>
        </div>
      </div>
    </div>
    <ViewDown class='ViewDown'></ViewDown>
  </div>
</template>

<style scoped lang='scss'>
.SendTalk-body {
  width: 100%;
  height: 100%;

  .Main-body {
    width: 70%;
    height: 80.5%;
    margin: 2vh auto;
    background-color: white;
    border-radius: 0.3vw;
    position: relative;

    .SendBox {
      width: 80%;
      height: 90%;
      left: 10%;
      top: 3%;
      position: absolute;
      font-size: 1vw;

      .MD-button {
        width: 50%;
        margin: 2vh auto;
        font-size: 0.9vw;

        div:hover {
          cursor: pointer;
        }

        .LoadButton:hover {
          border: 1px solid #0e87ff;
          color: #0e87ff;
          background-color: rgba(14, 135, 255, 0.02);
        }

        .SendButton:hover {
          background-color: rgba(4, 71, 198);
        }

        .LoadButton {
          float: left;
          width: 16%;
          height: 3.5vh;
          line-height: 3.5vh;
          text-align: center;
          margin-left: 8vw;
          border: 1px solid #727070;
          border-radius: 0.2vw;
          color: #727070;
        }

        .SendButton {
          float: left;
          width: 16%;
          height: 3.5vh;
          line-height: 3.5vh;
          background-color: rgba(3, 83, 235);
          text-align: center;
          margin-left: 6.5vw;
          border-radius: 0.2vw;
          color: white;
        }
      }

      .select {
        input {
          margin-left: 1vw;
        }
      }

      .TitleInput {
        width: 100%;

        input {
          width: 90%;
          height: 3vh;
          border: 1px solid #d3d3d3;
          border-radius: 0.2vw;
        }
      }

      .TalkType {
        input {
          margin-left: 1vw;
        }
      }

      .InputBox {
        width: 100%;
        height: 20%;

        div:first-child {
          margin-top: 0;
        }

        div {
          width: 100%;
          margin-top: 2vh;
          color: #727070;
        }
      }

      .MDBox {
        width: 100%;
        height: 70%;
        overflow: auto;

        .MDBox-left {
          width: 7%;
          height: 100%;
          float: left;
          color: #727070;
          font-size: 1vw;
        }

        .MDBox-right {
          width: 92%;
          height: 100%;
          float: left;
          margin-left: 1%;
        }
      }
    }
  }

  .ViewDown {
    width: 100%;
    height: 10vh;
  }

  .MainTopTitle-out {
    width: 100%;
    height: 5.5%;
    background: white;
  }

}
</style>