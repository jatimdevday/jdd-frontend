import React from "react";
import { TicketStatus } from "@/types/event";

interface StatusBadgeProps {
  status: TicketStatus;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className = "",
}) => {
  const getStatusConfig = (status: TicketStatus) => {
    switch (status) {
      case "active":
        return {
          text: "Aktif",
          bgColor: "bg-green-100",
          textColor: "text-green-800",
          borderColor: "border-green-200",
          icon: "✅",
          pulse: true,
        };
      case "used":
        return {
          text: "Sudah Digunakan",
          bgColor: "bg-gray-100",
          textColor: "text-gray-800",
          borderColor: "border-gray-200",
          icon: "✓",
          pulse: false,
        };
      case "pending":
        return {
          text: "Menunggu Validasi",
          bgColor: "bg-yellow-100",
          textColor: "text-yellow-800",
          borderColor: "border-yellow-200",
          icon: "⏳",
          pulse: true,
        };
      case "expired":
        return {
          text: "Kadaluarsa",
          bgColor: "bg-red-100",
          textColor: "text-red-800",
          borderColor: "border-red-200",
          icon: "❌",
          pulse: false,
        };
      default:
        return {
          text: "Tidak Diketahui",
          bgColor: "bg-gray-100",
          textColor: "text-gray-800",
          borderColor: "border-gray-200",
          icon: "❓",
          pulse: false,
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${config.bgColor} ${config.textColor} ${config.borderColor} ${className}`}
    >
      <span className="mr-1.5 text-sm">{config.icon}</span>
      <span className="font-semibold">{config.text}</span>
      {config.pulse && (
        <div
          className={`ml-2 w-2 h-2 ${config.textColor.replace(
            "text-",
            "bg-"
          )} rounded-full animate-pulse`}
        ></div>
      )}
    </div>
  );
};

export default StatusBadge;
