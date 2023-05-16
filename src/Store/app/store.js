import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import authReducer from '../features/authSlice';
import toastReducer from '../features/toastSlice';

const persistConfig = {
    key: 'root',
    storage
}

const combinedReducer = combineReducers({
    auth: authReducer,
    toast: toastReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})

export const persistor = persistStore(store);