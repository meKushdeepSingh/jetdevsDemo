import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  profileData: any;
}

const initialState: AuthState = {
  profileData: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      state.profileData = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setProfileData} = authSlice.actions;

export default authSlice.reducer;
