// https://bigfrontend.dev/zh/problem/implement-Promise-allSettled
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
    // your code here
    return new Promise((resolve) => {
        if (!promises) return resolve([]);
        const result = Array(promises.length).fill(undefined);
        const check = () => result.every(item => !!item) && resolve(result);
        check();
        promises.forEach((item, index) => {
            Promise.resolve(item).then(res => {
                result[index] = {
                    status: 'fulfilled',
                    value: res
                }
            }).catch(e => {
                result[index] = {
                    status: 'rejected',
                    reason: e
                }
            }).finally(check)
        })
    })
}