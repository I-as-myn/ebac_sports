import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const produtosApi = createApi({
  reducerPath: 'produtosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<any, void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = produtosApi
