<template>
  <div class="CalendarLog">
    <div class="CalendarFunctions">
      <div class="Top">
        <div class="YearAndMonth">{{ year }} {{ months[month] }}月</div>
        <div class="ButtonList">
          <div class="CircularButton" @click="OnLeft">
            {{ '<' }}
          </div>
          <div class="NowButton" @click="OnNow">今天</div>
          <div class="CircularButton" @click="OnRight">
            {{ '>' }}
          </div>
          <el-divider direction="vertical" style="box-shadow: none; width: 1vw; height: 2vw;" />
          <div class="CreateNewEventButton"> + 创建自定义事件</div>
        </div>
      </div>

      <div class="Down">
        <div class="TagList">
          <div class="Tag" v-for="(item, index) in tagList" :key="index">{{ item.name }}
            <div class="TagP" :style="{background: item.color }"></div>
          </div>
          <div class="TagAdd">添加新的标签名</div>
        </div>

        <div style="display: flex; flex-direction: row; align-items: center">
          <div class="CircularButton" @click="mode = 1">月</div>
          <div class="CircularButton" @click="mode = 2">周</div>
          <div class="CircularButton" @click="mode = 3">日</div>
        </div>
      </div>
    </div>
    <div class="Calendar" id="Calendar" :style="{height: mode === 1 ? '90vh' : '70vh'}">
      <div class="CalendarTitle" v-if="mode === 1 || mode === 2">
        <p>星期日</p>
        <p>星期一</p>
        <p>星期二</p>
        <p>星期三</p>
        <p>星期四</p>
        <p>星期五</p>
        <p>星期六</p>
      </div>
      <div class="CalendarTitle" v-else>
        {{ year }}-{{ month }}-{{ day }}
      </div>

      <div class="CalendarContent" v-if="mode === 1">
        <div class="CalendarEmptyItem" v-for="index in weekDay" :key="index"></div>
        <div class="CalendarItem" v-for="index in monthDays[month]" :key="index">
          <p v-if="day !== index">{{ index }}</p>
          <p v-else style="color: #6666FF; font-weight: bolder;">{{ index }}</p>
        </div>
        <div class="CalendarEmptyItem"
             v-for="index in ((weekDay + monthDays[month]) % 7 === 0 ? 0 : (7 - (weekDay + monthDays[month]) % 7))"
             :key="index"></div>
      </div>

      <div class="CalendarContent" v-if="mode === 2">
        <div class="CalendarWeekItem" v-for="index in weekDates" :key="index">
          <p v-if="day !== index">{{ index }}</p>
          <p v-else style="color: #6666FF; font-weight: bolder;">{{ index }}</p>
        </div>
      </div>

      <div class="CalendarContent" v-if="mode === 3">
        <div class="CalendarWeekItem" style="width: 100%;">

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
// import { postWeekCourse } from '@/api/api.js'

const date = new Date(Date.now())
const year = ref(date.getFullYear())
const month = ref(date.getMonth() + 1)
const day = ref(date.getDate())
const weekDay = ref((new Date(year.value, month.value - 1, 1)).getDay()) // 获取星期几，返回值是 0（星期日）到 6（星期六）
const monthDays = ref([0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31])
if (year.value % 400 === 0 || year.value % 100 !== 0 && year.value % 4 === 0) monthDays.value[2]++

//  返回该日期所在周的日期列表
const weekDates = ref(getWeekDates())

function getWeekDates() {
  let date = new Date(year.value, month.value - 1, day.value)

  let firstDayOfWeek = new Date(date)

  // 确保第一天是星期日
  while (firstDayOfWeek.getDay() !== 0) {
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 1)
  }

  let weekDates = []
  for (let i = 0; i < 7; i++) {
    let day = new Date(firstDayOfWeek)
    day.setDate(firstDayOfWeek.getDate() + i)
    weekDates.push(day.getDate())
  }

  return weekDates
}


