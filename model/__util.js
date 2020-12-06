exports.lockProp = function(obj, ...keys) {
    const lock = { configurable: false };
    for(let key of keys) {
        Object.defineProperty(obj, key, lock);
    }
};

exports.assert = function(value, errMsg = '', errType = Error) {
    if(!value) {
        const err = new errType(errMsg);
        Error.captureStackTrace(err, exports.assert);
        throw err;
    }
};

exports.isString = function(value) {
    return typeof value === 'string';
};

const RE_test_Id = /^\S+$/;
exports.isId = function(value) {
    return RE_test_Id.test(value);
};