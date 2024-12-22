import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.0.2.2:8080/api', // Use centralized base URL
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as any).auth?.token; // Replace with your auth logic
            // if (token) {
            //     headers.set('Authorization', `Bearer ${token}`);
            // }
            return headers;
        },
    }),
    tagTypes: ['Expense'], // Add all tags here
    endpoints: () => ({}), // Will be extended by individual slices
});
