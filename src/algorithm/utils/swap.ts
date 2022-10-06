export function swap<T>(array: T[], a: number, b: number) {
  let tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
}
