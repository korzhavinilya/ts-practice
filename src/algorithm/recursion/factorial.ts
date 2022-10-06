function recursiveFactorial(n: number) {
  if (n === 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

function factorial(n: number) {
  let i = n;
  let sum = 1;
  while (i > 0) {
    sum *= i;
    i--;
  }
  return sum;
}

export { factorial, recursiveFactorial };
