import { ICalculator } from "./ICalculator";

export class Calculator implements ICalculator {
  storedNumber: number;
  constructor() {
    this.storedNumber = 0;
  }
  storeNumber(x: number): void {
    this.storedNumber = x;
  }

  add(a: number, b: number): number {
    const addedResult = a + b;
    this.storeNumber(addedResult);
    return addedResult;
  }
  subtract(a: number, b: number): number {
    const substractedResult = a - b;
    this.storeNumber(substractedResult);
    return substractedResult;
  }
  multiply(a: number, b: number): number {
    const multiplyResult = a * b;
    this.storeNumber(multiplyResult);
    return a * b;
  }
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by 0");
    }
    const divideResult = a / b;
    this.storeNumber(divideResult);
    return divideResult;
  }
}
