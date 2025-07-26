// components/form/index.tsx

import React from "react";

// Error Alert Component
interface ErrorAlertProps {
  message: string | null;
  className?: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({
  message,
  className = "",
}) => {
  if (!message) return null;

  return (
    <div
      className={`bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm ${className}`}
    >
      {message}
    </div>
  );
};

// Field Error Component
interface FieldErrorProps {
  message: string | null;
  className?: string;
}

export const FieldError: React.FC<FieldErrorProps> = ({
  message,
  className = "",
}) => {
  if (!message) return null;

  return <p className={`mt-1 text-xs text-red-500 ${className}`}>{message}</p>;
};
