import * as React from "react";
import { cn } from "@/lib/utils";

interface SelectProps extends React.ComponentProps<"select"> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
}

function Select({
  className,
  label,
  error,
  helperText,
  options,
  ...props
}: SelectProps) {
  return (
    <div className="space-y-3">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <select
        className={cn(
          "flex h-10 w-full min-w-0 rounded-lg border bg-white px-3 py-2 text-base shadow-sm transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "border-gray-300 text-gray-900",
          "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      >
        <option value="">Pilih...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}

export { Select };
