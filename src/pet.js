function Pet(name, age) {
    this.name = name;
    this.age = 0;
}
// this.name = name, this refers to the object returned from
// by calling new Pet(), so this.name refers to the name property of that object

Pet.prototype.growUp = function() {
    this.age += 1;
};

module.exports = Pet;