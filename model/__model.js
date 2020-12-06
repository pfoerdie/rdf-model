const _ = require('./__util.js');

exports.instances = new Map();
_.hideProp(exports, 'instances');

exports.rdfs_Resource = require('./rdfs_Resource.js');
exports.rdfs_Class = require('./rdfs_Class.js');
exports.rdf_Property = require('./rdf_Property.js');