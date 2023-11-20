import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import noteReducer from "./reducers/authReducer";
import authReducer from "./reducers/noteReducer";

// Combine reducers
const rootReducer = combineReducers({
  notes: noteReducer,
  auth: authReducer,
});

// Create the store with combined reducer
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
