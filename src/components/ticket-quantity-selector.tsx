import React from "react";
import { Button } from "./ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

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
    <div className="flex items-center">
      <Button
        size="sm"
        onClick={handleDecrement}
        disabled={disabled || value <= min}
      >
        <MinusIcon />
      </Button>

      <span className="min-w-[3rem] text-center text-lg font-bold text-gray-900">
        {value}
      </span>

      <Button
        size="sm"
        onClick={handleIncrement}
        disabled={disabled || value >= max}
      >
        <PlusIcon />
      </Button>
    </div>
  );
}
