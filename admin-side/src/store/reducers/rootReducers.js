import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import categoryReducer from "./categoryReducer";

const rootReducers = combineReducers({
    foods: foodReducer,
    category: categoryReducer
})

export default rootReducers