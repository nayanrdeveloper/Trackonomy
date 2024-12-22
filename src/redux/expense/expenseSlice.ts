import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExpenseType } from './expenseTypes';

const initialState: ExpenseType = {
    id: '',
    title: '',
    category: '',
    amount: 0,
    date: '',
};

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        setExpense(state, action: PayloadAction<ExpenseType>) {
            return { ...state, ...action.payload };
        },
    },
});

export const { setExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
