/**
 * TSX使用方法1
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

export default function() {
  return (<div>tsx写法</div>)
}
