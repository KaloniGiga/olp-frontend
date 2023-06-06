import { createSlice } from "@reduxjs/toolkit"
import { fetchSearchUserThunk, filterSearchUserThunk } from "../thunk/searchUserThunk";

const initialState = {
    result: [],
    filteredResult: [],
    loading: false,
}

export const searchUser = createSlice({
    name: 'searchuser',
    initialState,
    reducers: {
        setSearchResults: (state, action) => {
            state.result = action.payload;
        },
        resetSearchResults: (state, action) => {
            state.result = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
         .addCase(fetchSearchUserThunk.fulfilled, (state, action) => {
            state.result = action.payload.data;
            console.log(action.payload.data);
            state.loading = false;
         })
         .addCase(fetchSearchUserThunk.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(filterSearchUserThunk.fulfilled, (state, action) => {
            console.log(action.payload.data);
            state.filteredResult = action.payload.data;
            state.loading = false
         })
         .addCase(filterSearchUserThunk.pending, (state, action) => {
            state.loading = true;
         })
    }
})

export const {
    setSearchResults,
    resetSearchResults,
} = searchUser.actions;

export default searchUser.reducer;
