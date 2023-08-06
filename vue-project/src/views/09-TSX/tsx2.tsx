/**
 * TSX使用方法2
 * 可以直接把该文件作为一个组件引用并使用
 */

/**
 * TSX准备工作：
  1、安装：npm install @vitejs/plugin-vue-jsx
  2、在 vite.config.js 文件内配置
    import vueJsx from '@vitejs/plugin-vue-jsx'
    export default defineConfig({
      plugins: [
        vue(),
        vueJsx(),
      ],
    })
 -->
 */

import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      age: 23,
      flag: true
    }
  },
  render() {
    return (<div v-if={this.flag}>{this.age}</div>)
  }
})
