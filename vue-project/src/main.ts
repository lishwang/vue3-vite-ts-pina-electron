import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import CardVue from './views/03-全局组件/CardVue.vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)
// 注册全局组件
app.component('CardVue', CardVue)

app.mount('#app')
