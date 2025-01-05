import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://trackonomy-api.onrender.com/api', // Correct base URL for Android emulator
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
