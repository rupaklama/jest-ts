import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  // note: Structure of a properly written Unit test
  // AAA (Arrange Act Assert) principle with 3 parts
  it("should return uppercase of valid string", () => {
    // Arrange: sut(system under test) - unit test convention to reference to the Test Subject
    const sut = toUpperCase;
    const expected = "ABC";

    // Act:
    const actual = sut("abc");

    // Assert:
    expect(actual).toBe(expected);
  });

  describe("toUpperCase with params arg", () => {
    it.each([
      // ["abc", "ABC"],
      // ["", ""],
      // ["123", "123"],
      // ["aBc", "ABC"],
      // ["AbC", "ABC"],
      // ["Abc", "ABC"],
      // ["aBC", "ABC"],

      { arg: "abc", expected: "ABC" },
      { arg: "", expected: "" },
      { arg: "123", expected: "123" },
      { arg: "aBc", expected: "ABC" },
      { arg: "AbC", expected: "ABC" },
      { arg: "Abc", expected: "ABC" },
      { arg: "aBC", expected: "ABC" },
    ])(
      // parametrize test
      "$arg should return $expected",
      ({ arg, expected }) => {
        // Arrange:
        const sut = toUpperCase;

        // Act:
        const actual = sut(arg);

        // Assert:
        expect(actual).toBe(expected);
      }
    );
  });

  // jest hooks
  describe("toUpperCase with class", () => {
    let sut: StringUtils;

    beforeEach(() => {
      // Arrange:
      sut = new StringUtils();
    });

    afterEach(() => {
      // cleanup
      sut = null;
    });

    it("should return uppercase of valid string", () => {
      // setup
      const expected = "ABC";

      // Act:
      const actual = sut.toUpperCase("abc");

      // Assert:
      expect(actual).toBe(expected);
    });

    it("should throw error when arg is undefined", () => {
      // setup
      const expected = "arg is required";

      // Act:
      const actual = () => sut.toUpperCase(undefined);

      // Assert:
      expect(actual).toThrow(expected);
    });

    it("should throw error with try catch when arg is invalid", () => {
      // setup
      const expected = "arg is required";

      // Act:
      let actual: string;

      try {
        sut.toUpperCase(undefined);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        actual = error.message;
      }

      // Assert:
      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo", () => {
    const actual = getStringInfo("My-String");

    it("should return right length for valid string", () => {
      expect(actual.length).toBe(9);
    });

    it("should return right lowercase for valid string", () => {
      expect(actual.lowerCase).toBe("my-string");
    });

    it("should return right uppercase for valid string", () => {
      expect(actual.upperCase).toBe("MY-STRING");
    });

    it("should return right characters for valid string", () => {
      expect(actual.characters).toEqual("My-String".split(""));
    });

    it("should contain strings only", () => {
      expect(actual.characters.every(c => typeof c === "string")).toBeTruthy();
    });

    it("should contain right extraInfo for valid string", () => {
      expect(actual.extraInfo).toEqual({});
      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).not.toBeNull();
      expect(actual.extraInfo).toBeTruthy();
    });
  });
});
