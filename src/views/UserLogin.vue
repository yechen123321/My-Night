<template>
  <div class="UserLogin">

    <div class="NavBar">
      <img class="MarkZhizhi" src="../assets/logo.png" alt="">
      <div class="ButtonGroup">
        <div class="Button" @click="">
          <svg t="1720077181958" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="2138">
            <path
              d="M894.23 749.57c-11.29 0-21.95-6.78-26.39-17.89-15.49-38.89-40.99-73.42-73.74-99.85-12.2-9.84-14.1-27.72-4.25-39.93 9.84-12.18 27.69-14.12 39.93-4.25 40.32 32.55 71.73 75.08 90.82 123.02 5.8 14.57-1.3 31.08-15.87 36.89-3.45 1.35-7.01 2.01-10.5 2.01zM694.75 575.68c-11.7 0-22.65-7.29-26.78-18.96-5.22-14.78 2.54-31 17.33-36.22 63.44-22.4 106.07-82.67 106.07-150 0-70.27-45.07-131.34-112.16-152-14.98-4.61-23.39-20.5-18.78-35.49 4.62-14.98 20.47-23.39 35.49-18.78 91.05 28.03 152.23 110.94 152.23 206.28 0 91.36-57.85 173.16-143.97 203.55-3.11 1.09-6.3 1.62-9.43 1.62zM735.53 904.8c-15.69 0-28.39-12.71-28.39-28.39 0-83.39-37.27-161.29-102.25-213.73-5.94-4.8-12.1-9.36-18.45-13.66-12.99-8.79-16.39-26.44-7.6-39.43 8.77-12.99 26.41-16.39 39.43-7.6 7.66 5.19 15.09 10.69 22.28 16.49 78.41 63.28 123.38 157.28 123.38 257.93-0.01 15.68-12.72 28.39-28.4 28.39z m-605.76 0c-15.69 0-28.39-12.71-28.39-28.39 0-182.66 148.61-331.27 331.27-331.27 21.06 0 42.16 2 62.7 5.93 15.4 2.95 25.49 17.83 22.54 33.23-2.96 15.39-17.8 25.51-33.23 22.54a277.391 277.391 0 0 0-52.01-4.92c-151.35 0-274.48 123.14-274.48 274.48-0.01 15.69-12.71 28.4-28.4 28.4z"
              p-id="2139"></path>
            <path
              d="M423.18 592.45c-130.48 0-236.62-106.15-236.62-236.62S292.71 119.2 423.18 119.2 659.8 225.35 659.8 355.82 553.66 592.45 423.18 592.45z m0-416.46c-99.16 0-179.83 80.67-179.83 179.83s80.67 179.83 179.83 179.83 179.83-80.67 179.83-179.83-80.67-179.83-179.83-179.83z"
              p-id="2140"></path>
          </svg>
          <p>切换至教师端</p>
        </div>
      </div>
    </div>
    <div class="Content">

      <div class="TeacherForm" v-loading="isLoading" element-loading-text="致知拼命加载中...">
        <!--====  标题栏  ====-->
        <div class="SwitchBar">
          <div class="SwitchItem">
            STUDENT LOGIN
            <div class="SwitchStrip"></div>
          </div>
        </div>

        <!--====  登录页  ====-->
        <form class="LoginForm" @submit.prevent="handleSubmit">
          <!--====  教师端登录表单  ====-->
          <input type="text" v-model="username" placeholder="学号 | 手机号 | 身份证" />
          <input type="password" v-model="password" placeholder="请输入密码" />
          <div class="Code">
            <input type="text" v-model="authCode" placeholder="验证码" />
            <img :src="blobCode" alt="" @click="reloadCode">
          </div>
          <div class="ErrorMsg" v-if="isErrorMsgVisible">{{ errorMsg }}</div>
          <button type="submit">登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { getCode, postLoginByIdCard, postLoginByNumber, postLoginByPhone } from '@/api/api.js'
import { useRouter } from 'vue-router'

const isLoading = ref(true)

const router = useRouter()

const token = localStorage.getItem('token')


//  验证码
const code = ref(null)
let blobCode = ref('')

//  登录
const username = ref('')
const password = ref('')
const authCode = ref('')

//  错误信息
const isErrorMsgVisible = ref(false)
const errorMsg = ref('')


onBeforeMount(() => {
  //  获取验证码
  reloadCode()
})

onMounted(() => {
  isLoading.value = true
  if (getToken()) {
    // 如果存在 token，则跳转到个人界面
    router.push('/student')
  }
  isLoading.value = false
})

//  重新获取一次验证码
const reloadCode = () => {
  getCode().then(response => {
    code.value = response.data
    blobCode.value = URL.createObjectURL(code.value)
  })
}

