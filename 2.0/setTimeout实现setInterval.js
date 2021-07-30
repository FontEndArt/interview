// setTimeout实现setInterval
// const timer1 = setInterval(() => console.log("setInterval"), time);

function modeSetInterval(fun, time) {
  let timer = null;
  function interval() {
    fun();
    timer = setTimeout(interval, time);
  }
  interval();
  return function clear() {
    clearTimeout(timer);
  };
}

let clear = modeSetInterval(() => console.log("setTimeout"), 1000);
