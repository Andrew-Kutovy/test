import style from "../../components/TodosComponent/TodosComponent.module.css";
import React from "react";

export const todosActionTypes = {
    SET_TODOS: 'SET_TODOS',
    ADD_TODO: 'ADD_TODO',
    DEL_TODO: 'DEL_TODO'
}

export const todosActions = {
    setTodos: (todos) => ({type: todosActionTypes.SET_TODOS, payload: todos}),
    addTodo: (todo) => ({type: todosActionTypes.ADD_TODO, payload: todo}),
    removeTodo: (todo) => ({type: todosActionTypes.DEL_TODO, payload: todo})
}

export const addNewTodo = (dispatch) => {
    const handleCheckboxChange = () => {
        // Ваш код для обработки изменения состояния чекбокса
    };
    const handleDeleteTodo = () => {
        // Ваш код для удаления тудушки
        dispatch(todosActions.removeTodo(newTodo)); // Предполагается, что у вас есть действие removeTodo ваших todosActions
    };
    const newTodo =  [
        <div className={style.todo_element}>
            <div className={style.todo_target}>
                <label className={style.themeToggle}>
                    <input type="checkbox" checked={false} onChange={handleCheckboxChange} />
                    <span className={style.slider}></span>
                </label>
                <input className={style.prod} type="text" placeholder="xxxx-"></input>
                <input className={style.id} type="text" placeholder=""></input>
                <input className={style.name} type="text" placeholder=""></input>
            </div>
            <div className={style.todo_del} onClick={handleDeleteTodo}>x</div>
        </div>
    ]
    dispatch(todosActions.addTodo(newTodo));
};