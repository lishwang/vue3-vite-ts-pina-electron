
// 事件名
type ParamsKey = string | number | symbol

type BusClass = {
  emit: (name: ParamsKey) => void
  on: (name: ParamsKey, callback: Function) => void
}

// 事件与回调函数映射，一对多
type List = {
  [key: ParamsKey]: Array<Function>
}

class Bus implements BusClass {
  list: List // 事件映射
  constructor() {
    this.list = {}
  }
  // 收集依赖（收集事件）
  on(name: ParamsKey, callback: Function) {
    const fn: Array<Function> = this.list[name] || []
    fn.push(callback)
    this.list[name] = fn
  }
  // 触发依赖（触发事件）
  emit(name: ParamsKey, ...args: Array<any>) {
    const eventList: Array<Function> = this.list[name]
    eventList.forEach(fn => {
      fn.apply(this, args)
    })
  }
}

export default new Bus()