import types from "./actionTypes";

const INITIAL_STATE = {
  darkMode: false,
};

const ThemeReducer = (currentState = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CHANGE_THEME:
      return {
        ...currentState,
        darkMode: !currentState.darkMode,
      };

    default:
      return currentState;
  }
};

export default ThemeReducer;
