import {
    FETCH_NOTES_REQUEST,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_FAILURE,
  } from "../actions/noteActions";
  
  const initialState = {
    notes: [],
    loading: false,
    error: null,
  };
  
  const noteReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NOTES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_NOTES_SUCCESS:
        return {
          ...state,
          loading: false,
          notes: action.payload,
          error: null,
        };
      case FETCH_NOTES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default noteReducer;