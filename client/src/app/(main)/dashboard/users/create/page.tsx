"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/landing/ui/Card";
import { Button } from "@/components/landing/ui/Button";
import { ErrorAlert, FieldError } from "@/components/landing/ui/Form";
import { getFieldError, getGeneralError } from "@/utils/errorUtils";
import api from "@/redux/services/api";
import { app } from "@/config";
import { paths } from "@/routes/paths";
import { createUser } from "@/redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

const { BACKEND_URL } = app;

interface Role {
  id: number;
  name: string;
  description?: string;
}

interface CreateUserFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  password_confirmation: string;
  roleId: number | "";
}

interface UserError {
  message: string;
  field?: string;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roleId: number;
}

interface RootState {
  user: {
    loading: boolean;
    error: UserError;
    success: boolean;
    userData: User; // or define a proper user type
    created: boolean;
  };
}

export default function CreateUser() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [roles, setRoles] = useState<Role[]>([]);
  const [loadingRoles, setLoadingRoles] = useState(true);

  const { loading, error, success, userData, created } = useSelector(
    (state: RootState) => state.user
  );

  const [formData, setFormData] = useState<CreateUserFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    password_confirmation: "",
    roleId: "",
  });

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    password_confirmation,
    roleId,
  } = formData;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        setLoadingRoles(true);
        const { data } = await api.get(`${BACKEND_URL}/roles`);
        setRoles(data.data || data);
        setLoadingRoles(false);
      } catch (err) {
        console.error("Error fetching roles:", err);
      }
    };

    fetchRoles();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "roleId" ? (value ? parseInt(value) : "") : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      roleId: Number(roleId),
    };
    //@ts-expect-error - Redux Toolkit dispatch typing issue with async thunks
    dispatch(createUser(userData));
  };

  useEffect(() => {
    if (success && userData && created) {
      enqueueSnackbar("User created successfully", { variant: "success" });
      router.push(paths.dashboard.users.list);
    }

    if (error && error.field == "generic") {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  });

  const handleCancel = () => {
    router.push(paths.dashboard.users.root);
  };

  const generalError = getGeneralError(error);
  const firstNameError = getFieldError(error, "firstName");
  const lastNameError = getFieldError(error, "lastName");
  const emailError = getFieldError(error, "email");
  const phoneNumberError = getFieldError(error, "phoneNumber");
  const passwordError = getFieldError(error, "password");
  const roleError = getFieldError(error, "roleId");

  return (
    <div className="max-w-4xl my-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-gray-600">Add a new user</h1>

        <Button variant="outline" onClick={handleCancel}>
          <svg
            className="w-4 h-4 mr-2"
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
          Back
        </Button>
      </div>

      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <div className="p-6">
          <div className="space-y-6">
            <ErrorAlert message={generalError} />

            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="Enter first name"
                />
                <FieldError message={firstNameError} />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="Enter last name"
                />
                <FieldError message={lastNameError} />
              </div>
            </div>

            {/* Email and Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="Enter email address"
                />
                <FieldError message={emailError} />
              </div>

              <div>
                <label
                  htmlFor="roleId"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  User Role <span className="text-red-500">*</span>
                </label>
                <select
                  id="roleId"
                  name="roleId"
                  required
                  value={roleId}
                  onChange={handleChange}
                  disabled={loadingRoles}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-100 sm:text-sm"
                >
                  <option value="">
                    {loadingRoles ? "Loading roles..." : "Select a role"}
                  </option>
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                      {role.description && ` - ${role.description}`}
                    </option>
                  ))}
                </select>
                <FieldError message={roleError} />
              </div>
            </div>

            {/* Password and Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
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
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
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
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <FieldError message={passwordError} />
              </div>

              <div>
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={password_confirmation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    placeholder="Confirm the password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
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
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {password_confirmation &&
                  password !== password_confirmation && (
                    <p className="mt-1 text-sm text-red-600">
                      Passwords do not match
                    </p>
                  )}
              </div>
            </div>

            {/* Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                  placeholder="+254712345678"
                />
                <FieldError message={phoneNumberError} />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-4 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={
                  loading || password !== password_confirmation || !roleId
                }
                className="flex items-center"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4"
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
                    Creating User...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    Create User
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
