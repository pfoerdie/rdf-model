const model = require('../rdf-model.js');
console.log(model);

const hello = new model.rdfs_Resource({ '@id': 'hello_world', '@type': 'rdfs:Resource' });
console.log(hello);

console.log(hello.toJSON());
console.log(model.rdfs_Class.toJSON());

debugger;