export enum Prefix {
  standard = "[standard]",
}

export const debug = (prefix: Prefix, ...data: unknown[]) => {
  console.debug(prefix, " --- ", data);
};
