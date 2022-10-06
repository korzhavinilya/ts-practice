function composition() {
  const withCompose = compose(repeat, exclaim, upperCase);
  const result = withCompose('hello');
  console.log(result);
}

function upperCase(str: string) {
  return str.toUpperCase();
}

function exclaim(str: string) {
  return str + '!';
}

function repeat(str: string) {
  return `${str} `.repeat(3);
}

type Function<T> = (str: T) => T;

function compose<T>(...functions: Function<T>[]) {
  return (initialValue: T) =>
    functions.reduceRight((result, func) => func(result), initialValue);
}

export default composition;
