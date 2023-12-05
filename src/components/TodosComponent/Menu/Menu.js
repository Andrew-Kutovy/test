import React, {useEffect, useRef} from 'react';
import style from '../TodosComponent.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addNewTodo, todosActions} from "../../../redux/action/todosAction";


const Menu = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos.todos);
    const selectedTodos = useSelector((state) => state.todos.selectedTodos);

    const idInputRef = useRef(null);
    const nameInputRef = useRef(null);
    const handleAddNewTodo = () => {
        addNewTodo(dispatch, idInputRef, nameInputRef);
    };

    const handleDeleteChecked = () => {
        selectedTodos.forEach((index) => {
            const todo = todos[index];
            dispatch(todosActions.removeTodo(todo));
        });
    };

    useEffect(() => {
        // Проверка на существование рефа перед вызовом focus()
        if (idInputRef.current) {
            idInputRef.current.focus();
        }
    }, [todos]);


    return (
        <div className={style.menu_block}>
            <div className={style.main}>
                <div className={style.stat}>
                    <span>Статус</span>
                    <select name="" id=""></select>
                </div>
                <div className={style.prod}>
                    <span>Товар</span>
                    <select name="" id=""></select>
                </div>
                <div className={style.id}>
                    <span>ID</span>
                    <select name="" id=""></select>
                </div>
                <div className={style.name}>
                    <span>Название</span>
                    <select name="" id=""></select>
                </div>
            </div>
            <div className={style.navigate}>
                <button onClick={handleAddNewTodo}>+</button>
                {selectedTodos.length > 0 && (
                    <button onClick={handleDeleteChecked}>x</button>
                )}
            </div>
        </div>
    );
};

export default Menu;