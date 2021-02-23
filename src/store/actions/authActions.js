import instance from "./instance";
import decode from "jwt-decode";
import * as types from "./types";
import Cookies from "js-cookie";

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      Cookies.set("myToken", res.data.token);
      dispatch({
        type: types.SET_USER,
        payload: decode(res.data.token),
      });
      history.replace("/");
      console.log("signed up!!");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      Cookies.set("myToken", res.data.token);
      dispatch({
        type: types.SET_USER,
        payload: decode(res.data.token),
      });
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signout = () => {
  Cookies.remove("myToken");
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const checkForToken = () => (dispatch) => {
  const token = Cookies.get("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp >= currentTime) {
      dispatch({
        type: types.SET_USER,
        payload: user,
      });
    } else {
      dispatch(signout());
    }
  }
};
