import style from "../../components/TodosComponent/TodosComponent.module.css";
import React from "react";

export const todosActionTypes = {
    SET_TODOS: 'SET_TODOS',
    ADD_TODO: 'ADD_TODO',
    DEL_TODO: 'DEL_TODO',
    TOGGLE_SELECTED_TODO: 'TOGGLE_SELECTED_TODO',
}

export const todosActions = {
    setTodos: (todos) => ({type: todosActionTypes.SET_TODOS, payload: todos}),
    addTodo: (todo) => ({type: todosActionTypes.ADD_TODO, payload: todo}),
    removeTodo: (todo) => ({type: todosActionTypes.DEL_TODO, payload: todo}),
    toggleSelectedTodo: (index) => ({ type: todosActionTypes.TOGGLE_SELECTED_TODO, payload: index }),
}

export const addNewTodo = (dispatch, idInputRef, nameInputRef) => {
    const handleCheckboxChange = () => {
        // код для обработки изменения состояния чекбокса
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Переключение фокуса на "Название" только если ID не пусто
            const idValue = idInputRef.current.value.trim();
            if (idValue !== '' && !isNaN(idValue)) {
                nameInputRef.current.focus();
            }
        }
    };

    const handleNameKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Получение значения Названия из рефа
            const nameValue = nameInputRef.current.value.trim();

            // Проверка, что Название - не пусто и содержит более трех символов
            if (nameValue !== '' && nameValue.length > 3) {
                // Ваш код для сохранения новой строки
                console.log('Сохранено:', newTodo);

                // Теряем фокус
                nameInputRef.current.blur();
            } else {
                // Вывод ошибки или другой обработки
                console.log('Ошибка ввода Названия');
                // Можно добавить вывод сообщения об ошибке или выполнение других действий
            }
        }
    };

    const saveNewTodo = () => {
        // Получение значения ID из рефа
        const idValue = idInputRef.current.value;

        // Проверка, что ID - это число и длина не менее одного символа
        if (!isNaN(idValue) && idValue.trim() !== '') {
            // код для сохранения новой строки
            console.log('Сохранено:', newTodo);

            // Теряем фокус
            nameInputRef.current.blur();
        } else {
            // Вывод ошибки или другой обработки
            console.log('Ошибка ввода ID');
        }
    };

    const handleNameBlur = () => {
        // Получение значения Названия из рефа
        const nameValue = nameInputRef.current.value.trim();

        // Проверка, что Название - не пусто и содержит более трех символов
        if (nameValue !== '' && nameValue.length > 3) {
            // Ваш код для сохранения новой строки
            console.log('Сохранено:', newTodo);

            // Теряем фокус
            nameInputRef.current.blur();
        } else {
            // Вывод ошибки или другой обработки
            console.log('Ошибка ввода Названия');
            // Можно добавить вывод сообщения об ошибке или выполнение других действий
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