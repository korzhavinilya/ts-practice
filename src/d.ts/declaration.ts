/**
 * Generates d.ts declaration file
 * tsc src/d.ts/declaration.ts --declaration
 */

export const someStringVar = '';

export type SumArgs = {
  firstArg: number;
  secondArg: number;
};

export function sum({ firstArg, secondArg }: SumArgs) {
  return firstArg + secondArg;
}
