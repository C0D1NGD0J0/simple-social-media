import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/";
import { createLogger } from "redux-logger";

const logger = createLogger();
const middleware = [thunk, logger];
const initialState = {};
const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f

const store = createStore(
	rootReducer, 
	initialState, 
	compose(applyMiddleware(...middleware), devTools)
);

export default store;