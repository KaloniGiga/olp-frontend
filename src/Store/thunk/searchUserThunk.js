import { createAsyncThunk } from "@reduxjs/toolkit";
import { filterSearchUser, getSearchUser } from "../../utils/api";

export const fetchSearchUserThunk = createAsyncThunk('searchUserThunk', (name) => getSearchUser(name));

export const filterSearchUserThunk  = createAsyncThunk('filterUserthunk', (minAge, maxAge, minHeight, maxHeight, religion, caste, annualIncome) => filterSearchUser(minAge, maxAge, minHeight, maxHeight,  religion, caste, annualIncome));