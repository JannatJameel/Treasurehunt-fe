import * as types from "../actions/types";

const initialState = {
    random: [],
    treasures: [],
    loading: true
};

const productReducer = (state=initialState, action) => {
    switch (action.type){
        case types.FETCH_RANDOM:
            return {
                ...state,
                random: action.payload, 
                loading: false
            };
        case types.FETCH_TREASURES:
            return {
                ...state, 
                treasures: action.payload, 
                loading: false
            }; 
        default: return state;
    };
};

export default productReducer;