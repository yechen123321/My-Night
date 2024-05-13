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
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
* {
  user-drag: none;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
}
</style>

