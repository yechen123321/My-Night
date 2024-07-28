<script setup>
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import router from '@/router'
import ViewDown from '@/components/StudentComponent/ViewDown.vue'
import {onMounted} from 'vue'

onMounted(() =>{
  const aaa = localStorage.getItem('class')
  const one = document.getElementById('one')
  const tow = document.getElementById('tow')
  const three = document.getElementById('three')
  if (aaa === '1') {
    one.classList.add('BeChoosess')
    tow.classList.remove('BeChoosess')
    three.classList.remove('BeChoosess')
  } else if (aaa === '2') {
    one.classList.remove('BeChoosess')
    tow.classList.add('BeChoosess')
    three.classList.remove('BeChoosess')
  } else if (aaa === '3') {
    one.classList.remove('BeChoosess')
    tow.classList.remove('BeChoosess')
    three.classList.add('BeChoosess')
  }
})

const GotoStudyOnline = () => {
  const one = document.getElementById('one')
  const tow = document.getElementById('tow')
  const three = document.getElementById('three')

  one.classList.add('BeChoosess')
  tow.classList.remove('BeChoosess')
  three.classList.remove('BeChoosess')

  localStorage.setItem('class', '1')

  router.push('/student/study/learncenter')
}
const GotoStudyMyClass = () => {
  const one = document.getElementById('one')
  const tow = document.getElementById('tow')
  const three = document.getElementById('three')


  one.classList.remove('BeChoosess')
  tow.classList.add('BeChoosess')
  three.classList.remove('BeChoosess')

  localStorage.setItem('class', '2')
  router.push('/student/study/myclass')
}

const GotoStudyChooseClass = () => {
  const one = document.getElementById('one')
  const tow = document.getElementById('tow')
  const three = document.getElementById('three')

  one.classList.remove('BeChoosess')
  tow.classList.remove('BeChoosess')
  three.classList.add('BeChoosess')

  localStorage.setItem('class', '3')
  router.push('/student/study/chooseclass')
}
</script>

