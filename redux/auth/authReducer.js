import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    userName: "",
    userEmail: "",
    userAvatar: null,
    userState: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateUser: (state, {payload}) => ({
            ...state,
            ...payload,
        }),
        changeState: (state, {payload}) => ({
            ...state,
            userState: payload,
        }),
    },
});