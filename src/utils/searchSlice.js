
import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
name: 'search',
initialState: {
    currentQuery:'',
},
reducers: {
    cacheResults: (state, action) => {
        state= Object.assign(state, action.payload)
            
    },
    addSearchQuery: (state, action) => {
        state.currentQuery = action.payload;
      },
}
})

export const {cacheResults, addSearchQuery} = searchSlice.actions;
export default searchSlice.reducer