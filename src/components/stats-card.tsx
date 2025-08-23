import React from "react";

interface StatsCardProps {
  title: string;
  value: number;
  color: "blue" | "green" | "yellow" | "gray" | "red";
  icon?: React.ReactNode;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  color,
  icon,
  className = "",
}) => {
  const colorClasses = {
    blue: "text-blue-600 bg-blue-50 border-blue-200",
    green: "text-green-600 bg-green-50 border-green-200",
    yellow: "text-yellow-600 bg-yellow-50 border-yellow-200",
    gray: "text-gray-600 bg-gray-50 border-gray-200",
    red: "text-red-600 bg-red-50 border-red-200",
  };

  const iconColorClasses = {
    blue: "text-blue-500",
    green: "text-green-500",
    yellow: "text-yellow-500",
    gray: "text-gray-500",
    red: "text-red-500",
  };

  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className={`text-2xl font-bold mb-2 ${colorClasses[color]}`}>
            {value.toLocaleString("id-ID")}
          </div>
          <div className="text-sm text-gray-600">{title}</div>
        </div>

        {icon && (
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[color]} bg-opacity-20`}
          >
            <div className={iconColorClasses[color]}>{icon}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
