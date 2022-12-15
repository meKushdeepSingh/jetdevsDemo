import {configureStore} from '@reduxjs/toolkit';
import authSlice from './modules/authSlice';
import favoriteSlice from './modules/favoriteSlice';
import homeSlice from './modules/homeSlice';
import loaderSlice from './modules/loaderSlice';

const store = configureStore({
  reducer: {
    loader: loaderSlice,
    auth: authSlice,
    home: homeSlice,
    favorite: favoriteSlice,
  },
});
const dispatch = store.dispatch;
const getStore = store.getState;
export {dispatch, getStore};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
