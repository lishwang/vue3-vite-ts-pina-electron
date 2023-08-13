
import { onMounted } from 'vue'

type Options = {
  el: string
}

export default function(options: Options):Promise<{baseUrl: string | null}> {
  // 套一个Promise，或者可以使用callback回去，就可以不使用promise(异步)了
  return new Promise(resolve => {
    onMounted(() => {
      const imgFile: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement;
      // 放在onload里面的东西会等其他所有内容加载完成后再开始加载
      imgFile.onload = (): void => {
        resolve({
          baseUrl: toBase64(imgFile)
        })
      }
    })

    const toBase64 = (el: HTMLImageElement): string => {
      // 创建画布
      const canvas: HTMLCanvasElement = document.createElement('canvas');
      // 指定canvas绘制环境
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      canvas.width = el.width;
      canvas.height = el.height;
      // 绘制图片
      ctx.drawImage(el, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL('image/png'); // 指定导出图片格式
    }
  })
}