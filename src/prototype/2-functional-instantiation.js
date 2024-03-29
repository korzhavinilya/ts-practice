// Recreating functions every time when we create a new animal, need to create a function wit shared methods

function Animal(name, energy) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;

  animal.eat = function (amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  };

  animal.sleep = function (length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  };

  animal.play = function (length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  };

  return animal;
}

const leo = Animal('Leo', 7);
const snoop = Animal('Snoop', 10);
