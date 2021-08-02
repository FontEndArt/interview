function arrayToHeavy(arr) {
  //   set + 解构 稳定
  return [...new Set(arr)];
  //
  // 稳定
  //   const res = [];
  //   const hash = new Set(); // obj同理
  //   arr.forEach((item) => {
  //     if (!hash.has(item)) {
  //       hash.add(item);
  //       res.push(item);
  //     }
  //   });
  // return res;
  //
  // 先排序再根据指针，不稳定
  //   const sortArr = arr.sort((a, b) => a - b);
  //   let l = 0;
  //   let r = 1;
  //   const res = [sortArr[0]];
  //   while (sortArr.length !== r) {
  //     if (sortArr[l] !== sortArr[r]) {
  //       l = r;
  //       res.push(sortArr[r]);
  //     }
  //     r++;
  //   }
  //   return res;
  //
  // 用hash 原数组基础上, 不稳定
  //   let hash = new Set();
  //   let last = arr.length - 1;
  //   let i = 0;
  //   while (i <= last) {
  //     if (hash.has(arr[i])) {
  //       [arr[i], arr[last]] = [arr[last], arr[i]];
  //       last--;
  //     } else {
  //       hash.add(arr[i]);
  //       i++;
  //     }
  //   }
  //   return arr.slice(0, i);
}

const data = arrayToHeavy([
  2, 3, 4, 4, 5, 6, 7, 6, 8, 78, 6, 4, 234, 123, 43, 456, 65, 7, 567, 534, 523,
  4, 12334, 12334,
]);

console.log(data);
