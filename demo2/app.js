
var fn = (resovle) => {
  setTimeout(() => {
    resovle(111)
  }, 2000);
}

const a = 1;

let b = a + a;

// new Promise(resolve => {
//   resolve()
// }).then(res => {})

// fn();

const btn = document.getElementById('btn');
console.log('btn', btn);
btn.addEventListener('click', () => {
  b = b + a;
  console.log(b);
  new Promise(resolve => {
    fn(resolve)
    // resolve(111)
  }).then(res => {
    console.log('res', res);
    b = b + a + res;
  })
});

console.log(b);