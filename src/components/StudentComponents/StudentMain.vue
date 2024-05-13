<script setup>
// StudentHome //
import StudentHomeView from '@/components/StudentComponents/StudentHome/StudentHomeView.vue'
import StudentHomeRightTop from '@/components/StudentComponents/StudentHome/StudentHomeRightTop.vue'
import StudentHomeRightDown from '@/components/StudentComponents/StudentHome/StudentHomeRightDown.vue'
import StudentHomeRightCenter from '@/components/StudentComponents/StudentHome/StudentHomeRightCenter.vue'
// \StudentHome //

// StudentPersonal //

/// BaseInfor ///
import BaseInforHomeView from '@/components/StudentComponents/StudentPersonal/BaseInfor/BaseInforHomeView.vue'
/// \BaseInfor ///

/// SemesterSchedule ///
import SemesterScheduleHomeView from '@/components/StudentComponents/StudentPersonal/SemesterSchedule/SemesterScheduleHomeView.vue'

/// \SemesterSchedule ///

/// StatusInfor ///
/// \StatusInfor ///

/// SystemInfor ///
/// \SystemInfor ///

/// TraningPlan ///
import TraningPlan from '@/components/StudentComponents/StudentPersonal/TraningPlan/TraningPlan.vue'
/// \TraningPlan ///

// \StudentPersonal //

// StudentClass //

/// ClassMaterials ///
// import ClassMaterialsHomeView from '@/components/StudentComponents/StudentClass/ClassMaterials/ClassMaterialsHomeView.vue'
/// \ClassMaterials ///

/// LearnCenter ///
import LearnCenterHomeView from '@/components/StudentComponents/StudentClass/LearnCenter/LearnCenterHomeView.vue'
/// \LearnCenter ///

/// ProfessionalTree ///
/// \ProfessionalTree ///

/// ScheduleQuery ///
/// \ScheduleQuery ///

/// SelfStudy ///
/// \SelfStudy ///

// \StudentClass //

// StudentCourses //

/// CourseCenter ///
/// \CourseCenter ///

/// CourseForum ///
/// \CourseForum ///

/// CourseWork ///
/// \CourseWork ///

/// OnlineClass ///
/// \OnlineClass ///

/// VirtualClass ///
/// \VirtualClass ///

// \StudentCourses //

// StudentStudyInfor //

/// ComprehensiveQuality ///
/// \ComprehensiveQuality ///

/// GradeInfor ///
/// \GradeInfor ///

/// PatentSituation ///
/// \PatentSituation ///

/// PersonalPlan ///
/// \PersonalPlan ///

/// SecondClass ///
/// \SecondClass ///

// \StudentStudyInfor //

// StudentExams //

/// AutoPractice ///
/// \AutoPractice ///

/// ExamArrange ///
/// \ExamArrange ///

/// ExamScores ///
/// \ExamScores ///

/// OnlineExam ///
/// \OnlineExam ///

/// QuestionBank ///
/// \QuestionBank ///

// \StudentExams //

// StudentBusiness //

/// CreditApplication ///
/// \CreditApplication ///

/// InforFeedback ///
/// \InforFeedback ///

/// LeaveApplication ///
/// \LeaveApplication ///

/// ModifyApplication ///
/// \ModifyApplication ///

/// RaceRegistration ///
/// \RaceRegistration ///

// \StudentBusiness //
import { ref, onBeforeMount, watch, onMounted } from 'vue'
import emitter from '@/plugins/Bus'
// 定义 BeChoose 为一个对象，以便使用动态属性
const BeChoose = {
  BeChoose00: ref(false),
  BeChoose01: ref(false),
  BeChoose02: ref(false),
  BeChoose03: ref(false),
  BeChoose04: ref(false),
  BeChoose05: ref(false),

  BeChoose11: ref(false),
  BeChoose12: ref(false),
  BeChoose13: ref(false),
  BeChoose14: ref(false),
  BeChoose15: ref(false),

  BeChoose21: ref(false),
  BeChoose22: ref(false),
  BeChoose23: ref(false),
  BeChoose24: ref(false),
  BeChoose25: ref(false)
}

const num = ref('')

onBeforeMount(() => {
  emitter.on('fn1', (e) => {
    if (e && typeof e === 'object') {
      num.value = e.value // 检查 e 是否是一个对象，确保正确赋值
      localStorage.setItem('BeChoose', num.value)
    }
    // 使用localStorage.getItem来获取之前保存的值
    if (num.value) {
      // 初始化 BeChoose 对象的值
      updateBeChooseValues(num.value)
    }
  })
})

// 监听 s.value 的变化，确保与 BeChoose 同步
watch(num, (newValue) => {
  updateBeChooseValues(newValue)
})

// 更新 BeChoose 对象的值
function updateBeChooseValues(value) {
  for (const key in BeChoose) {
    BeChoose[key].value = key === 'BeChoose' + value
  }
}
onMounted(() => {
  const Be = localStorage.getItem('BeChoose')
  updateBeChooseValues(Be)
})
</script>

<template>
  <div class="body">
    <div class="left">
      <StudentHomeView v-if="BeChoose['BeChoose00'].value" class="left-out"></StudentHomeView>
      <BaseInforHomeView v-if="BeChoose['BeChoose11'].value" class="left-out"></BaseInforHomeView>
      <TraningPlan v-if="BeChoose['BeChoose13'].value" class="left-out"></TraningPlan>
      <SemesterScheduleHomeView
        v-if="BeChoose['BeChoose15'].value"
        class="left-out"
      ></SemesterScheduleHomeView>
      <LearnCenterHomeView
        v-if="BeChoose['BeChoose21'].value"
        class="left-out"
      ></LearnCenterHomeView>
    </div>
    <div class="right">
      <div class="Top">
        <StudentHomeRightTop class="Top-out"></StudentHomeRightTop>
      </div>
      <div class="Center">
        <StudentHomeRightCenter class="Down-out"></StudentHomeRightCenter>
      </div>
      <div class="Down">
        <StudentHomeRightDown class="Center-out"></StudentHomeRightDown>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .left {
    width: 70%;
    height: 100%;
    position: absolute;
    background: white;
    border-radius: 0.7vw;

    .left-out {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 0.7vw;
    }
  }

  .right {
    width: 29%;
    height: 100%;
    position: absolute;
    right: 0;
    border-radius: 0.7vw;
    .Top {
      height: 20%;
      width: 100%;
      background: white;
      border-radius: 0.7vw;
      .Top-out {
        position: absolute;
        width: 100%;
        height: 15.75%;
        border-radius: 0.7vw;
      }
    }

    .Center {
      height: 33.75%;
      width: 100%;
      background: white;
      border-radius: 0.7vw;
      margin-top: 1vh;
      .Down-out {
        position: absolute;
        width: 100%;
        height: 41%;
        border-radius: 0.7vw;
      }
    }

    .Down {
      height: 44%;
      width: 100%;
      background: white;
      margin-top: 1vh;
      border-radius: 0.7vw;
      .Center-out {
        position: absolute;
        width: 100%;
        height: 41%;
        border-radius: 0.7vw;
      }
    }
  }
}
</style>
