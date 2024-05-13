<script setup>
import html2pdf from 'html2pdf.js'
import { onMounted } from 'vue'
let contentDiv = null

// 设置要转换为 PDF 的 DIV 元素
onMounted(() => {
  contentDiv = document.getElementById('topdf');
})
const courses = {
  course1: [
    {
      name: 'WEB前端开发技术I',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）N302',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '操作系统原理',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）S102',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: '概率论与数理统计I',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）N202',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    }
  ],
  course2: [
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '概率论与数理统计I',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）N202',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: 'WEB前端开发技术I',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）N302',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: '概率论与数理统计I',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）N202',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: '机器学习基础',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）N302',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    }
  ],
  course3: [
    {
      name: '毛泽东思想和中国特色社会主义理论体系概论',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）N302',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: 'WEB前端开发技术I',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）N302',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: '机器学习基础',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）N302',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: 'WEB前端开发技术I',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）N302',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: 'WEB前端开发技术I',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）N302',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    }
  ],
  course4: [
    {
      name: '形势与政策（4）',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）S302',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '概率论与数理统计I',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）N202',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: '大学英语（4）',
      time: '(1-2节)1-16周',
      location: '新芜校区 博思楼（A6）N302',
      teacher: '姜大玮(双师)',
      lessonName: '(2023-2024-2)-CSE309- WEB前端开发技术I-09',
      what: '备注：无'
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    }
  ],
  course5: [
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    },
    {
      name: '',
      time: '',
      location: '',
      teacher: '',
      lessonName: '',
      what: ''
    }
  ]
}
const convertToPDF = () => {
  const options = {
    margin: 10,
    filename: 'myfile.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    // 你可以添加更多html2pdf的配置选项
  }

  html2pdf()
    .from(contentDiv)
    .set(options)
    .toPdf()
    .get('pdf')
    .then((pdf) => {
      // 获取PDF的Data URL
      const pdfOutput = pdf.output('datauristring')
      // 下载PDF
      downloadPDF(pdfOutput)
    })
}

