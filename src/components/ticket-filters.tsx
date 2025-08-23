import React from "react";
import { Button } from "@/components/ui/button";
import { TicketStatus } from "@/types/event";

interface TicketFiltersProps {
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
  activeFilter: string;
  activeSort: string;
  className?: string;
}

const TicketFilters: React.FC<TicketFiltersProps> = ({
  onFilterChange,
  onSortChange,
  activeFilter,
  activeSort,
  className = "",
}) => {
  const filters = [
    { key: "all", label: "Semua", icon: "🎫" },
    { key: "active", label: "Aktif", icon: "✅" },
    { key: "pending", label: "Pending", icon: "⏳" },
    { key: "used", label: "Digunakan", icon: "✓" },
    { key: "expired", label: "Expired", icon: "❌" },
  ];

  const sortOptions = [
    { key: "date", label: "Tanggal Event", icon: "📅" },
    { key: "purchase", label: "Tanggal Beli", icon: "🛒" },
    { key: "name", label: "Nama Event", icon: "📝" },
    { key: "status", label: "Status", icon: "🏷️" },
  ];

  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${className}`}
    >
      <h2 className="text-2xl font-bold text-gray-900">Daftar Tiket Saya</h2>

      <div className="flex flex-col sm:flex-row gap-3">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "primary" : "outline"}
              size="sm"
              onClick={() => onFilterChange(filter.key)}
              className="text-sm"
            >
              <span className="mr-1">{filter.icon}</span>
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            className="min-w-[140px] justify-between"
          >
            <span className="mr-1">🔽</span>
            {sortOptions.find((opt) => opt.key === activeSort)?.label ||
              "Urutkan"}
          </Button>

          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10 hidden group-hover:block">
            {sortOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => onSortChange(option.key)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center ${
                  activeSort === option.key
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700"
                }`}
              >
                <span className="mr-2">{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketFilters;