// 处理表单提交
const handleSubmit = () => {
  isLoading.value = true
  if (username.value === '') {
    errorMsg.value = '用户名不能为空'
    isLoading.value = false
    isErrorMsgVisible.value = true
  } else if (password.value === '') {
    errorMsg.value = '密码不能为空'
    isLoading.value = false
    isErrorMsgVisible.value = true
  } else if (authCode.value === '') {
    errorMsg.value = '验证码不能为空'
    isLoading.value = false
    isErrorMsgVisible.value = true
  } else {
    //  调用后端接口进行验证
    postLoginByIdCard(username.value, password.value, authCode.value).then(response => {
      console.log('第一次：')
      console.log(response)
      if (response.data.code === '400') {
        errorMsg.value = response.data.msg
        isErrorMsgVisible.value = true
        reloadCode()
      } else if (response.data.code === '200') {
        errorMsg.value = ''
        isErrorMsgVisible.value = false
        //  登录成功，携带 teacherId 后，跳转到教师工作台页面
        loginSuccess(response.data.data)
      } else if (response.data.code === '600') {
        postLoginByPhone(username.value, password.value, authCode.value).then(response => {
          console.log('第二次：')
          console.log(response)
          if (response.data.code === '200') {
            errorMsg.value = ''
            isErrorMsgVisible.value = false
            //  登录成功，携带 teacherId 后，跳转到教师工作台页面
            loginSuccess(response.data.data)
          } else {
            postLoginByNumber(username.value, password.value, authCode.value).then(response => {
              console.log('第三次：')
              console.log(response)
              if (response.data.code === '600') {
                errorMsg.value = response.data.msg
                isErrorMsgVisible.value = true
                reloadCode()
              } else {
                errorMsg.value = ''
                isErrorMsgVisible.value = false
                //  登录成功，携带 teacherId 后，跳转到教师工作台页面
                loginSuccess(response.data.data)
              }
            }).catch(error => {
              console.log(error)
            })
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      isLoading.value = false
    })

  }
}

//  设置 Token 和过期时间戳（过期时间为 1个小时）
const setToken = (data) => {
  const now = new Date()
  const expiresAt = now.getTime() + 60 * 60 * 1000 // 过期时间为当前时间 + 1 小时
  sessionStorage.setItem('token', data.token)
  localStorage.setItem('expiresAt', expiresAt.toString())
  localStorage.setItem('StudentNumber', data.number)
  localStorage.setItem('StudentName', data.name)
}

// 获取 Token（在需要使用 Token 的地方先检查是否过期）
const getToken = () => {
  if (isTokenExpired()) {
    // Token 已过期，执行相应的操作，比如清除 Token 并重新登录
    clearToken()
    return null
  }
  return sessionStorage.getItem('token')
}

//  检查 Token 是否过期
const isTokenExpired = () => {
  const expiresAt = localStorage.getItem('expiresAt')
  // 如果没有设置过期时间，认为已过期
  if (!expiresAt) {
    return true
  }
  const now = new Date().getTime()
  // 比较当前时间和过期时间戳
  return now > parseInt(expiresAt, 10)
}

// 清除 Token 和 过期时间戳
const clearToken = () => {
  sessionStorage.removeItem('token')
  localStorage.removeItem('expiresAt')
  localStorage.removeItem('StudentNumber')
  localStorage.removeItem('StudentName')
}

//  登录成功跳转函数
const loginSuccess = (data) => {
  setToken(data)
  router.push('/student')
}
</script>

<style scoped lang="scss">
.UserLogin {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #F3F6FA;

  .NavBar {
    width: 100%;
    height: 7.5vh;
    background: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 10vw;

    .MarkZhizhi {
      width: 10vw;
      height: auto;
      cursor: pointer;
    }

    .ButtonGroup {
      width: 20vw;
      height: 100%;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-around;
      display: flex;
      .Button {
        width: 10vw;
        margin-left: -20vw;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        border-radius: 10px;
        border: 1px solid #FFFFFF;
        background: #6e6ed9;
        color: #FFFFFF;
        cursor: pointer;
        transition: color 0.2s ease, border 0.2s ease, background 0.2s ease;

        svg {
          width: 20px;
          height: auto;
          padding-left: 1.5vw;
          margin-right: 7px;

          path {
            fill: #FFFFFF;
          }
        }
      }

      .Button:hover {
        border: 1px solid #452ee8;
        background: #6666FF;
      }
    }
  }

  .Content {


    .TeacherForm {
      width: 25vw;
      height: 45vh;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      padding: 20px;
      background: #FFFFFF;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      overflow: hidden;
      transition: opacity 0.25s ease;

      .SwitchBar {
        width: 100%;
        height: 3.5vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        .SwitchItem {
          height: 100%;
          font-family: Consolas;
          font-weight: bolder;
          position: relative;
          text-align: center;
          color: #6666FF;

          .SwitchStrip {
            position: absolute;
            bottom: 0;
            width: 150%;
            height: 2px;
            border-radius: 100px;
            background-color: #6666FF;
            transform: translate(-50%, -50%);
            left: 50%;
          }
        }
      }

      .LoginForm,
      .SignUpForm {
        margin-top: 30px;
        width: 100%;
        flex: 1 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .Code {
          width: 70%;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;

          input {
            padding-right: 20px;
          }

          img {
            display: inline-block;
            cursor: pointer;
          }
        }

        .SignUpForm {
          width: 100%;
          height: 80vh;
        }

        input {
          width: 70%;
          height: 50px;
          margin: 10px 0;
          font-size: 14px;
          padding: 0 10px 0;
          border: none;
          border-radius: 3px;
          border-bottom: 1px solid #E0E0E6;
        }

        input:focus {
          outline: none;
        }

        button {
          width: 60%;
          height: 40px;
          margin-top: 20px;
          font-size: 15px;
          display: flex;
          flex-wrap: nowrap;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 8px;
          border-radius: 10px;
          border: 1px solid #FFFFFF;
          background: #6e6ed9;
          color: #FFFFFF;
          cursor: pointer;
          transition: color 0.2s ease, border 0.2s ease, background 0.2s ease;

          svg {
            width: 20px;
            height: auto;
            margin-right: 7px;

            path {
              fill: #FFFFFF;
            }
          }
        }

        button:hover {
          border: 1px solid #452ee8;
          background: #6666FF;
        }

        button:focus {
          outline: none;
        }

        .ErrorMsg {
          width: 70%;
          color: red;
          font-size: 12px;
          right: 60px;
          bottom: 60px;
          text-align: right;
        }
      }
    }
  }
}
</style>
