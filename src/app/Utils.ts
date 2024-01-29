export class StringUtils {
  public toUpperCase(arg: string) {
    if (!arg) throw new Error("arg is required");

    return arg.toUpperCase();
  }
}

export function toUpperCase(arg: string) {
  return arg.toUpperCase();
}

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function getStringInfo(arg: string): stringInfo {
  return {
    lowerCase: arg.toLocaleLowerCase(),
    upperCase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {},
  };
}
