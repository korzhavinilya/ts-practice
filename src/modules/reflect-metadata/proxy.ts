/**
 * Implement in range object
 */
let range = {
  start: 1,
  end: 10,
};

range = new Proxy(range, {
  has(target, prop) {
    if (typeof prop === 'number') {
      return prop >= target.start && prop <= target.end;
    }
    return false;
  },
});

alert(5 in range); // true
alert(50 in range); // false

/**
 * forbid modifying a private filed
 */
let user: any = {
  name: 'Вася',
  _password: '***',
};

usera = new Proxy(usera, {
  get(target, prop: string) {
    if (prop.startsWith('_')) {
      throw new Error('Отказано в доступе');
    } else {
      const value = target[prop];
      return typeof value === 'function' ? value.bind(target) : value; // (*)
    }
  },
  set(target, prop: string, val) {
    // перехватываем запись свойства
    if (prop.startsWith('_')) {
      throw new Error('Отказано в доступе');
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop: string) {
    // перехватываем удаление свойства
    if (prop.startsWith('_')) {
      throw new Error('Отказано в доступе');
    } else {
      delete target[prop];
      return true;
    }
  },
  ownKeys(target) {
    // перехватываем попытку итерации
    return Object.keys(target).filter((key) => !key.startsWith('_'));
  },
});

// "get" не позволяет прочитать _password
try {
  console.log(usera._password); // Error: Отказано в доступе
} catch (e: any) {
  console.log(e.message);
}

// "set" не позволяет записать _password
try {
  usera._password = 'test'; // Error: Отказано в доступе
} catch (e: any) {
  console.log(e.message);
}

// "deleteProperty" не позволяет удалить _password
try {
  delete usera._password; // Error: Отказано в доступе
} catch (e: any) {
  console.log(e.message);
}

// "ownKeys" исключает _password из списка видимых для итерации свойств
for (const key in usera) console.log(key); // name
