import {
  fetchCharactersStart,
  fetchCharactersSuccess,
  fetchCharactersFailure,
} from "../Reducers/CharactersSlice.js";
import axios from "../../Axios/Axios.js";

export const fetchCharacters = (params) => async (dispatch, getState) => {
  const { characters } = getState();
  const { filters } = characters;
  try {
    dispatch(fetchCharactersStart());
    const config = {
      headers: {
        Authorization: `Bearer 2JFTvt7OVTEDwVI3ijCX`,
      },
    };
    const response = await axios.get(
      `/character?sort=name:${filters.sort}&name=/${filters.name}/i&gender=${
        filters.gender
      }&race=${filters.race.toString()}&limit=${params.limit}&page=${
        filters.page
      }`,
      config
    );
    dispatch(fetchCharactersSuccess(response.data));
  } catch (error) {
    dispatch(fetchCharactersFailure(error.message));
  }
};
