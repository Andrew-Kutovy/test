import React from 'react';
import style from '../TodosComponent.module.css';
import {useDispatch} from "react-redux";
import {addNewTodo} from "../../../redux/action/todosAction";


const Menu = () => {
    const dispatch = useDispatch()

    const handleAddNewTodo = () => {
        addNewTodo(dispatch);
    };


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
                <button>x</button>
            </div>
        </div>
    );
};

export default Menu;