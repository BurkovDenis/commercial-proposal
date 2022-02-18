import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer as formReducer} from "redux-form";
import thunk from "redux-thunk";

let reducers = combineReducers(
    {
        form: formReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store

export default store;