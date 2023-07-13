
<!-- BEM 类名规范 - 测试文件  -->

<template>
  <div class="wls-aaa">
    BEM 类名规范-块
    <div class="wls-aaa__bbb">
      BEM 类名规范-块内元素
    </div>
    <div class="wls-aaa--ccc">
      BEM 类名规范-块内元素的修饰
    </div>
  </div>
  <div class="ddd">
    测试全局混入一个普通样式（相当于样式抽离到公共样式文件内）
  </div>
</template>

<style lang='scss'>
.ddd {
  @include bfc; // 此行 仅用来测试样式抽离，与BEM架构无关
}
@include b(aaa) {
  @include bfc; // 此行 仅用来测试样式抽离，与BEM架构无关
  color: red;
  font-size: 30px;
  @include e(bbb) {
    color: blue;
    font-weight: 700;
    font-size: 20px;
  }
  @include m(ccc) {
    background-color: #369;
  }
}
</style>
