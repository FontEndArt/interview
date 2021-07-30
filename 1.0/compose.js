// 函数合并 - 从右向左

// 简单的两个函数合并
// const compose = (f1, f2) => (...args) => f1(f2(...args));

// 迭代方式
const compose = (...fns) => {
  let isFirst = true;
  return (...args) =>
    fns.reduceRight((result, fn) => {
      if (!isFirst) return fn(result);
      isFirst = false;
      return fn(...result);
    }, args);
};

function test1(a) {
  return a + "test1";
}

function test2(a) {
  return a + "test2";
}

function test3(a) {
  return a + "test3";
}

// const test4 = compose(test1, test2);
// console.log(test4(0));

const test4 = compose(test1, test2, test3);
console.log(test4(0));
