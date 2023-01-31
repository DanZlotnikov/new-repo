import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {
      isLoggedIn: false, 
      accessToken: null, 
      id: null, 
      externalSsoType: null, 
      externalSsoId: null, 
      fullName: null, 
    }
  },
  reducers: {
    facebookLogin: (state, action) => {
      let payload = action.payload;
      if (payload.id) {
        state.currentUser.isLoggedIn = true;
        state.currentUser.accessToken = payload.accessToken;
        state.currentUser.id = 2;
        state.currentUser.externalSsoType = 'facebook';
        state.currentUser.externalSsoId = payload.id;
        state.currentUser.fullName = payload.name;
      }
    },
    googleLogin: (state, action) => {
      let payload = action.payload;
      if (payload.googleId) {
        state.currentUser.isLoggedIn = true;
        state.currentUser.accessToken = payload.accessToken;
        state.currentUser.id = 2;
        state.currentUser.externalSsoType = 'google';
        state.currentUser.externalSsoId = payload.googleId;
        state.currentUser.fullName = payload.profileObj.name;
      }
    },
    logout: (state) => {
      state.currentUser = {
        isLoggedIn: false
      };
    }
  }
});

export const { facebookLogin, googleLogin, logout } = authSlice.actions

export default authSlice.reducer;