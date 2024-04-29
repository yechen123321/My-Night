<template>
  <!-- 国际化处理 -->
  <el-config-provider :locale='zh'>
    <router-view />
  </el-config-provider>
</template>
<style lang='scss'>
#app{
  width: 100%;
  height: 100%;
}
html, body {
  width: 100%;
  height: 100%;
}
</style>

<script setup>
import zh from 'element-plus/es/locale/lang/zh-cn.mjs'
</script>
