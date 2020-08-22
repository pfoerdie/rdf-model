const model = require('../rdf-model.js');
console.log(model);
const hello = new model['rdfs:Resource']({ '@id': 'hello_world' });
console.log(hello);
console.log(hello.toJSON());
console.log(model['rdfs:Class'].toJSON());
console.log(
    model['rdfs:Class'] instanceof model['rdfs:Class'],
    model['rdfs:Resource'] instanceof model['rdfs:Class']
);
debugger;