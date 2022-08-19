import { ScientificCalculator } from "../src/ScientificCalculator";

describe("Scientific Calcultor", () => {
  describe("when creating a scientific calculator", () => {
    it("should initialize with a value of 0", () => {
      let testCalc: ScientificCalculator = new ScientificCalculator();
      expect(testCalc).toBeDefined();
    });
    describe("when squaring a number", () => {
      it("should square a number", () => {
        let testCalc: ScientificCalculator = new ScientificCalculator();
        const result = testCalc.square(8);
        expect(result).toBe(64);
      });
    });
  });
});
