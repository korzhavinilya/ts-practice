/**
 * To build system with interchangeable parts, those parts must follow the contract to be substituted one for another
 * 
 * Подклассы должны дополнять, а не замещать поведение базового класса.
 *
 * 1) Типы параметров метода подкласса должны совпадать или быть боле абстрактными, чем типы параметров базового метода.
 * 2) Тип возвращаемого значения метода подкласса должен совпадать или быть подтипом возвращаемого значения базового метода.
 * 3) Подкласс не должен изменять значения приватных полей базового класса.
 * 4) Метод не должен ужесточать пред условия 
 *    (базовый метод работает с параметром типа int . Еслиподкласс требует, чтобы значение этого параметра было больше нуля)
 * 5) Метод не должен ослаблять пост условия
 *    (базовый метод требует, чтобы по завершению метода все подключения к базе данных были бы закрыты, 
 *    а подкласс оставляет эти подключения открытыми,)
 */

export function liskovSubstitutionPrinciple() {
  const catFeeder = new CatFeeder();
  const cat = new Cat('barsik');
  catFeeder.feed(cat);

  const vet = new Vet();
  const dog = new Dog('chapa');

  // 1) the vet're able to feet any animals
  vet.feed(dog);

  cat.giveBirth('murka');
  // 2) the dog can give birth an Animal, not dog
  dog.giveBirth('timka');
}

interface Animal {
  eat(): void;
  giveBirth(name: string): Animal;
}

class Cat implements Animal {
  constructor(private name: string) {}

  eat() {
    console.log(this.name + 'cat eat');
  }

  giveBirth(name: string) {
    return new Cat(name);
  }
}

class Dog implements Animal {
  constructor(private name: string) {}

  eat() {
    console.log(this.name + ' dog eat');
  }

  giveBirth(name: string): Animal {
    return new Dog(name);
  }
}

class CatFeeder {
  feed(cat: Cat) {
    cat.eat();
  }
}

class Vet extends CatFeeder {
  feed(animal: Animal) {
    animal.eat();
  }
}
