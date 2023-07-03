import { SET_IS_DARK_MODE } from "../actions/settings";

const initialState = {
  isDarkMode: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_DARK_MODE:
      return { ...state, isDarkMode: action.isDarkMode };
  }

  return state;
};
