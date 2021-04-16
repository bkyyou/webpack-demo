
import('./lazyChild1.js').then(res => {
  console.log(res.default);
})

import('./lazyChild2.js').then(res => {
  console.log(res.default);
})

module.exports = 'lazy';