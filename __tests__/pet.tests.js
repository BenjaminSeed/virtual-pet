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

describe('feed', () => {
    it('reduce hunger by 3 when fed', () => {
        const pet = new Pet('Pippy');

        pet.hunger = 6;
        pet.feed();

        expect(pet.hunger).toEqual(3);
    });
});
    
    describe('feed', () => {
    it('reduce hunger by 3 when fed', () => {
        const pet = new Pet('Pippy');

        pet.hunger = 9;
        pet.feed();

        expect(pet.hunger).toEqual(6);
    });
});

    describe('feed', () => {
    it('reduce hunger by 3 when fed', () => {
        const pet = new Pet('Pippy');

        pet.hunger = 5;
        pet.feed();

        expect(pet.hunger).toEqual(2);
    });
})

describe('checkup', () => {
    it('walk pet if fitness less than 3', () => {
        const pet = new Pet('Pippy');

        pet.fitness = 3;
        pet.checkup();

        expect(pet.checkup()).toEqual('I need a walk!');
    });
})

describe('checkup', () => {
    it('return i am hungry string if 5 hunger', () => {
        const pet = new Pet('Pippy');

        pet.hunger = 5;
        pet.checkup();

        expect(pet.checkup()).toEqual('I am Hungry!')
    });
})

describe('checkup', () => {
    it('returns string if fitness 3 or less and hunger is 5 or more', () => {
        const pet = new Pet('Pippy');

        pet.hunger = 5;
        pet.fitness = 3;
        pet.checkup();

        expect(pet.checkup()).toEqual('I am hungry AND I need a walk!')
    });
})

describe('checkup', () => {
    it('returns string I feel great if none of the above are true', () => {
        const pet = new Pet('Pippy');
         expect(pet.checkup()).toEqual('I feel great!')
    });
})