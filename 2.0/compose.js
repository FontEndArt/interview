// 函数组合 compose

// 不带首次
// const compose = (...funs) => (args) => funs.reduceRight((res, fun) => fun(res), args);

// 带首次
const compose = (...funs) => {
  if (!funs.length) return (x) => x;

  var isFirst = true;
  return (...args) =>
    funs.reduceRight((res, fun) => {
      if (!isFirst) return fun(res);
      isFirst = false;
      return fun(...res);
    }, args);
};

// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
// const a = compose(fn1, fn2, fn3, fn4);
const a = compose();
console.log(a(1)); // 1+4+3+2+1=11
