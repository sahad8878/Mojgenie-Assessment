import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  character: {},
  loading: false,
  error: null,
};

const characterDetailsSlice = createSlice({
  name: "characterDetails",
  initialState,
  reducers: {
    fetchCharacterDetailsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCharacterDetailsSuccess(state, action) {
      state.character = action.payload;
      state.loading = false;
    },
    fetchCharacterDetailsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCharacterDetailsStart,
  fetchCharacterDetailsSuccess,
  fetchCharacterDetailsFailure,
} = characterDetailsSlice.actions;

export default characterDetailsSlice.reducer;
