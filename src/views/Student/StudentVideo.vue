<script setup>
import SemesterScheduleHomeView
  from '@/components/StudentComponent/StudentClass/SemesterScheduleHomeView.vue'
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import ViewDown from '@/components/StudentComponent/ViewDown.vue'
</script>

<template>
  <div class='StudentVideo-body'>
    <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
    <div class='StudentVideo-main'>
      <div class='Main-left'>
        <div class='left-top'>
          <img src='/src/assets/StudentVideo/bb.png' alt=''>
          <div class='left-top-left'>
            <img src='/src/assets/head.png' alt=''>
          </div>
          <div class='left-top-right'>
            <div class='Top-right-top'>
              <div class='word'>陈晔 <span style='font-size: 0.6vw; font-weight: 400'>同学,你好!</span></div>
            </div>
            <div class='Top-right-down'>
              <div class='classBox'>今日课程：4节（直播课0节｜面授课4节）</div>
            </div>
          </div>
        </div>
        <div class='left-open'>
          <div class='open-title'>
            <div class='title-word'><span
              style='width: 0.3vw; height: 2vh; background: rgba(251,159,77); display: flex; float: left;'></span><span
              style='margin-left: 0.5vw; font-size: 0.8vw; margin-top: -0.1vh; font-weight: bold;display: flex'>我的开课</span>
            </div>

            <div class='more'>更多 ></div>
          </div>
          <div class='open-main'>
            <div class='open-class-card'>
              <div class='open-class-card-left'>
                <img src='/src/assets/2f.png' alt=''>
              </div>
              <div class='open-class-card-right'>
                <div class='open-class-card-right-top'>Python程序设计-朱大胡</div>
                <div class='open-class-card-right-center'><span style='color: #727070'>主讲：</span><span>朱大胡</span>
                </div>
                <div class='open-class-card-right-down'><span
                  style='color: #727070'>地点：</span><span>博博楼A9N405</span></div>
              </div>
            </div>
            <div class='open-class-card'>
              <div class='open-class-card-left'>
                <img src='/src/assets/2f.png' alt=''>
              </div>
              <div class='open-class-card-right'>
                <div class='open-class-card-right-top'>Python程序设计-朱大胡</div>
                <div class='open-class-card-right-center'><span style='color: #727070'>主讲：</span><span>朱大胡</span>
                </div>
                <div class='open-class-card-right-down'><span
                  style='color: #727070'>地点：</span><span>博博楼A9N405</span></div>
              </div>
            </div>
            <div class='open-class-card'>
              <div class='open-class-card-left'>
                <img src='/src/assets/2f.png' alt=''>
              </div>
              <div class='open-class-card-right'>
                <div class='open-class-card-right-top'>Python程序设计-朱大胡</div>
                <div class='open-class-card-right-center'><span style='color: #727070'>主讲：</span><span>朱大胡</span>
                </div>
                <div class='open-class-card-right-down'><span
                  style='color: #727070'>地点：</span><span>博博楼A9N405</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class='down'>
          <div class='word'>提示：非本学期开课，请至“更多”查看</div>
        </div>
      </div>
      <div class='Main-right'>
        <SemesterScheduleHomeView class='SemesterScheduleHomeView'></SemesterScheduleHomeView>
      </div>
    </div>
    <ViewDown class='ViewDown'></ViewDown>
  </div>
</template>

<style scoped lang='scss'>
.StudentVideo-body {
  width: 100%;
  height: 180%;

  .ViewDown {
    width: 100%;
    height: 15vh;
    margin-top: 10vh;
  }

  .StudentVideo-main {
    height: 100%;
    width: 70%;
    margin-left: 15%;
    padding-top: 8vh;

    .Main-left {
      width: 32%;
      height: 100vh;
      float: left;
      margin-left: 0.5%;

      .down {
        width: 100%;
        height: 3vh;
        margin-top: -3.5vh;

        .word {
          margin-left: 1vw;
          margin-top: 1vh;
          font-size: 0.63vw;
          color: #727070;
        }
      }

      .left-open {
        width: 100%;
        height: 30vh;
        margin-top: 2vh;
        background: white;
        border-radius: 0.3vw;


        .open-main {
          width: 95%;
          height: 23.5vh;
          margin: -1vh auto;
          overflow: hidden;

          .open-class-card:hover {
            cursor: pointer;
            background: rgba(114, 112, 112, 0.05);

            .open-class-card-right-top {
              color: #0e87ff;
            }
          }

          .open-class-card {
            width: 100%;
            height: 9vh;
            margin-top: 2vh;
            border-radius: 0.3vw;
            transition: background-color 0.3s ease;

            .open-class-card-right {
              width: 70%;
              height: 100%;
              float: left;

              div {
                margin-top: 0.3vh;
                margin-left: 1vw;
              }

              .open-class-card-right-top {
                width: 100%;
                height: 30%;
                font-size: 0.8vw;
                font-weight: bold;
                transition: color 0.3s ease;
              }

              .open-class-card-right-center {
                width: 100%;
                height: 30%;
                font-size: 0.65vw;
              }

              .open-class-card-right-down {
                width: 100%;
                height: 30%;
                font-size: 0.65vw;
              }

            }

            .open-class-card-left {
              width: 30%;
              height: 100%;
              float: left;

              img {
                width: 95%;
                height: 80%;
                margin-left: 0.5vw;
                margin-top: 0.7vh;
                border: 2px solid rgba(114, 112, 112, 0.2);
                border-radius: 0.3vw;
              }
            }
          }
        }

        .open-title {
          width: 100%;
          height: 5vh;
          position: relative;

          .more:hover {
            cursor: pointer;
            color: #0e87ff;
          }

          .more {
            position: absolute;
            right: 1vw;
            top: 1.2vh;
            font-weight: bold;
            transition: color 0.3s ease;
          }

          .title-word {
            padding-top: 1vh;
            margin-left: 0.8vw;
          }
        }
      }

      .left-top {
        width: 100%;
        height: 13vh;
        margin: auto;
        position: relative;

        .left-top-left {
          width: 30%;
          height: 100%;
          position: absolute;

          img {
            width: 4vw;
            height: 7.5vh;
            margin: 2.5vh 2.5vw;
            border: 4px solid hsla(0, 0%, 100%, .4);
            border-radius: 50%;
          }
        }

        .left-top-right {
          width: 70%;
          height: 100%;
          margin-left: 30%;
          position: absolute;

          .Top-right-top {
            width: 100%;
            height: 50%;

            .word {
              margin-left: 1.2vw;
              font-size: 0.9vw;
              color: white;
              font-weight: bold;
              margin-top: 3vh;
            }
          }

          .Top-right-down {
            width: 100%;
            height: 50%;

            .classBox {
              text-align: center;
              border-radius: 20px;
              width: 80%;
              line-height: 2.5vh;
              height: 2.5vh;
              color: white;
              font-size: 0.6vw;
              margin-left: 1.2vw;
              margin-top: -2.7vh;
              border: 1px solid hsla(0, 0%, 100%, .4);
              background: rgba(32, 107, 254, 0.2);
            }
          }
        }

        img {
          width: 100%;
          height: 100%;
          position: absolute;
        }
      }
    }

    .Main-right {
      width: 66.5%;
      margin-left: 0.5%;
      float: left;

      .SemesterScheduleHomeView {
        margin-top: -2vh;
        width: 100%;
        height: 100%;
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