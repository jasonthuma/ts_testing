import { Calculator } from "../src/Calculator";

describe("Calculator tests", () => {
  describe("when creating a calculator", () => {
    it("should initialize with a value of 0", () => {
      let testCalc: Calculator = new Calculator();
      expect(testCalc).toBeDefined();
    });
    describe("when adding two numbers", () => {
      it("should add two numbers", () => {
        let testCalc: Calculator = new Calculator();
        const result = testCalc.add(8, 8);
        expect(result).toBe(16);
      });
    });
    describe("when subtracting two numbers", () => {
      it("should subtract two numbers", () => {
        let testCalc: Calculator = new Calculator();
        const result = testCalc.subtract(8, 8);
        expect(result).toBe(0);
      });
    });
    describe("when multiplying two numbers", () => {
      it("should multiply two numbers", () => {
        let testCalc: Calculator = new Calculator();
        const result = testCalc.multiply(8, 8);
        expect(result).toBe(64);
      });
    });

    describe("when dividing two numbers", () => {
      describe("when dividing by zero", () => {
        it("should throw an error", () => {
          let testCalc: Calculator = new Calculator();
          expect(() => {
            testCalc.divide(8, 0);
          }).toThrowError("Cannot divide by 0");
        });
      });
      describe("when dividing by a number other than zero", () => {
        it("should divide two numbers", () => {
          let testCalc: Calculator = new Calculator();
          const result = testCalc.divide(8, 2);
          expect(result).toBe(4);
        });
      });
    });
  });
});
