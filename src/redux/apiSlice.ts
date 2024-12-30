import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.0.2.2:8080/api', // Correct base URL for Android emulator
        prepareHeaders: async (headers) => {
            const token = await AsyncStorage.getItem('authToken'); // Retrieve token from AsyncStorage
            if (token) {
                headers.set('Authorization', `Bearer ${token}`); // Add token to Authorization header
            }
            return headers;
        },
    }),
    tagTypes: ['Expense'], // Add all tag types here
    endpoints: () => ({}), // Will be extended by individual slices
});
