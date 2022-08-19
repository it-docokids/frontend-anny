import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Views {
  n_view: number;
}
const initialState: Views = {
  n_view: 0,
};
export const articleViews = createSlice({
  name: "article",
  initialState,
  reducers: {
    updateView: (state, action: PayloadAction<number>) => {
      state.n_view = state.n_view + 1;
    },
  },
});
export const { updateView } = articleViews.actions;
export const store = configureStore({
  reducer: {
    article: articleViews.reducer,
  },
});
type RootState = ReturnType<typeof store.getState>;
export const selectViews = (state: RootState) => state.article.n_view;
export default store;
