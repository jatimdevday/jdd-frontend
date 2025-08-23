import React from "react";

interface UserIdBadgeProps {
  userId: string;
  className?: string;
}

const UserIdBadge: React.FC<UserIdBadgeProps> = ({
  userId,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-3">
        <svg
          className="w-4 h-4 text-white"
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
      </div>

      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-medium">User ID</span>
        <span className="font-mono font-semibold text-gray-900 text-sm">
          {userId}
        </span>
      </div>

      <div className="ml-3 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
    </div>
  );
};

export default UserIdBadge;
