import axios from "axios";


export const FETCH_NOTES_REQUEST = "FETCH_NOTES_REQUEST";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAILURE = "FETCH_NOTES_FAILURE";

const API_BASE_URL = "http://appnote.test/api";

export const fetchNotesRequest = () => ({
  type: FETCH_NOTES_REQUEST,
});

export const fetchNotesSuccess = (notes) => ({
  type: FETCH_NOTES_SUCCESS,
  payload: notes,
});

export const fetchNotesFailure = (error) => ({
  type: FETCH_NOTES_FAILURE,
  payload: error,
});

export const fetchNotes = () => {
  return (dispatch) => {
    dispatch(fetchNotesRequest());
    axios
      .get(`${API_BASE_URL}/notes`)
      .then((response) => {
        const notes = response.data;
        dispatch(fetchNotesSuccess(notes));
      })
      .catch((error) => {
        dispatch(fetchNotesFailure(error.message));
      });
  };
};