import  { FetchArgs } from "@reduxjs/toolkit/query/react";

import { usersApi } from "./users";

import PostInterface from "../../Interface/PostInterface";

const postsApi = usersApi.injectEndpoints({
    endpoints: (build) => ({
        getPosts: build.query<PostInterface[], void>({
            query: (): string | FetchArgs => 'posts',
            providesTags: ['Posts']
        }),
    }),
    overrideExisting: false,
});

export const { useGetPostsQuery } = postsApi;