const date = new Date(2014, 11, 31, 12, 30, 0);

const formatter1 = new Intl.DateTimeFormat('ru');
console.log(formatter1.format(date)); // 31.12.2014

const formatter2 = new Intl.DateTimeFormat('en-US');
console.log(formatter2.format(date)); // 12/31/2014

const formatter3 = new Intl.DateTimeFormat('en-GB');
console.log(formatter3.format(date)); // 12/31/2014

const longFormatter = new Intl.DateTimeFormat('ru', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}); // среда, 31 декабря 2014 г.
console.log(longFormatter.format(date));

const timeFormatter = new Intl.DateTimeFormat('ru', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});
console.log(timeFormatter.format(date)); // 12:30:00
