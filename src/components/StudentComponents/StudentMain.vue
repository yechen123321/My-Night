<script setup>
// StudentHome //
import StudentHomeView from '@/components/StudentComponents/StudentHome/StudentHomeView.vue'
import StudentHomeRightTop from '@/components/StudentComponents/StudentHome/StudentHomeRightTop.vue'
import StudentHomeRightCenter from '@/components/StudentComponents/StudentHome/StudentHomeRightCenter.vue'
import StudentHomeRightDown from '@/components/StudentComponents/StudentHome/StudentHomeRightDown.vue'
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
/// \TraningPlan ///

// \StudentPersonal //


// StudentClass //

/// ClassMaterials ///
import ClassMaterialsHomeView from '@/components/StudentComponents/StudentClass/ClassMaterials/ClassMaterialsHomeView.vue'
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
import { ref, onBeforeMount } from 'vue'
import emitter from '@/plugins/Bus'

let s = ref('')

onBeforeMount(() => {
  emitter.on('fn', (e) => {
    s.value = e.value
  })
})
</script>

<template>
  <div class="body">
    <div class="left">
      <StudentHomeView class="left-out"></StudentHomeView>
      <BaseInforHomeView class="left-out"></BaseInforHomeView>
      <SemesterScheduleHomeView class="left-out"></SemesterScheduleHomeView>
      <ClassMaterialsHomeView class="left-out"></ClassMaterialsHomeView>
      <LearnCenterHomeView class="left-out"></LearnCenterHomeView>
    </div>
    <div class="right">
      <div class="Top">
        <StudentHomeRightTop class="Top-out"></StudentHomeRightTop>
      </div>
      <div class="Center">
        <StudentHomeRightCenter class="Center-out"></StudentHomeRightCenter>
      </div>
      <div class="Down">
        <StudentHomeRightDown class="Down-out"></StudentHomeRightDown>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  width: 100%;
  height: 100%;
  position: relative;

  .left {
    width: 75%;
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
    width: 23.75%;
    height: 100%;
    position: absolute;
    right: 0;
    border-radius: 0.7vw;
    .Top {
      height: 15.75%;
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
      height: 41%;
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

    .Down {
      height: 41%;
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
  }
}
</style>
