import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
  return (
    <nav
      className={`flex items-center space-x-2 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}

          {item.href ? (
            <a
              href={item.href}
              className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors duration-200"
            >
              {item.icon && <span className="text-gray-400">{item.icon}</span>}
              <span>{item.label}</span>
            </a>
          ) : (
            <span className="flex items-center space-x-1 text-gray-900 font-medium">
              {item.icon && <span className="text-blue-600">{item.icon}</span>}
              <span>{item.label}</span>
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
