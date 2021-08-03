// 发布订阅模式

// 简单版本
// class Event {
//   _list = [];
//   on(key, fn) {
//     this._list.push({ key, fn });
//   }
//   emit(key, data) {
//     const cb = this._list.find((item) => item.key === key);
//     cb && cb.fn(data);
//   }
// }

// const e = new Event();

// e.on("first", (data) => {
//   console.log(`${data}`);
// });
// e.on("second", (data) => {
//   console.log(`${data}`);
// });

// e.emit("first", "发送第一个数据");
// e.emit("second", "发送第二个数据");
// e.emit("first", "发送第一个数据");

// 允许一个事件名称绑定多个函数
class Event {
  _events = {};
  on(key, fn) {
    if (!this._events[key]) {
      this._events[key] = new Set([fn]);
    }
    this._events[key].add(fn);
  }
  emit(key, ...args) {
    if (!this._events[key]) return;
    const list = this._events[key];
    list.forEach((fn) => fn(...args));
  }
  off(key, fn) {
    if (!this._events[key]) return;
    if (this._events[key].has(fn)) {
      this._events[key].delete(fn);
    }
  }
}
const first1 = (data) => console.log(`1${data}`);
const first2 = (data) => console.log(`2${data}`);
const second = (data) => console.log(`${data}`);

const e = new Event();
e.on("first", first1);
e.on("second", second);
e.emit("first", "发送第一个数据");
e.emit("second", "发送第二个数据");
e.on("first", first2);
e.emit("first", "发送第一个数据");
e.off("first", first2);
e.emit("first", "发送第一个数据");
