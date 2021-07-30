// 柯里化
// 参数满足数量的时候执行结果
function curry(fn) {
  const ctx = this;
  function inner(...args) {
    if (args.length === fn.length) return fn.call(ctx, ...args);
    return (...innerArgs) => inner.call(ctx, ...args, ...innerArgs);
  }
  return inner;
}

// 参数为空的时候才执行结果
function currying(fn) {
  let args = [];
  return function temp(...newArgs) {
    if (newArgs.length) {
      args = [...args, ...newArgs];
      return temp;
    } else {
      let val = fn.apply(this, args);
      args = []; // 保证再次调用的时候清空
      return val;
    }
  };
}

function test(a, b, c) {
  console.log(a, b, c);
}

const f1 = curry(test)(1);
const f2 = f1(2);
f2(3);
