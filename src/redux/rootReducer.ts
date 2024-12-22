import { combineReducers } from '@reduxjs/toolkit';
import expenseReducer from './expense/expenseSlice';
import { apiSlice } from './apiSlice';

export const rootReducer = combineReducers({
    expense: expenseReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});
