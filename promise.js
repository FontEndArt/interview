function Promise(func) {
  this.handlers = [];
  this.errorHandlers = [];

  function resolve(...args) {
    setTimeout(() => this.handlers.forEach((handler) => handler(...args)));
  }
  function reject(...args) {
    setTimeout(() => this.errorHandlers.forEach((handler) => handler(...args)));
  }

  func.call(this, resolve.bind(this), reject.bind(this));
}

Promise.prototype.then = function (func) {
  this.handlers.push(func);
  return this;
};

Promise.prototype.catch = function (func) {
  this.errorHandlers.push(func);
  return this;
};

Promise.prototype.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      p.then(resolve, reject);
    });
  });
};

Promise.prototype.all = function (promises) {
  return new Promise((resolve, reject) => {
    let len = promises.length;
    let res = [];
    promises.forEach((p, i) => {
      p.then((r) => {
        // 只剩最后一个时候resolve
        if (len === 1) {
          resolve(res);
        } else {
          res[i] = r;
        }
        len--;
      }, reject);
    });
  });
};
