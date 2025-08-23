import React from "react";
import { Button } from "./ui/button";

interface TicketQuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export function TicketQuantitySelector({
  value,
  onChange,
  min = 1,
  max = 10,
  disabled = false,
}: TicketQuantitySelectorProps) {
  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (value > min) {
      onChange(value - 1);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <Button
        variant="outline"
        size="sm"
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        className="h-10 w-10 p-0 rounded-lg border-2 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        type="button"
      >
        <span className="text-xl font-bold text-gray-700">−</span>
      </Button>

      <span className="min-w-[3rem] text-center text-xl font-bold text-gray-900">
        {value}
      </span>

      <Button
        variant="outline"
        size="sm"
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        className="h-10 w-10 p-0 rounded-lg border-2 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        type="button"
      >
        <span className="text-xl font-bold text-gray-700">+</span>
      </Button>
    </div>
  );
}
