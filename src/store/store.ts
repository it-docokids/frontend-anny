import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Views {
  n_view: number;
  id_article: number;
  start: number;
  end: number;
}
const initialState: Views = {
  n_view: 0,
  id_article: 0,
  start: 0,
  end: 0,
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
    updatePaginationS: (state, action: PayloadAction<any>) => {
      state.start = action.payload;
    },
    updatePaginationE: (state, action: PayloadAction<any>) => {
      state.end = action.payload;
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
export const selectStart = (state: RootState) => state.article.start;
export const selectEnd = (state: RootState) => state.article.end;
export default store;
