<script setup>
import { ref } from 'vue'

const value = ref('Option1')

const handleClear = () => {
  // 清除时自动选择第一个选项
  value.value = options[0].value;
};
const options = [
  {
    value: 'Option1',
    label: 'Java软件开发设计'
  },
  {
    value: 'Option2',
    label: 'Python软件开发设计'
  },
  {
    value: 'Option3',
    label: '软件开发设计'
  },
  {
    value: 'Option4',
    label: 'Web前端开发设计'
  },
  {
    value: 'Option5',
    label: '机器学习西瓜论'
  }
]

const num = ref('22')

const datas = ref([
  {
    FileName: "JavaEE100套训练项目.zip",
    Teacher: "姜大玮",
    UpdateTime: "2024-05-11 13:44:47",
    FileBig: "4.3M",
    FileUrl: "https://12e1wefhiouraewhuiorefwahuierawfhiuo",
  },
  {
    FileName: "JavaEE100套训练项目.zip",
    Teacher: "姜大玮",
    UpdateTime: "2024-05-11 13:44:47",
    FileBig: "4.3M",
    FileUrl: "https://12e1wefhiouraewhuiorefwahuierawfhiuo",
  },
  {
    FileName: "JavaEE100套训练项目.zip",
    Teacher: "姜大玮",
    UpdateTime: "2024-05-11 13:44:47",
    FileBig: "4.3M",
    FileUrl: "https://12e1wefhiouraewhuiorefwahuierawfhiuo",
  }
])
</script>

