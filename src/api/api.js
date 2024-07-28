import request from '@/utils/index.js'

//  获取验证码
export const getCode = () => request({
  method: 'get',
  contentType: 'image/*',
  responseType: 'blob',
  url: '/user/getCode'
})

//  教师登录1
export const postLoginByIdCard = (idCard, password, authCode) => request({
  method: 'post',
  url: '/user/login',
  data: {
    'idcard': idCard,
    'password': password,
    'authCode': authCode
  }
})

//  教师登录2
export const postLoginByPhone = (phone, password, authCode) => request({
  method: 'post',
  url: '/user/login',
  data: {
    'phone': phone,
    'password': password,
    'authCode': authCode
  }
})

//  教师登录3
export const postLoginByNumber = (number, password, authCode) => request({
  method: 'post',
  url: '/user/login',
  data: {
    'number': number,
    'password': password,
    'authCode': authCode
  }
})

//  根据教师 ID 查询教师信息
export const getTeacherInformation = (id) => {
  const url = `/teacher/${id}`
  return request({
    method: 'get',
    url: url
  })
}

// 获取周课表数据
export const postWeekCourse = (teacherId, weekId) => request({
  method: 'post',
  url: '/teacher/selectLesson',
  data: {
    'teacherId': teacherId,
    'weekId': weekId
  }
})

//  星火问答
export const postQuestionAnswer = (id, name, question) => request({
  method: 'post',
  url: '/question',
  data: {
    'id': id,
    'name': name,
    'question': question
  },
  timeout: 20000
})

//  获取个人信息
export const getPersonalInformation = (teacherId) => request({
  method: 'post',
  url: '/teacher/select',
  data: {
    number: teacherId
  }
})

//  查找所有开课
export const postAllCourse = (teacherId) => request({
  method: 'post',
  url: '/teacher/class/find',
  data: {
    'teacherId': teacherId
  }
})

//  删除对应 ID 的开课
export const deleteCourse = (id) => request({
  method: 'delete',
  url: '/teacher/class/delete',
  data: {
    'id': id
  }
})


//  新建 / 更新开课
export const postCreateUpdateCourse = (className, gradeName, teacherId, teacherHelperId = '', startTime = '23学年春季学期', endTime = '23学年春季学期') => request({
  method: 'post',
  url: '/teacher/class/save',
  data: {
    'className': className,
    'gradeName': gradeName,
    'teacherId': teacherId,
    'teacherHelperId': teacherHelperId,
    'startTime': startTime,
    'endTime': endTime
  }
})

//  上传实录视频
export const postUploadCourseVideo = (formData) => request({
  method: 'post',
  url: '/save/video',
  processData: false,
  contentType: false,
  data: formData
})

//  上传参考资料
export const postUploadCourseReference = (formData) => request({
  method: 'post',
  url: '/upload/file',
  processData: false,
  contentType: false,
  data: formData
})

//  根据课堂 ID 返回课堂实录列表
export const postCourseVideoList = (classId) => request({
  method: 'post',
  url: '/select/video/classId',
  data: {
    classId: classId
  }
})

//  根据课堂 ID 返回参考资料列表
export const postReferenceMaterialsList = (classId) => request({
  method: 'post',
  url: '/select/classId',
  data: {
    classId: classId
  }
})

//  通用图片识别
export const postOCR = (formData) => request({
  method: 'post',
  url: '/question/ocr',
  data: formData
})

//  知识点查询
export const getKnowledgePoints = () => request({
  method: 'get',
  url: '/teacher/knowledge/select'
})

//  单项 / 不定项选择题录入
export const postQuestionInput = (formData) => request({
  method: 'post',
  url: '/teacher/qst/save',
  data: formData
})

//  知识库文件上传
export const postUploadKnowledage = (formData) => request({
  method: 'post',
  url: '/student/upload/file',
  processData: false,
  contentType: false,
  data: formData
})

//  文档问答
export const postChatFile = (jsonData) => request({
  method: 'post',
  url: '/student/chat/file',
  data: jsonData,
  timeout: 1000 * 120
})

//  按照班级查找学生
export const getGradeStudents = () => request({
  method: 'get',
  url: '/teacher/grade/student'
})

//  查找课程
export const getAllCourse = () => request({
  method: 'get',
  url: '/teacher/class/select'
})

//  查询所有题目
export const getAllQuestion = () => request({
  method: 'get',
  url: '/teacher/qst/selectAll'
})