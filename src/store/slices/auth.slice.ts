import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

type AuthState = {
    name: string | null
    token: string | null
    id: number | null
}

const userSlice = createSlice({
    name: 'auth',
    initialState: { name: null, token: null, id: null } as AuthState,
    reducers: {
        setCredentials: (state, {payload: { name, token, id } }: PayloadAction<{name: string; token: string; id: number}>) => {
            localStorage.setItem('auth', JSON.stringify({
                name, token, id
            }))
            state.name = name
            state.token = token
            state.id = id
        },
        getCredentials: (state) => {
            const auth = JSON.parse(localStorage.getItem('auth') || '{}');
            state.token = auth.token;
            state.name = auth.name;
            state.id = auth.id;
        },
        logout: (state) => {
            localStorage.clear();
            state.name = null;
            state.token = null;
            state.id = null;
        }
    },
})

export const {setCredentials, getCredentials, logout} = userSlice.actions;
export default userSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.name;
export const selectToken = (state: RootState) => state.auth.token;
export const selectName = (state: RootState) => state.auth.name;
export const selectId = (state: RootState) => state.auth.id;