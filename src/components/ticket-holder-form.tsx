import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import { Button } from "./ui/button";
import { TicketHolder } from "@/types/event";

interface TicketHolderFormProps {
  data: TicketHolder;
  onChange: (data: TicketHolder) => void;
  onRemove: () => void;
  index: number;
  canRemove: boolean;
}

export function TicketHolderForm({
  data,
  onChange,
  onRemove,
  index,
  canRemove,
}: TicketHolderFormProps) {
  const {
    control,
    formState: { errors },
    watch,
  } = useForm<TicketHolder>({
    defaultValues: data,
    mode: "onChange",
  });

  // Watch form values untuk update parent component
  const watchedValues = watch();
  React.useEffect(() => {
    onChange(watchedValues);
  }, [watchedValues, onChange]);

  const occupationOptions = [
    { value: "Pelajar", label: "Pelajar" },
    { value: "Mahasiswa", label: "Mahasiswa" },
    { value: "Karyawan Swasta", label: "Karyawan Swasta" },
    { value: "Wiraswasta", label: "Wiraswasta" },
    { value: "Lainnya", label: "Lainnya" },
  ];

  const informationSourceOptions = [
    { value: "Media Sosial", label: "Media Sosial" },
    { value: "Website", label: "Website" },
    { value: "Teman/Kolega", label: "Teman/Kolega" },
    { value: "Iklan", label: "Iklan" },
    { value: "Lainnya", label: "Lainnya" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
      {/* Header yang lebih modern */}
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
            {index + 1}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Pemegang Tiket #{index + 1}
            </h3>
            <p className="text-sm text-gray-600">
              Lengkapi data pemegang tiket
            </p>
          </div>
        </div>
        {canRemove && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onRemove}
            className="text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl px-4 py-2 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Hapus
          </Button>
        )}
      </div>

      {/* Bagian 1: Informasi Utama */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
          <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
            1
          </span>
          Informasi Utama
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="fullName"
            control={control}
            rules={{ required: "Nama lengkap wajib diisi" }}
            render={({ field }) => (
              <Input
                label="Nama Lengkap *"
                value={field.value}
                onChange={field.onChange}
                placeholder="Masukkan nama lengkap"
                error={errors.fullName?.message}
                required
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email wajib diisi",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Format email tidak valid",
              },
            }}
            render={({ field }) => (
              <Input
                label="Email *"
                type="email"
                value={field.value}
                onChange={field.onChange}
                placeholder="contoh@email.com"
                error={errors.email?.message}
                required
              />
            )}
          />
        </div>
      </div>

      {/* Bagian 2: Informasi Tambahan */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
            2
          </span>
          Informasi Tambahan
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="community"
            control={control}
            render={({ field }) => (
              <Input
                label="Asal Komunitas"
                value={field.value || ""}
                onChange={field.onChange}
                placeholder="Nama komunitas (opsional)"
              />
            )}
          />

          <Controller
            name="occupation"
            control={control}
            render={({ field }) => (
              <Select
                label="Pekerjaan"
                value={field.value || ""}
                onChange={field.onChange}
                options={occupationOptions}
              />
            )}
          />

          <Controller
            name="institution"
            control={control}
            render={({ field }) => (
              <Input
                label="Institusi/Perusahaan"
                value={field.value || ""}
                onChange={field.onChange}
                placeholder="Nama institusi/perusahaan (opsional)"
              />
            )}
          />

          <Controller
            name="interests"
            control={control}
            render={({ field }) => (
              <Input
                label="Minat/Spesialisasi"
                value={field.value || ""}
                onChange={field.onChange}
                placeholder="Minat atau spesialisasi (opsional)"
              />
            )}
          />

          <Controller
            name="informationSource"
            control={control}
            render={({ field }) => (
              <Select
                label="Dari mana Anda tahu event ini?"
                value={field.value || ""}
                onChange={field.onChange}
                options={informationSourceOptions}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}
