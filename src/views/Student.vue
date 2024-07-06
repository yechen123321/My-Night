<!--<script setup>-->
<!--import { ref, onBeforeMount } from 'vue'-->
<!--import StudentLeftList from '@/components/StudentComponents/StudentLeftList.vue'-->
<!--import StudentTop from '@/components/StudentComponents/StudentTop.vue'-->
<!--import StudentMain from '@/components/StudentComponents/StudentMain.vue'-->
<!--import WorkView from '@/components/StudentComponents/StudentExams/WorkView.vue'-->
<!--import emitter from '@/plugins/Bus'-->
<!--const leftListWidth = ref(13)-->
<!--const TopListWidth = ref(83.6)-->
<!--const MainListWidth = ref(83.6)-->
<!--const shrinkLeftList = () => {-->
<!--  const intervalWidth = setInterval(() => {-->
<!--    if (leftListWidth.value > 0) {-->
<!--      leftListWidth.value -= 0.5-->
<!--    } else {-->
<!--      clearInterval(intervalWidth)-->
<!--    }-->
<!--  }, 5)-->

<!--  const intervalWidth1 = setInterval(() => {-->
<!--    if (leftListWidth.value <= 1) {-->
<!--      if (TopListWidth.value < 97.6) {-->
<!--        TopListWidth.value += 0.2-->
<!--        MainListWidth.value += 0.2-->
<!--      } else {-->
<!--        clearInterval(intervalWidth1)-->
<!--      }-->
<!--    }-->
<!--  }, 5)-->

<!--  const outLeftElement = document.querySelector('.OutLeft')-->
<!--  if (outLeftElement) {-->
<!--    let opacityValue = 0-->
<!--    const intervalOpacity = setInterval(() => {-->
<!--      if (opacityValue < 1) {-->
<!--        opacityValue += 0.05-->
<!--        outLeftElement.style.opacity = opacityValue-->
<!--      } else {-->
<!--        clearInterval(intervalOpacity)-->
<!--      }-->
<!--    }, 10)-->
<!--  }-->
<!--  const inLeftElement = document.querySelector('.InLeft')-->
<!--  if (inLeftElement) {-->
<!--    inLeftElement.style.display = 'none'-->
<!--  }-->

<!--  const OutLeftElement = document.querySelector('.OutLeft')-->
<!--  if (OutLeftElement) {-->
<!--    OutLeftElement.style.display = 'inline-block'-->
<!--  }-->
<!--}-->

<!--const AddLeftList = () => {-->
<!--  const intervalWidth = setInterval(() => {-->
<!--    if (leftListWidth.value < 13) {-->
<!--      leftListWidth.value += 0.5-->
<!--    } else {-->
<!--      clearInterval(intervalWidth)-->
<!--    }-->
<!--  }, 5)-->

<!--  const intervalWidth1 = setInterval(() => {-->
<!--    if (TopListWidth.value > 83.6) {-->
<!--      TopListWidth.value -= 0.2-->
<!--      MainListWidth.value -= 0.2-->
<!--    } else {-->
<!--      clearInterval(intervalWidth1)-->
<!--    }-->
<!--  }, 5)-->

<!--  const outLeftElement = document.querySelector('.OutLeft')-->
<!--  if (outLeftElement) {-->
<!--    let opacityValue = 1-->
<!--    const intervalOpacity = setInterval(() => {-->
<!--      if (opacityValue > 0) {-->
<!--        opacityValue -= 0.05-->
<!--        outLeftElement.style.opacity = opacityValue-->
<!--      } else {-->
<!--        clearInterval(intervalOpacity)-->
<!--      }-->
<!--    }, 10)-->
<!--  }-->

<!--  const inLeftElement = document.querySelector('.InLeft')-->
<!--  if (inLeftElement) {-->
<!--    inLeftElement.style.display = 'inline-block'-->
<!--  }-->

<!--  const OutLeftElement = document.querySelector('.OutLeft')-->
<!--  if (OutLeftElement) {-->
<!--    OutLeftElement.style.display = 'none'-->
<!--  }-->
<!--}-->
<!--// onBeforeMount(() => {-->
<!--//   emitter.on('Working', (e) => {-->
<!--//     if (e && typeof e === 'object') {-->
<!--//       Working.value = e.value // 检查 e 是否是一个对象，确保正确赋值-->
<!--//     }-->
<!--//   })-->
<!--// })-->
<!--const Working = ref(false)-->
<!--</script>-->

