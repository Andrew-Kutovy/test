import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from '../TodosComponent.module.css';

const Todo = () => {
    const todos = useSelector((state) => state.todos.todos);

    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemClick = (index) => {
        setSelectedItems((prevSelected) => {
            if (prevSelected.includes(index)) {
                // Если элемент уже был выбран, убираем его из массива выделенных
                return prevSelected.filter((item) => item !== index);
            } else {
                // Иначе добавляем элемент в массив выделенных
                return [...prevSelected, index];
            }
        });
    };

    return (
        <div className={style.list}>
            {todos.map((todo, index) => (
                <div
                    key={index}
                    onClick={() => handleItemClick(index)}
                    style={{
                        backgroundColor: selectedItems.includes(index) ? 'yellow' : 'white',
                    }}
                >
                    {todo}
                </div>
            ))}
        </div>
    );
};

export default Todo;
