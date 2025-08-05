"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/landing/ui/Card";
import { Button } from "@/components/landing/ui/Button";
import api from "@/redux/services/api";
import { paths } from "@/routes/paths";
import { app } from "@/config";
import Link from "next/link";
import { getUser } from "@/redux/actions/userActions";
const { BACKEND_URL } = app;
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import TableSkeleton from "./usersTableSkeleton";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  active: boolean;
  roleName: string;
}

export default function Users() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [rowCount, setRowCount] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    userId: number | null;
    userName: string;
  }>({
    isOpen: false,
    userId: null,
    userName: "",
  });
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Don't fetch data during SSR

    const getUsers = async () => {
      try {
        setLoading(true);
        const url = `${BACKEND_URL}/users?page=${page}&perPage=${rowsPerPage}`;

        const { data } = await api.get(url);
        setUsers(data.data);
        setRowCount(data.meta.total);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    getUsers();
  }, [page, rowsPerPage, isClient]);

  const handleView = (userId: number) => {
    //@ts-expect-error - Redux Toolkit dispatch typing issue with async thunks
    dispatch(getUser(userId));
    router.push(paths.dashboard.users.view(userId));
  };

  const handleEdit = (userId: number) => {
    //@ts-expect-error - Redux Toolkit dispatch typing issue with async thunks
    dispatch(getUser(userId));
    router.push(paths.dashboard.users.edit(userId));
  };

  const handleDeleteClick = (userId: number, userName: string) => {
    setDeleteModal({
      isOpen: true,
      userId,
      userName,
    });
  };

  const handleDeleteConfirm = async () => {
    if (!deleteModal.userId) return;

    try {
      setIsDeleting(true);

      // Make DELETE request to your API
      await api.delete(`${BACKEND_URL}/users/${deleteModal.userId}`);

      // Remove user from local state
      setUsers(users.filter((user) => user.id !== deleteModal.userId));
      setRowCount(rowCount - 1);

      // Close modal
      setDeleteModal({ isOpen: false, userId: null, userName: "" });

      // Optional: Show success message
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      // Optional: Show error message to user
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModal({ isOpen: false, userId: null, userName: "" });
  };

  // Show simple loading during hydration to match PermissionGuard
  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-gray-600">Users List</h1>
        <Link href={paths.dashboard.users.create}>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg">
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
            Add User
          </Button>
        </Link>
      </div>

      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <div className="overflow-x-auto">
          {isLoading ? (
            <TableSkeleton />
          ) : (
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/50">
                    User
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/50">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/50">
                    Phone Number
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/50">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/50">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                          <svg
                            className="w-8 h-8 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-gray-900 font-medium mb-1">
                          No users found
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Get started by adding your first user
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr
                      key={user.id}
                      className={`hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-blue-50/30 transition-all duration-200 group ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                      }`}
                    >
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                              <span className="text-sm font-bold text-white">
                                {user.firstName?.[0]}
                                {user.lastName?.[0] || ""}
                              </span>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                              <div
                                className={`w-2.5 h-2.5 rounded-full ${
                                  user.active ? "bg-green-400" : "bg-gray-400"
                                }`}
                              ></div>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                              {user.firstName} {user.lastName}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <svg
                                className="w-3 h-3 mr-1 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                              {user.email || "No email"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {user.roleName || "No role"}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <svg
                            className="w-4 h-4 mr-2 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          {user.phoneNumber || "No phone"}
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm ${
                            user.active === true
                              ? "bg-green-100 text-green-800 border border-green-200"
                              : "bg-red-100 text-red-800 border border-red-200"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full mr-2 ${
                              user.active === true
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          ></div>
                          {user.active === true ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex space-x-2 justify-end opacity-70 group-hover:opacity-100 transition-opacity">
                          <Button
                            onClick={() => handleEdit(user.id)}
                            variant="outline"
                            size="sm"
                            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200"
                          >
                            <svg
                              className="w-3 h-3 mr-1"
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
                            Edit
                          </Button>
                          <Button
                            onClick={() => handleView(user.id)}
                            variant="outline"
                            size="sm"
                            className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                          >
                            <svg
                              className="w-3 h-3 mr-1"
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
                            View
                          </Button>
                          <Button
                            onClick={() =>
                              handleDeleteClick(
                                user.id,
                                user.firstName || "Unknown"
                              )
                            }
                            variant="outline"
                            size="sm"
                            className="border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 transition-all duration-200"
                          >
                            <svg
                              className="w-3 h-3 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </Card>

      {/* Pagination */}
      {!isLoading && users.length > 0 && (
        <div className="mt-8 flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="text-sm text-gray-700 font-medium">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {(page - 1) * rowsPerPage + 1}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900">
              {Math.min(page * rowsPerPage, rowCount)}
            </span>{" "}
            of <span className="font-semibold text-gray-900">{rowCount}</span>{" "}
            results
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(page + 1)}
              disabled={page * rowsPerPage >= rowCount}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              Next
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal.isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Delete User
                  </h3>
                  <p className="text-sm text-gray-500">
                    This action cannot be undone
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Are you sure you want to delete{" "}
                <span className="font-semibold">{deleteModal.userName}</span>?
                This will permanently remove the user and all associated data.
              </p>

              <div className="flex space-x-3 justify-end">
                <Button
                  onClick={handleDeleteCancel}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  disabled={isDeleting}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleDeleteConfirm}
                  className="bg-red-600 hover:bg-red-700 text-white"
                  disabled={isDeleting}
                >
                  {isDeleting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                      Deleting...
                    </>
                  ) : (
                    "Delete User"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
