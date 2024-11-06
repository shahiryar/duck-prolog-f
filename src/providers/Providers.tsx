"use client"

import React from "react"
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Auth from "@/components/Auth"

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
    const queryClient = getQueryClient()
    
    return (
        <QueryClientProvider client={queryClient}>
            <Auth>
              {children}
            </Auth>
        </QueryClientProvider>
    )
}

export default Providers
