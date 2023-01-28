import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'counter',
  initialState: {
    loggedInUserId: 1
  },
  reducers: {
    setUser: (state, payload) => {
      state.loggedInUserId = payload;
    }
  }
});

export default authSlice.reducer;