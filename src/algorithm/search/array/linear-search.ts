// O(n)

function linearSearch<T>(array: T[], item: T) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }

  return null;
}

export { linearSearch };

