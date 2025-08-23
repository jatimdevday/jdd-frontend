import React from "react";

interface SkeletonLoaderProps {
  type: "card" | "header" | "stats" | "text";
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  type,
  className = "",
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case "card":
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-pulse">
            {/* Header */}
            <div className="bg-gray-200 h-20"></div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Ticket Code & QR */}
              <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                  <div className="h-6 bg-gray-200 rounded w-32"></div>
                </div>
                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-24"></div>
                  <div className="h-4 bg-gray-200 rounded w-40"></div>
                  <div className="h-3 bg-gray-200 rounded w-20"></div>
                  <div className="h-4 bg-gray-200 rounded w-36"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-28"></div>
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-3 bg-gray-200 rounded w-22"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
                <div className="h-8 bg-gray-200 rounded-lg w-32"></div>
                <div className="h-8 bg-gray-200 rounded-lg w-36"></div>
              </div>
            </div>
          </div>
        );

      case "header":
        return (
          <div className="text-center mb-8 animate-pulse">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div className="h-10 bg-gray-200 rounded w-64"></div>
            </div>
            <div className="h-5 bg-gray-200 rounded w-96 mx-auto mb-4"></div>
            <div className="h-10 bg-gray-200 rounded w-48 mx-auto"></div>
          </div>
        );

      case "stats":
        return (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 animate-pulse"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="h-8 bg-gray-200 rounded w-16 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        );

      case "text":
        return (
          <div className="space-y-3 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className={className}>{renderSkeleton()}</div>;
};

export default SkeletonLoader;
