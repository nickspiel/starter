import { getHelloWorld } from "./index";

describe("getHelloWorld", () => {
  it("should return 'Hello World'", () => {
    expect(getHelloWorld()).toBe("Hello World");
  });
});
