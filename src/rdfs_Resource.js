const _ = require('./__util.js'), model = require('./__model.js');

module.exports = class {

    static get type() { return model.rdfs_Class; }
    static get id() { return 'rdfs:Resource'; }

    get [Symbol.species]() { return this.type; }

    constructor({ '@type': type, '@id': id }) {

        _.assert(_.isId(id), 'invalid id', TypeError);
        _.assert(type === new.target.id, 'invalid type', TypeError);

        this.id = id;
        this.type = new.target;

        _.lockProp(this, 'id', 'type');
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