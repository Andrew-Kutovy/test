import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    todos: 'todoReducer',
})

const store = createStore(rootReducer);

export {store}