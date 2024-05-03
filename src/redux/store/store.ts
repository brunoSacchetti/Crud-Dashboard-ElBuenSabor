import { configureStore } from '@reduxjs/toolkit'
import sucursalesSlice from '../slices/sucursalesSlice';

export const store = configureStore({
  reducer: {
    sucursales: sucursalesSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

