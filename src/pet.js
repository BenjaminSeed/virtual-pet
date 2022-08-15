const MAXIMUM_FITNESS = 10
const WALKING = 4
const MAXIMUM_HUNGER = 0
const REDUCE_HUNGER = 3
const MINIMUM_FITNESS = 3

function Pet(name, age) {

    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

   Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  };

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

const run = 'I need a walk!';
const feedMe = 'I am Hungry!';
const hungryWalk = 'I am hungry AND I need a walk!';

Pet.prototype.checkup = function() {
    if (this.hunger >= 5 && this.fitness <= 3) {
        return hungryWalk
    }
    if (this.fitness <= MINIMUM_FITNESS) {
        return run
    }
   
    if (this.hunger >= 5) {
        return feedMe
    } 
    
   {
    return 'I feel great!'
    }

};

Pet.prototype.isAlive = function() {

}



module.exports = Pet;