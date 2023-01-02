import React,{useState, useEffect} from 'react';
import List from './List';
import Alert from './Alert';
import './Todo.css'

const getLocalStorage =()=>{
    let lists = localStorage.getItem('list');
    if(lists){
        return JSON.parse(localStorage.getItem('list'))
    }
    else{
        return []
    }
}
const TodoList = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);  //for editing
    const [editID, setEditID] = useState(null);         //for geting id for edit        
    const [alert, setAlert] = useState({                //for alert
        show: false,
        msg: '',
        type: '',
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name){
            //display alert
            showAlert(true,'danger','plz enter value')
            // setAlert({show:true,msg:'plz enter value',type:'danger'})
        }else if(name && isEditing){
            setList(
                list.map((item)=>{
                    if(item.id === editID){
                        return {...item,title: name}
                    }
                    return item
                })
            )
            setName('')
            setEditID(null)
            setIsEditing(false)
            showAlert(true,'success','value changed')
        }else{
            showAlert(true,'success','item add to list')
            const newItem = {
                id: new Date().getTime().toString(),
                title: name,
            }
            setList([...list,newItem]);
            setName('');
        }
    }
    const showAlert=(show=false,type='',msg='')=>{
        setAlert({show,type,msg})
    }
    //clear all item
    const clearList=()=>{
        showAlert(true,'danger','empty list')
        setList([])
    }
    // delete single item
    const removeItem = (id)=>{
        showAlert(true,'danger','item removed')
        setList(list.filter((item)=>{
          return  item.id !== id
        }))
    }
    // edit item
    const editItem =(id)=>{
        const specificItem = list.find((item)=> item.id ===id)
        setIsEditing(true);
        setEditID(id)
        setName(specificItem.title)
    }
    //add local storage
    useEffect(() => {
        localStorage.setItem('list',JSON.stringify(list))
    }, [list])
    
  return (
    <>
    <section className="section-center">
        <form className='grocery-form' onSubmit={handleSubmit}>
            {alert.show && <Alert {...alert} removAlert={showAlert} list={list}/>}
            <h3>Todo List</h3>
            <div className="form-control">
                <input type="text" 
                value={name} 
                onChange={(e)=>{setName(e.target.value)}} 
                className='grocery' 
                placeholder='eg. mango' 
                />
                <button type="submit" className='submit-btn'>
                {isEditing?'edit':'submit'}</button>
            </div>
        </form>
        {list.length>0  && (
        <div className="grocery-container">
            <List items={list} removeItem={removeItem} editItem={editItem}/>
            <button className="clear-btn" onClick={clearList}>
                clear items
            </button>
        </div>
        )}
    </section>
    </>
  )
}

export default TodoList