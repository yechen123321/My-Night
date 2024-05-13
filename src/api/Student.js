import request from '@/utils/request'

// 注册接口
export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })

// 登录接口
export const userLoginService = ({ username, password }) =>
  request.post('/user/login', { username, password })

// 提问接口
export const QuestionGo = ({ id, name, question }) =>
  request.post('http://172.18.7.47:8084/question', { id, name, question })
