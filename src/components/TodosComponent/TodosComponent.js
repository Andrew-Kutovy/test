import React, {useState} from 'react';
import style from './TodosComponent.module.css';
import Menu from "./Menu/Menu";
import Todo from "./Todo/Todo";

const TodosComponent = () => {
    const stateTodo = [
        <div className={style.todo_element}>
            <label className={style.themeToggle}>
                <input type="checkbox" checked={false} />
                <span className={style.slider}></span>
            </label>
            <input className={style.prod} type="text" placeholder="xxxx-"></input>
            <input className={style.id} type="text" placeholder="ID"></input>
            <input className={style.name} type="text" placeholder="zna4"></input>
        </div>
    ]

    
    const [todos, setTodos] = useState(stateTodo)

    return (
        <div className={style.block}>
            <div className={style.menu}>
                <Menu todos={todos} setTodos={setTodos} stateTodo={stateTodo}/>
            </div>
            <div className={style.list}>
                {todos.map((todo, index) => (
                    <Todo key={index} todo={todo} setTodos={setTodos} />
                ))}
            </div>
        </div>
    );
};

export default TodosComponent;