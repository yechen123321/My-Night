import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/main.scss'
import pinia from '@/stores/index'
import Element from 'element-plus'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Element)
app.mount('#app')
