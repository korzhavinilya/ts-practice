function* generateId() {
  let id = 1;
  while (true) {
    // The yield operator is used to pause and resume a generator function.
    const increment = yield id;
    console.log('INCREMENT', increment);

    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}

const idGenerator = generateId();
console.log(idGenerator.next());
console.log(idGenerator.next(1));
// console.log(idGenerator.throw(new Error('123')));
console.log(idGenerator.next());
