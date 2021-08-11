import { USER_GET_SUCCESS, USER_GET_FAILURE } from "./Constants";
import axios from "axios";
export const getUser = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`http://localhost:9090/employees`, {
      config,
    });
    dispatch({
      type: USER_GET_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_GET_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
