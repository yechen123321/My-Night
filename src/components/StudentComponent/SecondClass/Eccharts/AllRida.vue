<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const echartsRef = ref(null)
let myChart = null
let option = null

onMounted(() => {
  myChart = echarts.init(echartsRef.value, 'dark')

  // Your echarts option setup here...
  // (Your existing option setup code)

  option = {
    backgroundColor: 'rgba(1,1,1,0)',
    color: 'rgb(255,192,78)',
    // title: {
    //   text: 'Basic Radar Chart'
    // },
    // legend: {
    //   data: ['Allocated Budget', 'Actual Spending']
    // },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: '专业知识与技能', max: 1200 },
        { name: '沟通能力', max: 1200 },
        { name: '自我管理', max: 1200 },
        { name: '适应性', max: 1200 },
        { name: '创意与创新力', max: 1200 },
        { name: '领导能力与管理', max: 1200 },
        { name: '团队合作', max: 1200 },
        { name: '问题分析与解决', max: 1200 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',

        data: [
          {
            value: [1000, 800, 900, 700, 1000, 980, 700, 1000],
            name: 'Allocated Budget',
            lineStyle: {
              type: 'dashed',

            },
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                {
                  color: 'rgba(237,116,46, 0.1)',
                  offset: 0
                },
                {
                  color: 'rgba(237,116,46, 0.6)',
                  offset: 1
                }
              ])
            }
          }
        ]
      }
    ]
  }

  option && myChart.setOption(option)
  const resizeObserver = new ResizeObserver(() => {
    myChart.resize()
  })

  resizeObserver.observe(echartsRef.value)
})
</script>

<template>
  <div className='AllRida-echarts' ref='echartsRef'></div>
</template>

<style scoped lang='scss'>
html {
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
}

.AllRida-echarts {
  width: 100%;
  height: 100%;
}

</style>