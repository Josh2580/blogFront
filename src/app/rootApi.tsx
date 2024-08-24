import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Pokemon } from "./types";
// type BlogType =
//   | {
//       id: number;
//       title: string;
//       body: string;
//       image: string;
//     }
//   | {}[]
//   | number;

type BlogType = any;

// Define a service using a base URL and expected endpoints
export const rootBlogApi = createApi({
  reducerPath: "rootBlogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getBlogList: builder.query({
      query: () => `posts`,
    }),
    getBlogById: builder.query<BlogType, string>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBlogListQuery, useGetBlogByIdQuery } = rootBlogApi;
