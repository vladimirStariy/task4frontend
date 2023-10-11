import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAccount, ILoginRequest, IRangeRequest, IRegisterRequest, IUserResponse } from '../models/IAccount';
import { response } from 'msw';

export const accountAPI = createApi({
    reducerPath: 'accountAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://silver-cricket-tux.cyclic.app/',
        prepareHeaders: (headers, {getState}) => {
            const token = JSON.parse(localStorage.getItem('auth') || '{}'); 
            if(token) {
                headers.set('Authorization', `Bearer ${token.token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<IUserResponse, ILoginRequest>({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials
            }),
        }),
        registration: builder.mutation<IUserResponse, IRegisterRequest>({
            query: (credentials) => ({
                url: 'registration',
                method: 'POST',
                body: credentials
            }),
        }),
        getAccounts: builder.query<IAccount[], ''>({
            query: () => 'users'
        }),
        removeRange: builder.mutation<'', number[]>({
            query: (payload) => ({
                url: 'removeUserRange',
                method: 'POST',
                body: payload
            }),
        }),
        blockRange: builder.mutation<'', number[]>({
            query: (payload) => ({
                url: 'blockUserRange',
                method: 'POST',
                body: payload
            }),
        }),
        unblockRange: builder.mutation<'', number[]>({
            query: (payload) => ({
                url: 'unblockUserRange',
                method: 'POST',
                body: payload
            }),
        })
    }),
});

export const {useLoginMutation, 
              useGetAccountsQuery, 
              useRegistrationMutation, 
              useRemoveRangeMutation,
              useBlockRangeMutation,
              useUnblockRangeMutation,
            } = accountAPI;