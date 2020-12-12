const _ = require('./__util.js'), model = require('./__model.js');

/**
 * @name rdfs_Class
 */
module.exports = class extends model.rdfs_Resource {

    static get type() { return model.rdfs_Class; }
    static get id() { return 'rdfs:Class'; }

    constructor() { 
        _.assert(false, 'not instanciable', Error);
    }
    
    static [Symbol.hasInstance](instance) {
        return typeof instance === 'function'
            && (model.rdfs_Resource === instance
                || model.rdfs_Resource.isPrototypeOf(instance));
    }

};