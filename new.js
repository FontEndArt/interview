// 手写new
function test(a) {
  return {
    a,
  };
}

test.prototype.b = 2;

function diyNew() {
  var fn = Array.prototype.shift.call(arguments);
  var obj = Object.create(fn.prototype);
  var res = fn.apply(obj, arguments);
  return res instanceof Object ? res : obj;
}

console.log(new test(132));
console.log(diyNew(test, 132));