const months = [0, '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
const tagList = [
  { name: '课程' },
  { name: '开会' },
  { name: '其他' }
]

//  月周日三种模式
const mode = ref(1)

onBeforeMount(() => {

  tagList.forEach(tag => {
    tag.color = getRandomColor()
  })

  // postWeekCourse('20190103', 1).then(response => {
  //   console.log(response.data.data)
  // }).catch(error => {
  //   console.log(error)
  // })

})

onMounted(() => {
  console.log(year.value, month.value, day.value)
})


// 生成一个随机的 RGB 颜色值
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

//  今天按钮
const OnNow = () => {
  const date = new Date(Date.now())
  year.value = date.getFullYear()
  month.value = date.getMonth() + 1
  day.value = date.getDate()
  weekDay.value = (new Date(year.value, month.value - 1, 1)).getDay() // 获取星期几，返回值是 0（星期日）到 6（星期六）
  if (year.value % 400 === 0 || year.value % 100 !== 0 && year.value % 4 === 0) monthDays.value[2]++
}

//  左按钮
const OnLeft = () => {
  if (mode.value === 1) {
    month.value--
    if (month.value === 0) {
      month.value = 12
      year.value--
    }
  } else if (mode.value === 2) {
    day.value -= 7
    if (day.value < 1) {
      month.value--
      if (month.value === 0) {
        month.value = 12
        year.value--
      }
      day.value = monthDays.value[month.value]
    }
  } else {
    day.value--
    if (day.value === 0) {
      month.value--
      if (month.value === 0) {
        year.value--
        month.value = 12
      }
      day.value = monthDays.value[month.value]
    }
  }
  weekDay.value = (new Date(year.value, month.value - 1, 1)).getDay()
  weekDates.value = getWeekDates()
  console.log(year.value, month.value, day.value)
}

//  右按钮
const OnRight = () => {
  if (mode.value === 1) {
    month.value++
    if (month.value === 13) {
      month.value = 1
      year.value++
    }
  } else if (mode.value === 2) {
    day.value += 7
    if (day.value > monthDays.value[month.value]) {
      month.value++
      if (month.value > 12) {
        month.value = 1
        year.value++
      }
      day.value = 1
    }
  } else {
    day.value++
    if (day.value > monthDays.value[month.value]) {
      month.value++
      if (month.value === 13) {
        year.value++
        month.value = 1
      }
      day.value = 1
    }
  }
  weekDay.value = (new Date(year.value, month.value - 1, 1)).getDay()
  weekDates.value = getWeekDates()
  console.log(year.value, month.value, day.value)
}
</script>

<style scoped lang="scss">
.CalendarLog {
  width: 79vw;
  display: flex;
  flex-direction: column;
  padding-bottom: 3vw;
  background: #F9FAFB;

  .CalendarFunctions {
    width: 100%;
    flex: 1 0;
    display: flex;
    flex-direction: column;

    .Top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 1vw;

      .YearAndMonth {
        font-size: 1.4vw;
        font-weight: bolder;
        font-family: 幼圆;
        line-height: 4vw;
      }

      .ButtonList {
        width: 25vw;
        height: 4.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        font-family: 幼圆;
        user-select: none;

        * {
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
          transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        *:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.25);
          transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
          transform: translateY(-0.1vw);
        }

        .NowButton {
          width: 4vw;
          height: 3vw;
          border-radius: 0.3vw;
          text-align: center;
          font-size: 1vw;
          font-weight: bolder;
          line-height: 3vw;
          background: #FFFFFF;
        }

        .CreateNewEventButton {
          width: 10vw;
          height: 3vw;
          border-radius: 3vw;
          text-align: center;
          line-height: 3vw;
          font-size: 1vw;
          background: #409EFF;
          color: #FFFFFF;
        }
      }
    }

    .Down {
      width: 100%;
      flex: 1 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .TagList {
        display: flex;
        flex-direction: row;
        align-items: center;
        user-select: none;

        .Tag {
          min-width: 4vw;
          height: 4vh;
          display: inline-block;
          background: #FFFFFF;
          text-align: center;
          font-size: 0.8vw;
          line-height: 4vh;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
          border-radius: 1vw;
          margin: 0 0.3vw;
          padding: 0 0.5vw;
          position: relative;

          .TagP {
            width: 0.3vw;
            height: 2vh;
            position: absolute;
            background: red;
            top: 25%;
            left: 15%;
          }
        }

        .TagAdd {
          min-width: 4vw;
          height: 4vh;
          display: inline-block;
          background: #FFFFFF;
          text-align: center;
          font-size: 0.8vw;
          line-height: 4vh;
          border-radius: 1vw;
          margin: 0 0.3vw;
          padding: 0 0.5vw;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
          transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
          color: #6666FF;
        }

        .TagAdd:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.25);
          transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
          transform: translateY(-0.1vw);
        }
      }
    }
  }

  .Calendar {
    width: 100%;
    border: #E6E8EC solid 1px;
    margin-top: 1vw;
    display: flex;
    flex-direction: column;

    .CalendarTitle {
      width: 100%;
      height: 6vh;
      background: #FFFFFF;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
      border: #E6E8EC solid 1px;
      color: #181818;
      font-size: 1vw;

      p {
        color: #6A7179;
        font-size: 1vw;
      }
    }

    .CalendarContent {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .CalendarEmptyItem {
        width: 14.28%;
        height: 25%;
        display: inline-block;
        border: #E6E8EC solid 1px;
        background-image: linear-gradient(135deg,
          rgba(0, 0, 0, 0.1) 8%, transparent 8%, transparent 10%,
          rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.1) 18%, transparent 18%,
          transparent 20%, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.1) 28%,
          transparent 28%, transparent 30%, rgba(0, 0, 0, 0.1) 30%,
          rgba(0, 0, 0, 0.1) 38%, transparent 38%, transparent 40%,
          rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.1) 48%, transparent 48%,
          transparent 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 58%,
          transparent 58%, transparent 60%, rgba(0, 0, 0, 0.1) 60%,
          rgba(0, 0, 0, 0.1) 68%, transparent 68%, transparent 70%,
          rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0.1) 78%, transparent 78%,
          transparent 80%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0.1) 88%,
          transparent 88%, transparent 90%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0.1) 98%, transparent 98%, transparent);
      }

      .CalendarItem {
        width: 14.28%;
        height: 25%;
        display: inline-block;
        background: #FFFFFF;
        border: #E6E8EC solid 1px;
        position: relative;

        p {
          position: absolute;
          bottom: 0;
          right: 0;
          user-select: none;
        }
      }

      .CalendarWeekItem {
        width: 14.28%;
        height: 100%;
        display: inline-block;
        background: #FFFFFF;
        border: #E6E8EC solid 1px;
        position: relative;

        p {
          position: absolute;
          bottom: 0;
          right: 0.2vw;
          user-select: none;
        }
      }
    }
  }
}

.CircularButton {
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  background: #FFFFFF;
  margin: 0 1vw;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.CircularButton:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: translateY(-0.1vw);
}
</style>