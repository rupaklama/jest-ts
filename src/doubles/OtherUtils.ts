import { v4 } from "uuid";

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

type LoggerServiceCallback = (message: string) => void;

export function toUpperCaseString(arg: string) {
  return arg.toUpperCase();
}

// mock uuid module with jest in test
export function toLowerCaseWithId(arg: string) {
  return arg.toLowerCase() + v4();
}

export function calculateComplexity(str: stringInfo) {
  return Object.keys(str.extraInfo).length * str.length;
}

export function toUpperCase(arg: string, callback: LoggerServiceCallback) {
  if (!arg) {
    callback("Invalid argument");
    return;
  }

  callback(`The argument is: ${arg}`);

  return arg.toUpperCase();
}

export class OtherStringUtils {
  public toUpperCase(arg: string) {
    return arg.toUpperCase();
  }

  public logString(arg: string) {
    console.log(arg);
  }

  public callExternalService() {
    console.log("Calling external service");
  }
}
