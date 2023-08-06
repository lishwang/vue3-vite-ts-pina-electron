import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import CardVue from './views/03-全局组件/CardVue.vue'
import useResize from './views/12-监听dom宽高变化' // 测试 12-xx 文件内容
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(useResize) // 测试 12-xx 文件内容
// 注册全局组件
app.component('CardVue', CardVue)

app.mount('#app')
