export const getErrorMessage = (error: unknown) => {
  return toErrorWithMessage(error).message;
};

function toErrorWithMessage(error: unknown) {
  if (isErrorWithMessage(error)) return error;

  try {
    return new Error(JSON.stringify(error));
  } catch (error) {
    // fallback in case there's an error stringifying the error e.g. circular reference
    return new Error(String(error));
  }
}

function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}
