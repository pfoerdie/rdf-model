const model = require('../rdf-model.js');

describe('rdfs:label', () => {

    test('.id = "rdfs:label"', () => {
        expect(model.rdfs_label).toHaveProperty('id', 'rdfs:label');
    });

    test('.type = rdf:Property', () => {
        expect(model.rdfs_label).toHaveProperty('type', model.rdf_Property);
    });

    test('instanceof rdf:Property', () => {
        expect(model.rdfs_label).toBeInstanceOf(model.rdf_Property);
    });

});