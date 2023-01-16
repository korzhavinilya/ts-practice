const str1 = 'Mary had a little lamb';
console.log('Начинается строка с Mary', /^Mary/.test(str1)); // true

const str2 = "it's fleece was white as snow";
console.log('заканчивается на snow', /snow$/.test(str2)); // true

const goodInput = '12:34';
const badInput = '12:345';
const clockRegexp = /^\d\d:\d\d$/;
console.log('Полное совпадение', clockRegexp.test(goodInput)); // true
console.log('3 цифры вместо 2', clockRegexp.test(badInput)); // false

// -- Многострочный режим m

const str3 = `1е место: Винни 
2е место: Пятачок
3е место: Слонопотам`;

console.log(str3.match(/^\d/gm)); // 1, 2, 3

const str4 = `1е место: Винни
2е место: Пятачок
3е место: Слонопотам`;

console.log(str4.match(/^\d/g)); // 1

const str5 = `Винни: 1
Пятачок: 2
Слонопотам: 3`;

console.log(str5.match(/\d$/gm)); // 1,2,3

const str6 = `Винни: 1
Пятачок: 2
Слонопотам: 3`;

console.log(str6.match(/\d\n/g)); // 1\n,2\n
