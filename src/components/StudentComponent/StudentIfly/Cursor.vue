<template>
  <div class="input-container">
    <div class="input-field" @click="focusInput">
      <span>{{ inputValue }}</span>
      <div class="cursor" :class="{ 'active': showCursor }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const inputValue = ref('');
const showCursor = ref(false);

const focusInput = () => {
  // 当点击输入框时，将光标显示为活动状态
  showCursor.value = true;
};

onMounted(() => {
  // 模拟输入框的光标闪烁效果
  setInterval(() => {
    showCursor.value = !showCursor.value;
  }, 500);
});
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.input-field {
  position: relative;
  padding: 10px;
  display: inline-block;
}

.cursor {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 20px;
  background-color: black;
  animation: blinkCursor 1s infinite;
}

.cursor.active {
  background-color: transparent;
}

@keyframes blinkCursor {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
