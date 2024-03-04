import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { UserInterface } from "../../Interface/UserInterface";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getUsers: builder.query<UserInterface[], void>({
            query: (): string | FetchArgs => 'users',
            providesTags: ['Users']
        }),
        sortUsers: builder.query({
            query: ({ order }) => ({ url: `users?_sort=${order}` }),
            providesTags: ['Users']
        }),
        updateUser: builder.mutation({
            query: ({id, data}): string | FetchArgs => (
                {
                    url: `users/${id}`,
                    method: 'PATCH',
                    body: data
                }
            ),
            invalidatesTags: ['Users']
        }),
        addUser: builder.mutation({
            query: (data): string | FetchArgs => (
                {
                    url: `users`,
                    method: 'POST',
                    body: data
                }
            ),
            invalidatesTags: ['Users']
        }),
        deleteUser: builder.mutation({
            query: ({ id }): string | FetchArgs => (
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
    useSortUsersQuery,
    useUpdateUserMutation,
    useAddUserMutation,
    useDeleteUserMutation
} = usersApi;