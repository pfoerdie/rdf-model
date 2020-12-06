const model = require('../rdf-model.js');

describe('rdf:Property', () => {

    test('.id = "rdf:Property"', () => {
        expect(model.rdf_Property).toHaveProperty('id', 'rdf:Property');
    });

    test('.type = rdfs:Class', () => {
        expect(model.rdf_Property).toHaveProperty('type', model.rdfs_Class);
    });

    test('instanceof rdfs:Class', () => {
        expect(model.rdf_Property).toBeInstanceOf(model.rdfs_Class);
    });

});