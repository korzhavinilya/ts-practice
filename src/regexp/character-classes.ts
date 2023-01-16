const numb = '+7(903)-123-45-67';
const firstNumberRegexp = /\d/;
console.log('first number', numb.match(firstNumberRegexp)); // 7

const allNumbersRegexp = /\d/g;
console.log('all numbers', numb.match(allNumbersRegexp)); // 7,9,0,3,1,2,3,4,5,6,7

const numSpaceLetter = '1 a';
console.log('num letter', numSpaceLetter.match(/\d\s\w/)); // 1 a

const css4 = 'CSS4';
console.log('several letters and one decimal', css4.match(/CSS\d/)); // CSS4

const iLoveHtml5 = 'I love HTML5!';
console.log(iLoveHtml5.match(/\s\w\w\w\w\d/)); //HTML5

const cs4Regexp = /CS.4/;
console.log('CSS4'.match(cs4Regexp)); // CSS4
console.log('CS-4'.match(cs4Regexp)); // CS-4
console.log('CS 4'.match(cs4Regexp)); // CS 4 (пробел тоже является символом)

//--- Точка как буквально любой символ, с флагом «s»

console.log('A\nB'.match(/A.B/)); // null (нет совпадения)
console.log('A\nB'.match(/A.B/s)); // A\nB (совпадение!)

//-- Работа с пробелами

console.log('1 - 5'.match(/\d-\d/)); // null, нет совпадения!
console.log('1 - 5'.match(/\d - \d/)); // 1 - 5, теперь работает
console.log('1 - 5'.match(/\d\s-\s\d/)); // 1 - 5, тоже работает
