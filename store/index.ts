import { combineReducers } from "redux";
import boardSlice from "./boardSlice";

const rootReducer = combineReducers({
    board: boardSlice.reducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;