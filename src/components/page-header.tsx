import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  icon,
  children,
  className = "",
}) => {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <div className="flex items-center justify-center mb-4">
        {icon && (
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
            {icon}
          </div>
        )}
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      </div>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
        {description}
      </p>

      {children}
    </div>
  );
};

export default PageHeader;
