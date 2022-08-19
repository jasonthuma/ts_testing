import { Calculator } from "../src/index";

describe("Calculator initialization and getters / setters tests", () => {
  it("should initialize with a value of 0", () => {
    let testCalc: Calculator = new Calculator();
    expect(testCalc.value).toBe(0);
  });

  it("should be able to set the value", () => {
    let testCalc: Calculator = new Calculator();
    testCalc.setValue(8);
    expect(testCalc.value).toBe(8);
  });

  it("should be able to get the current value", () => {
    let testCalc: Calculator = new Calculator();
    expect(testCalc.value).toBe(0);
  });

  it("should initialize with a mem1 of Undefined", () => {
    let testCalc: Calculator = new Calculator();
    expect(testCalc.mem1).toBe(undefined);
  });

  it("should be able to get mem1", () => {
    let testCalc: Calculator = new Calculator();
    expect(testCalc.mem1).toBe(undefined);
  });

  it("should be able to set mem1", () => {
    let testCalc: Calculator = new Calculator();
    testCalc.setMem1(8);
    expect(testCalc.mem1).toBe(8);
  });
});

describe("Calculator operations tests", () => {
  it("should be able to add a number to the current value", () => {
    let testCalc: Calculator = new Calculator();
    testCalc.add(8);
    expect(testCalc.value).toBe(8);
  });

  it("should only call the add method once when adding a number", () => {
    let testCalc: Calculator = new Calculator();
    const spy = jest.spyOn(testCalc, "add");
    testCalc.add(8);
    expect(spy).toBeCalledTimes(1);
  });

  it("should be able to subtract a number from the current value", () => {
    let testCalc: Calculator = new Calculator();
    testCalc.subtract(8);
    expect(testCalc.value).toBe(-8);
  });

  it("should only call the subtract method once per subtraction", () => {
    let testCalc: Calculator = new Calculator();
    const spy = jest.spyOn(testCalc, "subtract");
    testCalc.subtract(8);
    expect(spy).toBeCalledTimes(1);
  });

  it("should be able to multiply the current value by a given number", () => {
    let testCalc: Calculator = new Calculator();
    testCalc.multiply(8);
    expect(testCalc.value).toBe(0);

    testCalc.value = 4;
    testCalc.multiply(2);
    expect(testCalc.value).toBe(8);
  });

  it("should only call the multiply method once", () => {
    let testCalc: Calculator = new Calculator();
    const spy = jest.spyOn(testCalc, "multiply");
    testCalc.multiply(8);
    expect(spy).toBeCalledTimes(1);
  });

  it("should be able to divide the current value by a given number", () => {
    let testCalc: Calculator = new Calculator();
    testCalc.divide(8);
    expect(testCalc.value).toBe(0);

    testCalc.value = 4;
    testCalc.divide(2);
    expect(testCalc.value).toBe(2);
  });

  it("should not allow a user to try to divide by 0", () => {
    let testCalc: Calculator = new Calculator();
    testCalc.divide(0);
    expect(testCalc.value).toBe(0);

    testCalc.value = 4;
    testCalc.divide(0);
    expect(testCalc.value).toBe(4);
  });

  it("should only call the divide method once", () => {
    let testCalc: Calculator = new Calculator();
    const spy = jest.spyOn(testCalc, "divide");
    testCalc.divide(8);
    expect(spy).toBeCalledTimes(1);
  });

  it("should be able to save the current value to mem1 then use it in an operation", () => {
    let testCalc: Calculator = new Calculator();
    testCalc.value = 4;
    testCalc.setMem1(testCalc.value);
    testCalc.multiply(testCalc.getMem1());
    expect(testCalc.value).toBe(16);
  });

  it("should not change the current value if someone tries to use the mem before assignment", () => {
    let testCalc: Calculator = new Calculator();
    testCalc.add(8);
    testCalc.add(testCalc.getMem1());
    expect(testCalc.getValue()).toBe(8);
    testCalc.subtract(testCalc.getMem1());
    expect(testCalc.getValue()).toBe(8);
    testCalc.divide(testCalc.getMem1());
    expect(testCalc.getValue()).toBe(8);
    testCalc.multiply(testCalc.getMem1());
    expect(testCalc.getValue()).toBe(8);
  });

  /*
    This would probably be a better way to test than what I had originally, 
    do each test specifically for one single operation 
  */
  /* The commented out section here is all new

    it("should not change the current value if someone tries to use the mem to subtract before assignment", () => {
      let testCalc: Calculator = new Calculator();
      testCalc.value = 8;
      testCalc.subtract(testCalc.getMem1());
      expect(testCalc.value).toBe(8);
    });
    it("should not change the current value if someone tries to use the mem to add before assignment", () => {
      let testCalc: Calculator = new Calculator();
      testCalc.value = 8;
      testCalc.add(testCalc.getMem1());
      expect(testCalc.value).toBe(8);
    });
  */
  it("should be able to clear the current value while maintaining any saved mem", () => {
    let testCalc: Calculator = new Calculator();
    testCalc.value = 18;
    expect(testCalc.value).toBe(18);
    testCalc.mem1 = testCalc.value;
    expect(testCalc.mem1).toBe(18);
    testCalc.clear();
    expect(testCalc.value).toBe(0);
    expect(testCalc.mem1).toBe(18);
  });

  it("should be able to clear all saved values using clearAll", () => {
    let testCalc: Calculator = new Calculator();
    testCalc.value = 18;
    expect(testCalc.value).toBe(18);
    testCalc.mem1 = testCalc.value;
    expect(testCalc.mem1).toBe(18);
    testCalc.clearAll();
    expect(testCalc.value).toBe(0);
    expect(testCalc.mem1).toBe(0);
  });

  it("should be able square the current value", () => {
    let testCalc: Calculator = new Calculator();
    testCalc.square();
    expect(testCalc.value).toBe(0);
    testCalc.value = 8;
    testCalc.square();
    expect(testCalc.value).toBe(64);
  });

  it("should be able to find the square root of the current value", () => {
    let testCalc: Calculator = new Calculator();
    testCalc.value = 4;
    testCalc.squareRoot();
    expect(testCalc.value).toBe(2);
  });
});
