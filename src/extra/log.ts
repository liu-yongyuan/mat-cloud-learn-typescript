export enum Prefix {
  standard = "standard",
}

export const getCurrentDateTime = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};

export const debug = (prefix: Prefix, ...data: unknown[]) => {
  console.debug(`[${prefix}]`, `[${getCurrentDateTime()}]`, "--- ", data);
};
