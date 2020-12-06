const model = require('../rdf-model.js');

describe('rdfs_Class', () => {

    test('.id = "rdfs:Class"', () => {
        expect(model.rdfs_Class).toHaveProperty('id', 'rdfs:Class');
    });

    test('.type = rdfs_Class', () => {
        expect(model.rdfs_Class).toHaveProperty('type', model.rdfs_Class);
    });

    test('instanceof rdfs_Class', () => {
        expect(model.rdfs_Class).toBeInstanceOf(model.rdfs_Class);
    });

});