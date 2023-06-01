import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseeUrl: "" })

export const apiSlide = createApi({
    reducerPath: 'noteapi',
    baseQuery,
    endpoints: (builder) => ({
        
    })

})