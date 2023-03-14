import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiTodo = createApi({
    reducerPath: 'apiTodo',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5175/' }),
    tagTypes: ['listaTodos'],

    endpoints: (builder) => ({
        getAllTodo: builder.query({
            query: () => 'tasks',
            providesTags: ['listaTodos']
        }),
        addTodo: builder.mutation({
            query: (newTodo) => ({
                url: 'tasks',
                method: 'POST',
                body: newTodo,
            }),
            invalidatesTags: ['listaTodos']
        }),
        deleteTodo: builder.mutation({
            query: (todoX) => ({
                url: ('/tasks/' + todoX.id),
                method: 'DELETE'
            }),
            invalidatesTags: ['listaTodos']
        }),
        updateTodo: builder.mutation({
            query: (todoX) => ({
                url: ('/tasks/' + todoX.id),
                method: 'PUT',
                body: todoX
            }),
            invalidatesTags: ['listaTodos']
        })


    })
})

export const { useGetAllTodoQuery, useLazyGetAllTodoQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } = apiTodo;