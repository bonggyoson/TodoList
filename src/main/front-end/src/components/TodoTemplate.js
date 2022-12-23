import React from "react";
import '../css/TodoTemplate.scss';

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">TDL - ToDoList</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;