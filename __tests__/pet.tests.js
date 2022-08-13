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
        const pet = new Pet('Pippy');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });
});

describe('growUp', () => {
    it('increase age by 1', () => {
        const pet = new Pet('Pippy');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });
});

describe('growUp', () => {
    it('when age invreases by 1, increase hunger by 5, decrease fitness by 3', () => {
        const pet = new Pet('Pippy');

        pet.growUp();

        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Pippy');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });
});

describe('walk', () => {
    it('increases fitness by 8', () => {
        const pet = new Pet('Pippy');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
});