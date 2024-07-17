<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const echartsRef = ref(null)
let myChart1 = null
let option1 = null

onMounted(() => {
  myChart1 = echarts.init(echartsRef.value, 'dark')

  // Your echarts option setup here...
  // (Your existing option setup code)

  option1 = {
    backgroundColor:'rgba(1,1,1,0 )',
    legend: {
      width:'100%',
      top:'6%'
    },
    tooltip: {},
    dataset: {
      source: [
        ['product', '大一', '大二', '大三', '大四'],
        ['自评', 43.3, 85.8, 93.7, 85.8],
        ['班评', 83.1, 73.4, 55.1, 85.8],
        ['考评', 86.4, 65.2, 82.5, 85.8],
        ['平均', 72.4, 53.9, 39.1, 85.8]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  }


  option1 && myChart1.setOption(option1)
  const resizeObserver = new ResizeObserver(() => {
    myChart1.resize()
  })

  resizeObserver.observe(echartsRef.value)
})
</script>

<template>
  <div className='TopRoad-echarts' ref='echartsRef'></div>
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

.TopRoad-echarts {
  width: 30vw;
  height: 30vh;
}

</style>