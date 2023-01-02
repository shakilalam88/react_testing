import React from 'react';

const TodoList = (props) => {
    const deleteItem=()=>{
        props.del(props.id)
    }
    return (
        <>
            <div className="todo_list" key={props.id} id={props.id} >
                <button onClick={deleteItem} className='close-btn'>x</button>
                <li>{props.curEle}</li>
            </div>
        </>
    );
};

export default TodoList;
