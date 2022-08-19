import { Calculator } from "../src/Calculator";

describe("Calculator tests", () => {
  describe("when creating a calculator", () => {
    it("should initialize with a value of 0", () => {
      let testCalc: Calculator = new Calculator();
      expect(testCalc).toBeDefined();
    });
    describe("when doing math operations", () => {
      const testCalc = new Calculator();

      beforeAll(() => {
        testCalc.storeNumber = jest.fn();
      });
      describe("when adding two numbers", () => {
        it("should add two numbers", () => {
          const result = testCalc.add(8, 8);
          expect(result).toBe(16);
        });
      });
      describe("when subtracting two numbers", () => {
        it("should subtract two numbers", () => {
          const result = testCalc.subtract(8, 8);
          expect(result).toBe(0);
        });
      });
      describe("when multiplying two numbers", () => {
        it("should multiply two numbers", () => {
          const result = testCalc.multiply(8, 8);
          expect(result).toBe(64);
        });
      });

      describe("when dividing two numbers", () => {
        describe("when dividing by zero", () => {
          it("should throw an error", () => {
            expect(() => {
              testCalc.divide(8, 0);
            }).toThrowError("Cannot divide by 0");
          });
        });
        describe("when dividing by a number other than zero", () => {
          it("should divide two numbers", () => {
            const result = testCalc.divide(8, 2);
            expect(result).toBe(4);
          });
        });
      });
    });
  });
});
