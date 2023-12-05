import React from 'react';
import style from './TodosComponent.module.css';
import Menu from "./Menu/Menu";
import Todo from "./Todo/Todo";

const TodosComponent = () => {

    return (
        <div className={style.block}>
            <div className={style.menu}>
                {<Menu />}
            </div>
            <div className={style.list}><Todo /></div>
        </div>
    );
};

export default TodosComponent;