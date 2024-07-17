
<template>
  <div id="charts-content"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import { onMounted } from "vue";
// 引入 lodash 中的 merge、深克隆
import merge from 'lodash/merge';



const props = withDefaults(
  defineProps<{
    options: any
  }>(),
  {},
)

// const image = 'data:image/png;data:image/png;base64,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'
const maskImage = new Image();
maskImage.src = 'data:image/png;base64,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'

// 词云图默认属性
const defaultSeries = [{
  type: 'wordCloud',
  /**
   * 绘制词云的形状, 值为回调函数 或 关键字, 默认 circle
   *  关键字:
   *
   * circle（圆形）  词的数量不太多的时候，效果不明显，它会趋向于画一个椭圆
   * cardioid（苹果形或心形曲线）
   * diamond（菱形 正方形）
   * triangle-forward（三角形-向前）
   * triangle（三角形-直立）
   * pentagon（五边形）
   * star（星形）
   */
  shape: 'circle',
  // 保持 maskImage 的纵横比或形状的纵横比为 1：1
  keepAspect: false,
  /**
   * 词云轮廓图，支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串, 不包含白色区域; 可选选项
   * shape选项将随着云的形状增长而继续应用
   * 有形状限制的时候，最好用背景图来实现，而且这个背景图一定要放base64的，不然词云画不出来
   */
  maskImage: maskImage,

  // 词云整个图表放置的位置 和 尺寸大小
  left: 'center',
  top: 'center',
  width: '100%',
  height: '100%',
  right: null,
  bottom: null,
  // 词云文本大小范围,  默认为最小12像素，最大60像素
  sizeRange: [12, 60],
  // 词云文字旋转范围和步长。 文本将通过旋转在[-90，90]范围内随机旋转步骤45
  // 如果都设置为 0 , 则是水平显示
  rotationRange: [-90, 90],
  rotationStep: 45,
  /**
   * 词间距, 距离越大，单词之间的间距越大, 单位像素
   * 这里间距太小的话，会出现大词把小词套住的情况，比如一个大的口字，中间会有比较大的空隙，这时候他会把一些很小的字放在口字里面，这样的话，鼠标就无法选中里面的那个小字
   */
  gridSize: 8,
  // 设置为true可以使单词部分在画布之外绘制, 允许绘制大于画布大小的单词
  drawOutOfBound: false,
  /**
   * 布局的时候是否有动画
   * 注意：禁用时，当单词较多时，将导致UI阻塞。
   */
  layoutAnimation: true,
  // 这是全局的文字样式，相对应的还可以对每个词设置字体样式
  textStyle: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    // 颜色可以用一个函数来返回字符串
    color: function () {
      // 随机颜色
      return (
        'rgb(' +
        [
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160),
        ].join(',') +
        ')'
      )
    },
  },
  // 鼠标hover的特效样式
  emphasis: {
    focus: 'self',
    textStyle: {
      textShadowBlur: 10,
      textShadowColor: '#999'
    }
  },

  /**
   * 词云数据，必须是一个数组，每个数组项必须有name和value属性
   * 设置单个文本的样式：  textStyle
   *
   * 例：{
					name: '',
					value: 40,
					textStyle: {
					}
				},
   */
  data: []
}]
let seriesData = props.options.series;
const series = merge({}, defaultSeries[0], seriesData[0]) // {}表示合并后的新对象，可以传入一个空对象作为初始值

function DrawWordCloud() {
  // 词云
  let mychart = echarts.init(document.getElementById("charts-content")) // 可以设置主题色'dark'
  mychart.setOption({
    series: series
  })
}

onMounted(() => {
  DrawWordCloud()
})
</script>

<style scoped lang="scss">
#charts-content {
  width: 100%;
  height: 100%;
}
</style>