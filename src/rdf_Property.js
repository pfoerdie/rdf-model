const _ = require('./__util.js'), model = require('./__model.js');

/**
 * @name rdf_Property
 */
module.exports = class extends model.rdfs_Resource {

    static get type() { return model.rdfs_Class; }
    static get id() { return 'rdf:Property'; }

    constructor(param) { 
        super(param);
        // TODO
    }

    // TODO

};