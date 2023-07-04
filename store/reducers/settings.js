import { SET_IS_DARK_MODE, SET_ACTIVE_LANGUAGE } from "../actions/settings";

const initialState = {
  isDarkMode: false,
  activeLanguage: "English",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_DARK_MODE:
      return { ...state, isDarkMode: action.isDarkMode };

    case SET_ACTIVE_LANGUAGE:
      return { ...state, activeLanguage: action.language };
  }

  return state;
};
