<script setup>
import router from '@/router'

const goToTargetPage = () => {
  // const num = ref(true)
  router.push('/student/exam/workready')
}
</script>

<template>
  <div class='OE'>
    <div class='OE-body'>
<!--      <div class='OE-title'>-->
<!--        <div class='Title-word'>在线考试</div>-->
<!--      </div>-->
<!--      <div class='title-foot'></div>-->
      <div class='Body-Main'>
        <div class='tips'>目前共有<span style='font-weight: bolder; font-size: 1.3vw'> 1 </span>场考试</div>
        <div class='Exam-Main'>
          <div class='Exam-Card'>
            <div class='ExCard-title'>
              <div class='txt'>Java期末考试</div>
            </div>
            <div class='ExCard-body'>
              <div class='body-title'>考试时间：</div>
              <div class='time'>
                <div class='first'>2024年9月14日 16:30</div>
                <div class='midden'>-</div>
                <div class='last'>2024年9月14日 19:30</div>
              </div>
              <div class='button' @click='goToTargetPage'>前往考试 -></div>
            </div>
          </div>
          <div class='Exam-Card'>
            <div class='ExCard-title'>
              <div class='txt'>暂无考试</div>
            </div>
            <div class='ExCard-body'>
              <div class='body-title'>考试时间：</div>
              <div class='time'>
                <div class='first'>待定</div>
                <div class='midden'>-</div>
                <div class='last'>待定</div>
              </div>
              <div class='button'>无法操作</div>
            </div>
          </div>
          <div class='Exam-Card'>
            <div class='ExCard-title'>
              <div class='txt'>暂无考试</div>
            </div>
            <div class='ExCard-body'>
              <div class='body-title'>考试时间：</div>
              <div class='time'>
                <div class='first'>待定</div>
                <div class='midden'>-</div>
                <div class='last'>待定</div>
              </div>
              <div class='button'>无法操作</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
::-webkit-scrollbar {
  display: none;
}

.left-beChoose {
  background: rgba(106, 169, 153, 0.6) !important;
  color: white;
  font-weight: bolder;
  border-radius: 4px;
}

.beChoose {
  color: #6aa999 !important;
  font-weight: bolder;

  .icon {
    path {
      fill: #6aa999 !important;
    }
  }
}

.OE {
  width: 100%;
  height: 100%;

  .OE-body {
    width: 97.5%;
    height: 97%;
    border-radius: 0.5vw;
    margin: 1.3vh auto;

    .Body-Main {
      position: absolute;
      width: 97.5%;
      height: 72vh;
      margin-top: 1.7vh;

      .tips {
        width: 35%;
        height: 10vh;
        text-align: center;
        line-height: 10vh;
        right: 0;
        font-size: 1vw;
        margin-left: 65%;
      }

      .Exam-Main {
        width: 100%;
        height: 60vh;
        margin: -3vh auto;

        .Exam-Card {
          width: 30%;
          height: 45vh;
          margin-top: 1vh;
          margin-left: 2.5%;
          border-radius: 5px;
          box-shadow: 0px 0px 1.5px 1px rgba(114, 112, 112, 0.35);
          display: inline-block;

          .ExCard-title {
            width: 100%;
            height: 14%;
            border-bottom: 1px solid rgba(114, 112, 112, 0.35);
            background: url("/src/assets/StudentInfo/img(1).png") no-repeat;
            background-size: cover;

            .txt {
              position: absolute;
              width: 25%;
              margin-left: 2%;
              line-height: 7vh;
              font-size: 24px;
              color: white;
              font-weight: bolder;
            }
          }

          .ExCard-body {
            width: 100%;
            height: 86%;
            position: relative;

            .button:hover {
              cursor: pointer;
            }

            .button {
              position: absolute;
              bottom: 2.5vh;
              right: 1vw;
              font-size: 20px;
            }

            .body-title {
              width: 80%;
              left: 12%;
              top: 10%;
              font-size: 22px;
              font-weight: bolder;
              position: absolute;
              color: rgba(86, 86, 86);
            }

            .time {
              width: 60%;
              height: 50%;
              top: 22%;
              left: 20%;
              font-size: 20px;
              position: absolute;

              div {
                margin-top: 2vh;
              }

              .midden {
                font-size: 20px;
                margin-left: 2vw;
              }
            }
          }
        }
      }
    }

    .OE-title {
      position: absolute;
      width: 97.5%;
      height: 9vh;
      border-radius: 0.5vw 0.5vw 0 0;
      background: #6aa999;

      .Title-word {
        font-size: 1.6vw;
        color: white;
        margin-top: 2vh;
        margin-left: 6%;
        font-weight: bolder;
      }
    }

    .title-foot {
      position: absolute;
      width: 97.5%;
      height: 2vh;
      margin-top: 9.7vh;
      border-radius: 0 0 0.5vw 0.5vw;
      background: #6aa999;
    }
  }

}
</style>