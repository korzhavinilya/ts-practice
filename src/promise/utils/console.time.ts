const tick = Date.now();
const log = (v: any) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

export { log };
