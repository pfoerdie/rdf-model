const model = require('.');

module.exports = class extends model.rdfs_Resource {

    static get type() { return model.rdfs_Class; }
    static get id() { return 'rdfs:Class'; }
    constructor() { throw new Error(`not instanciable`); }
    static [Symbol.hasInstance](instance) {
        return typeof instance === 'function'
            && (model.rdfs_Resource === instance
                || model.rdfs_Resource.isPrototypeOf(instance));
    }

};