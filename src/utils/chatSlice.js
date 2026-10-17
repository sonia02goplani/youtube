import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../utils/constants";


const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      if(state.messages.length >= OFFSET_LIVE_CHAT) {
        state.messages.splice(OFFSET_LIVE_CHAT,1); 
      }
      state.messages.unshift(action.payload);
    },
    createMessage: (state, action) => {
      state.messages.unshift(action.payload);
    },
  },
});
export const { addMessages,createMessage } = chatSlice.actions;
export default chatSlice.reducer;
