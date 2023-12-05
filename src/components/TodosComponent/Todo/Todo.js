import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../TodosComponent.module.css';
import {todosActions} from "../../../redux/action/todosAction";

const Todo = () => {
    const todos = useSelector((state) => state.todos.todos);
    const selectedTodos = useSelector((state) => state.todos.selectedTodos);
    const dispatch = useDispatch();

    const handleItemClick = (index) => {
        dispatch(todosActions.toggleSelectedTodo(index));
    };

    return (
        <div className={style.list}>
            {todos.map((todo, index) => (
                <div
                    key={index}
                    onClick={() => handleItemClick(index)}
                    style={{
                        backgroundColor: selectedTodos.includes(index) ? 'yellow' : 'white',
                    }}
                >
                    {todo}
                </div>
            ))}
        </div>
    );
};

export default Todo;