import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

const API_BASE_URL = "http://appnote.test/api"; // Update the base URL here

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post(`${API_BASE_URL}/login`, credentials) // Use the API_BASE_URL here
      .then((response) => {
        const user = response.data.user;
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
};
