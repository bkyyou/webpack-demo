let oldLog = console.log;

console.log = function(...argv) {
  if (process.env.NODE_ENV == 'production') {
    oldLog.apply(console, ...argv)
  }
}

// console.log = function(a, b, ...argv) {
//   if (process.env.NODE_ENV == 'production') {
//     oldLog.apply(console, ...argv)
//   }
// }