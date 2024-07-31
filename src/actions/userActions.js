import * as api from "../api/index"

export const getUsers = (query) => async (dispatch) => {
  if (query===undefined) query=""
    try {
      dispatch({ type: "GET_USERS_REQUEST" });
  
    //   const config = { headers: { "Content-Type": "multipart/form-data" } };
      const { data } = await api.getUsers(query);
      dispatch({ type: "GET_USERS_SUCCESS", payload: data.users });
    } catch (error) {
      dispatch({
        type: "GET_USERS_FAIL",
        payload: error.response.data.message,
      });
    }
  };

  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: "CLEAR_ERRORS" });
  };