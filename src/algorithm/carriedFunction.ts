// Каррирование – это трансформация функций таким образом, чтобы они принимали
// аргументы не как f(a, b, c), а как f(a)(b)(c).

type Function<T> = (...args: any) => T;

function sum(a: number, b: number, c: number) {
  return a + b + c;
}

function carriedFunction() {
  let curriedSum = curry(sum);
  console.log(curriedSum(1, 2, 3));
  console.log(curriedSum(1, 2)(3));
  console.log(curriedSum(1)(2)(3));
}

function curry<T>(func: Function<T>) {
  return function curried(this: unknown, ...args: T[]) {
    if (args.length >= func.length) {
      // return func.apply(this, args);
      return () => func.apply(this, args);
    } else {
      return (...args2: T[]) => {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

export default carriedFunction;
