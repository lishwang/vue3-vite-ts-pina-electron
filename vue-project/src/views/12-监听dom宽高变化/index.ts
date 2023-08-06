// 实现一个函数同时支持 hook 和 自定义指令，去监听 dom 宽高的变化

// js 自带的三种方法都可以实现这种效果
// IntersectionObserver 主要侦听元素是否在视口内
// MutationObserver 主要侦听子集的变化，还有属性的变化，以及增删改查
// ResizeObserver 主要侦听元素宽高的变化

import type {App} from 'vue'

function useResize (el: HTMLElement, callback: Function) {
  const resize = new ResizeObserver((entries) => {
    callback(entries[0].contentRect)
  })
  resize.observe(el)
}


const install = (app: App) => {
  app.directive('resize', {
    mounted(el, binding) {
      useResize(el, binding.value)
    }
  })
}

useResize.install = install;

export default useResize