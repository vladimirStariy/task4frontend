import { configureStore } from "@reduxjs/toolkit";
import { accountAPI } from "./services/account.service";
import authReducer from './slices/auth.slice';

export const store = configureStore({
    reducer: {
        [accountAPI.reducerPath]: accountAPI.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(accountAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;