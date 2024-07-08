<script setup>
import WordCloud from '@/components/StudentComponents/StudentStudyInfor/SecondClass/Eccharts/WordCloud.vue'
import AllRida from '@/components/StudentComponents/StudentStudyInfor/SecondClass/Eccharts/AllRida.vue'
import TopRoad from '@/components/StudentComponents/StudentStudyInfor/SecondClass/Eccharts/TopRoad.vue'
</script>

<template>
  <div class='StudyInfo-body'>
    <div class='StudyInfo-body-top'>
      <div class='word'>个人学习情况</div>
    </div>
    <div class='StudyInfo-main'>
      <div class='StudyInfo-main-left'>
        <div class='StudyTime'>
          23<span style='font-size: 0.8vw'>分钟</span>
        </div>
        <div class='TimeInfo'>
          今日学习时长
        </div>
        <div class='GetMon'>今日获取积分：908</div>
      </div>

      <div class='StudyInf-main-center'>
        <div class='center-left'>
          <div class='left-top'>
            <div class='word'>综合分析</div>
          </div>
          <div class='left-one'>
            <div class='one-top'>
              <div class='bg'>
                <div class='midden'>
                  <div class='word'>1</div>
                </div>
              </div>
            </div>
            <div class='one-down'>
              班级排名
            </div>
          </div>
          <div class='left-tow'>
            <div class='one-top'>
              <div class='bg'>
                <div class='midden'>
                  <div class='word'>89</div>
                </div>
              </div>
            </div>
            <div class='one-down'>
              平均成绩
            </div>
          </div>
        </div>
        <div class='center-center'>
          <AllRida class='rida'></AllRida>
        </div>
        <div class='center-right'>
          <TopRoad class='topRoad'></TopRoad>
        </div>
      </div>

      <div class='StudyInf-main-right'>
        <div class='right-top-word'>
          <div style='font-size: 0.85vw; margin-top: 0.6vh; margin-left: 0.8vw'>人物词云</div>
        </div>
        <WordCloud style='margin-top: -2vh; width: 100%; height: 90%'></WordCloud>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.StudyInfo-body {
  width: 100%;
  height: 40vh;
  overflow: hidden;



  .StudyInfo-body-top {
    width: 100%;
    height: 5vh;

    .word {
      font-size: 1.15vw;
      padding-top: 1vh;
      margin-left: 1vw;
    }
  }

  .StudyInfo-main {
    width: 100%;
    height: 35vh;

    .StudyInf-main-right {
      width: 18%;
      height: 100%;
      background: white;
      border-radius: 0.3vw;
      float: left;
      margin-left: 2.5%;

      .right-top-word {
        width: 100%;
        height: 3.5vh;
      }
    }

    .StudyInf-main-center {
      width: 59%;
      height: 100%;
      background: white;
      margin-left: 2.5%;
      border-radius: 0.3vw;
      float: left;

      .center-left {
        width: 20%;
        height: 100%;
        float: left;

        .left-one {
          width: 100%;
          height: 13vh;
          position: relative;

          .one-top {
            width: 100%;
            height: 100%;
            margin-top: 1vh;

            .bg {
              width: 5vw;
              height: 5vw;
              margin-left: 1.6vw;
              background: rgba(253, 122, 5);
              border-radius: 50%;
              position: relative;

              .midden {
                width: 4vw;
                height: 4vw;
                left: 0.5vw;
                top: 0.5vw;
                position: absolute;
                background: white;
                border-radius: 50%;

                .word {
                  margin: 1.8vh auto;
                  text-align: center;
                  font-size: 1.4vw;
                  color: rgba(253, 122, 5);
                }
              }
            }
          }

          .one-down {
            width: 100%;
            height: 10%;
            bottom: 1.5vh;
            text-align: center;
            position: absolute;
            font-size: 0.8vw;
            color: rgba(253, 122, 5);
          }
        }

        .left-tow {
          width: 100%;
          height: 13vh;
          margin-top: 1vh;
          position: relative;

          .bg {
            width: 5vw;
            height: 5vw;
            margin-left: 1.6vw;
            border-radius: 50%;
            background: rgba(250, 217, 126);
            position: relative;

            .midden {
              width: 4vw;
              height: 4vw;
              left: 0.5vw;
              top: 0.5vw;
              position: absolute;
              background: white;
              border-radius: 50%;

              .word {
                margin: 2vh auto;
                text-align: center;
                font-size: 1.2vw;
                color: rgba(250, 217, 126);
              }
            }
          }

          .one-down {
            width: 100%;
            height: 10%;
            bottom: 1.5vh;
            text-align: center;
            position: absolute;
            font-size: 0.8vw;
            color: rgba(250, 217, 126);
          }
        }

        .left-top {
          width: 100%;
          height: 5vh;

          .word {
            margin-top: 0.6vh;
            margin-left: 0.8vw;
            font-size: 0.9vw;
          }
        }
      }

      .center-center {
        width: 50%;
        height: 100%;
        float: left;

        .rida {
          width: 80%;
          height: 80%;
          margin-top: 5.5vh;
        }
      }

      .center-right {
        width: 30%;
        height: 100%;
        float: left;

        .topRoad {
          height: 100%;
          width: 135%;
          margin: 2.5vh -4vw;
        }
      }
    }

    .StudyInfo-main-left {
      width: 18%;
      border-radius: 0.3vw;
      height: 100%;
      background: url("/src/assets/StudentMainTop/studybg1.png") no-repeat;
      background-size: cover;
      float: left;
      color: white;

      .GetMon {
        width: 100%;
        text-align: center;
        margin-top: 5vh;
        font-size: 0.9vw;
      }

      .StudyTime {
        width: 100%;
        margin-top: 8vh;
        font-size: 2.5vw;
        text-align: center;
      }

      .TimeInfo {
        width: 100%;
        margin-top: 2vh;
        font-size: 1vw;
        text-align: center;
      }
    }
  }
}
</style>