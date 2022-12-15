import {createSlice} from '@reduxjs/toolkit';

interface HomeState {
  randomUsers: any[];
  isRefreshing: boolean;
  isLoadingMore: boolean;
}

const initialState: HomeState = {
  randomUsers: [],
  isRefreshing: false,
  isLoadingMore: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setRandomUsers: (state, action) => {
      state.randomUsers = action?.payload;
    },
    setRefreshing: (state, action) => {
      state.isRefreshing = action?.payload;
    },
    setLoadingMore: (state, action) => {
      state.isLoadingMore = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setRandomUsers, setRefreshing, setLoadingMore} =
  homeSlice.actions;

export default homeSlice.reducer;
