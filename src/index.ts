export class Calculator {
  value: number;
  mem1: number | undefined;
  constructor() {
    this.value = 0;
    this.mem1 = undefined;
  }
  //setters
  setValue(x: number) {
    this.value = x;
  }
  setMem1(x: number) {
    this.mem1 = x;
  }
  //getters
  getValue() {
    return this.value;
  }
  getMem1() {
    return this.mem1;
  }

  //methods
  add(a: number | undefined): void {
    if (a !== undefined) {
      this.setValue(this.getValue() + a);
    } else {
      console.log("There is no current memorized value.");
    }
  }

  subtract(s: number | undefined): void {
    if (s !== undefined) {
      this.setValue(this.getValue() - s);
    } else {
      console.log("There is no current memorized value.");
    }
  }

  multiply(m: number | undefined): void {
    if (m !== undefined) {
      this.setValue(this.getValue() * m);
    } else {
      console.log("There is no current memorized value.");
    }
  }

  divide(d: number | undefined): void {
    if (d !== 0 && d !== undefined) {
      this.setValue(this.getValue() / d);
    } else if (d === 0) {
      console.log("Cannot divide by 0");
    } else {
      console.log("There is no current memorized value");
    }
  }

  square(): void {
    let currVal = this.getValue();
    this.setValue(currVal * currVal);
  }

  squareRoot(): void {
    this.setValue(Math.sqrt(this.getValue()));
  }

  clear(): void {
    this.setValue(0);
  }

  clearAll(): void {
    this.setValue(0);
    this.setMem1(0);
  }
}
