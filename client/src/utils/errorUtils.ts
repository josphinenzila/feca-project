// utils/errorUtils.ts

export interface FieldError {
  message: string;
  field: string;
}

export interface ErrorResponse {
  errors?: FieldError[];
  message?: string;
}

// Union type for all possible error formats
export type ApiError = string | ErrorResponse | null | undefined;

/**
 * Get error message for a specific field from error response
 */
export const getFieldError = (
  error: ApiError,
  fieldName: string
): string | null => {
  if (!error || typeof error === "string") return null;

  const fieldError = error.errors?.find(
    (err: FieldError) => err.field === fieldName
  );
  return fieldError ? fieldError.message : null;
};

/**
 * Get general error message (non-field specific)
 */
export const getGeneralError = (error: ApiError): string | null => {
  if (!error) return null;

  // If it's a string error message
  if (typeof error === "string") return error;

  // If it has a message property (but no errors array), return the message
  if (error.message && typeof error.message === "string" && !error.errors) {
    return error.message;
  }

  // If it has errors array, check for general errors (errors with field "generic" or no field)
  if (error.errors && Array.isArray(error.errors)) {
    const generalErrors = error.errors.filter(
      (err: FieldError) =>
        !err.field || err.field === "" || err.field === "generic"
    );
    if (generalErrors.length > 0) {
      return generalErrors[0].message;
    }
    // If all errors have specific fields, don't show as general error
    return null;
  }

  return null;
};

/**
 * Check if a field has an error
 */
export const hasFieldError = (error: ApiError, fieldName: string): boolean => {
  return getFieldError(error, fieldName) !== null;
};

/**
 * Get all field errors as an object
 */
export const getAllFieldErrors = (error: ApiError): Record<string, string> => {
  if (!error || typeof error === "string" || !error.errors) return {};

  const fieldErrors: Record<string, string> = {};
  error.errors.forEach((err: FieldError) => {
    fieldErrors[err.field] = err.message;
  });

  return fieldErrors;
};

/**
 * Clear field-specific error from error state
 */
export const clearFieldError = (
  error: ApiError,
  fieldName: string
): ApiError => {
  if (!error || typeof error === "string" || !error.errors) return error;

  const filteredErrors = error.errors.filter(
    (err: FieldError) => err.field !== fieldName
  );

  return {
    ...error,
    errors: filteredErrors,
  };
};

/**
 * Check if an error is a general error (not field-specific)
 */
export const isGeneralError = (error: ApiError): boolean => {
  if (!error) return false;

  // String errors are general
  if (typeof error === "string") return true;

  // Errors with message but no errors array are general
  if (error.message && !error.errors) return true;

  // If it has errors array, check if any error has field "generic" or no field
  if (error.errors && Array.isArray(error.errors)) {
    return error.errors.some(
      (err: FieldError) =>
        !err.field || err.field === "" || err.field === "generic"
    );
  }

  return false;
};

/**
 * Check if an error has field-specific errors
 */
export const hasFieldErrors = (error: ApiError): boolean => {
  if (
    !error ||
    typeof error === "string" ||
    !error.errors ||
    !Array.isArray(error.errors)
  )
    return false;

  return error.errors.some(
    (err: FieldError) =>
      err.field && err.field !== "" && err.field !== "generic"
  );
};
