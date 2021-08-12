import * as types from "../actions/type.js";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POST:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
