"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/landing/ui/Button";
import { login } from "@/redux/actions/authActions";

import { ErrorAlert, FieldError } from "@/components/landing/ui/Form";
import { getFieldError, getGeneralError } from "@/utils/errorUtils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roleId: number;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

interface RootState {
  auth: AuthState;
}

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user, loading, error, success } = useSelector(
    (state: RootState) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const [showPassword, setShowPassword] = useState(false);
  const [returnTo, setReturnTo] = useState("/dashboard"); // Default to dashboard

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const returnToParam = searchParams.get("returnTo");
      if (returnToParam) {
        setReturnTo(returnToParam);
      }
    }
  }, []);

  useEffect(() => {
    if (success && user) {
      router.replace(returnTo);
    }
  }, [user, error, success, router, dispatch, returnTo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      password,
      client: "web",
      email,
    };

    // @ts-expect-error - Redux Toolkit dispatch typing issue with async thunks
    dispatch(login(userData));
  };

  const generalError = getGeneralError(error);
  const emailError = getFieldError(error, "email");
  const passwordError = getFieldError(error, "password");

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Home Link */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <Link
          href="/"
          className="inline-flex items-center text-xs sm:text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Home</span>
        </Link>
      </div>

      {/* Login Card */}
      <div className="max-w-xl w-full mx-auto">
        <div className="bg-white shadow-lg border border-gray-200 px-6 sm:px-8 md:px-12 py-6 sm:py-8">
          <div className="space-y-6">
            <div>
              <div className="flex justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mt-4 text-center text-2xl sm:text-3xl font-bold text-gray-900">
                Sign in to FECA
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Welcome back! Please sign in to your account.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <ErrorAlert message={generalError} />

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="appearance-none relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-600 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                  </div>
                  <FieldError message={emailError} />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="appearance-none relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 text-sm sm:text-base"
                      placeholder="Enter your password"
                    />

                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-gray-600 focus:outline-none z-10"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <FieldError message={passwordError} />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-emerald-600 hover:text-emerald-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="flex-1 group relative flex justify-center py-2 sm:py-3 px-4 border border-transparent text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span className="text-sm sm:text-base">
                        Signing in...
                      </span>
                    </>
                  ) : (
                    <span className="text-sm sm:text-base">Sign in</span>
                  )}
                </Button>

                <Link
                  href="/"
                  className="flex-1 group relative flex justify-center py-2 sm:py-3 px-4 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                >
                  <span className="text-sm sm:text-base">Return Home</span>
                </Link>
              </div>

              <div className="text-center">
                <span className="text-xs sm:text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="font-medium text-emerald-600 hover:text-emerald-500"
                  >
                    Sign up
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
