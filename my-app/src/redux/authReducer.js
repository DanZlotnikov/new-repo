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
      isFirstLogin: false,
      language: 'he'
    },
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
        state.currentUser.language = 'he';
      }
    },
    logout: (state) => {
      state.currentUser = {
        isLoggedIn: false
      };
    },
    endTutorial: (state) => {
      state.currentUser.isFirstLogin = false;
    },
    changeLanguage: (state, action) => {
      state.currentUser.language = action.payload;
    }
  }
});

export const { ssoLogin, logout, endTutorial, changeLanguage } = authSlice.actions

export default authSlice.reducer;