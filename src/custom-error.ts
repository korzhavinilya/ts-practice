export class NotEnoughCoffeeError extends Error {
  constructor(message: string, public foo: number) {
    super(message);
  }
}

try {
  throw new NotEnoughCoffeeError('Hello', 1);
} catch (error: NotEnoughCoffeeError | any) {
  const { message, foo } = error;
  console.log('message', message);
  console.log('foo', foo);
}
