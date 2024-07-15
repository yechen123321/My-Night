import axios from 'axios'

export function request(config) {
  // axios 实例
  const instance = axios.create({
    baseURL: '/api', //  接口地址
    timeout: 5000
  })

  // 添加请求拦截器
  instance.interceptors.request.use(function(config) {
    return config
  }, function(error) {
    return Promise.reject(error)
  })

// 添加响应拦截器
  instance.interceptors.response.use(function(response) {
    return response
  }, function(error) {
    if (error.response) {
      if (error.status === 500) {
        alert('服务器内部发生错误')
      }
    }
    return Promise.reject(error)
  })

  return instance(config)
}
export default request;