import React from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  actionText?: string;
  actionHref?: string;
  icon?: React.ReactNode;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionText,
  actionHref,
  icon,
  className = "",
}) => {
  const handleAction = () => {
    if (actionHref) {
      window.location.href = actionHref;
    }
  };

  return (
    <div className={`text-center py-12 ${className}`}>
      {icon && (
        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">{description}</p>

      {actionText && actionHref && (
        <Button
          variant="primary"
          onClick={handleAction}
          className="shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
