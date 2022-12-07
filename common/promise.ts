export const wrapPromise = async (callback: any) => {
  try {
    const result = await callback;
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};