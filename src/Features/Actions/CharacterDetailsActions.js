import {
  fetchCharacterDetailsStart,
  fetchCharacterDetailsSuccess,
  fetchCharacterDetailsFailure,
} from "../Reducers/CharacterDetailsSlice";
import axios from "../../Axios/Axios";

export const fetchCharacterDetails = (charactorId) => async (dispatch) => {
  try {
    dispatch(fetchCharacterDetailsStart());
    const config = {
      headers: {
        Authorization: `Bearer 2JFTvt7OVTEDwVI3ijCX`,
      },
    };
    const response = await axios.get(`/character/${charactorId}`, config);
    dispatch(fetchCharacterDetailsSuccess(response.data.docs[0]));
  } catch (error) {
    dispatch(fetchCharacterDetailsFailure(error.message));
  }
};
