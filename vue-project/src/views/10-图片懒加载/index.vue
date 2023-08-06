<template>
  <div>
    <img v-for="item in arr" width="360" height="500" v-lazy="item" alt="" />
  </div>
</template>
<script setup lang="ts">
/** import.meta.glob 懒加载模式引入资源，得到一个函数，需要自己调用
 * 类似于
 * let modules = {
 *    'xxxx': () => import('xxxx'),
 * }
 */
/** import.meta.globEager 静态加载引入资源，得到一个引入的模块
 * 类似于
 * import xxx from 'xxx'
 */
// 静态加载引入资源1
let imgList: Record<string, { default: string }> = import.meta.globEager('./imgs/*.*')
// 静态加载引入资源2
// let imgList: Record<string, { default: string }> = import.meta.glob('./imgs/*.*', { eager: true })
console.log(imgList)
// 懒加载引入资源
// let imgList = import.meta.glob('./imgs/*.*')
let arr = Object.values(imgList).map((v) => v.default)
console.log(arr)

// 实现图片懒加载（通过js的方法监听某个元素是否在可视范围内）
// 自定义指令实现（指令名称以V开头）
// el-指令绑定的元素；bingding-指令元素传递的参数
let VLazy: Directive<HTMLImageElement, string> = async (el, bingding) => {
  // 默认展示的图片
  const defaultImg = await import('./imgs/10072416175a3461d1905f89a0.jpg')
  el.src = defaultImg.default
  // IntersectionObserver js方法，用于监听某个元素是否已经在页面可视范围内
  const observer = new IntersectionObserver((enr) => {
    console.log(enr)
    console.log(enr[0], bingding.value)
    // intersectionRatio - 当前监听元素在页面可视范围内露出的比例
    if (enr[0].intersectionRatio > 0) {
      setTimeout(() => {
        el.src = bingding.value
        // 取消监听
        observer.unobserve(el)
      }, 500)
    }
  })
  // 监听元素
  observer.observe(el)
}
</script>

<style scoped></style>
