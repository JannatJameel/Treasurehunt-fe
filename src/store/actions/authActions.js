import instance from "./instance";
import decode from "jwt-decode";
import * as types from "./types";
import Cookies from "js-cookie";

const setUser = (token) => {
  Cookies.set("myToken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return ({
      type: types.SET_USER, 
      payload: decode(token)
  });
};

export const signup = (userData, history) => {
    return async (dispatch) => {
        try {
            const res = await instance.post("/signup", userData);
            dispatch(setUser(res.data.token));
            history.replace("/");
        } catch(error) {
            console.log("error:", error);
        }
    };
};

export const signin = (userData, history) => {
    return async (dispatch) => {
        try {
            const res = await instance.post("/signin", userData);
            dispatch(setUser(res.data.token));
            history.replace("/");
        } catch(error) {
            console.log("error:", error);
        }
    };
};

export const signout = () => {
    Cookies.remove("myToken");
    delete instance.defaults.headers.common.Authorization
    return ({
        type: types.SET_USER,
        payload: null
    });
};

export const checkForToken = () => (dispatch) => {
    const token = Cookies.get("myToken");
    if(token) {
        const user = decode(token);
        const currentTime = Date.now();
        if (user.exp > currentTime) {
            dispatch(setUser(token));
        } else {
            dispatch(signout());
        };
    };
};
