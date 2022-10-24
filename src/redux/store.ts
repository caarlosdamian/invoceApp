import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './slices/ThemeSlice'
import { invoceSlice } from './slices/InvoceSlice'
import { modalSlice } from './slices/ModalSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    invoice: invoceSlice.reducer,
    modal: modalSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch