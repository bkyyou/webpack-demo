// onmessage = function (e) {
//   // onmessage获取传入的初始值
//   let sum = e.data;
//   for (let i = 0; i < 200000; i++) {
//     for (let i = 0; i < 10000; i++) {
//       sum += Math.random()
//     }
//   }
//   // 将计算的结果传递出去
//   postMessage(sum);
// }

onmessage = function (e) {
  console.log('e', e);
  // 使用OffscreenCanvas（离屏Canvas）
  let canvas = e.data.canvas;
  // 获取绘图上下文
  let ctx = canvas.getContext('2d');
  // 绘制一个圆弧
  ctx.beginPath() // 开启路径
  ctx.arc(150, 75, 50, 0, Math.PI*2);
  ctx.fillStyle="#1989fa";//设置填充颜色
  ctx.fill();//开始填充
  ctx.stroke();
}