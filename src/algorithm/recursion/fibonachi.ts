// 0,1,1,2,3,5,8,13,21

function recursiveFibonacci(n: number) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

function forFibonacci(n: number) {
  if (n <= 0) {
    return 0;
  }

  if (n <= 2) {
    return 1;
  }

  let t1 = 1;
  let t2 = 1;
  let nextTerm = t1 + t2;

  // we know 3 nums from start
  for (let i = 3; i < n; i++) {
    console.log(`t1 is ${t1}, t2 is ${t2}, next is ${nextTerm}`);
    t1 = t2;
    t2 = nextTerm;
    nextTerm = t1 + t2;
  }
  return nextTerm;
}

function whileFibonacci(n: number) {
  if (n <= 0) {
    return 0;
  }

  if (n <= 2) {
    return 1;
  }

  let t1 = 1;
  let t2 = 1;
  let nextTerm = t1 + t2;
  let i = 3;

  while (i < n) {
    console.log(`t1 is ${t1}, t2 is ${t2}, next is ${nextTerm}`);
    t1 = t2;
    t2 = nextTerm;
    nextTerm = t1 + t2;
    i++;
  }

  return nextTerm;
}

export { recursiveFibonacci, forFibonacci, whileFibonacci };