<template>
  <div class='Body'>
    <div class='StudyInfo'>
      <div class='info-left'>
        <div class='img'>
          <img src='/src/assets/class.png' alt=''>
        </div>
        <div class='choose'>
          <el-select
            v-model="value"
            clearable
            @clear="handleClear"
            class="select custom-select"
            style='height: 0.5vh; box-shadow: 0 2px 14px 0 rgba(106, 169, 153, 0.5);'
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              class="option"
            />
          </el-select>
        </div>
        <div class='ClassInfo'>
          <div class='ClassName'>Java软件开发设计</div>
          <div class='teacher'>讲师：姜大玮 (双师)</div>
          <div class='loading'>课程已进行至 <span>XX / XX</span></div>
        </div>

      </div>
      <div class='info-right'>
        <div class='right-title'>
          <div class='title-left'>参考资料 ({{ num }})</div>
          <div class='title-right'>教师上传的参考资料</div>
        </div>
        <div class='right-body'>
          <div class='right-body-title'>
            <div class='title-top' style="width: 8%;">序号</div>
            <div class='title-top' style="width: 30%; margin-left: 10%">类型名称</div>
            <div class='title-top' style="width: 10.5%; margin-left: 40.3%">上传人</div>
            <div class='title-top' style="width: 25%; margin-left: 52.5%">上传时间</div>
            <div class='title-top' style="width: 9%; margin-left: 78.25%">大小</div>
            <div class='title-top'  style="width: 8%; right: 2.7%">操作</div>
          </div>
          <div class='RBody-Main'>
            <div class='FileCard' v-for="(item, index) in datas" :key="index">
              <div class='FileIn' style="width: 8%;">1</div>
              <div class='FileIn' style="width: 30%; margin-left: 10%">{{ item.FileName }}</div>
              <div class='FileIn' style="width: 10.5%; margin-left: 40.3%">{{ item.Teacher }}</div>
              <div class='FileIn' style="width: 25%; margin-left: 52.5%">{{ item.UpdateTime }}</div>
              <div class='FileIn' style="width: 9%; margin-left: 78.25%">{{ item.FileBig }}</div>
              <div class='FileIn DownLoad' style="width: 8%; right: 2.7%">下载</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
  .Body {
    width: 100%;
    height: 100%;
    .StudyInfo {
      width: 97%;
      height: 96%;
      border-radius: 0.4vw;
      margin: 1.8vh auto;
      background: #f8f6f6;
      .info-right {
        position: absolute;
        width: 67%;
        height: 92%;
        right: 3%;
        border: 1px solid rgba(106, 169, 153, 0.2);
        box-shadow: 0 2px 14px 0 rgba(106, 169, 153, 0.6);
        border-radius: 0.4vw;
        margin-top: 1.75vh;
        .right-body {
          width: 97%;
          height: 90%;
          margin: 1vh auto;
          .RBody-Main {
            width: 100%;
            height: 94%;
            overflow: auto;
            .FileCard {
              width: 100%;
              height: 5vh;
              line-height: 5vh;
              border-bottom: 1.5px solid rgba(106, 169, 153, 0.2);
              .DownLoad:hover {
                cursor: pointer;
                color: #0e87ff;
                text-decoration: underline;
              }
              .DownLoad:active {
                font-size: 0.75vw;
              }
              .FileIn {
                position: absolute;
                height: 4.8vh;
                padding-top: -2vh;
                line-height: 4.8vh;
                text-align: center;
                margin-left: 0.5vw;
                font-size: 0.85vw;
                font-weight: bolder;
                color: #727070;
              }
            }
          }
          .right-body-title {
            width: 100%;
            height: 4.4vh;
            border-top: 2px solid #ececec;
            background: #fafafa;
            border-bottom: 2px solid #ececec;
            .title-top {
              position: absolute;
              height: 4.8vh;
              padding-top: -2vh;
              line-height: 4.8vh;
              text-align: center;
              margin-left: 0.5vw;
              font-size: 0.85vw;
              font-weight: bolder;
              color: #727070;
            }
          }
        }
        .right-title {
          width: 100%;
          height: 5vh;
          line-height: 5vh;
          border-radius: 0.4vw 0.4vw 0 0;
          background: rgba(106, 169, 153, 0.5);
          .title-left {
            font-size: 1vw;
            font-weight: bolder;
            margin-left: 4%;
            position: absolute;
          }
          .title-right {
            position: absolute;
            right: 4%;
            color: #333333;
            margin-top: 1vh;
            font-size: 0.8vw;
          }
        }
      }
      .info-left {
        position: absolute;
        width: 24%;
        height: 46%;
        margin-top: 1.75vh;
        margin-left: 2%;
        border: 1px solid rgba(106, 169, 153, 0.2);
        box-shadow: 0 2px 14px 0 rgba(106, 169, 153, 0.6);
        border-radius: 0.4vw;
        .img {
          width: 100%;
          height: 17vh;
          margin: auto;
          border-radius: 0.4vw;
          img {
            width: 100%;
            height: 100%;
            border-radius: 0.4vw 0.4vw 0 0;
          }
        }
        .choose {
          width: 95%;
          height: 3%;
          margin: 1vh auto;
          border-top: 2px solid rgba(114, 112, 112, 0.4);
        }
        .ClassInfo {
          width: 95%;
          height: 30%;
          margin: 3vh auto;
          color: #727070;
          .ClassName {
            color: #000;
            width: 80%;
            margin: auto;
            height: 3vh;
            line-height: 3vh;
            text-align: center;
            font-size: 1.1vw;
            padding-top: 1.4vh;
            padding-bottom: 0.7vh;
            font-weight: bolder;
            border-bottom: 2px solid rgba(114, 112, 112, 0.4);
          }
          .teacher {
            width: 80%;
            margin: auto;
            height: 2vh;
            line-height: 2vh;
            text-align: center;
            font-size: 0.9vw;
            padding-top: 1.4vh;
            padding-bottom: 0.7vh;
            border-bottom: 2px solid rgba(114, 112, 112, 0.4);
          }
          .loading {
            width: 80%;
            margin: auto;
            height: 2vh;
            line-height: 2vh;
            text-align: center;
            font-size: 0.9vw;
            padding-top: 1.4vh;
            padding-bottom: 0.7vh;
            border-bottom: 2px solid rgba(114, 112, 112, 0.4);
          }
        }
      }
    }
  }
</style>