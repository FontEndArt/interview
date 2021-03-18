// 防抖 多次触发事件，仅最后一次触发函数
// function debounce(func, wait) {
//   var timeout = null;
//   return function () {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, arguments), wait); // 严格模式下不用arguments
//   };
// }

// 防抖立即执行版，多次触发事件，在第一次触发立即执行函数，后面wait时间内触发的都无效
function debounce(func, wait, immediate = false) {
  var timeout, result;

  return function () {
    var content = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      //如果执行过，那么就不执行了
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(content, args);
    } else {
      timeout = setTimeout(() => {
        result = func.apply(content, args);
      }, wait);
    }
    return result;
  };
}

// 取消
debounce.cancel = () => {
  clearTimeout(timeout);
  timeout = null;
};
const button = document.getElementById("button");
button.addEventListener("click", debounce(console.log, 1000, true));
