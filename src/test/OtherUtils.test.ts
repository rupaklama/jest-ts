import { OtherStringUtils, calculateComplexity, toUpperCase } from "../doubles/OtherUtils";

describe("OtherUtils", () => {
  it("should calculates complexity of a string", () => {
    // Arrange:
    // NOTE: Stub is a type of Mock Object
    // Stubs typically have a minimal implementation that only includes the functionality required for the specific test scenario. They are not fully-featured implementations of the actual dependencies.
    const str = {
      length: 3,
      extraInfo: {
        a: "a",
        b: "b",
        c: "c",
      },
    };
    const expected = 9;

    // Act:
    const actual = calculateComplexity(str as any);

    // Assert:
    expect(actual).toBe(expected);
  });

  describe("Fakes and Mocks", () => {
    it("should call callback with message for invalid argument", () => {
      // Arrange:
      const arg = "";

      // note: Fakes are 'Functional' implementations of dependencies that provide a
      // simplified version of the real component's functionality.
      // Example: A fake database implementation may store data in memory rather than persisting it to a real database
      // const callback = () => {}

      // Mocks are 'Behavioral' implementations of dependencies that allow you to verify that the component under test
      // note - Mock uses test argument values to verify the behavior of the component under test
      const callback = jest.fn(); // jest mock function
      const expected = "Invalid argument";

      // Act:
      toUpperCase(arg, callback);

      // Assert:
      expect(callback).toHaveBeenCalledWith(expected);
    });

    it("should call callback with message for valid argument", () => {
      // Arrange:
      const arg = "abc";

      const callback = jest.fn();
      const expected = "The argument is: abc";

      // Act:
      toUpperCase(arg, callback);

      // Assert:
      expect(callback).toHaveBeenCalledWith(expected);
    });
  });

  describe("Spies", () => {
    // Spies are not directly injected into Sut, but are used to verify that the component under test
    // Spies are used to monitor and observe the behavior of the component under test,
    // while mocks are used to replace dependencies and verify interactions in a controlled manner.
    // NOTE - Spies and Mocks have lots in common, but they are used for different purposes.
    // Spies usually track method calls or replacing implementations, while mocks are used to replace dependencies.
    it("OtherStringUtils should return uppercase of valid string", () => {
      // Arrange:
      const sut = new OtherStringUtils();
      const spy = jest.spyOn(sut, "toUpperCase");
      const arg = "abc";

      // Act:
      sut.toUpperCase(arg);

      // Assert:
      expect(spy).toHaveBeenCalledWith(arg);
    });

    it("OtherStringUtils should log string", () => {
      // Arrange:
      const sut = new OtherStringUtils();
      const spy = jest.spyOn(console, "log");
      const arg = "abc";

      // Act:
      sut.logString(arg);

      // Assert:
      expect(spy).toHaveBeenCalledWith(arg);
    });

    it("Use a spy to replace the implementation of a method", () => {
      // Arrange:
      const sut = new OtherStringUtils();

      // Replacing the implementation of callExternalService with a new implementation
      jest.spyOn(sut, "callExternalService").mockImplementation(() => {
        console.log("calling new mocked implementation");
      });

      // Act:
      sut.callExternalService();
    });
  });
});
