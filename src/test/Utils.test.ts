import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  // note: Structure of a properly written Unit test
  // AAA (Arrange Act Assert) principle
  it("should return uppercase of valid string", () => {
    // Arrange: sut(system under test) - unit test convention to reference to the test subject
    const sut = toUpperCase;
    const expected = "ABC";

    // Act:
    const actual = sut("abc");

    // Assert:
    expect(actual).toBe(expected);
  });

  it("should return string info for valid string", () => {
    const actual = getStringInfo("My-String");

    expect(actual.lowerCase).toBe("my-string");
    expect(actual.upperCase).toBe("MY-STRING");

    expect(actual.characters).toEqual("My-String".split(""));
    expect(actual.characters).toContain<string>("t");
    expect(actual.length).toBe(9);

    expect(actual.extraInfo).toEqual({});
    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
