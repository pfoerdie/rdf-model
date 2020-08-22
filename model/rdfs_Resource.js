const model = require('.');

module.exports = class {

    static get type() { return model.rdfs_Class; }
    static get id() { return 'rdfs:Resource'; }

    get type() { return model.rdfs_Resource; }
    get [Symbol.species]() { return this.type; }

    constructor({ '@type': type, '@id': id }) {
        // assert(this.type === new.target, `The type of this must match the class.`);
        // assert(this.type.type === Function, `The type of the class must be function.`);

        // if (is.array(type)) {
        //     assert(type.every(is.identifier), `The @type must only contain identifiers.`, TypeError);
        //     assert(type.includes(this.type.id), `The @type must include the classes id.`, TypeError);
        // } else {
        //     assert(is.identifier(type), `The @type must be an identifier.`, TypeError);
        //     assert(type === this.type.id, `The @type must match the classes id.`, TypeError);
        // }

        // assert(is.identifier(id), `The @id must be an identifier.`, TypeError);

        this.id = id;
        // prop.lock(this, 'id');
    }

    toJSON() {
        return {
            '@type': this.type.id,
            '@id': this.id
        };
    }

    static toJSON() {
        return {
            '@type': this.type.id,
            '@id': this.id
        };
    }

};