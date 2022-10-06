interface User {
  name: string;
  age: number;
}

function changeObject(user: Readonly<User>) {
  //   user.age = 1;
}

function changeArray(users: ReadonlyArray<User>) {
    // users.push({ name: 'Sveta', age: 25 });
}

export default function immutableTypescriptBestPractice() {
  const user = { name: 'Ilya', age: 25 };
  const users = [user];

  changeObject(user);

  changeArray(users);
}
