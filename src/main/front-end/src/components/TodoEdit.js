import React, {useCallback, useState} from 'react';
import '../css/TodoEdit.scss';

const TodoEdit = ({selectedTodo, onUpdate}) => {
    const [value, setValue] = useState('');
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        setValue('');
    }, [value]);

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="todoEdit">
                <h2>수정하기</h2>
                <input onChange={onChange}
                       value={value}
                       placeholder="할 일을 입력하세요"/>
                <button type="submit">수정하기</button>
            </form>
        </div>
    );
};

export default TodoEdit;