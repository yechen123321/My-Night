<script setup>
import router from '@/router'

const GotoTalk = () => {
  router.push('/student/talk')
}
</script>

<template>
  <div class='QualityComments-body'>
    <div class='QualityComments-top'>
      <div class='word'>精彩评论</div>
    </div>
    <div class='QualityComments-main'>
      <div class='Main-talk' @click='GotoTalk'>
        <div class='Talk-top'>
          <div class='Top-Img'><img src='/src/assets/head.png' alt=''>
            <div style='font-size: 0.63vw; color: #727070; margin: -2vh 4.5vw'>陈小玮</div>
          </div>
        </div>
        <div class='Talk-body'>
          我非计算机专业，只是喜欢和爱好，基本的软件都还不全会，当看课件最担心上来就是密集的、使人昏昏欲睡的操作课。
          但听了老师的讲解后发现多虑了，表达轻松、简洁、除了操作以外还顺便带有一些基础原理部分，非常好。
          任何技巧都建立在理念的基础上，听过以后感觉自己的一些思路打开了许多！
          先建立起理念和意识是最重要的，对我来说有收获，不错！
        </div>
        <div class='Talk-form'>来自《Python语言程序设计》</div>
      </div>
      <div class='Main-talk' @click='GotoTalk'>
        <div class='Talk-top'>
          <div class='Top-Img'><img src='/src/assets/head.png' alt=''>
            <div style='font-size: 0.63vw; color: #727070; margin: -2vh 4.5vw'>陈小玮</div>
          </div>
        </div>
        <div class='Talk-body'>
          我非计算机专业，只是喜欢和爱好，基本的软件都还不全会，当看课件最担心上来就是密集的、使人昏昏欲睡的操作课。
          但听了老师的讲解后发现多虑了，表达轻松、简洁、除了操作以外还顺便带有一些基础原理部分，非常好。
          任何技巧都建立在理念的基础上，听过以后感觉自己的一些思路打开了许多！
          先建立起理念和意识是最重要的，对我来说有收获，不错！
        </div>
        <div class='Talk-form'>来自《Python语言程序设计》</div>
      </div>
      <div class='Main-talk' @click='GotoTalk'>
        <div class='Talk-top'>
          <div class='Top-Img'><img src='/src/assets/head.png' alt=''>
            <div style='font-size: 0.63vw; color: #727070; margin: -2vh 4.5vw'>陈小玮</div>
          </div>
        </div>
        <div class='Talk-body'>
          我非计算机专业，只是喜欢和爱好，基本的软件都还不全会，当看课件最担心上来就是密集的、使人昏昏欲睡的操作课。
          但听了老师的讲解后发现多虑了，表达轻松、简洁、除了操作以外还顺便带有一些基础原理部分，非常好。
          任何技巧都建立在理念的基础上，听过以后感觉自己的一些思路打开了许多！
          先建立起理念和意识是最重要的，对我来说有收获，不错！
        </div>
        <div class='Talk-form'>来自《Python语言程序设计》</div>
      </div>
      <div class='Main-talk' @click='GotoTalk'>
        <div class='Talk-top'>
          <div class='Top-Img'><img src='/src/assets/head.png' alt=''>
            <div style='font-size: 0.63vw; color: #727070; margin: -2vh 4.5vw'>陈小玮</div>
          </div>
        </div>
        <div class='Talk-body'>
          我非计算机专业，只是喜欢和爱好，基本的软件都还不全会，当看课件最担心上来就是密集的、使人昏昏欲睡的操作课。
          但听了老师的讲解后发现多虑了，表达轻松、简洁、除了操作以外还顺便带有一些基础原理部分，非常好。
          任何技巧都建立在理念的基础上，听过以后感觉自己的一些思路打开了许多！
          先建立起理念和意识是最重要的，对我来说有收获，不错！
        </div>
        <div class='Talk-form'>来自《Python语言程序设计》</div>
      </div>
      <div class='Main-talk' @click='GotoTalk'>
        <div class='Talk-top'>
          <div class='Top-Img'><img src='/src/assets/head.png' alt=''>
            <div style='font-size: 0.63vw; color: #727070; margin: -2vh 4.5vw'>陈小玮</div>
          </div>
        </div>
        <div class='Talk-body'>
          我非计算机专业，只是喜欢和爱好，基本的软件都还不全会，当看课件最担心上来就是密集的、使人昏昏欲睡的操作课。
          但听了老师的讲解后发现多虑了，表达轻松、简洁、除了操作以外还顺便带有一些基础原理部分，非常好。
          任何技巧都建立在理念的基础上，听过以后感觉自己的一些思路打开了许多！
          先建立起理念和意识是最重要的，对我来说有收获，不错！
        </div>
        <div class='Talk-form'>来自《Python语言程序设计》</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.QualityComments-body {
  width: 100%;
  height: 100%;

  .QualityComments-main {
    width: 100%;
    height: 15vh;
    margin-top: 2vh;

    div:hover {
      cursor: pointer;
    }

    .Main-talk:first-child {
      margin-left: 0;
    }

    .Main-talk {
      width: 18%;
      height: 100%;
      float: left;
      margin-left: 1.73vw;
      border-radius: 0.3vw;
      background: white;

      .Talk-top {
        width: 100%;
        height: 10%;

        .Top-Img {
          img {
            border-radius: 50%;
            width: 2.3vw;
            margin: -1vh 1.5vw;
          }
        }
      }

      .Talk-body {
        width: 90%;
        height: 48%;
        margin: 3vh auto;
        font-size: 0.7vw;
        overflow: hidden;
        //white-space: nowrap;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }

      .Talk-form {
        width: 100%;
        height: 10%;
        font-size: 0.6vw;
        margin: -2vh 0.5vw;
        color: rgba(237, 116, 46);
      }
    }
  }

  .QualityComments-top {
    width: 100%;
    height: 5vh;

    .word {
      padding-top: 1vh;
      margin-left: 1vw;
      font-size: 1.15vw;
    }
  }
}
</style>