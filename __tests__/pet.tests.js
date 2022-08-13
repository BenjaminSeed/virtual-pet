const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Pippy')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Pippy');

        expect(pet.name).toEqual('Pippy');
    });
    it('it has an initial age of 0', () => {
        const pet = new Pet('Pippy');

        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Pippy')

        pet.growUp();

        expect(pet.age).toEqual(1);
    });
});