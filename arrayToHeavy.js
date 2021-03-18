// 数组去重

const arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  88,
  45,
  64,
  3523,
  4,
  12341,
  1,
  6,
  78,
  34,
  2,
  1,
  1,
  34,
  6,
  7,
  3,
];

// ES6
console.log([...new Set(arr)]);

// ES5
function uniqueArray(list) {
  if (list.length < 2) return list;
  // 先做了一个排序
  list = list.sort((a, b) => a - b);
  const size = list.length;
  let slow = 0;
  for (let fast = 0; fast < size; fast++) {
    if (list[fast] !== list[slow]) {
      slow++;
      list[slow] = list[fast];
    }
  }
  return list.slice(0, slow + 1);
}
console.log(uniqueArray(arr));
