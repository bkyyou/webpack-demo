// let oldLog = console.log;

// console.log = function(...argv) {
//   if (process.env.NODE_ENV == 'production') {
//     oldLog.apply(console, ...argv)
//   }
// }

// console.log = function(a, b, ...argv) {
//   if (process.env.NODE_ENV == 'production') {
//     oldLog.apply(console, ...argv)
//   }
// }

// function add(a, b) {
//   return a + b;
// }

// export default add
// module.exports = {
//   add
// }
// exports.add = add
export function add(a, b) {
  console.log(a + b);
  return a + b;
}
export function reduc(a, b) {
  return a - b;
}