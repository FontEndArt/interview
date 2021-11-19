// https://bigfrontend.dev/zh/problem/implement-Object.is
/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a, b) {
    // your code here
    if (a === 0 && a === b) {
        return 1 / a === 1 / b; // 1/0 Infinity 1/-0 -Infinity
    }
    if (a.toString() === 'NaN' && b.toString() === 'NaN') {
        return true;
    }
    return a === b
}