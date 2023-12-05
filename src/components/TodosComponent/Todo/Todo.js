import React from 'react';
import {useSelector} from "react-redux";
import style from "../TodosComponent.module.css";

const Todo = () => {
    const todos = useSelector((state) => state.todos.todos)

    return (
        <div className={style.list}>
            {todos.map((todo) => todo )}
        </div>
    );
};

export default Todo;