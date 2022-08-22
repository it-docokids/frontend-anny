import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Views {
  n_view: number;
  id_article: number;
}
const initialState: Views = {
  n_view: 0,
  id_article: 0,
};
export const articleViews = createSlice({
  name: "article",
  initialState,
  reducers: {
    updateView: (state) => {
      state.n_view = state.n_view + 1;
    },
    updateID: (state, action: PayloadAction<any>) => {
      state.id_article = action.payload;
    },
  },
});
export const { updateView, updateID } = articleViews.actions;
export const store = configureStore({
  reducer: {
    article: articleViews.reducer,
  },
});
type RootState = ReturnType<typeof store.getState>;
export const selectViews = (state: RootState) => state.article.n_view;
export const selectId = (state: RootState) => state.article.id_article;

export default store;
