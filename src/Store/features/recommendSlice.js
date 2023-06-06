import { createSlice } from "@reduxjs/toolkit"
import { fetchRecommendThunk } from "../thunk/recommendThunk";

const initialState = {
    recommedUsers: [],
    loading: false,
}

export const recommendSlice = createSlice({
    name: 'recommendSlice',
    initialState,
    reducers: {
        setRecommendedUser: (state, action) => {
            state.recommedUsers = action.payload;
        },
        resetRecommendUser: (state, action) => [
            state.recommedUsers = []
        ]
    },
    extraReducers: (builder) => {
        builder
         .addCase(fetchRecommendThunk.fulfilled, (state, action) => {
            state.recommedUsers = action.payload.data;
            state.loading = false;
         })
         .addCase(fetchRecommendThunk.pending, (state, action) => {
            state.loading = true;
         })
    }
})

export const {
   setRecommendedUser,
   resetRecommendUser,
} = recommendSlice.actions;

export default recommendSlice.reducer;