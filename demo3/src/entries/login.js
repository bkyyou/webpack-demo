console.log('login.js');

new Promise(resolve => {
  setTimeout(() => {
    resolve(1111)
  }, 1000);
}).then(res => {
  console.log(res)
})

let arr = [1, 2, 3].map(val => {
  console.log('val', val);
  return val;
})

console.log('arr', arr);