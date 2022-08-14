const MAXIMUM_FITNESS = 10
const WALKING = 4
const MAXIMUM_HUNGER = 0
const REDUCE_HUNGER = 3

function Pet(name, age) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}
// this.name = name, this refers to the object returned from
// by calling new Pet(), so this.name refers to the name property of that object

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
   if ((this.fitness + WALKING) <= MAXIMUM_FITNESS ) {
    this.fitness += WALKING;
    } else {
        this.fitness = MAXIMUM_FITNESS;
   }
};

Pet.prototype.feed = function() {
    if ((this.hunger - REDUCE_HUNGER) <= MAXIMUM_HUNGER) {
        this.hunger -= REDUCE_HUNGER;
    } else {
        this.hunger -= REDUCE_HUNGER;
    }
};


module.exports = Pet;