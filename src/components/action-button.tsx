import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface ActionButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  tooltip?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  icon,
  text,
  variant = "outline",
  size = "sm",
  tooltip,
  className = "",
  disabled = false,
  loading = false,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative group">
      <Button
        onClick={onClick}
        variant={variant}
        size={size}
        className={`transition-all duration-300 hover:scale-105 ${className}`}
        disabled={disabled || loading}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {loading ? (
          <svg
            className="w-4 h-4 mr-2 animate-spin"
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
        ) : (
          icon
        )}
        {text}
      </Button>

      {/* Tooltip */}
      {tooltip && showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg z-50 whitespace-nowrap">
          {tooltip}
          {/* Arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default ActionButton;
