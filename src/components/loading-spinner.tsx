import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  text = "Memuat...",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        {/* Outer ring */}
        <div
          className={`${sizeClasses[size]} absolute border-4 border-blue-200 rounded-full`}
        ></div>

        {/* Spinning ring */}
        <div
          className={`${sizeClasses[size]} absolute border-4 border-transparent border-t-blue-600 rounded-full animate-spin`}
        ></div>

        {/* Inner dot */}
        <div
          className={`${sizeClasses[size]} absolute flex items-center justify-center`}
        >
          <div className="w-1/3 h-1/3 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>

      {text && (
        <p className={`mt-4 text-gray-600 ${textSizes[size]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
