function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

function Dog(name, energy, breed) {
  Animal.call(this, name, energy); // assign name and energy to the this keyword
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // copy the animal methods

Dog.prototype.bark = function () {
  console.log(`Woof Woof`);
  this.energy -= 1;
};

const charlie = new Dog('Charlie', 55, 'Goldendoodle');
charlie.play();
charlie.bark();

console.log(charlie instanceof Animal);
console.log(charlie instanceof Dog);

Dog.prototype.constructor = Dog; // to fix the 42 line
console.log(charlie.__proto__.constructor === Animal);
console.log(charlie.__proto__.constructor === Dog);
