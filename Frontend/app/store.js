import { configureStore } from '@reduxjs/toolkit';
import { apiSlide } from '../features/apiSlide.js';

export const store = configureStore({
    reducer: {
        [apiSlide.reducerPath]: apiSlide.reducer
    },
    middleware: defaultMiddleware => defaultMiddleware().concat(apiSlide.middleware),
    devTools: true
})