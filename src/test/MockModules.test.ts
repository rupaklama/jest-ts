// Mocking part of the module
jest.mock("../doubles/OtherUtils.ts", () => {
  return {
    // to require all the methods from the original module to pass all others tests
    ...jest.requireActual("../doubles/OtherUtils.ts"),

    // mocking the return value of this method only
    calculateComplexity: jest.fn().mockImplementation(() => 9),
  };
});

// mocking entire UUID module
jest.mock("uuid", () => {
  return {
    v4: jest.fn().mockImplementation(() => "1234-1234-1234-1234"),
  };
});

import * as OtherUtils from "../doubles/OtherUtils";

describe("Mocking modules", () => {
  it("should calculate complexity of a string", () => {
    // Arrange:
    const str = {
      length: 3,
      extraInfo: {
        a: "a",
        b: "b",
        c: "c",
      },
    };

    // Act:
    const actual = OtherUtils.calculateComplexity(str as any);

    // Assert:
    expect(actual).toBe(9);
  });

  it("should return uppercase of valid string", () => {
    // Arrange:
    const arg = "abc";
    const expected = "ABC";

    // Act:
    const actual = OtherUtils.toUpperCaseString(arg);

    // Assert:
    expect(actual).toBe(expected);
  });

  it("should return lowercase with id", () => {
    // Arrange:
    const arg = "abc";
    const expected = "abc1234-1234-1234-1234";

    // Act:
    const actual = OtherUtils.toLowerCaseWithId(arg);

    // Assert:
    expect(actual).toBe(expected);
  });
});
