class MyDate {
  constructor();
  constructor(value: number);
  constructor(value: number | string);
  constructor(year: number, month: number, date: number);
  constructor(year?: number | string, month?: number, date?: number) {
    console.log();
  }
}

new MyDate();
new MyDate(123456);
new MyDate('2020-10-10');
new MyDate(2020, 10, 10);
