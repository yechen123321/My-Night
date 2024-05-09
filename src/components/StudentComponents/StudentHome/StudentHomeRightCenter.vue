<script setup>
import { ref } from 'vue'
import axios from 'axios'

const questions = ref('') // 修改为 const questions = ref([]) 或 const questions = ref({})

const submitQuestion = async () => {
  try {
    console.log(typeof questions.value)
    const response = await axios.post('http://172.18.7.47:8084/question', {
      question: questions.value
    })
    console.log(response.data) // 处理返回的数据
  } catch (error) {
    console.error('Error submitting question:', error)
  }
}
</script>

<template>
  <div class="Body">
    <div class="title">问答助手</div>
    <div>
      <input class="in" v-model="questions" @keydown.enter="submitQuestion" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.Body {
  width: 100%;
  height: 100%;

  .title {
    width: 100%;
    height: 5%;
    font-weight: bolder;
    font-size: 1vw;
    margin-left: 5%;
    margin-top: 3%;
  }

  .in {
    height: 10vh;
    margin: 4vh 5vw;
  }
}
</style>
