<script setup>
import { ref, onMounted } from 'vue'
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import ViewDown from '@/components/StudentComponent/ViewDown.vue'
const markdown = ref('')
const markdowns = ref('')
onMounted(async () => {
  try {
    const response = await fetch('/src/assets/StudentTalk/1.md')
    const content = await response.text()
    markdown.value = content
  } catch (error) {
    console.error('Error loading markdown file:', error)
  }
})
</script>
<template>
  <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
  <div class='TalkMain'>
    <div class='TalkMain-top'>
      <div class='TalkMain-title'>
        <div class='title-left'>Java面试经验</div>
        <div class='title-right'>
          <div class='little-card'>Java</div>
          <div class='little-card'>面试</div>
          <div class='little-card'>应届生</div>
        </div>
      </div>
    </div>
    <div class='TalkMain-body'>
      <div class='Section'>
        <div class='Section-left'>
          <div class='topTip'>
            <img src='/src/assets/StudentTalk/louzhu.png' alt=''>
          </div>
          <div class='TipBody'>
            <div class='TipsHead'>
              <img src='/src/assets/head.png' alt=''>
              <div class='people'>学生</div>
            </div>
            <div class='peopleName'><span
              style='background: #ff8810; color: white;border-radius: 0.1vw; font-size: 0.5vw; padding-left: 0.1vw; padding-right: 0.1vw'>Lv.11</span><span
              style='margin-left: 0.5vw'>陈小朱</span></div>
          </div>
        </div>
        <div class='Section-right'>
          <!--          <v-md-editor v-model="markdown" height="400px"></v-md-editor>-->
          <v-md-editor :model-value='markdown' class='perview' mode='preview'></v-md-editor>
        </div>
      </div>
      <div class='Section'>
        <div class='Section-left'>
          <div class='topTip'>
<!--            <img src='/src/assets/StudentTalk/louzhu.png' alt=''>-->
          </div>
          <div class='TipBody'>
            <div class='TipsHead'>
              <img src='/src/assets/head.png' alt=''>
              <div class='people'>学生</div>
            </div>
            <div class='peopleName'><span
              style='background: #ff8810; color: white;border-radius: 0.1vw; font-size: 0.5vw; padding-left: 0.1vw; padding-right: 0.1vw'>Lv.11</span><span
              style='margin-left: 0.5vw'>陈大朱</span></div>
          </div>
        </div>
        <div class='Section-right'>
          <!--          <v-md-editor v-model="markdown" height="400px"></v-md-editor>-->
          <v-md-editor :model-value='markdown' class='perview' mode='preview'></v-md-editor>
        </div>
      </div>
    </div>
  </div>
  <ViewDown class='ViewDown'></ViewDown>
</template>

<style scoped lang='scss'>
.ViewDown {
  width: 100%;
  height: 10vh;
  margin-top: 10vh;
}
.MainTopTitle-out {
  width: 100%;
  height: 5.5%;
  position: absolute;
  z-index: 2;
  background: white;
}
.TalkMain {
  width: 60%;
  height: 100%;
  margin: auto;
  padding-top: 7vh;
  .TalkMain-body {
    width: 100%;
    height: 100%;
    margin: 1vh auto;
    background: white;
    border-radius: 0.3vw;
    overflow: auto;

    .Section {
      width: 100%;
      word-wrap: break-word;
      border-bottom: 1px solid #cbcbcb;
      display: flex;

      .Section-left {
        width: 16.5%;
        float: left;
        border-right: 1px solid #cbcbcb;

        .TipBody {
          width: 60%;
          height: 20vh;
          margin: auto;

          .peopleName {
            width: 70%;
            margin: 0.7vh auto;
            text-align: center;
            font-size: 0.65vw;
            font-weight: bold;
          }

          .TipsHead {
            width: 67%;
            margin: auto;
            height: 7.2vh;
            border-radius: 50%;
            overflow: hidden;
            position: relative;

            .people {
              width: 100%;
              height: 3vh;
              font-size: 0.5vw;
              line-height: 1.5vh;
              color: white;
              text-align: center;
              position: absolute;
              margin: -2vh 0;
              background: #ff8810;
            }

            img {
              width: 100%;
              height: 100%;
            }
          }
        }

        .topTip {
          width: 100%;
          height: 4vh;
          position: relative;

          img {
            width: 0.8vw;
            right: 1vw;
            position: absolute;
          }
        }
      }

      .Section-right {
        width: 74%;
        margin-left: 2%;
        float: left;

        .perview {
          display: flex;
        }
      }
    }
  }

  .TalkMain-top {
    width: 100%;
    height: 4.5vh;
    border-radius: 0 0 0.3vw 0.3vw;
    background: white;

    .title-left {
      width: 15%;
      height: 4.5vh;
      float: left;
      font-weight: bold;
      font-size: 0.8vw;
      text-align: center;
      line-height: 4.5vh;
    }

    .title-right {
      width: 50%;
      height: 4.5vh;
      float: left;
      overflow: hidden;

      .little-card {
        margin-top: 1.4vh;
        width: 8%;
        margin-left: 0.4vw;
        float: left;
        height: 1.8vh;
        background: rgba(206, 206, 206, 0.1);
        border: 1px solid rgba(114, 112, 112, 0.3);
        border-radius: 0.2vw;
        text-align: center;
        line-height: 1.8vh;
        font-size: 0.6vw;
        color: #727070;
      }
    }
  }
}
</style>