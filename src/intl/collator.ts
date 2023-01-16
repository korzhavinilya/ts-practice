console.log('ёжик' > 'яблоко'); // true (ёжик больше, что неверно)

const collator1 = new Intl.Collator();
console.log(collator1.compare('ёжик', 'яблоко')); // -1 (ёжик меньше, верно)

const collator2 = new Intl.Collator();
console.log(collator2.compare('ЁжиК', 'ёжик')); // 1, разные

const collator3 = new Intl.Collator(undefined, {
  sensitivity: 'accent',
});
console.log(collator3.compare('ЁжиК', 'ёжик'));
