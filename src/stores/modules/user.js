import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user'
// 用户模块 token setToken removeToken
export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const setToken = () => {
      token.value = localStorage.getItem('token')
    }
    const removeToken = () => {
      token.value = ''
    }

    const user = ref({})
    const getUser = async () => {
      const res = await userGetInfoService()
      user.value = res.data.data
    }
    const setUser = (obj) => {
      user.value = obj
    }
    return {
      token,
      setToken,
      removeToken,
      user,
      getUser,
      setUser,
    }
  },
  {
    persist: true
  }
)
