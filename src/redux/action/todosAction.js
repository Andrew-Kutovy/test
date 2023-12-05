import style from "../../components/TodosComponent/TodosComponent.module.css";
import React from "react";

export const todosActionTypes = {
    SET_TODOS: 'SET_TODOS',
    ADD_TODO: 'ADD_TODO',
    DEL_TODO: 'DEL_TODO',
    TOGGLE_SELECTED_TODO: 'TOGGLE_SELECTED_TODO',
    TOGGLE_CHECKBOX: 'TOGGLE_CHECKBOX',
}

export const todosActions = {
    setTodos: (todos) => ({type: todosActionTypes.SET_TODOS, payload: todos}),
    addTodo: (todo) => ({type: todosActionTypes.ADD_TODO, payload: todo}),
    removeTodo: (todo) => ({type: todosActionTypes.DEL_TODO, payload: todo}),
    toggleSelectedTodo: (index) => ({ type: todosActionTypes.TOGGLE_SELECTED_TODO, payload: index }),
    toggleCheckbox: (index) => ({ type: todosActionTypes.TOGGLE_CHECKBOX, payload: index }),
}

export const addNewTodo = (dispatch, idInputRef, nameInputRef) => {
    const handleCheckboxChange = () => dispatch(todosActions.toggleCheckbox());

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const idValue = idInputRef.current.value.trim();
            if (idValue !== '' && !isNaN(idValue)) {
                nameInputRef.current.focus();
            }
        }
    };

    const handleNameKeyDown = (event) => {
        if (event.key === 'Enter') {
            const nameValue = nameInputRef.current.value.trim();

            if (nameValue !== '' && nameValue.length > 3) {
                console.log('Сохранено:', newTodo);

                nameInputRef.current.blur();
            } else {
                console.log('Ошибка ввода Названия');
            }
        }
    };


    const handleNameBlur = () => {
        const nameValue = nameInputRef.current.value.trim();

        if (nameValue !== '' && nameValue.length > 3) {
            console.log('Сохранено:', newTodo);

            nameInputRef.current.blur();
        } else {
            console.log('Ошибка ввода Названия');
        }
    };

    const handleDeleteTodo = () => {
        dispatch(todosActions.removeTodo(newTodo));
    };

    const newTodo =  [
        <div className={style.todo_element}>
            <div className={style.todo_target}>
                <label className={style.themeToggle}>
                    <input type="checkbox" checked={false} onChange={handleCheckboxChange} />
                    <span className={style.slider}></span>
                </label>
                <input className={style.prod} type="text" placeholder="xxxx-"/>
                <input className={style.id} type="text" placeholder="" ref={idInputRef} onKeyDown={handleKeyDown}
                                       maxLength={3} />
                <input className={style.name} type="text" placeholder="" ref={nameInputRef}
                       onKeyDown={handleNameKeyDown} onBlur={handleNameBlur}/>
            </div>
            <div className={style.todo_del} onClick={handleDeleteTodo}>x</div>
        </div>
    ]
    if (idInputRef.current) {
        const idValue = idInputRef.current.value;
        if (!isNaN(idValue) && idValue.trim() !== '') {
            idInputRef.current.focus();
        }
    }

    dispatch(todosActions.addTodo(newTodo));
};