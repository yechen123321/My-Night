import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'
const baseURL = ''

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    // const useStore = useUserStore()
    // const defaultToken = '210a4060295049a9a6f01fd4d50f4b23'; 
    // if (useStore.token) {
    //   config.headers.token = useStore.token
    // } 
    config.headers.token = defaultToken; // 获取用户token或者使用默认token
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    if (res.data.code == 0) {
      return res
    }
    // 处理业务失败,给错误提示,抛出错误
    ElMessage.error(res.data.message || '服务异常！')
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理401错误
    // 错误的特殊情况 => 401 权限不足 或 token 过期 => 拦截到登录
    if (err.response?.status === 401) {
      router.push('/login')
    }
    // 错误的默认情况
    ElMessage.error(err.response.data.message || '服务异常！')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
