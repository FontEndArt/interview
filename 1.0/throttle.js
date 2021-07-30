// // 节流，如何做到立即执行
// function throttle(func, wait) {
//   var timer = null;
//   return function () {
//     if (!timer) {
//       timer = setTimeout(() => {
//         func.apply(this, [...arguments]); // 严格模式下不用arguments
//         timer = null;
//       }, wait);
//     }
//   };
// }

// 节流，立即执行
function throttle(func, wait, immediate = false) {
  var timer = null;
  var flag = immediate; // 立即执行的flag

  return function () {
    if (flag) {
      func.apply(this, arguments);
      flag = false;
    }
    if (!timer) {
      timer = setTimeout(() => {
        flag = true;
        timer = null;
      }, wait);
    }
  };
}
// 取消
throttle.cancel = () => {
  clearTimeout(timer);
  timer = null;
};
const button = document.getElementById("button");
button.addEventListener("click", throttle(console.log, 1000, true));
