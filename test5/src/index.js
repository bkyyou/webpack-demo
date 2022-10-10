import Worker from "worker-loader!./worker";

// // 获取计算开始的时间
// let start = performance.now();
// // 新建一个线程
// let worker = new Worker();
// // 线程之间通过postMessage进行通信
// worker.postMessage(0);
// // 监听message事件
// worker.addEventListener("message", (e) => {
//   // 关闭线程
//   worker.terminate();
//   // 获取计算结束的时间
//   let end = performance.now();
//   // 得到总的计算时间
//   let durationTime = end - start;
//   console.log("计算结果:", e.data);
//   console.log(`代码执行了 ${durationTime} 毫秒`);
// });

let worker = new Worker();
let htmlCanvas = document.getElementById("myCanvas");
// 使用canvas的transferControlToOffscreen函数获取一个OffscreenCanvas对象
let offscreen = htmlCanvas.transferControlToOffscreen();
// 注意：第二个参数不能省略
worker.postMessage({canvas: offscreen}, [offscreen]);

