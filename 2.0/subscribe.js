// 发布订阅模式

class Event {
  _list = [];
  on(key, fn) {
    this._list.push({ key, fn });
  }
  emit(key, data) {
    const cb = this._list.find((item) => item.key === key);
    cb && cb.fn(data);
  }
}

const e = new Event();

e.on("first", (data) => {
  console.log(`${data}`);
});
e.on("second", (data) => {
  console.log(`${data}`);
});

e.emit("first", "发送第一个数据");
e.emit("second", "发送第二个数据");
e.emit("first", "发送第一个数据");
