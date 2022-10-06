class A {
  constructor() {
    const arr = [];
    this.gerArr = () => [...arr];
    this.push = (n) => {
      arr.push(n);
    };
  }
}

const a = new A();

console.log(a.gerArr());
a.push(1);
a.push(2);
a.push(3);
a.push(4);
console.log(a.gerArr());
