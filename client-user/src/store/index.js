import {legacy_createStore as createStore} from "redux"
import rootReducers from "./reducers/rootReducers"
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "./middlewares/logger"

const store = createStore(rootReducers, applyMiddleware(logger, thunk))

export default store