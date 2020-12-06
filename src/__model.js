const _ = require('./__util.js');

exports.instances = new Map();
_.hideProp(exports, 'instances');

exports.rdfs_Resource = require('./rdfs_Resource.js');
exports.rdfs_Class = require('./rdfs_Class.js');
exports.rdf_Property = require('./rdf_Property.js');
exports.rdfs_label = require('./rdfs_label.js');

for(let resource of Object.values(exports)) {
    console.log({id: resource.id});
    _.assert(resource instanceof exports.rdfs_Resource || resource instanceof exports.rdfs_Class, 'invalid resource', TypeError);
    _.assert(!exports.instances.has(resource.id), 'resource id duplicate');
    exports.instances.set(resource.id, resource);
}