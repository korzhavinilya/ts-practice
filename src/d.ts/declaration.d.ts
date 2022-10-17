/**
 * Generates d.ts declaration file
 * tsc src/d.ts/declaration.ts --declaration
 */
export declare const someStringVar = "";
export declare type SumArgs = {
    firstArg: number;
    secondArg: number;
};
export declare function sum({ firstArg, secondArg }: SumArgs): number;
