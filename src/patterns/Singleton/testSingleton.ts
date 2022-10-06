import { ClassicalSingleton } from './ClassicalSingleton';
import { FreezeSingleton, freezeSingleton } from './FreezeSingleton';

export function testSingleton() {
  freezeSingleton.increment();
  console.log('freezeSingleton', freezeSingleton.getCount());
  const freezeSingletonInstance = freezeSingleton.getInstance();
  console.log(
    'freeze singleton instance equality',
    freezeSingletonInstance === freezeSingleton
  );
  // const newFreezeSingletonInstance = new FreezeSingleton(); // throw new Error('Instance exists')

  const classicalSingleton = ClassicalSingleton.getInstance();
  classicalSingleton.increment();
  console.log('classicalSingleton', classicalSingleton.getCount());
  const classicalSingletonNewInstance = ClassicalSingleton.getInstance();
  console.log(
    'classical singleton instance equality',
    classicalSingletonNewInstance === classicalSingleton
  );
}

