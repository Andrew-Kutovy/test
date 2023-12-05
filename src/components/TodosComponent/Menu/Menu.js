import React from 'react';
import style from './Menu.module.css';

const Menu = ({todos, setTodos, stateTodo}) => {
    const addNewTodo = () => setTodos([...todos, stateTodo])

    return (
        <div className={style.block}>
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
                <button onClick={addNewTodo}>+</button>
                <button>x</button>
            </div>
        </div>
    );
};

export default Menu;