"use client";

import React from "react";

const Dashboard403Page = () => {
  const handleGoToDashboard = () => {
    // Replace with your dashboard route
    window.location.href = "/dashboard";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleViewProfile = () => {
    // Replace with your profile route
    window.location.href = "/profile";
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Access Restricted
        </h1>
        <p className="text-gray-600 mt-1">
          Error 403 - Insufficient Permissions
        </p>
      </div>

      {/* Main Error Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        {/* Icon and Title */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            You don&apos;t have permission to access this page
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            This dashboard section is restricted to users with specific roles or
            permissions. Contact your administrator if you believe you should
            have access.
          </p>
        </div>

        {/* Info Alert */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-sm font-medium text-blue-800 mb-1">
                Need access to this feature?
              </h3>
              <p className="text-sm text-blue-700">
                Contact your administrator to request the necessary permissions
                for your account. Include the page you&apos;re trying to access
                and your business justification.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Primary Action */}
          <div className="md:col-span-2">
            <button
              onClick={handleGoToDashboard}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Back to Dashboard
            </button>
          </div>

          {/* Secondary Actions */}
          <button
            onClick={handleGoBack}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Back
          </button>

          <button
            onClick={handleViewProfile}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            My Profile
          </button>
        </div>
      </div>

      {/* Footer Information */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-2 sm:mb-0">
            <p className="text-sm text-gray-600">
              Having trouble? Check your account permissions or contact support.
            </p>
          </div>
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>Error Code: 403</span>
            <span>•</span>
            <span>Access Denied</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard403Page;
