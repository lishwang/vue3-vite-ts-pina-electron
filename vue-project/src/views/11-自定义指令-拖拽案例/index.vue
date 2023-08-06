<template>
  <div v-move class="box">
    <div class="header"></div>
    <div>
      事件一：小满在10w粉丝的时候cos女装
      <br />
      事件二：小满的QQ群有一只被群友称为洛佬的天才少年，有问题多问他，准没错
      <br />
      事件三：小满的QQ群号为：855139333
      <br />
      事件四：小满群里有个还在学HTML5的菜鸡小余，没事请多帮帮他
    </div>
  </div>
</template>

<script setup lang="ts">
import { Directive } from 'vue'
const vMove: Directive<any, void> = {
  //定义类型为Directive，如果没有返回值我们就定义为void
  mounted(el: HTMLElement) {
    let moveEl = el.firstElementChild as HTMLElement
    //TS写法：let moveEl:HTMLDivElement = el.firstElementChild as HTMLElement;
    const mouseDown = (e: MouseEvent) => {
      //mouseDown定义在这里
      //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
      console.log(e.clientX, e.clientY, '-----起始', el.offsetLeft) //获取坐标值
      let X = e.clientX - el.offsetLeft //减去初始值
      let Y = e.clientY - el.offsetTop
      const move = (e: MouseEvent) => {
        el.style.left = e.clientX - X + 'px'
        el.style.top = e.clientY - Y + 'px'
        console.log(e.clientX, e.clientY, '---改变')
      }
      document.addEventListener('mousemove', move) //鼠标按下
      document.addEventListener('mouseup', () => {
        //鼠标抬起
        document.removeEventListener('mousemove', move) //鼠标抬起就清除掉mousemove事件
      })
    }
    //当我们对着header区域按下鼠标准备移动，绑定事件进行调用
    moveEl.addEventListener('mousedown', mouseDown) //mouseDown事件定义在上方，mouseDown是参数一的一个事件类型，下方有事件类型大全
  }
}
</script>

<style lang="scss">
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 200px;
  border: 1px solid #ccc;
  .header {
    height: 20px;
    background: black;
    cursor: move;
  }
}
</style>
