import { createSlice } from "@reduxjs/toolkit";
import { acceptConnectionRequestThunk, cancelConnectionRequestThunk, createConnectionRequestThunk, fetchConnectionRequestThunk, fetchConnectionsThunk, rejectConnectionRequestThunk, removeConnectionThunk } from "../thunk/connectionsThunk";

const initialState = {
    connections: [],
    connectionRequests: [],
    onlineConnections: [],
    offlineConnections: [],
    selectedConnection: undefined,
}

export const connectionsSlice = createSlice({
    name: 'connections',
    initialState,
    reducers: {
        addConnectionRequest: (state, action) => {
            state.connectionRequests.push(action.payload);
        },
        removeConnectionRequest: (state, action) => {
            const {id} = action.payload;
            state.connectionRequests = state.connectionRequests.filter((connectionRequest) => connectionRequest.id != id);
        },
        removeConnection: (state, action) => {
            state.connections = state.connections.filter((connection) => connection.id !== action.payload.id);
        },
        setOnlineConnections: (state, action) => {
            state.onlineConnections = action.payload;
        },
        setOfflineConnections: (state, action) => {
            state.offlineConnections = state.connections.filter((connection) => !state.onlineConnections.find((onlineConnection) => onlineConnection.id === connection.id ))
        },
        setSelectedConnection: (state, action) => {
            state.selectedConnection = action.payload;
        },
    },

    extraReducers: (builder) => 
      builder
        .addCase(fetchConnectionsThunk.fulfilled, (state, action) => {
            console.log(action.payload.data);
            state.connections = action.payload.data;
        })
        .addCase(fetchConnectionRequestThunk.fulfilled, (state, action) => {
            console.log(action.payload.data);
            state.connectionRequests = action.payload.data;
        })
        .addCase(createConnectionRequestThunk.fulfilled, (state, action) => {
            state.connectionRequests.push(action.payload.data);
        })
        .addCase(createConnectionRequestThunk.rejected, (state, action) => {
            console.log('connection request rejected');
        })
        .addCase(cancelConnectionRequestThunk.fulfilled, (state, action) => {
             const {id} = action.payload.data;
             state.connectionRequests = state.connectionRequests.filter((connectionRequest) => connectionRequest.id !== id);
        })
        .addCase(acceptConnectionRequestThunk.fulfilled, (state, action) => {
            const { connectionRequest: { id }} = action.payload.data;
            state.connectionRequests = state.connectionRequests.filter((connectionRequest) => connectionRequest.id !== id);
        })
        .addCase(rejectConnectionRequestThunk.fulfilled, (state, action) => {
            const { id } = action.payload.data;
            state.connectionRequests = state.connectionRequests.filter((connectionRequest) => connectionRequest.id !== id);
        })
        .addCase(removeConnectionThunk.fulfilled, (state, action) => {
             console.log('conneciton fulfilled', action.payload.data.id);
             state.connections = state.connections.filter((connection) => connection.id !== action.payload.data.id);
        }),
});

export const {
    addConnectionRequest,
    removeConnectionRequest,
    setOnlineConnections,
    setOfflineConnections,
    removeConnection,
} = connectionsSlice.actions;

export default connectionsSlice.reducer;