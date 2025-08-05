"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { Card } from "@/components/landing/ui/Card";
import { Button } from "@/components/landing/ui/Button";
import { ErrorAlert, FieldError } from "@/components/landing/ui/Form";
import { getFieldError, getGeneralError } from "@/utils/errorUtils";
import api from "@/redux/services/api";
import { app } from "@/config";
import { paths } from "@/routes/paths";
import { updateUser, getUser } from "@/redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "@/redux/slices/userSlice";

const { BACKEND_URL } = app;

interface Role {
  id: number;
  name: string;
  description?: string;
}

interface UpdateUserFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  roleId: number | "";
}
interface UserViewPageProps {
  id: string;
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
  role?: {
    id: number;
    name: string;
  };
}

interface RootState {
  user: {
    loading: boolean;
    error: UserError; // or define a proper error type
    success: boolean;
    userData: User; // or define a proper user type
    updated: boolean;
  };
}

export default function EditUserPage({ id }: UserViewPageProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [roles, setRoles] = useState<Role[]>([]);
  const [loadingRoles, setLoadingRoles] = useState(true);

  const { loading, error, success, userData, updated } = useSelector(
    (state: RootState) => state.user
  );

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

  useEffect(() => {
    if (id) {
      // @ts-expect-error - Redux Toolkit dispatch typing issue with async thunks
      dispatch(getUser(parseInt(id)));
    }
  }, [dispatch, id]);

  const [formData, setFormData] = useState<UpdateUserFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    roleId: "",
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        email: userData.email || "",
        phoneNumber: userData.phoneNumber || "",
        roleId: userData.roleId || userData.role?.id || "",
      });
    }
  }, [userData]);

  const { firstName, lastName, email, phoneNumber, roleId } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "roleId" ? (value ? parseInt(value) : "") : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      id: Number(id),
      firstName,
      lastName,
      email,
      phoneNumber,
      roleId: Number(roleId),
    };

    //@ts-expect-error - Redux Toolkit dispatch typing issue with async thunks
    dispatch(updateUser({ id, payload }));
  };

  useEffect(() => {
    if (success && userData && updated) {
      enqueueSnackbar("User updated successfully", { variant: "success" });
      router.push(paths.dashboard.users.list);
    }

    if (error && error.field == "generic") {
      enqueueSnackbar(error.message, { variant: "error" });
    }

    dispatch(reset());
  }, [success, error, userData, updated, enqueueSnackbar, router, dispatch]);

  useEffect(() => {
    return () => {
      // Reset Redux state when the component unmounts
      dispatch(reset());
    };
  }, [dispatch]);

  const handleCancel = () => {
    router.push(paths.dashboard.users.root);
  };

  const generalError = getGeneralError(error);
  const firstNameError = getFieldError(error, "firstName");
  const lastNameError = getFieldError(error, "lastName");
  const emailError = getFieldError(error, "email");
  const phoneNumberError = getFieldError(error, "phoneNumber");
  const roleError = getFieldError(error, "roleId");

  return (
    <div className="max-w-4xl my-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-gray-600">Update User Details</h1>

        <Button
          className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
          onClick={handleCancel}
        >
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
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
          Users List
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
                disabled={loading || !roleId}
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
                    Updating User...
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
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Update User
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
