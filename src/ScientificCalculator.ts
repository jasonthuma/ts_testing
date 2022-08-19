import { Calculator } from "./Calculator";

export class ScientificCalculator extends Calculator {
  square(a: number): number {
    const squareResult = a * a;
    this.storeNumber(squareResult);
    return squareResult;
  }
}
