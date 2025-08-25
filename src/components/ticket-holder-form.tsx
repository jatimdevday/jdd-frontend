"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TicketHolder } from "@/types/event";
import { IForm } from "@/types/form";
import { TrashIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Create dynamic Zod schema based on dynamic forms
const createTicketHolderSchema = (dynamicForms: IForm[] = []) => {
  const baseSchema = {
    fullName: z.string().min(1, "Nama lengkap wajib diisi"),
    email: z
      .string()
      .min(1, "Email wajib diisi")
      .email("Format email tidak valid"),
  };

  // Add dynamic form fields to schema
  const dynamicFields = dynamicForms.reduce((acc, form) => {
    const fieldName = form.label.toLowerCase().replace(/\s+/g, "");

    if (form.datatype === "text") {
      acc[fieldName] = z.string().min(1, `${form.label} wajib diisi`);
    } else if (form.datatype === "number") {
      acc[fieldName] = z
        .number()
        .min(0, `${form.label} harus berupa angka positif`);
    } else if (form.datatype === "dropdown") {
      acc[fieldName] = z.string().min(1, `${form.label} wajib dipilih`);
    }

    return acc;
  }, {} as Record<string, z.ZodString | z.ZodNumber>);

  return z.object({ ...baseSchema, ...dynamicFields });
};

interface TicketHolderFormProps {
  data: TicketHolder;
  onChange: (data: TicketHolder) => void;
  onRemove: () => void;
  index: number;
  canRemove: boolean;
  dynamicForms?: IForm[];
  onValidationChange?: (isValid: boolean) => void;
  forceExpanded?: boolean;
}

export function TicketHolderForm({
  data,
  onChange,
  onRemove,
  index,
  canRemove,
  dynamicForms = [],
  onValidationChange,
  forceExpanded,
}: TicketHolderFormProps) {
  const schema = createTicketHolderSchema(dynamicForms);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: data,
    mode: "onChange",
  });

  // Watch form values untuk update parent component
  const watchedValues = form.watch();

  // Use debounced onChange to prevent excessive calls
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Only call onChange if values are different from initial data
      const hasChanged = Object.keys(watchedValues).some(
        (key) =>
          watchedValues[key as keyof typeof watchedValues] !==
          data[key as keyof TicketHolder]
      );

      if (hasChanged) {
        onChange(watchedValues as TicketHolder);
      }

      // Check form validation and notify parent
      if (onValidationChange) {
        const isValid = form.formState.isValid;
        onValidationChange(isValid);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timeoutId);
  }, [
    watchedValues,
    onChange,
    data,
    form.formState.isValid,
    onValidationChange,
  ]);

  const [isExpanded, setIsExpanded] = React.useState(true);

  // Sync with forceExpanded prop
  React.useEffect(() => {
    if (forceExpanded !== undefined) {
      setIsExpanded(forceExpanded);
    }
  }, [forceExpanded]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Header yang lebih kompak */}
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-xl p-4 border-b border-blue-200">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
            {index + 1}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Pemegang Tiket #{index + 1}
            </h3>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
          >
            {isExpanded ? "Tutup" : "Buka"}
          </Button>
          {canRemove && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onRemove}
              className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-200"
            >
              <TrashIcon className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Form Content dengan Collapse/Expand */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4">
          <Form {...form}>
            <form className="space-y-4">
              {/* Grid layout yang lebih efisien */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Field Nama Lengkap */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Nama Lengkap *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nama lengkap"
                          {...field}
                          className="h-9"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Field Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="email@contoh.com"
                          {...field}
                          className="h-9"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Dynamic Forms - Langsung dalam grid */}
                {dynamicForms?.map((formField) => (
                  <div key={formField.id}>
                    {formField.datatype === "text" && (
                      <FormField
                        control={form.control}
                        name={
                          formField.label
                            .toLowerCase()
                            .replace(/\s+/g, "") as never
                        }
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              {formField.label}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={formField.label}
                                {...field}
                                className="h-9"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    {formField.datatype === "number" && (
                      <FormField
                        control={form.control}
                        name={
                          formField.label
                            .toLowerCase()
                            .replace(/\s+/g, "") as never
                        }
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              {formField.label}
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder={formField.label}
                                {...field}
                                onChange={(e) =>
                                  field.onChange(Number(e.target.value))
                                }
                                className="h-9"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    {formField.datatype === "dropdown" && formField.options && (
                      <FormField
                        control={form.control}
                        name={
                          formField.label
                            .toLowerCase()
                            .replace(/\s+/g, "") as never
                        }
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              {formField.label}
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value || ""}
                            >
                              <FormControl>
                                <SelectTrigger className="h-9">
                                  <SelectValue
                                    placeholder={`Pilih ${formField.label.toLowerCase()}`}
                                  />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {formField.options?.map((option) => (
                                  <SelectItem key={option} value={option}>
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                ))}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
