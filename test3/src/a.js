let count = 1;

export default {
  count,
  add: (a, b) => {
    count++;
    console.log('count', count)
    return a + b;
  },
  getCount: () => {
    return count
  }
}