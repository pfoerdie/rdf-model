const 
    util = require('util'),
    path = require('path');

exports.promisify = util.promisify;
exports.joinPath = path.join;

exports.lockProp = function(obj, ...keys) {
    const lock = { configurable: false };
    for(let key of keys) {
        Object.defineProperty(obj, key, lock);
    }
};

exports.hideProp = function(obj, ...keys) {
    const hide = { enumerable: false };
    for(let key of keys) {
        Object.defineProperty(obj, key, hide);
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