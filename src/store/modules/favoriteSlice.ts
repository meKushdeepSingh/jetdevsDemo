import {createSlice} from '@reduxjs/toolkit';
import {FavoriteUserItemDataType} from '../../types/componentsTypes';

interface FavoriteState {
  favoriteData: FavoriteUserItemDataType[];
}

const initialState: FavoriteState = {
  favoriteData: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavoriteData: (state, action) => {
      state.favoriteData = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setFavoriteData} = favoriteSlice.actions;

export default favoriteSlice.reducer;
