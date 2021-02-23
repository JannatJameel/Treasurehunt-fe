import instance from "./instance";
import * as types from "./types";

export const fetchRandomThings = () => {
    return async (dispatch) => {
        try {
            const res = await instance.get("/things/random");
            dispatch({
                type: types.FETCH_RANDOM, 
                payload: res.data
            });
        } catch (error) {
            console.log("error:", error);
        }
    }
};

export const fetchTreasureThings = () => {
    return async (dispatch) => {
        try {
            const res = await instance.get("/things/treasures");
            console.log("treasures from backend", res.data);
            dispatch({
                type: types.FETCH_TREASURES, 
                payload: res.data
            });
        } catch (error) {
            console.log("error:", error);
        }
    }
};