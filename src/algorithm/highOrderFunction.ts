function highOrderFunction() {
  const countedAdd = withCountLog(add);

  countedAdd(52, 4);
  countedAdd(63, 5);
  countedAdd(74, 6);
}

const withCountLog = (fn: any) => {
  let count = 0;

  return (...args: number[]) => {
    console.log(`Called ${++count} times`);
    return fn(...args);
  };
};

const add = (x: number, y: number) => x + y;

export default highOrderFunction;
