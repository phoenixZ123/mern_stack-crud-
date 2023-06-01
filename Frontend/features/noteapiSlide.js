import { apiSlide } from "./apiSlide";

// const NOTE_URL = "/get";
const noteapiSlide = apiSlide.injectEndpoints({
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => ({
                url: `http://localhost:3001/api/get`,
                method: 'GET',
            })
        })
    })
})

export const { useGetNotesQuery } = noteapiSlide;
