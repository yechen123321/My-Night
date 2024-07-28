<script setup>
</script>

<template>
  <div class='BaseInfo'>
    <div class='BaseInfo-top'>
      <div class='word'>个人信息</div>
    </div>
    <div class='BaseInfo-base'>
      <div class='leftPhotos'>
        <img src='/src/assets/p.png' alt=''>
        <img src='/src/assets/p.png' alt=''>
        <div class='name'>入学前</div>
        <div class='name'>入学后</div>
      </div>
      <div class='rightBase'>
        <div class='baseTop'>
          <div class='word'>基本信息</div>
        </div>
        <div class='base-main'>
          <div class='info'>
            <div class='word'>姓名：陈大胡</div>
          </div>
          <div class='info'>
            <div class='word'>学号：3223022322</div>
          </div>
          <div class='info'>
            <div class='word'>出生日期：2004-05-20</div>
          </div>
          <div class='info'>
            <div class='word'>性别：男</div>
          </div>
          <div class='info'>
            <div class='word'>政治面貌：团员</div>
          </div>
        </div>
      </div>
    </div>
    <div class='BaseInfo-list'>
      <div class='list'>
        <div class='listTop'>
          <div class='word'>户籍信息</div>
        </div>
        <div class='info'>
          <div class='word'>父亲：陈晨</div>
        </div>
        <div class='info'>
          <div class='word'>母亲：陈神</div>
        </div>
        <div class='info'>
          <div class='word'>户口所在：安徽芜湖</div>
        </div>
        <div class='info'>
          <div class='word'>生源地：安徽</div>
        </div>
        <div class='info'>
          <div class='word'>民族：汉</div>
        </div>
        <div class='info'>
          <div class='word'>籍贯：安徽</div>
        </div>

      </div>
      <div class='list'>
        <div class='listTop'>
          <div class='word'>联系方式</div>
        </div>
        <div class='info'>
          <div class='word'>邮箱：35263@163.com</div>
        </div>
        <div class='info'>
          <div class='word'>手机号：18777777777</div>
        </div>
        <div class='info'>
          <div class='word'>固定电话：</div>
        </div>
        <div class='info'>
          <div class='word'>QQ：3223656598</div>
        </div>
        <div class='info'>
          <div class='word'>家庭电话：0555-7585669</div>
        </div>
        <div class='info'>
          <div class='word'>邮政编码：241000</div>
        </div>

      </div>
      <div class='list'>
        <div class='listTop'>
          <div class='word'>教育经历</div>
        </div>
        <div class='info'>
          <div class='word'>小学：安徽熬夜小学</div>
        </div>
        <div class='info'>
          <div class='word'>初中：安徽熬夜初级中学</div>
        </div>
        <div class='info'>
          <div class='word'>高中：安徽熬夜高级中学</div>
        </div>
        <div class='info'>
          <div class='word'>本科：安徽熬夜大学</div>
        </div>
        <div class='info'>
          <div class='word'>硕研：</div>
        </div>
        <div class='info'>
          <div class='word'>博研：</div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.BaseInfo {
  width: 100%;
  height: 100%;

  .BaseInfo-list {
    width: 100%;
    height: 40vh;
    margin-top: 2vh;

    .list {
      width: 30%;
      height: 95%;
      float: left;
      margin-top: 0.5vh;
      margin-left: 2.5%;
      border-radius: 0.3vw;
      box-shadow: 0.1px 0.1px 0.1px 1px #eaeaea;

      .info {
        width: 100%;
        height: 4vh;
        font-size: 1vw;
        line-height: 4vh;
        margin-top: 1.2vh;
        .word {
          margin-left: 1vw;
        }
      }

      .listTop {
        width: 100%;
        height: 4vh;
        background: url("/src/assets/StudentInfo/img.png") no-repeat;
        background-size: cover;

        .word {
          font-size: 1vw;
          color: white;
          font-weight: bold;
          padding-top: 0.5vh;
          margin-left: 1vw;
        }
      }
    }
  }

  .BaseInfo-base {
    width: 100%;
    height: 30vh;

    .name {
      margin-top: 1vh;
      float: left;
      width: 50%;
      text-align: center;
      font-size: 1vw;
    }

    .leftPhotos {
      width: 50%;
      height: 90%;
      float: left;
      margin-left: 0.4vw;
      margin-top: 2.5%;

      img {
        width: 9vw;
        margin-top: 1vh;
        margin-left: 1.35vw;
      }
    }

    .rightBase {
      width: 45%;
      height: 87%;
      margin-top: 3vh;
      float: left;
      border-radius: 0.3vw;
      box-shadow: 0.1px 0.1px 0.1px 1px #eaeaea;

      .base-main {
        width: 100%;
        height: 21vh;

        .info {
          width: 100%;
          height: 20%;
          float: left;

          .word {
            margin-left: 1.5vw;
            margin-top: 1vh;
            font-size: 1vw;
          }
        }

      }

      .baseTop {
        width: 100%;
        height: 4vh;
        background: url("/src/assets/StudentInfo/img.png") no-repeat;
        background-size: cover;

        .word {
          font-size: 1vw;
          color: white;
          font-weight: bold;
          padding-top: 0.5vh;
          margin-left: 1vw;
        }
      }
    }
  }

  .BaseInfo-top {
    width: 100%;
    height: 6vh;
    background: url("/src/assets/StudentInfo/img.png") no-repeat;
    background-size: cover;

    .word {
      font-size: 1.3vw;
      color: white;
      font-weight: bold;
      padding-top: 1.2vh;
      margin-left: 1.5vw;
    }
  }
}
</style>