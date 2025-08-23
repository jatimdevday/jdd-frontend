import { cache } from "react";
import { QueryClient } from "@tanstack/react-query";

// Create an instance of QueryClient with more comprehensive configuration
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Using React cache to ensure the same client is used
export const getQueryClient = cache(() => queryClient);
