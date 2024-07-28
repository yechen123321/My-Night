<template>
  <div :class="{'bubble-left': isLeft, 'bubble-right': !isLeft}">
    <div v-if="isLeft && message === 'LiLoading..'">
      <Cursor style="height: 2vh;"></Cursor>
    </div>
    <div v-else>{{ message }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Cursor from './Cursor.vue'
import MarkdownIt from 'markdown-it';

defineProps({
  message: String,
  isLeft: Boolean
});

const md = new MarkdownIt();
const renderMarkdown = (text) => {
  // 去掉最后一个换行符
  if (text.endsWith('\n')) {
    text = text.slice(0, -1);
  }

  console.log(md.render(text))
  return md.render(text);
};

</script>

<style>
.bubble-left {
  max-width: 60%;
  background-color: #F5F6F8;
  color: black;
  padding: 10px;
  border-radius: 10px;
  white-space: pre-wrap;
}

.bubble-right {
  max-width: 60%;
  background-color: #6666FF;
  color: white;
  padding: 10px;
  border-radius: 10px;
  white-space: pre-wrap;
}

.bubble-left,
.bubble-right {
  word-wrap: break-word;
}

* {
  user-select: text;
}

.bubble-left,
.bubble-right {
  white-space: pre-line;
}
</style>
