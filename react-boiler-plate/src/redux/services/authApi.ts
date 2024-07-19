import { createApi, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import baseQuery from '../baseURL';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  tagTypes: ['auth'],

  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (payload) => ({
        url: '/pub/login',
        method: 'POST',
        body: payload.body,
      }),
      transformResponse(response, meta: FetchBaseQueryMeta) {
        return {
          response,
          token: meta?.response?.headers?.get('X_auth_token') || '',
        };
      },
    }),
    
  }),
});

export const { useSignInMutation } = authApi;
export default authApi;