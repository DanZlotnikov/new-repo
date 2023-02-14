import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {
      id: null, 
      isLoggedIn: false, 
      firstName: null,
      lastName: null,
      profileImgUrl: null,
      isVerified: false,
      isFirstLogin: false
    }
  },
  reducers: {
    ssoLogin: (state, action) => {
      let payload = action.payload;
      if (payload.id) {
        state.currentUser.id = payload.id;
        state.currentUser.isLoggedIn = true;
        state.currentUser.firstName = payload.firstName;
        state.currentUser.lastName = payload.lastName;
        state.currentUser.profileImgUrl = payload.profileImgUrl;
        state.currentUser.isVerified = payload.isVerified;
        state.currentUser.isFirstLogin = payload.isFirstLogin;
      }
    },
    logout: (state) => {
      state.currentUser = {
        isLoggedIn: false
      };
    },
    endTutorial: (state) => {
      state.currentUser.isFirstLogin = false;
    }
  }
});

export const { ssoLogin, logout, endTutorial } = authSlice.actions

export default authSlice.reducer;