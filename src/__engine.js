const _ = require('./__util.js'), model = require('./__model.js');

const instances = new Map();

/**
 * @param {model.rdfs_Resource|model.rdfs_Class} resource
 * @template R
 * @returns {R}
 */
exports.addResource = function(resource) {
    return resource;
}

const f = exports.addResource(model.rdf_Property);