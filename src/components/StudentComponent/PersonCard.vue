<script setup>
import router from '@/router'

const motto = '天行健，君子以自强不息'
const Level = '11'
const SourceNumber = '9876'

const GotoHomeWork = () => {
  router.push('/student/study/learncenter/homework')
}

const GotoHomeClassVideo = () => {
  router.push('/student/study/learncenter/classvideo')
}

const GotoHomeIfly= () => {
  router.push('/student/iflycode')
}
</script>

<template>
  <div class='PersonCard-body'>
    <div class='PersonCard-top'>
      <img src='/src/assets/head.png' alt=''>
      <div class='PersonName'>陈大胡</div>
      <div class='motto'>
        <div class='motto-word'>
          {{ motto }}
        </div>
        <svg t='1720058276744' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'
             p-id='9484' style='width: 1vw; position:absolute; right: 0; top: 0vh'>
          <path
            d='M389.82 521.998l43.902-20.364 98.64 97.88L512 644.18c20.954 248.476-139.92 305.454-386.5 305.454-21.16 0-36.94-2.628-47.916-10.202-32.134-22.176 1.02-69.46 14.846-105.688C135.11 721.886 88.66 522 389.818 522z'
            fill='#FF934A' p-id='9485'></path>
          <path
            d='M943.584 256.95l-266.028 338.9c-15.924 20.292-37.836 35.096-63.168 39.462-25.414 4.38-60.908 8.866-102.388 8.866 0 0-10.814-27.286-51.316-68.014C420.18 535.44 389.818 522 389.818 522c0-43.524 5.784-80.3 11.16-105.118 4.908-22.59 18.672-41.776 36.716-56.104L778.09 90.508c11.038-8.766 23.58-15.872 37.632-16.424 22.97-0.904 61.762 4.896 100.534 43.9 38.794 39.006 44.556 78.012 43.66 101.116-0.55 14.136-7.616 26.746-16.332 37.85z'
            fill='#FCBF28' p-id='9486'></path>
        </svg>
      </div>
      <div class='level'>
        <div class='level-left'>
          <div class='Levels'>Lv.{{ Level }}</div>
          <div class='Level-info'>等级</div>
        </div>
        <div class='level-right'>
          <div class='Source'>
            <div class='SourceNumber'>{{ SourceNumber }}</div>
            <div class='number-info'>积分</div>
          </div>
        </div>
      </div>
    </div>
    <div class='PersonCard-down'>
      <div class='PersonCard-down-left' @click='GotoHomeWork'>
        <svg t='1720060675247' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'
             p-id='13312' style='width: 2vw; margin: 1.1vh 0.65vw'>
          <path
            d='M811.52 220.16l-266.24 43.52c-20.48 0-38.4 15.36-40.96 38.4-5.12-23.04-20.48-38.4-40.96-38.4L197.12 220.16c-23.04 0-43.52 23.04-43.52 51.2V768c0 28.16 20.48 51.2 43.52 51.2l266.24 43.52c20.48 2.56 20.48 2.56 40.96 2.56 23.04 0 23.04 0 40.96-2.56L811.52 819.2c23.04 0 43.52-23.04 43.52-51.2V271.36c0-28.16-17.92-51.2-43.52-51.2z'
            fill='#FFD02B' p-id='13313'></path>
          <path
            d='M501.76 980.48h-7.68L102.4 929.28c-43.52 0-76.8-35.84-76.8-79.36v-665.6C25.6 138.24 61.44 102.4 107.52 102.4h2.56l396.8 51.2c12.8 2.56 23.04 12.8 23.04 25.6v271.36c0 15.36-10.24 25.6-25.6 25.6s-25.6-10.24-25.6-25.6V202.24L104.96 153.6C89.6 153.6 76.8 166.4 76.8 184.32v668.16c0 15.36 12.8 28.16 28.16 28.16h2.56l399.36 51.2c12.8 2.56 20.48 10.24 23.04 23.04 0 12.8-10.24 25.6-28.16 25.6 2.56 0 2.56 0 0 0z'
            fill='#353535' p-id='13314'></path>
          <path
            d='M501.76 980.48c-12.8 0-23.04-10.24-25.6-23.04-2.56-12.8 7.68-25.6 23.04-28.16l399.36-51.2h2.56c15.36 0 28.16-12.8 28.16-28.16v-665.6c0-15.36-12.8-30.72-28.16-30.72L527.36 202.24v248.32c0 15.36-10.24 25.6-25.6 25.6s-25.6-10.24-25.6-25.6V179.2c0-12.8 10.24-23.04 23.04-25.6L896 102.4h2.56c46.08 0 81.92 35.84 81.92 81.92v668.16c0 43.52-33.28 76.8-76.8 79.36l-396.8 51.2c-2.56-2.56-2.56-2.56-5.12-2.56zM368.64 576h-5.12l-189.44-30.72c-12.8-2.56-23.04-15.36-20.48-30.72 2.56-12.8 15.36-23.04 30.72-20.48l189.44 30.72c12.8 2.56 23.04 15.36 20.48 30.72-2.56 12.8-12.8 20.48-25.6 20.48zM368.64 742.4h-5.12l-189.44-30.72c-12.8-2.56-23.04-15.36-20.48-30.72 2.56-12.8 15.36-23.04 30.72-20.48l189.44 30.72c12.8 2.56 23.04 15.36 20.48 30.72-2.56 12.8-12.8 20.48-25.6 20.48z'
            fill='#353535' p-id='13315'></path>
          <path
            d='M619.52 576c-12.8 0-23.04-7.68-25.6-20.48-2.56-12.8 7.68-28.16 20.48-30.72l189.44-30.72c12.8-2.56 28.16 7.68 30.72 20.48 2.56 12.8-7.68 28.16-20.48 30.72l-189.44 30.72h-5.12zM619.52 742.4c-12.8 0-23.04-7.68-25.6-20.48-2.56-12.8 7.68-28.16 20.48-30.72l189.44-30.72c12.8-2.56 28.16 7.68 30.72 20.48 2.56 12.8-7.68 28.16-20.48 30.72L622.08 742.4h-2.56z'
            fill='#353535' p-id='13316'></path>
        </svg>
        <div class='left-info' >学习任务</div>
      </div>
      <div class='PersonCard-down-center' @click='GotoHomeClassVideo'>
        <svg t='1720062167165' class='icon' viewBox='0 0 1177 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'
             p-id='24274' id='mx_n_1720062167166' data-spm-anchor-id='a313x.search_index.0.i12.480f3a81MLhixU'
             style='width: 2.2vw; margin: 1.32vh 0.85vw'>
          <path
            d='M457.789105 107.084967a107.084967 107.084967 0 1 1 107.084968 107.084968 107.084967 107.084967 0 0 1-107.084968-107.084968z m422.985621 133.856209H520.701524a110.565229 110.565229 0 0 0-110.431373 110.431373V448.418301h307.869281V351.372549a140.88366 140.88366 0 0 0-1.338562-16.732026h163.973856a47.452026 47.452026 0 0 0 46.849673-46.849673 46.849673 46.849673 0 0 0-46.849673-46.849674z'
            fill='#FAD97E' p-id='24275' data-spm-anchor-id='a313x.search_index.0.i13.480f3a81MLhixU' class=''></path>
          <path
            d='M1155.179955 414.954248H22.756426A22.554771 22.554771 0 0 0 0.00087 437.709804v108.423529A22.554771 22.554771 0 0 0 22.756426 568.888889H87.007406v374.797386a80.313725 80.313725 0 0 0 80.313726 80.313725h843.294117a80.313725 80.313725 0 0 0 80.313726-80.313725V568.888889h64.25098a22.554771 22.554771 0 0 0 22.755556-22.755556V437.709804a22.554771 22.554771 0 0 0-22.755556-22.755556z m-447.74902 375.466667l-220.862745 127.163399a16.062745 16.062745 0 0 1-24.094117-14.054902V649.202614a16.263529 16.263529 0 0 1 24.094117-14.054902l220.862745 127.163399a16.330458 16.330458 0 0 1 0 28.109804zM1137.778648 505.976471a22.554771 22.554771 0 0 1-22.755556 22.755555H62.913288A22.554771 22.554771 0 0 1 40.157733 505.976471v-28.109804A22.554771 22.554771 0 0 1 62.913288 455.111111h1052.109804a22.554771 22.554771 0 0 1 22.755556 22.755556z'
            fill='#FF855A' p-id='24276'></path>
        </svg>
        <div class='center-info'>在线课堂</div>
      </div>
      <div class='PersonCard-down-right' @click='GotoHomeIfly'>
        <svg t='1720061451831' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'
             p-id='11973' style='width: 2vw !important; margin: 1.3vh 1vw'>
          <path
            d='M904.6 404l-0.6-0.7C882.3 213.5 721.2 66 525.6 65.8c-210.3 0.3-380.6 170.7-381 381-0.1 1.5-0.1 3.1 0 4.6C118.1 478.7 62 541 62 584.9c0 48.5 45.9 67.2 78.6 68.3l37.3 8.4 7.1 183.3c0.4 37.8 31.2 68.1 69 67.9l84.3-20.4s273 3.7 435.2-122.4c1.3-0.3 2.4-0.4 3.7-0.7 0 0 7.7-6.4 19.4-18.9 40.5-37.5 71.8-84.8 85.9-144.7 0-0.1 0-0.2 0.1-0.3 18.8-54.2 30.3-121.4 22-201.4z'
            fill='#F5D0A9' p-id='11974'></path>
          <path
            d='M835.3 806.8c-0.5 0.6-0.9 1.2-1.4 1.7l-14.3 14.3c-10.9 10.9-28.7 10.9-39.6 0-10.9-10.9-10.9-28.7 0-39.6l9.2-9.2c94.7-101.6 117-204.8 113.5-286.3v-1c-2.5-55-16.7-100-28-127.8-50.8-114.2-165.1-194-298.2-194-178.7 0-323.7 143.7-326.2 321.8L250 508h-0.1c0 7.1-2.7 14.1-8 19.3-39.4 38.6-74 86.3-74 102.1 0 3.1 0 6.4 8.8 9.9 0.1 0 0.2 0 0.2 0.1l59.3 13.2 45.8 9.2 8.8 226.8c0 7.6 6.2 13.8 13.9 13.9l139.8-33.8c10.1-0.6 19.7 4.5 24.9 13.1 5.2 8.7 5.2 19.5 0 28.2s-14.8 13.7-24.9 13.1L304.8 957c-37.8 0.2-68.6-30.2-69-67.9l-7-181.7-49.2-11.2c-30.9-4.7-66.7-24.3-66.7-67.2 0-43.8 56.1-106.2 82.6-133.5-0.1-1.5-0.1-3.1 0-4.6 0.3-210.3 170.7-380.6 381-381 195.6 0.2 356.7 147.7 378.4 337.5l0.6 0.7c21.3 208.2-90.1 329.9-120.2 358.7z m-145.5-368c32.7 0 59.2-26.5 59.2-59.2s-26.5-59.2-59.2-59.2-59.2 26.5-59.2 59.2c0 6.8 1.4 13.1 3.5 19.2l-39.3 22.7c-0.3-0.2-0.7-0.3-0.9-0.6-16.9-22.6-43.6-35.8-71.9-35.7-41.5-0.1-77.8 27.6-88.8 67.6-11 40 6.2 82.4 41.8 103.5 35.4 21 80.4 15.8 110.2-12.5l91 52.5c-0.2 0.9-0.4 1.8-0.4 2.8-0.4 13.6 8.7 25.6 21.8 29.1 13.1 3.5 27-2.6 33.3-14.6 6.4-12 3.7-26.8-6.6-35.8-9.7-8.5-23.7-9.3-34.6-2.6l-87.3-50.4c8.4-13.9 13-29.9 13.1-46.1 0.1-12.1-2.5-24.1-7.4-35.2-0.1-0.2 0-0.5-0.1-0.8l38.9-22.5c10.9 11.4 26.1 18.6 42.9 18.6z'
            fill='#FF8000' p-id='11975'></path>
        </svg>
        <div class='right-info'>AI空间</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.PersonCard-body {
  width: 100%;
  height: 100%;
  background: white;

  .PersonCard-down {
    width: 92%;
    height: 25%;
    margin: 5vh auto;
    border-top: 1px solid #e5e5e5;
    position: relative;

    div {
      top: 0.8vh;
    }

    div:hover {
      cursor: pointer;
    }

    .PersonCard-down-left {
      position: absolute;
      width: 32%;
      border-right: 1px solid #e5e5e5;
      height: 100%;

      .left-info {
        width: 90%;
        margin-top: -0.6vh;
        text-align: center;
        font-size: 0.8vw;
        font-weight: bold;
        color: #7e7e7e;
      }
    }

    .PersonCard-down-right {
      position: absolute;
      width: 33%;
      height: 100%;
      right: 0;

      .right-info {
        width: 90%;
        margin: -1vh 0.35vw;
        text-align: center;
        font-size: 0.8vw;
        font-weight: bold;
        color: #7e7e7e;
      }
    }

    .PersonCard-down-center {
      position: absolute;
      width: 34%;
      left: 33%;
      border-right: 1px solid #e5e5e5;
      height: 100%;

      .center-info {
        width: 90%;
        margin: -0.9vh 0.35vw;
        text-align: center;
        font-size: 0.8vw;
        font-weight: bold;
        color: #7e7e7e;
      }
    }
  }

  .PersonCard-top {
    width: 100%;
    height: 50%;

    .level {
      width: 100%;
      height: 30%;
      position: relative;
      color: rgba(114, 112, 112, 0.8);

      .level-left {
        width: 50%;
        text-align: center;
        line-height: 5vh;
        position: absolute;

        .Levels {
          font-size: 1vw;
        }

        .Level-info {
          margin-top: -2.3vh;
          font-size: 0.85vw;
        }
      }

      .level-right {
        text-align: center;
        position: absolute;
        width: 50%;
        right: 0;

        .SourceNumber {
          font-size: 1vw;
          margin-top: 1.3vh;
        }

        .number-info {
          margin-top: 0.35vh;
          font-size: 0.85vw;
        }
      }
    }

    .motto {
      margin: auto;
      width: 70%;
      position: relative;

      .icon:hover {
        cursor: pointer;
      }

      .motto-word {
        max-width: 70%;
        margin: 0.5vh auto;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.8vw;
      }
    }


    .PersonName {
      width: 100%;
      font-size: 1.1vw;
      font-weight: bold;
      margin-top: -2vh;
      text-align: center;
    }

    img {
      display: block;
      margin: 3vh auto;
      width: 5vw;
      border-radius: 50%;
    }
  }
}
</style>