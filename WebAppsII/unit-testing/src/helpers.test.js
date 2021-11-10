const help = require("./helpers");

describe("helpers module", () => {
  describe("sum function", () => {
    it("can add two nums", () => {
      const expectedOutput = 7;
      const actualOutput = help.sum(2, 5);
      expect(actualOutput).toBe(expectedOutput);
    });
  });
});
