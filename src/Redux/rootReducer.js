import { combineReducers } from "redux";

import ToDoReducer from "./ToDo/ToDoReducer";
import ThemeReducer from "./Theme/ThemeReducer";

const rootReducer = combineReducers({
  ToDo: ToDoReducer,
  Theme: ThemeReducer,
});

export default rootReducer;
