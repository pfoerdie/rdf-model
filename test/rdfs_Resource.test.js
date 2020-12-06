const model = require('../rdf-model.js');

describe('rdfs:Resource', () => {

    test('.id = "rdfs:Resource"', () => {
        expect(model.rdfs_Resource).toHaveProperty('id', 'rdfs:Resource');
    });

    test('.type = rdfs:Class', () => {
        expect(model.rdfs_Resource).toHaveProperty('type', model.rdfs_Class);
    });

    test('instanceof rdfs:Class', () => {
        expect(model.rdfs_Resource).toBeInstanceOf(model.rdfs_Class);
    });

});

describe('rdfs:Resource<ex:Test>', () => {

    const ex_Test = new model.rdfs_Resource({ '@type': 'rdfs:Resource', '@id': 'ex:Test' });

    test('.id = "ex:Test"', () => {
        expect(ex_Test).toHaveProperty('id', 'ex:Test');
    });

    test('.type = rdfs:Resource', () => {
        expect(ex_Test).toHaveProperty('type', model.rdfs_Resource);
    });

    test('instanceof rdfs:Resource', () => {
        expect(ex_Test).toBeInstanceOf(model.rdfs_Resource);
    });

});