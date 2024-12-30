import { combineReducers } from '@reduxjs/toolkit';
import expenseReducer from './expense/expenseSlice';
import authReducer from './auth/authSlice';
import { apiSlice } from './apiSlice';

export const rootReducer = combineReducers({
    expense: expenseReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});
