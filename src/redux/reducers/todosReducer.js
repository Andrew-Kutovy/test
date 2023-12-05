import {todosActionTypes} from "../action/todosAction";

const initialState = {
    todos: [],
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case todosActionTypes.SET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case todosActionTypes.ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos],
            };
        case todosActionTypes.DEL_TODO:
            const updatedTodos = state.todos.filter(todo => todo !== action.payload);
            return {
                ...state,
                todos: updatedTodos,
            };
        default:
            return state;
    }
}

export default todosReducer;