<template>
  <div class='StudentStudy-body'>
    <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
    <div class='StudentStudy-main'>
      <div class='StudentStudy-main-left'>
        <div class='ChooseBox'>
          <div id='one' class='Chooses BeChoosess'>
            <div class='word' @click='GotoStudyOnline'>
              <svg t='1720551748295' class='icon' viewBox='0 0 1139 1024' version='1.1'
                   xmlns='http://www.w3.org/2000/svg' p-id='4342'>
                <path
                  d='M648.078222 426.268444L485.148444 331.150222v190.179556z m-247.125333 168.391112V257.820444a42.097778 42.097778 0 0 1 63.317333-36.352l288.597334 168.391112a42.097778 42.097778 0 0 1 0 72.704l-288.597334 168.391111a42.097778 42.097778 0 0 1-63.317333-36.352z'
                  fill='#8a8a8a' p-id='4343'></path>
                <path
                  d='M1017.969778 767.658667a41.699556 41.699556 0 0 0 40.618666-42.666667V127.943111a41.699556 41.699556 0 0 0-40.618666-42.666667H124.017778a41.699556 41.699556 0 0 0-40.618667 42.666667v597.048889a41.699556 41.699556 0 0 0 40.618667 42.666667z m0 85.333333H124.017778A125.155556 125.155556 0 0 1 2.104889 724.992V127.943111A125.155556 125.155556 0 0 1 124.017778 0h893.952A125.155556 125.155556 0 0 1 1139.882667 127.943111v597.048889a125.155556 125.155556 0 0 1-121.912889 127.943111z m-975.246222 170.666667h894.008888a42.723556 42.723556 0 0 0 0-85.333334H42.723556a42.723556 42.723556 0 0 0 0 85.333334zM1058.588444 1024H1139.882667v-85.333333h-81.294223z'
                  fill='#8a8a8a' p-id='4344'></path>
              </svg>
              在线课堂 <span> > </span></div>
          </div>
          <div id='tow' class='Chooses'>
            <div class='word' @click='GotoStudyMyClass'>
              <svg t='1720551925690' class='icon' viewBox='0 0 1024 1024' version='1.1'
                   xmlns='http://www.w3.org/2000/svg' p-id='5161' style='top: 1vh; width: 1.1vw; left: 0.8vw'>
                <path
                  d='M928.836429 95.342696H489.891554c-49.795192 0-90.173822 40.327453-90.173822 89.713229v99.334499a201.637263 201.637263 0 0 0-158.648608 196.519567 200.101954 200.101954 0 0 0 53.224049 135.823679c-108.495177 1.228247-196.519566 89.35499-196.519566 197.645459v11.565996C97.773607 934.849718 186.923889 1023.539407 296.391429 1023.539407h293.602279c83.162577 0 154.55445-51.074616 184.083562-123.387675h154.759159c49.744015 0 90.122645-40.276276 90.122645-89.662052V185.055925a89.86676 89.86676 0 0 0-90.122645-89.713229zM443.269334 368.730071a112.589335 112.589335 0 0 1 112.691689 112.17992 112.589335 112.589335 0 0 1-112.691689 112.128742 112.589335 112.589335 0 0 1-112.742866-112.128742 112.589335 112.589335 0 0 1 112.742866-112.17992z m255.884852 457.215054a109.006947 109.006947 0 0 1-109.160478 108.597531H296.493783a109.006947 109.006947 0 0 1-109.109301-108.597531v-11.565996a109.006947 109.006947 0 0 1 109.109301-108.597531h293.602279a109.006947 109.006947 0 0 1 109.160478 108.597531v11.565996h-0.153531z m230.449897-15.455445c0 0.409416-0.307062 0.665301-0.6653 0.6653h-140.327253c-1.68884-106.857514-88.945574-193.295417-196.417212-194.42131a200.101954 200.101954 0 0 0 53.224049-135.823679c0-95.240342-66.734769-175.127593-156.192114-195.95662v-99.795092c0-0.460593 0.307062-0.665301 0.665301-0.665301h438.944875c0.460593 0 0.665301 0.307062 0.6653 0.665301v625.331401h0.102354z'
                  fill='#8a8a8a' p-id='5162'></path>
                <path
                  d='M816.65651 504.604928l-110.798141 77.993703a25.588485 25.588485 0 0 1-40.327453-20.931381V405.731021a25.588485 25.588485 0 0 1 40.327453-20.982558l110.798141 78.04488a25.588485 25.588485 0 0 1 0 41.811585z'
                  fill='#8a8a8a' p-id='5163'></path>
              </svg>
              我的课程<span> > </span></div>
          </div>
          <div id='three' class='Chooses' @click='GotoStudyChooseClass'>
            <div class='word'>
              <svg t='1720552009951' class='icon' viewBox='0 0 1448 1024' version='1.1'
                   xmlns='http://www.w3.org/2000/svg' p-id='4382' style='width: 1.7vw; left: 0.7vw; top: 0.9vh'>
                <path
                  d='M605.338 717.178h153.978v-123.96H605.338z m-205.304 0h153.978v-123.96H400.034z m359.282-210.32v-82.68H605.338v123.96h153.978z m-205.304 0v-82.68H400.034v123.96h153.978z m600.87 176.598L800.468 505.935l123.278 376.3 53.777-120.137 98.989 112.854 51.528-44.51-98.805-112.684z'
                  p-id='4383' fill='#8a8a8a'></path>
                <path
                  d='M356.527 369.592H975.17v178.546h63.527V137.705H292.998v694.952h531.693v-59.202H356.527V369.592z m0-172.683H975.17v109.249H356.527V196.909z'
                  p-id='4384' fill='#8a8a8a'></path>
              </svg>
              选课中心 <span> > </span></div>
          </div>
        </div>
      </div>
      <div class='StudentStudy-main-right'>
        <router-view class='LearnCenterHomeView'></router-view>
      </div>
    </div>
    <ViewDown class='ViewDown'></ViewDown>
  </div>
</template>

<style scoped lang='scss'>

.BeChoosess {
  color: rgba(251, 159, 77);
  .word {
    background-color: rgba(210, 197, 197, 0.1);

  }
  span {
    color: rgba(251, 159, 77) !important;
  }

  path {
    fill: rgba(251, 159, 77);
  }
}

.StudentStudy-body {
  width: 100%;
  height: 100%;
  .ViewDown {
    width: 100%;
    height: 10vh;
    margin-top: 10vh;
  }
  .StudentStudy-main {
    height: 100%;
    width: 70%;
    margin-left: 15%;
    padding-top: 8vh;

    .StudentStudy-main-left {
      width: 13%;
      height: 100%;
      margin-left: 3%;
      float: left;

      .ChooseBox {
        width: 100%;
        height: 30vh;
        background-color: white;

        .Chooses {
          width: 100%;
          height: 5vh;
          position: relative;

          .word:hover {
            cursor: pointer;
            background: rgba(210, 197, 197, 0.1);
            color: rgba(251, 159, 77);
            span {
              color: rgba(251, 159, 77) !important;
            }
            path {
              fill: rgba(251, 159, 77);
            }
          }

          .word {
            position: absolute;
            width: 100%;
            height: 80%;
            text-align: center;
            line-height: 3.8vh;
            margin-top: 5%;
            font-size: 0.8vw;
            transition: background-color, color 0.3s ease;

            .icon {
              width: 1vw;
              position: absolute;
              top: 1.2vh;
              left: 1vw;
            }

            span {
              color: #d3d3d3;
            }
          }
        }
      }

    }

    .StudentStudy-main-right {
      width: 82%;
      float: left;
      margin-top: -4vh;
      height: 100%;
      position: relative;

      .LearnCenterHomeView {
        position: absolute;
        width: 100%;
      }
    }
  }

  .MainTopTitle-out {
    width: 100%;
    height: 5.5%;
    position: absolute;
    z-index: 2;
    background: white;
  }
}
</style>