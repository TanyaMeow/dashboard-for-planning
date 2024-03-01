import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { UserInterface } from "../../Interface/UserInterface";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getUsers: builder.query<UserInterface[], void>({
            query: () => 'users',
            providesTags: ['Users']
        }),
        getUser: builder.query<UserInterface, void>({
            query: (id) => `users/${id}`
        }),
        updateUser: builder.mutation({
            query: ({id, data}) => (
                {
                    url: `users/${id}`,
                    method: 'PATCH',
                    body: data
                }
            ),
            invalidatesTags: ['Users']
        }),
        addUser: builder.mutation({
            query: (data) => (
                {
                    url: `users`,
                    method: 'POST',
                    body: data
                }
            ),
            invalidatesTags: ['Users']
        }),
        deleteUser: builder.mutation({
            query: ({ id }) => (
                {
                    url: `users/${id}`,
                    method: 'DELETE'
                }
            ),
            invalidatesTags: ['Users']
        }),
    }),
})

export const {
    useGetUsersQuery,
    useGetUserQuery,
    useUpdateUserMutation,
    useAddUserMutation,
    useDeleteUserMutation
} = usersApi;