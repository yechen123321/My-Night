<script setup>
import { ref } from 'vue'

const value = ref('')
const value1 = ref('')
const value2 = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]

</script>

<template>
  <div class='GradeInfor-body'>
    <div class='GradeInfor-top'>
      <div class='top-box'>
        <div class='box-top'>
          <el-select
            v-model='value'
            clearable
            placeholder='Select'
            class='choose'
          >
            <el-option
              v-for='item in options'
              :key='item.value'
              :label='item.label'
              :value='item.value'
            />
          </el-select>
          <el-select
            v-model='value1'
            clearable
            placeholder='Select'
            class='choose'
          >
            <el-option
              v-for='item in options'
              :key='item.value'
              :label='item.label'
              :value='item.value'
            />
          </el-select>
          <el-select
            v-model='value2'
            clearable
            placeholder='Select'
            class='choose'
          >
            <el-option
              v-for='item in options'
              :key='item.value'
              :label='item.label'
              :value='item.value'
            />
          </el-select>
        </div>
        <div class='box-down'>
          <div class='word'>不合格的用红色标识，通过补考或重修及格的用蓝色标识</div>
          <button>查 询</button>
        </div>
      </div>
    </div>
    <div class='GradeInfor-down'>
      <div class='down-box'>
        <div class='box-title'></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.GradeInfor-body {
  width: 100%;
  height: 100%;

  .GradeInfor-top {
    width: 100%;
    height: 15%;

    .top-box {
      border-radius: 8px;
      border: 1px solid rgba(114, 112, 112, 0.7);
      width: 96%;
      height: 95%;
      margin: 2vh auto;
      overflow: hidden;

      .box-top {
        width: 100%;
        height: 60%;
        border-bottom: 1px solid rgba(114, 112, 112, 0.7);

        .choose {
          width: 30%;
          margin-top: 2vh;
          margin-left: 2.35%;

        }
      }

      .box-down {
        width: 100%;
        height: 40%;
        position: relative;
        background: rgba(244, 244, 244);

        button {
          width: 4vw;
          height: 4vh;
          top: 8%;
          border: none;
          border-radius: 7px;
          right: 3%;
          background: rgba(106, 169, 153, 0.8);
          position: absolute;
          color: white;
          font-weight: bolder;
          font-size: 18px;
        }

        button:hover {
          cursor: pointer;
        }

        .word {
          width: 70%;
          font-size: 16px;
          height: 80%;
          color: #d23a37;
          padding: 0.5vh 0.6vw;
        }
      }
    }
  }

  .GradeInfor-down {
    width: 100%;
    margin-top: 2%;
    height: 82%;

    .down-box {
      width: 96%;
      height: 95%;
      margin: auto;
      border-radius: 8px;
      border: 1px solid rgba(114, 112, 112, 0.7);

      .box-title {
        width: 100%;
        height: 4.5vh;
        border-bottom: 1.5px solid #6aa999;
      }
    }
  }
}
</style>