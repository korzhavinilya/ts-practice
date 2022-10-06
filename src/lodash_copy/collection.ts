function countBy<T>(array: T[], value: keyof T) {
  return array.reduce((acc, val) => {
    const count: any = val[value];
    if (count in acc) {
      acc[count] += 1;
    } else {
      acc[count] = 1;
    }
    return acc;
  }, {});
}

export { countBy };
