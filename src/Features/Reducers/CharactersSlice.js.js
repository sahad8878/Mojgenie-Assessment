import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  loading: false,
  error: null,
  limit: 10,
  total: 1,
  filters: {
    name: "",
    sort: "",
    race: [],
    gender: "",
    page: 1,
  },
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    fetchCharactersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCharactersSuccess(state, action) {
      state.characters = action.payload.docs;
      state.limit = action.payload.limit;
      state.total = action.payload.total;
      state.loading = false;
    },
    fetchCharactersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
      state.page = 1;
    },
  },
});
export const {
  fetchCharactersStart,
  fetchCharactersSuccess,
  fetchCharactersFailure,
  updateFilters,
} = charactersSlice.actions;

export default charactersSlice.reducer;
