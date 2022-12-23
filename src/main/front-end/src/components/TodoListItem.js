import React from 'react';
import '../css/TodoListItem.scss';
import cn from 'classnames';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";

const TodoListItem = ({todo, onRemove}) => {
    const {id, text, checked} = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})}>
                {checked
                    ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;