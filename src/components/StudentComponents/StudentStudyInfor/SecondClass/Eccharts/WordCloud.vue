<template>
  <div class='bestsellers-container'>
    <chart-word-cloud style='width: 100%; height: 100%' :options='state.chartOptions'></chart-word-cloud>
  </div>
</template>

<script setup>
import ChartWordCloud from './PeopleWord.vue'

import { onMounted, reactive } from 'vue'

const state = reactive({
  chartOptions: {
    series: [
      {
        gridSize: 1,
        data: [
          { name: '科幻小说迷', value: 1 },
          { name: '代码艺术家', value: 1.5 },
          { name: '开源硬件研究者', value: 1.5 },
          { name: '创新思维者', value: 1.5 },
          { name: '技术讲师', value: 1 },
          { name: '网络文化狂热者', value: 1.5 },
          { name: '数字艺术品收藏家', value: 1 },
          { name: '创造者精神', value: 1 },
          { name: '技术早期采用者', value: 1 },
          { name: '技术狂热者', value: 2 },
          { name: '硬件DIY爱好者', value: 1 },
          { name: '大前端开发者', value: 2 },
          { name: '国产创新者', value: 1 },
          { name: '鸿蒙开拓者', value: 1 },
          { name: '物联网开发者', value: 1.5 },
          { name: '人机交互设计师', value: 1 },
          { name: '网络安全分析师', value: 1.5 },
          { name: '并发高手', value: 1 },
          { name: '人工智能探索者', value: 1 },
          { name: '虚拟现实游戏爱好者', value: 1 },
          { name: '区块链技术研究者', value: 1.5 },
          { name: '机器学习工程师', value: 1 },
          { name: '数据科学家', value: 1.5 },
          { name: '云计算专家', value: 1 },
          { name: '人工智能探索者', value: 1 },
          { name: '虚拟现实游戏爱好者', value: 1 },
          { name: '区块链技术研究者', value: 2 },
          { name: '机器学习工程师', value: 1 },
          { name: '数据科学家', value: 1.5 },
          { name: '云计算专家', value: 1 },
          { name: '认知科学爱好者', value: 1 },
          { name: '数字版权管理专家', value: 1 },
          { name: '游戏开发工程师', value: 1.5 },
          { name: '机器学习工程师', value: 1 },
          { name: '数据科学家', value: 1.5 },
          { name: '云计算专家', value: 1 },
        ]
      }
    ]
  }
})

onMounted(() => {
})
</script>

<style scoped lang='less'>
.bestsellers-container {
  width: 100%;
  height: 100%;
}
</style>
