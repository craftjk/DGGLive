import { SET_DARK_MODE } from "../actions/settings";

const initialState = {
  darkMode: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return { ...state, darkMode: action.darkMode };
  }

  return state;
};
