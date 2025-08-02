'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const QueryProvider = ({children}) => {
    const queryClint = new QueryClient()
    return <QueryClientProvider client={queryClint}>
        {children}
    </QueryClientProvider>
};

export default QueryProvider;