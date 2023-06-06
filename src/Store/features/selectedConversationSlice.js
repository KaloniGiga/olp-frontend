import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedConversation: {},
    type: ''
}

export const selectedConversationSlice = createSlice({
    name: 'selectedConversation',
    initialState,
    reducers: {
          updateSelectedConversation: (state, action) => {
              state.selectedConversation = action.payload.conversation;
              state.type = action.payload.type;
          },

          resetSelectedConversation: (state, action) => {
            state.selectedConversation = {},
            state.type = action.payload.type;
          }
    }
})

export const { updateSelectedConversation, resetSelectedConversation } = selectedConversationSlice.actions;
export default selectedConversationSlice.reducer;