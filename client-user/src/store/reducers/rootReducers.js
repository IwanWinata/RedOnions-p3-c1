import { combineReducers } from "redux";

import foodReducer from "./foodReducer";

const rootReducers = combineReducers({
    foods: foodReducer
})

export default rootReducers