<!--<template>-->
<!--&lt;!&ndash;  <WorkView v-if='Working'></WorkView>&ndash;&gt;-->
<!--  <div class="body" v-if='!Working'>-->
<!--    <StudentLeftList :style="{ width: leftListWidth + 'vw' }" class="LeftList"></StudentLeftList>-->
<!--    <div class="InLeft" @click="shrinkLeftList">-->
<!--      <img src="../assets/向右.png" alt="" class="goLeft" />-->
<!--    </div>-->
<!--    <div class="OutLeft" @click="AddLeftList">-->
<!--      <img src="../assets/向右.png" alt="" class="outLeft" />-->
<!--    </div>-->
<!--    <StudentTop :style="{ width: TopListWidth + 'vw' }" class="TopList"></StudentTop>-->
<!--    <StudentMain :style="{ width: MainListWidth + 'vw' }" class="Main"></StudentMain>-->
<!--  </div>-->
<!--</template>-->

<script setup>
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import PersonCard from '@/components/StudentComponent/PersonCard.vue'
import layter from '@/components/StudentComponent/layter.vue'
import ClassList from '@/components/StudentComponent/ClassList.vue'
import ClassRanks from '@/components/StudentComponent/ClassRanks.vue'
import ViewDown from '@/components/StudentComponent/ViewDown.vue'
import CourseRecommend from '@/components/StudentComponent/CourseRecommend.vue'
import StudyInfo from '@/components/StudentComponent/StudyInfo.vue'
</script>

<template>
  <div class='body'>
    <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
    <div class='Main-body'>
      <div class='PersonTop'>
        <ClassList class='ClassList'></ClassList>
        <layter class='layter'></layter>
        <PersonCard class='PersonCard'></PersonCard>
      </div>
      <div class='CourseRecommend'>
        <CourseRecommend></CourseRecommend>
      </div>
      <div class='StudyInfo'>
        <StudyInfo></StudyInfo>
      </div>
      <div class='ClassRank'>
        <ClassRanks></ClassRanks>
      </div>

    </div>
    <ViewDown class='ViewDown'></ViewDown>
  </div>
</template>

<style scoped lang='scss'>
.body {
  position: relative;
  width: 100%;

  .ViewDown {
    width: 100%;
    height: 15vh;
    margin-top: 10vh;
  }

  .Main-body {
    width: 70%;
    margin-left: 15%;
    padding-top: 6vh;

    .CourseRecommend {
      width: 100%;
      height: 35vh;
      margin-top: 1vh;
    }

    .ClassRank {
      width: 100%;
      height: 60vh;
      margin-top: 1vh;
    }

    .StudyInfo {
      width: 100%;
      height: 40vh;
      margin-top: 1vh;
    }

    .PersonTop {
      width: 100%;
      height: 38vh;
      padding-top: 2vh;

      .ClassList {
        width: 18%;
        height: 38vh;
        float: left;
        border-radius: 0.5vw;
      }

      .PersonCard {
        width: 18%;
        height: 38vh;
        float: left;
        margin-left: 0.5%;
        border-radius: 0.5vw;
      }

      .layter {
        margin-left: 0.5%;
        float: left;
        width: 63%;
        height: 38vh;
      }

    }

  }

  .MainTopTitle-out {
    width: 100%;
    height: 5.5vh;
    position: absolute;
    z-index: 2;
    background: white;
  }


  //.OutLeft {
  //  position: absolute;
  //  width: 1vw;
  //  height: 6vh;
  //  background: white;
  //  border-radius: 0 0.7vw 0.7vw 0;
  //  margin-top: 43vh;
  //  opacity: 0;
  //  display: none;
  //
  //  .outLeft {
  //    margin-top: 1vh;
  //    margin-left: -0.25vw;
  //    width: 1.5vw;
  //    height: 4vh;
  //  }
  //}
  //
  //.OutLeft:hover {
  //  cursor: pointer;
  //}
  //
  //.InLeft {
  //  width: 1.5vw;
  //  height: 4vh;
  //  margin-top: 43vh;
  //  margin-left: 12.7vw;
  //  position: absolute;
  //  opacity: 0;
  //
  //  .goLeft {
  //    width: 1.5vw;
  //    height: 5vh;
  //    transform: rotate(180deg);
  //  }
  //}
  //
  //.InLeft:hover {
  //  display: inline-block;
  //  opacity: 1;
  //  cursor: pointer;
  //}
  //
  //.LeftList {
  //  position: absolute;
  //  height: 96vh;
  //  margin-top: 2vh;
  //  margin-left: 1.2vw;
  //  border-radius: 0.8vw;
  //  background: #fff;
  //  transition: width 0.5s ease;
  //}
  //
  //.TopList {
  //  position: absolute;
  //  //width: 81.6vw;
  //  height: 6.5vh;
  //  right: 0;
  //  margin-right: 1.2vw;
  //  margin-top: 2vh;
  //  border-radius: 0.7vw;
  //  background: #2f2e2e;
  //}
  //
  //.Main {
  //  position: absolute;
  //  //width: 81.6vw;
  //  height: 87.5vh;
  //  right: 0;
  //  margin-right: 1.2vw;
  //  margin-top: 10.5vh;
  //  border-radius: 0.8vw;
  //}
}
</style>
