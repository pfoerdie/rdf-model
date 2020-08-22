for (let elem of Object.values(require('./model'))) {
    exports[elem.id] = elem;
}
// Object.assign(exports, require('./model'));