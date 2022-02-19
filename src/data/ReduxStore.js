import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer as formReducer} from "redux-form";
import thunk from "redux-thunk";
import typicalReducer from "../reducer/TypicalReducer"
import deliveryReducer from "../reducer/DeliveryReducer"
import assemblageReducer from "../reducer/AssemblageReducer"

let reducers = combineReducers(
    {
        typical: typicalReducer,
        delivery: deliveryReducer,
        assemblage: assemblageReducer,
        form: formReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store

export default store;