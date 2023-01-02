import React, { useState } from 'react';
import TodoList from './TodoList';
import './Todo.css'

const Todo = () => {
    const [listItem, setListItem] = useState('');
    const [list, setlist] = useState([]);

    const addItemList = () => {
        setlist((oldItem) => {
            return [...oldItem, listItem]
        })
        setListItem('')
    }

    const deleteItem=(id)=>{
        setlist(list.filter((ele,index)=>{
            return id !== index;
        }))
    }

    return (
        <>
            <div className="todolist-container">
                <div className="todolist">
                    <div className="input-section">
                        <h1>ToDo List</h1>
                        <input value={listItem} onChange={(e) => { setListItem(e.target.value) }} type='text' placeholder="Add a Items" />
                        <button className="btn-todolist" onClick={addItemList}>+</button>
                    </div>
                    <div className="output-section">
                        <ul>
                            {list.map((curEle,index) => {
                                return (
                                    <TodoList
                                    key={index}
                                    id={index}
                                    del={deleteItem}
                                    />
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Todo;
