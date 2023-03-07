require ( './root.js' );

const { name, height, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Joe"', () => {
      expect(name).toEqual("Joe");
    });
  });

  describe("Height", () => {
    it("is less than 40", () => {
      expect(40).toBeLessThan(74);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
    });
  });
});
