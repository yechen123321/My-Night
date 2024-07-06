<script setup>

</script>

<template>
  <div class='CourseRecommend-body'>
    <div class='CourseRecommend-body-top'>
      <div class='word'>个性推荐课程</div>
    </div>
    <div class='CourseRecommend-main'>
      <div class='CourseRecommend-card'>
        <div class='Card-Img'>
          <img src='/src/assets/StudentMainTop/img.png' alt=''>
        </div>
        <div class='Card-main'>
          <div class='CardName'>程序设计基础CAP</div>
          <div class='CardSchool'>安徽熬夜大学</div>
          <div class='CardPeoples'>280人参加</div>
          <div class='CardInfo'>一起学习"编程之魂"</div>
        </div>
      </div>
      <div class='CourseRecommend-card'>
        <div class='Card-Img'>
          <img src='/src/assets/StudentMainTop/img.png' alt=''>
        </div>
        <div class='Card-main'>
          <div class='CardName'>程序设计基础CAP</div>
          <div class='CardSchool'>安徽熬夜大学</div>
          <div class='CardPeoples'>280人参加</div>
          <div class='CardInfo'>一起学习"编程之魂"</div>
        </div>
      </div>
      <div class='CourseRecommend-card'>
        <div class='Card-Img'>
          <img src='/src/assets/StudentMainTop/img.png' alt=''>
        </div>
        <div class='Card-main'>
          <div class='CardName'>程序设计基础CAP</div>
          <div class='CardSchool'>安徽熬夜大学</div>
          <div class='CardPeoples'>280人参加</div>
          <div class='CardInfo'>一起学习"编程之魂"</div>
        </div>
      </div>
      <div class='CourseRecommend-card'>
        <div class='Card-Img'>
          <img src='/src/assets/StudentMainTop/img.png' alt=''>
        </div>
        <div class='Card-main'>
          <div class='CardName'>程序设计基础CAP</div>
          <div class='CardSchool'>安徽熬夜大学</div>
          <div class='CardPeoples'>280人参加</div>
          <div class='CardInfo'>一起学习"编程之魂"</div>
        </div>
      </div>
      <div class='CourseRecommend-card'>
        <div class='Card-Img'>
          <img src='/src/assets/StudentMainTop/img.png' alt=''>
        </div>
        <div class='Card-main'>
          <div class='CardName'>程序设计基础CAP</div>
          <div class='CardSchool'>安徽熬夜大学</div>
          <div class='CardPeoples'>280人参加</div>
          <div class='CardInfo'>一起学习"编程之魂"</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang='scss'>
.CourseRecommend-body {
  width: 100%;
  height: 100%;

  .CourseRecommend-body-top {
    width: 100%;
    height: 5vh;

    .word {
      font-size: 1.15vw;
      padding-top: 1vh;
      margin-left: 1vw;
    }
  }

  .CourseRecommend-main {
    width: 100%;
    height: 30vh;

    .CourseRecommend-card:hover {
      cursor: pointer;
    }

    .CourseRecommend-card:first-child {
      margin-left: 0;
    }

    .CourseRecommend-card {
      width: 18%;
      height: 30vh;
      float: left;
      border-radius: 0.5vw;
      background: white;
      margin-left: 2.5%;
      overflow: hidden;

      .Card-Img {
        width: 100%;
        height: 45%;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .Card-main {
        width: 100%;
        height: 55%;

        .CardName {
          width: 90%;
          font-weight: bold;
          margin: 0.5vh auto;
          font-size: 0.9vw;
        }

        .CardSchool {
          width: 90%;
          font-size: 0.83vw;
          margin: auto;
        }

        .CardPeoples {
          font-size: 0.83vw;
          width: 90%;
          margin: 2vh auto;
        }

        .CardInfo {
          font-size: 0.8vw;
          width: 80%;
          color: #727070;
          height: 4.5vh;
          padding: 0.5vh 0.5vw;
          background: #f8f8f8;
          margin: -1.5vh auto;
        }
      }
    }
  }
}
</style>
