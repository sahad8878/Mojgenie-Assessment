
import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './Features/Reducers/CharactersSlice.js';
import characterDetailsReducer from './Features/Reducers/CharacterDetailsSlice.js';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    characterDetails: characterDetailsReducer,
  },
});

export default store;
