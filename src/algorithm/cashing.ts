function cacheFunction(fn) {
  const cache = {};
  return function (n: number) {
    if (cache[n]) {
      console.log('Took from cache');
      return cache[n];
    }
    let result = fn(n);
    cache[n] = result;
    return result;
  };
}

export { cacheFunction };
