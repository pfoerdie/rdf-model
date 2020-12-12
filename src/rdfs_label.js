const _ = require('./__util.js'), model = require('./__model.js');

/**
 * @name rdfs_label
 */
module.exports = new model.rdf_Property({
    '@id': 'rdfs:label',
    '@type': 'rdf:Property'
});