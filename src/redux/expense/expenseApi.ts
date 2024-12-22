import { apiSlice } from '../apiSlice';

export const expenseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getExpenses: builder.query<any[], void>({
            // Specify void as the argument type
            query: () => '/expenses',
            providesTags: ['Expense'], // Tag used for cache invalidation
        }),
        addExpense: builder.mutation({
            query: (expense) => ({
                url: '/expenses',
                method: 'POST',
                body: expense,
            }),
            invalidatesTags: ['Expense'],
        }),
        deleteExpense: builder.mutation({
            query: (id) => ({
                url: `/expenses/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Expense'],
        }),
    }),
});

export const {
    useGetExpensesQuery,
    useAddExpenseMutation,
    useDeleteExpenseMutation,
} = expenseApi;
