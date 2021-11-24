const handleValue = (value) => {
    if (typeof value === 'string') {
        return value;
    }
    if (value === undefined) {
        return 'undefined';
    }
    if (value.toString) {
        return value.toString();
    }
    if (isNaN(value)) {
        return 'NaN';
    }
    return Object.prototype.toString.call(value);
}

class MyURLSearchParams {
    /**
     * @params {string} init
     */
    constructor(init) {
        init = init.replace(/^\?/, '');
        // 初始化params
        this.params = init.split('&').map(item => item.split('='));
    }

    /** 
     * @params {string} name
     * @params {any} value
     */
    append(name, value) {
        this.params.push([name, handleValue(value)]);
    }

    /**
     * @params {string} name
     */
    delete(name) {
        this.params = this.params.filter(([_name]) => _name !== name)
    }

    /**
     * @returns {Iterator} 
     */
    entries() {
        return this.params[Symbol.iterator]()
    }

    /**
     * @param {(value, key) => void} callback
     */
    forEach(callback) {
        this.params.forEach(([_name, _value]) => callback(_value, _name))
    }

    /**
     * @param {string} name
     * returns the first value of the name
     */
    get(name) {
        return (this.params.find(([paramsName]) => paramsName === name) || [, null])[1];
    }

    /**
     * @param {string} name
     * @return {string[]}
     * returns the value list of the name
     */
    getAll(name) {
        const res = [];
        for (const [_name, _value] of this.params) {
            name === _name && res.push(_value)
        }
        return res;
    }

    /**
     * @params {string} name
     * @return {boolean}
     */
    has(name) {
        return !!this.params.find(([_name]) => _name === name)
    }

    /**
     * @return {Iterator}
     */
    keys() {
        return this.params.map(([_key]) => _key);
    }

    /**
     * @param {string} name
     * @param {any} value
     */
    set(name, value) {
        let i = 0;
        let isSet = false;
        while (i < this.params.length) {
            if (this.params[i][0] === name) {
                if (isSet) {
                    this.params.splice(i, 1);
                    continue;
                }
                this.params[i][1] = handleValue(value);
                isSet = true;
            }
            i++;
        }
        if (!isSet) {
            this.params.push([name, handleValue(value)])
        }
    }

    // sor all key/value pairs based on the keys
    sort() {
        this.params.sort((a, b) => a[0].localeCompare(b[0]));
    }

    /**
     * @return {string}
     */
    toString() {
        return this.params.map(item => item.join('=')).join('&')
    }

    /**
     * @return {Iterator} values
     */
    values() {
        return this.params.map(([_, _value]) => _value);
    }
}