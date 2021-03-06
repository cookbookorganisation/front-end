import { axiosWithAuth } from "../utils/axiosWithAuth";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const signup = (obj) => async (dispatch) => {
    dispatch({ type: SIGNUP_START });

    await axiosWithAuth().post("/api/auth/register", obj)
        .then((res) => {
            window.localStorage.setItem("token", res.data.token);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: SIGNUP_ERROR, payload: err.error });
        });
};
