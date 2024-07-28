<script setup>
import MainTopTitle from '@/components/StudentComponent/MainTopTitle.vue'
import router from '@/router'

const GotoInfoBank = () => {
  router.push('/student/study/learncenter/classvideo/info')
}
</script>

<template>
  <div class='VideoView'>
    <MainTopTitle class='MainTopTitle-out'></MainTopTitle>
    <div class='VideoView-body'>
      <div class='VideoView-body-left'>
        <div class='body-left-top'>
          <div class='word'><span>第一章</span> 1.1、 Python的历史和特点</div>
        </div>
        <video src='/src/assets/1.mp4' controls></video>
      </div>
      <div class='VideoView-body-right'>
        <div class='body-right-top'>
          <div class='ClassInfo' @click='GotoInfoBank'>
            <svg t='1721306975377' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'
                 p-id='4521' id='mx_n_1721306975377' data-spm-anchor-id='a313x.search_index.0.i7.5f653a81oBj5cl'>
              <!--              <path-->
              <!--                d='M512 1024c282.7776 0 512-229.2224 512-512S794.7776 0 512 0 0 229.2224 0 512s229.2224 512 512 512z m0-25.6C243.3792 998.4 25.6 780.6208 25.6 512S243.3792 25.6 512 25.6s486.4 217.7792 486.4 486.4-217.7792 486.4-486.4 486.4z'-->
              <!--                fill='#e99011' fill-opacity='.15' p-id='4522'-->
              <!--                data-spm-anchor-id='a313x.search_index.0.i5.5f653a81oBj5cl' class=''></path>-->
              <path
                d='M281.6 384h179.2l25.6 51.2h256a51.2 51.2 0 0 1 51.2 51.2v204.8a51.2 51.2 0 0 1-51.2 51.2H281.6a51.2 51.2 0 0 1-51.2-51.2V435.2a51.2 51.2 0 0 1 51.2-51.2z'
                fill='#e99011' p-id='4523' data-spm-anchor-id='a313x.search_index.0.i3.5f653a81oBj5cl' class=''></path>
              <path
                d='M281.6 332.8h204.8l25.6 51.2h230.4v-51.2a51.2 51.2 0 0 0-51.2-51.2H332.8a51.2 51.2 0 0 0-51.2 51.2z'
                fill='#FAD97E' opacity='.5' p-id='4524' data-spm-anchor-id='a313x.search_index.0.i4.5f653a81oBj5cl'
                class=''></path>
            </svg>
            <div class='word'>课堂资料</div>
          </div>
        </div>
        <div class='list-ul'>
          <div class='classList'>
            <div class='ListTitle'>
              <div class='words'>第一章 Python简介</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第一节 Python的历史和特点</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第二节 Python的安装和环境配置</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第三节 Python的基本语法和数据类型</div>
            </div>
          </div>
          <div class='classList'>
            <div class='ListTitle'>
              <div class='words'>第二章 变量和数据类型</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第一节 变量的定义和使用</div>
            </div>
            <div class='ListLis'>

              <div class='Word'>第二节 基本数据类型：整数、浮点数、字符串、布尔值</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第三节 数据类型的转换</div>
            </div>
          </div>
          <div class='classList'>
            <div class='ListTitle'>
              <div class='words'>第三章 运算符和表达式</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第一节 算术运算符</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第二节 比较运算符</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第三节 逻辑运算符</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第四节 赋值运算符</div>
            </div>
          </div>
          <div class='classList'>
            <div class='ListTitle'>
              <div class='words'>第四章 控制结构</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第一节 条件语句</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第二节 循环语句</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第三节 循环控制</div>
            </div>
          </div>
          <div class='classList'>
            <div class='ListTitle'>
              <div class='words'>第五章 函数</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第一节 函数的定义和调用</div>
              <div class='ListLis'>
                <div class='Word'>第二节 参数传递</div>
              </div>
              <div class='ListLis'>
                <div class='Word'>第三节 返回值</div>
              </div>
            </div>
          </div>
          <div class='classList'>
            <div class='ListTitle'>
              <div class='words'>第六章 列表和元组</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第一节 列表的定义和操作</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第二节 元组的定义和操作</div>
            </div>
            <div class='ListLis'>
              <div class='Word'>第三节 列表和元组的常用方法</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.VideoView {
  width: 100%;
  height: 100%;

  .VideoView-body {
    width: 100%;
    height: 95%;

    .VideoView-body-right {
      width: 16%;
      height: 99%;
      float: left;
      background: white;
      box-shadow: inset -1px 0 0 0 #ededed;
      border: 1px solid #d0d0d0;

      .list-ul {
        width: 100%;
        height: 90%;
        overflow: auto;

        .classList {
          width: 90%;
          margin: 1vh auto;
          padding-bottom: 1vh;
          border-bottom: 1px solid #d5d5d5;

          .ListTitle {
            width: 100%;
            height: 3vh;
            line-height: 3vh;
            text-overflow: ellipsis;
            font-size: 0.9vw;
          }

          .ListLis {
            width: 90%;
            height: 2.5vh;
            line-height: 2.5vh;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-left: 10%;
            font-size: 0.7vw;
          }
        }
      }

      .body-right-top {
        width: 100%;
        height: 8%;
        box-shadow: 1px 1px 1px 1px #ededed;
        position: relative;

        .ClassInfo:hover {
          cursor: pointer;
        }

        .ClassInfo {
          width: 30%;
          height: 100%;
          position: absolute;

          .icon {
            width: 3.5vw;
            margin-top: -0.8vh;
            margin-left: 0.2vw;

          }

          .word {
            text-align: center;
            width: 4vw;
            font-size: 0.8vw;
            margin-top: -1.5vh;
          }
        }
      }


    }

    .VideoView-body-left {
      width: 83.8%;
      height: 100%;
      float: left;

      video {
        margin-top: 0.5%;
        width: 100%;
        height: 94%;
      }

      .body-left-top {
        //border-top: 1px solid #727070;
        background: #fff;
        box-shadow: inset -1px 0 0 0 #ededed;
        right: 340px;
        height: 40px;
        line-height: 40px;
        margin-top: 0.1vh;
        width: 100%;
        //box-sizing: border-box;

        .word {
          font-size: 0.9vw;
          margin-left: 2vw;

          span {
            font-weight: bold;
          }
        }
      }
    }
  }

  .MainTopTitle-out {
    width: 100%;
    height: 5%;
    background: white;
  }
}
</style>