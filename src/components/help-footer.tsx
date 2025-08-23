import React from "react";
import { Button } from "@/components/ui/button";

interface HelpFooterProps {
  title: string;
  description: string;
  actions?: Array<{
    text: string;
    icon: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: "primary" | "outline";
  }>;
  className?: string;
}

const HelpFooter: React.FC<HelpFooterProps> = ({
  title,
  description,
  actions = [],
  className = "",
}) => {
  const handleAction = (action: any) => {
    if (action.onClick) {
      action.onClick();
    } else if (action.href) {
      window.location.href = action.href;
    }
  };

  return (
    <div className={`mt-12 text-center ${className}`}>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        {actions.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "outline"}
                size="sm"
                onClick={() => handleAction(action)}
                className="shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {action.icon}
                {action.text}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpFooter;
