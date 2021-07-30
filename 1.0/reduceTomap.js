// 用reduce实现map

function reduceTomap(arr, fn) {
  return arr.reduce((acc, cur, i) => {
    acc[i] = fn(cur);
    return acc;
  }, []);
}

console.log(reduceTomap([1, 2, 3, 4], (a) => a + 1));