const downloadPDF = (pdfOutput) => {
  const link = document.createElement('a')
  link.href = pdfOutput
  link.download = '学期课表.pdf'
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
// 预览PDF的函数（如果有的话）
// const previewPDF = (pdfOutput) => {
//   // 这里你可以添加预览PDF的逻辑，比如使用PDF.js库或直接在新的浏览器窗口/标签页中打开PDF
// }
</script>

<template>
  <div class="Body">
    <div class="title">
      <div class="title-name">课表预览</div>
      <div class="box-title">
        <div class="pdf" @click="convertToPDF">
          <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M648.6 63.8H267.3c-91.3 0-166 74.7-166 166v189.9c0 90.8 73.8 165.1 164.4 165.9V793c0 39.1 32 71 71 71h284.2c39.1 0 71-32 71-71V579.8c70.4-19.2 122.7-83.7 122.7-160v-190c0-91.3-74.7-166-166-166z"
              fill="#D6F3FA"
            ></path>
            <path
              d="M414.5 507.4c0-9.6 7.8-17.4 17.4-17.4h104.4c9.6 0 17.4 7.8 17.4 17.4 0 9.6-7.8 17.4-17.4 17.4H431.9c-9.6 0-17.4-7.8-17.4-17.4z m226.1 121.8H431.9c-9.6 0-17.4 7.8-17.4 17.4s7.8 17.4 17.4 17.4h208.8c9.6 0 17.4-7.8 17.4-17.4s-7.9-17.4-17.5-17.4z m0 139.2H431.9c-9.6 0-17.4 7.8-17.4 17.4s7.8 17.4 17.4 17.4h208.8c9.6 0 17.4-7.8 17.4-17.4s-7.9-17.4-17.5-17.4zM924.4 247v154.9c0 86.5-72.5 157-162 158.1v324.6c0 41.4-34.5 75.1-76.8 75.1H386.9c-42.4 0-76.8-33.7-76.8-75.1v-325c-88.6-4.6-159.3-73.5-159.3-157.8V247c0-73.1 63.3-132.5 141.1-132.5h37.7c12.9 0 23.4 10.2 23.4 22.8 0 12.6-10.5 22.8-23.4 22.8h-37.7c-52 0-94.3 39-94.3 87V402c0 59.2 49.6 107.8 112.5 112.3v-146h-34.8c-9.6 0-17.4-7.8-17.4-17.4 0-9.6 7.8-17.4 17.4-17.4h521.9c9.6 0 17.4 7.8 17.4 17.4 0 9.6-7.8 17.4-17.4 17.4h-34.8v146.2c64.4-1.1 116.4-51.1 116.4-112.6V247c0-48-41.2-87-91.8-87H480.7c-12.6 0-22.8-10.2-22.8-22.8 0-12.6 10.2-22.8 22.8-22.8H787c75.8 0 137.4 59.5 137.4 132.6zM727.6 884.7V368.3H344.9v516.4c0 22.2 18.9 40.3 42 40.3h298.7c23.2 0 42-18.1 42-40.3zM393.5 160h22.8c12.5 0 22.8-10.2 22.8-22.8 0-12.5-10.2-22.8-22.8-22.8h-22.8c-12.5 0-22.8 10.2-22.8 22.8 0 12.5 10.3 22.8 22.8 22.8z"
              fill="#18BAE5"
            ></path>
          </svg>
          <div class="word">输出PDF</div>
        </div>
      </div>
    </div>
    <div class="class-box">
      <table class="box-body" id="topdf">
        <thead>
          <tr>
            <th style="width: 3vw" scope="col">时间段</th>
            <th style="width: 1.5vw" scope="col">节次</th>
            <th scope="col">周一</th>
            <th scope="col">周二</th>
            <th scope="col">周三</th>
            <th scope="col">周四</th>
            <th scope="col">周五</th>
            <th scope="col">周六</th>
            <th scope="col">周日</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>上午 8:30 -10:05</th>
            <td>1-2</td>
            <td class="class-bb" v-for="(course, index) in courses['course1']" :key="index">
              <div class="class-name">{{ course.name }}</div>
              <div class="class-time">{{ course.time }}</div>
              <div class="class-where">{{ course.location }}</div>
              <div class="teacher">{{ course.teacher }}</div>
              <div class="lesson-name">{{ course.lessonName }}</div>
              <div class="from-class">{{ course.fromClass }}</div>
              <div class="class-people">{{ course.chosenPeople }}</div>
              <div class="choose-people">{{ course.totalPeople }}</div>
              <div class="what">{{ course.what }}</div>
            </td>
          </tr>
          <tr>
            <th>上午 10:25 -12:00</th>
            <td>3-4</td>
            <td class="class-bb" v-for="(course, index) in courses['course2']" :key="index">
              <div class="class-name">{{ course.name }}</div>
              <div class="class-time">{{ course.time }}</div>
              <div class="class-where">{{ course.location }}</div>
              <div class="teacher">{{ course.teacher }}</div>
              <div class="lesson-name">{{ course.lessonName }}</div>
              <div class="from-class">{{ course.fromClass }}</div>
              <div class="class-people">{{ course.chosenPeople }}</div>
              <div class="choose-people">{{ course.totalPeople }}</div>
              <div class="what">{{ course.what }}</div>
            </td>
          </tr>
          <tr>
            <th>中午</th>
            <th>中午</th>
            <th>中午</th>
            <th>中午</th>
            <th>中午</th>
            <th>中午</th>
            <th>中午</th>
            <th>中午</th>
            <th>中午</th>
          </tr>
          <tr>
            <th>下午 14:00 - 15:35</th>
            <td>5-6</td>
            <td class="class-bb" v-for="(course, index) in courses['course3']" :key="index">
              <div class="class-name">{{ course.name }}</div>
              <div class="class-time">{{ course.time }}</div>
              <div class="class-where">{{ course.location }}</div>
              <div class="teacher">{{ course.teacher }}</div>
              <div class="lesson-name">{{ course.lessonName }}</div>
              <div class="from-class">{{ course.fromClass }}</div>
              <div class="class-people">{{ course.chosenPeople }}</div>
              <div class="choose-people">{{ course.totalPeople }}</div>
              <div class="what">{{ course.what }}</div>
            </td>
          </tr>
          <tr>
            <th>下午 15:55 -17:30</th>
            <td>7-8</td>
            <td class="class-bb" v-for="(course, index) in courses['course4']" :key="index">
              <div class="class-name">{{ course.name }}</div>
              <div class="class-time">{{ course.time }}</div>
              <div class="class-where">{{ course.location }}</div>
              <div class="teacher">{{ course.teacher }}</div>
              <div class="lesson-name">{{ course.lessonName }}</div>
              <div class="from-class">{{ course.fromClass }}</div>
              <div class="class-people">{{ course.chosenPeople }}</div>
              <div class="choose-people">{{ course.totalPeople }}</div>
              <div class="what">{{ course.what }}</div>
            </td>
          </tr>
          <tr>
            <th height="20%;">晚上 19:00 -22:00</th>
            <td>9-11</td>
            <td class="class-bb" v-for="(course, index) in courses['course5']" :key="index">
              <div class="class-name">{{ course.name }}</div>
              <div class="class-time">{{ course.time }}</div>
              <div class="class-where">{{ course.location }}</div>
              <div class="teacher">{{ course.teacher }}</div>
              <div class="lesson-name">{{ course.lessonName }}</div>
              <div class="from-class">{{ course.fromClass }}</div>
              <div class="class-people">{{ course.chosenPeople }}</div>
              <div class="choose-people">{{ course.totalPeople }}</div>
              <div class="what">{{ course.what }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.Body {
  width: 100%;
  height: 100%;
  .box-body {
    width: 97%;
    height: 192%;
    border-radius: 0.3vw;
    border: 1px solid #727070;
    margin: auto;
    .class-bb {
      width: 5vw;
      height: 30vh;
      div {
        margin-top: 1vh;
      }
      .class-name {
        font-weight: bolder;
        font-size: 0.9vw;
      }
      .class-time {
        font-size: 0.65vw;
      }
      .class-where {
        font-size: 0.65vw;
      }
      .teacher {
        font-weight: bolder;
        font-size: 0.7vw;
      }
      .lesson-name {
        font-size: 0.7vw;
      }
      .from-class {
        font-weight: bolder;
        font-size: 0.7vw;
      }
      .class-people {
        font-size: 0.8vw;
      }
      .choose-people {
        font-size: 0.6vw;
      }
      .what {
        font-weight: bolder;
        font-size: 0.8vw;
      }
    }
    caption {
      caption-side: bottom;
      padding: 10px;
      font-weight: bold;
    }

    thead,
    tfoot {
      background-color: rgb(228 240 245);
    }

    th,
    td {
      border: 1px solid rgb(160 160 160);
      padding: 8px 10px;
    }
    td:last-of-type {
      text-align: center;
    }
  }
  .box-title {
    width: 100%;
    height: 8vh;
    background: #f8f6f6;
    .pdf {
      position: absolute;
      right: 3vw;
      width: 6vw;
      height: 3vh;
      margin-top: 0.8vh;
      border-radius: 0.4vw;
      border: 1px solid #727070;
      .icon {
        width: 1.3vw;
        position: absolute;
        margin: 0.3vh 0.3vw;
      }
      .word {
        width: 5vw;
        height: 3vh;
        line-height: 3vh;
        font-size: 0.85vw;
        margin-left: 2vw;
        color: #4b4a4a;
        font-weight: bolder;
      }
    }
    .pdf:hover {
      cursor: pointer;
      .word {
        color: #0e87ff;
      }
    }
  }
  .class-box {
    width: 97%;
    height: 90%;
    background: #f8f6f6;
    margin: 5vh auto;
    overflow: auto;
    border-radius: 0 0 0.5vw 0.5vw;
  }
  .title {
    width: 97%;
    height: 6%;
    background: #6aa999;
    margin: 2vh auto;
    border-radius: 0.5vw 0.5vw 0 0;
    .title-name {
      width: 10vw;
      height: 5.3vh;
      display: inline-block;
      font-size: 1.35vw;
      margin-left: 1.5vw;
      line-height: 5.3vh;
      color: white;
      font-weight: bolder;
    }
  }
}
</style>
