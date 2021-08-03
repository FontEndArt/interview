// 数组扁平化

function flat(arr) {
  // 递归 稳定
  //   function dfs(values) {
  //     const res = [];
  //     for (value of values) {
  //       Array.isArray(value) ? res.push(...dfs(value)) : res.push(value);
  //     }
  //     return res;
  //   }
  //   return dfs(arr);
  // 栈 稳定倒序
  //   const res = [];
  //   const stack = [arr];
  //   while (stack.length) {
  //     const value = stack.pop();
  //     if (Array.isArray(value)) {
  //       stack.push(...value);
  //     } else {
  //       res.push(value);
  //     }
  //   }
  //   return res;
  // 队列 不稳定，外层优先
  //   const res = [];
  //   const queue = [arr];
  //   while (queue.length) {
  //     const value = queue.shift();
  //     if (Array.isArray(value)) {
  //       queue.push(...value);
  //     } else {
  //       res.push(value);
  //     }
  //   }
  //   return res;
  // reduce dfs 稳定
  //   function dfs(values) {
  //     return values.reduce(
  //       (res, item) =>
  //         Array.isArray(item) ? [...res, ...dfs(item)] : [...res, item],
  //       []
  //     );
  //   }
  //   return dfs(arr);
  // 自身作为一个容器去迭代 - 不推荐
  if (!arr.length) return;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

const res = flat([
  1,
  2,
  3,
  4,
  [32, 23, 45, 5, 6, 4],
  21,
  3,
  1,
  23,
  23,
  [2332, 23, [324, 234, 5, 6]],
  7,
  8,
]);

console.log(res);
