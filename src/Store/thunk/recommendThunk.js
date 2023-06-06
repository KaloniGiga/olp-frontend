import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecommendThunk = createAsyncThunk('recommend/fetch', () => getRecommendationUser());
