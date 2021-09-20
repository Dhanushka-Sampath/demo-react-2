import { createStore, combineReducers } from "redux";

import { todos } from "./todos/reducers";

const reducers = {
    todos,//todos object is now hooked to our redux store.
};

const rootReducer = combineReducers(reducers);
export const configureStore = () => createStore(rootReducer);