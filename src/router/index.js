import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'

// createRouter 创建路由实例
// 配置 history 模式
// 1. history模式：createWebHistory     地址栏不带 #
// 2. hash模式：   createWebHashHistory 地址栏带 #
// console.log(import.meta.env.DEV)

// vite 中的环境变量 import.meta.env.BASE_URL  就是 vite.config.js 中的 base 配置项
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },

    {
      path: '/student',
      name: 'student',
      component: () => import('@/views/Student.vue')
    },

    {
      path: '/student/persons',
      name: 'studentPersons',
      component: () => import('@/views/Student/StudentPersonal.vue'),
      children: [
        {
          path: 'baseinfo',
          name: 'studentPersonsBaseinfo',
          component: () => import('@/components/StudentComponent/StudentPersonal/BaseInfo.vue')
        },
        {
          path: 'schoolinfo',
          name: 'studentPersonsSchoolInfo',
          component: () => import('@/components/StudentComponent/StudentPersonal/SchoolInfo.vue')
        },
        {
          path: 'train',
          name: 'studentPersonsTrain',
          component: () => import('@/components/StudentComponent/StudentPersonal/TrainProgram.vue')
        }
      ]
    },

    {
      path: '/student/study/learncenter/homework',
      name: 'studentPersonal',
      component: () => import('@/components/StudentComponent/StudentStudy/CourseWorks.vue')
    },

    {
      path: '/student/study',
      name: 'studentStudy',
      component: () => import('@/views/Student/StudentStudy.vue'),
      children: [
        {
          path: 'learncenter',
          name: 'learnCenter',
          component: () => import('@/components/StudentComponent/StudentStudy/LearnCenterHomeView.vue')
        },
        {
          path: 'myclass',
          name: 'myClass',
          component: () => import('@/components/StudentComponent/StudentStudy/StudentStudyWorkView.vue')
        }
      ]
    },

    {
      path: '/student/talk',
      name: 'studentTalk',
      component: () => import('@/views/Student/StudentTalk.vue')
    },

    {
      path: '/student/talk/sendtalk',
      name: 'studentTalk/sendtalk',
      component: () => import('@/components/StudentComponent/StudentTalk/SendTalk.vue')
    },


    {
      path: '/student/talk/talks',
      name: 'studentTalkTalks',
      component: () => import('@/components/StudentComponent/StudentTalk/TalkMain.vue')
    },

    {
      path: '/student/second',
      name: 'studentSecond',
      component: () => import('@/components/StudentComponent/SecondClass/SecondClass.vue')
    },

    {
      path: '/student/video',
      name: 'studentVideo',
      component: () => import('@/views/Student/StudentVideo.vue')
    },

    {
      path: '/student/exam',
      name: 'studentExam',
      component: () => import('@/views/Student/StudentExam.vue')
    },

    {
      path: '/student/exam/workready',
      name: 'studentExamWorkReady',
      component: () => import('@/components/StudentComponent/StudentExam/WorkReady.vue')
    },

    {
      path: '/student/exam/workview',
      name: 'studentExamWorkView',
      component: () => import('@/components/StudentComponent/StudentExam/WorkView.vue')
    },

    {
      path: '/student/iflycode',
      name: 'studentIflycode',
      component: () => import('@/views/Student/StudentIfly.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/UserLogin.vue')
    },
    // {
    //   path: '/operations',
    //   name: 'operations',
    //   component: () => import('@/views/Operations.vue'),
    // },

    // {
    //   path: '/student/work',
    //   name: 'work',
    //   component: () => import('@/components/StudentComponents/StudentExams/WorkReady.vue')
    // },
    // {
    //   path: '/student/exam',
    //   name: 'exam',
    //   component: () => import('@/components/StudentComponents/StudentExams/WorkView.vue')
    // },
  ]
})

// 登录访问拦截 => 默认是直接放行的
// 根据返回值决定，是放行还是拦截
// 返回值：
// 1. undefined / true  直接放行
// 2. false 拦回from的地址页面
// 3. 具体路径 或 路径对象  拦截到对应的地址
//    '/login'   { name: 'login' }

// router.beforeEach((to) => {
//   // 如果没有token, 且访问的是非登录页，拦截到登录，其他情况正常放行
//   const useStore = useUserStore()
//   if (!useStore.token && to.path !== '/login') {
//     if (to.path === '/') {
//     } else {
//       return '/login'
//     }
//   }
// })

export default router
