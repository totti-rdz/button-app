const isFulfilled = <T>(p: PromiseSettledResult<T>): p is PromiseFulfilledResult<T> => p.status === "fulfilled";
const isRejected = <T>(p: PromiseSettledResult<T>): p is PromiseRejectedResult => p.status === "rejected";

export const filterFullfilledValues = <T>(arr: PromiseSettledResult<T>[]) =>
  arr.filter(isFulfilled).map((p: PromiseFulfilledResult<T>) => p.value);
export const filterRejectedValues = <T>(arr: PromiseSettledResult<T>[]) =>
  arr.filter(isRejected).map((p: PromiseRejectedResult) => p.reason);
