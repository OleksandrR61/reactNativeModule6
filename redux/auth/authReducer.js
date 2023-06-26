import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    userName: null,
    userAvatar: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});