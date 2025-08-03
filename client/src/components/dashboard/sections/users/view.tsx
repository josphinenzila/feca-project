// pages/dashboard/users/[id].tsx
"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getUser } from "@/redux/actions/userActions";
import { selectUser } from "@/redux/selectors/auth";
import { Button } from "@/components/landing/ui/Button";
import { Card } from "@/components/landing/ui/Card";
import {
  Mail,
  Phone,
  User,
  Shield,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  Calendar,
} from "lucide-react";
import { paths } from "@/routes/paths";

interface UserViewPageProps {
  id: string;
}

const UserViewPage = ({ id }: UserViewPageProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { userData, loading, error } = useSelector((state: any) => state.user);
  const { user } = useSelector(selectUser) || {};

  useEffect(() => {
    if (id) {
      // @ts-ignore
      dispatch(getUser(parseInt(id)));
    }
  }, [dispatch, id]);

  const handleBack = () => {
    router.push(paths.dashboard.users.root);
  };

  if (loading) {
    return (
      <div className="max-w-4xl my-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
          <Card className="p-6">
            <div className="space-y-6">
              <div className="h-6 bg-gray-200 rounded w-32"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                      <div className="h-5 bg-gray-200 rounded w-32"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl my-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-8 text-center">
          <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Error Loading User
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={handleBack}>Go Back</Button>
        </Card>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="max-w-4xl my-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-8 text-center">
          <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            User Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The user you're looking for doesn't exist.
          </p>
          <Button onClick={handleBack}>Go Back</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-5xl my-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-gray-600">View User Details</h1>
        <div className="flex space-x-3">
          <Button
            className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
            onClick={handleBack}
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
      </div>

      {/* User Information Card */}
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <div className="p-6">
          {/* Profile Header */}
          <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-200">
            <div className="h-20 w-20 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">
                {userData.firstName?.[0]}
                {userData.lastName?.[0]}
              </span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">
                {userData.firstName} {userData.lastName}
              </h2>
              <p className="text-gray-600 text-lg">
                {userData.roleName || "No role assigned"}
              </p>
              <div className="flex items-center mt-2">
                {userData.active ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Active Account</span>
                  </div>
                ) : (
                  <div className="flex items-center text-red-600">
                    <XCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Inactive Account</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* User Details Grid */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              User Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Full Name</p>
                  <p className="text-md font-semibold text-gray-900">
                    {userData.firstName} {userData.lastName}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Email Address
                  </p>
                  <p className="text-md font-semibold text-gray-900">
                    {userData.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Phone Number
                  </p>
                  <p className="text-md font-semibold text-gray-900">
                    {userData.phoneNumber || "Not provided"}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Role</p>
                  <p className="text-md font-semibold text-gray-900">
                    {userData.roleName || "No role assigned"}
                  </p>
                </div>
              </div>

              {userData.createdAt && (
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Joined Date
                    </p>
                    <p className="text-md font-semibold text-gray-900">
                      {new Date(userData.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Account Status Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Account Status
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {userData.active ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-600" />
                  )}
                  <span className="text-md font-medium text-gray-900">
                    {userData.active
                      ? "Account is Active"
                      : "Account is Inactive"}
                  </span>
                </div>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    userData.active
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {userData.active ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserViewPage;
