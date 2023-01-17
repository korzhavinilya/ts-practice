// There is the class keyword in ES6 that's syntax sugar for the functional constructors

function Animal(name, energy) {
  // const this = Object.create(Animal.prototype)

  this.name = name;
  this.energy = energy;

  // return this
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

const leo = new Animal('Leo', 7);
const snoop = new Animal('Snoop', 10);
