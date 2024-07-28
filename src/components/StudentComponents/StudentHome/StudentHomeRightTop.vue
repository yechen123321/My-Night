<script setup>
const tasks = [
  {
    content: '流程审批/查阅：您有1条流程申请待您审批/查阅，请及时审批。',
    type: '操作类',
    update: '2024-03-12'
  },
  {
    content: '流程审批/查阅：您有1条流程申请待您审批/查阅，请及时审批。',
    type: '查阅类',
    update: '2024-03-01'
  }
]
</script>

<template>
  <div class="Body">
    <div class="title">事项通知</div>
    <div class="prompt">
      <ul class="in-prompt">
        <li>
          <div class="content">事项内容</div>
          <div class="type">事项类型</div>
          <div class="update">更新时间</div>
          <div class="todo">操作</div>
        </li>
        <li v-for="(item, index) in tasks" :key="index">
          <div class="content">{{ item.content }}</div>
          <div class="type">{{ item.type }}</div>
          <div class="update">{{ item.update }}</div>
          <div class="todo">立即处理</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Body {
  width: 100%;
  height: 100%;

  .prompt {
    width: 95%;
    margin: -1.1vh auto;
    height: 120%;
    position: relative;
    border-radius: 0.5vw;
    background: #f8f6f6;
    .in-prompt {
      position: absolute;
      width: 95%;
      margin: 3.5vh auto;
      height: 80%;
      li:first-child {
        border-top: 1.5px solid #727070;
        background: rgba(205, 222, 219, 0.5);
        border-radius: 0.2vw 0.2vw 0 0;
        .content {
          border-radius: 0.2vw 0 0 0;
        }
        .todo {
          border-radius: 0 0.2vw 0 0;
          color: #3f3f3f !important;
          text-decoration: none;
          cursor: default !important;
        }
      }

      li:last-child {
        border-radius: 0 0 0.2vw 0.2vw;
        .content {
          border-radius: 0 0 0 0.2vw;
        }
        .todo {
          border-radius: 0 0 0.2vw 0;
        }
      }

      li {
        margin-left: -1.6vw;
        width: 100.9%;
        height: 30%;
        border-bottom: 1.5px solid #727070;
        border-right: 1.5px solid #727070;
        border-left: 1.5px solid #727070;
        line-height: 3.8vh;
        text-align: center;
        font-weight: bolder;
        list-style: none;
        color: #3f3f3f;
        position: relative;
        font-size: 0.84vw;
        .content {
          width: 35%;
          height: 100%;
          position: absolute;
          border-right: 1.5px solid #727070;
          box-shadow: 0.7px 0.7px 0.7px 0.7px #727070;
          white-space: nowrap; /* 防止文本换行 */
          overflow: hidden; /* 隐藏超出部分 */
          text-overflow: ellipsis; /* 将超出部分显示为省略号 */
        }
        .type {
          width: 20%;
          position: absolute;
          height: 100%;
          margin-left: 35%;
          box-shadow: 0.7px 0.7px 0.7px 0.7px #727070;
          border-right: 1.5px solid #727070;
        }
        .update {
          width: 25%;
          height: 100%;
          margin-left: 55%;
          position: absolute;
          box-shadow: 0.7px 0.7px 0.7px 0.7px #727070;
          border-right: 1.5px solid #727070;
        }
        .todo {
          width: 19.2%;
          margin-left: 80.5%;
          position: absolute;
          height: 100%;
          text-decoration: underline;
          box-shadow: 0.7px 0.7px 0.7px 0.7px #727070;
        }
        .todo:hover {
          cursor: pointer;
          color: #0e87ff;
        }
      }
    }
  }

  .title {
    width: 100%;
    height: 5%;
    font-weight: bolder;
    font-size: 1vw;
    margin-left: 5%;
    margin-top: 2%;
    position: relative;
    z-index: 2;
  }
}
</style>
