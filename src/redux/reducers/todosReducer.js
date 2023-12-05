import {todosActionTypes} from "../action/todosAction";

const initialState = {
    todos: [],
    selectedTodos: [],
    checkboxStates: {},
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
        case todosActionTypes.TOGGLE_SELECTED_TODO:
            const selectedTodoIndex = state.selectedTodos.indexOf(action.payload);
            return {
                ...state,
                selectedTodos: selectedTodoIndex === -1
                    ? [...state.selectedTodos, action.payload]
                    : state.selectedTodos.filter((item) => item !== action.payload),
            };
        case todosActionTypes.TOGGLE_CHECKBOX:
            const checkboxStates = { ...state.checkboxStates };

            checkboxStates[state.todos.length - 1] = !checkboxStates[state.todos.length - 1];

            return {
                ...state,
                checkboxStates,
            };
        default:
            return state;
    }
}

export default todosReducer;