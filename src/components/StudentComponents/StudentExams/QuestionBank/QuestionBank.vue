<script setup>

</script>

<template>
  <div class='QB'>
    <div class='QB-body'>
      <div class='QB-title'>
        <div class='Title-word'>考试题库</div>
      </div>
      <div class='title-foot'></div>
      <div class='Body-Main'>
        <div class='MM'>
          <div class='left-tips'>
            <div class='grade left-beChoose'>数据结构</div>
            <div class='grade'>数据库</div>
            <div class='grade'>Java</div>
            <div class='grade'>英语</div>
            <div class='grade'>计算机网络</div>
            <div class='grade'>操作系统</div>
            <div class='grade'>组成原理</div>
            <div class='grade'>Rust</div>
          </div>
          <div class='Control'>
            <div class='Control-title'>
              <div class='new title-thing beChoose'>
                <span>最新</span>
                <svg t='1718846042888' class='icon' viewBox='0 0 1024 1024' version='1.1'
                     xmlns='http://www.w3.org/2000/svg' p-id='4595'>
                  <path
                    d='M469.333333 652.16V170.666667h85.333334v481.493333L704.554667 512 768 571.306667 512 810.666667l-256-239.36L319.445333 512z'
                    fill='#2E2F30' p-id='4596'></path>
                </svg>
              </div>
              <div class='download title-thing'>
                <span>下载量</span>
                <svg t='1718846042888' class='icon' viewBox='0 0 1024 1024' version='1.1'
                     xmlns='http://www.w3.org/2000/svg' p-id='4595'>
                  <path
                    d='M469.333333 652.16V170.666667h85.333334v481.493333L704.554667 512 768 571.306667 512 810.666667l-256-239.36L319.445333 512z'
                    fill='#2E2F30' p-id='4596'></path>
                </svg>
              </div>
            </div>
            <div class='p'>
              <div class='test'>
                <div class='test-title'>
                  <div class='title-name'>2022届第一次阶段测试试卷</div>
                </div>
                <div class='test-intro'>
                  <div class='time'>2024年 3月 12日</div>
                  <div class='number'>下载量：<span>13</span>次</div>
                </div>
              </div>
              <div class='test'>
                <div class='test-title'>
                  <div class='title-name'>2022届第一次阶段测试试卷</div>
                </div>
                <div class='test-intro'>
                  <div class='time'>2024年 3月 12日</div>
                  <div class='number'>下载量：<span>13</span>次</div>
                </div>
              </div>
              <div class='test'>
                <div class='test-title'>
                  <div class='title-name'>2022届第一次阶段测试试卷</div>
                </div>
                <div class='test-intro'>
                  <div class='time'>2024年 3月 12日</div>
                  <div class='number'>下载量：<span>13</span>次</div>
                </div>
              </div>
              <div class='test'>
                <div class='test-title'>
                  <div class='title-name'>2022届第一次阶段测试试卷</div>
                </div>
                <div class='test-intro'>
                  <div class='time'>2024年 3月 12日</div>
                  <div class='number'>下载量：<span>13</span>次</div>
                </div>
              </div>
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

.QB {
  width: 100%;
  height: 100%;

  .QB-body {
    width: 97.5%;
    height: 97%;
    border-radius: 0.5vw;
    margin: 1.3vh auto;
    background: #f8f6f6;

    .Body-Main {
      position: absolute;
      width: 97.5%;
      height: 109vh;
      margin-top: 12.7vh;

      .Control {
        background: white;
        border: 1px solid rgba(106, 169, 153, 0.5);
        width: 70%;
        height: 70vh;
        border-radius: 0.3vw;
        box-shadow: 0 2px 6px 0 #6aa999;
        margin-left: 21.5%;
        position: absolute;

        .p {
          width: 100%;
          height: 64vh;
          margin-top: 1vh;
          overflow-y: auto;

          .test:first-child {
            margin-top: 0.5vh;
          }
          
          .test:hover {
            cursor: pointer;
          }
          
          .test{
            width: 97%;
            height: 10vh;
            margin: 2vh auto;
            border-radius: 3px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

            .test-title {
              width: 100%;
              height: 50%;
              margin-left: 5%;
              .title-name {
                width: 70%;
                height: 100%;
                font-size: 1.2vw;
                line-height: 5vh;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }

            .test-intro {
              width: 100%;
              height: 50%;
              margin-left: 5%;
              margin-top: 0.7vh;
              color: rgba(114, 112, 112, 0.9);
              .time {
                display: inline-block;
                width: 20%;
                height: 40%;
                text-align: center;
                border-right: 1px solid #727070;
              }

              .number {
                display: inline-block;
                width: 20%;
                height: 40%;
                text-align: center;
              }
            }
          }
        }


        .Control-title {
          width: 97%;
          margin: auto;
          height: 4vh;
          border-bottom: 1px solid #6aa999;
          line-height: 4vh;
          font-size: 0.9vw;

          .title-thing {
            display: inline-block;
            text-align: center;

            .icon {
              width: 1vw;
              padding-top: 1.1vh;
              position: absolute;
            }
          }

          .title-thing:hover {
            cursor: pointer;
          }

          .new {
            width: 20%;
            height: 100%;
          }

          .download {
            width: 20%;
            height: 100%;
          }
        }
      }

      .MM {
        width: 90%;
        height: 100%;
        margin: auto;

        .left-tips {
          width: 20%;
          height: 45vh;
          margin-left: -2%;
          border: 1px solid #6aa999;
          position: absolute;
          border-radius: 0.4vw;
          box-shadow: 0 2px 6px 0 #6aa999;
          overflow-y: auto;

          .grade {
            width: 90%;
            height: 4vh;
            font-size: 1vw;
            margin: 1vh auto;
            text-align: center;
            line-height: 4vh;
          }

          .grade:hover {
            cursor: pointer;
          }
        }
      }
    }

    .QB-title {
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