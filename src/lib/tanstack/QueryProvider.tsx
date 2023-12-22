"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type QueryProviderProps = {
  children: React.ReactNode;
};

function QueryProvider({ children }: QueryProviderProps) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: true,
          retry: false,
        },
      },
    })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default QueryProvider;
