import React, {useState} from 'react';

const Form = () => {
    const [input, setInput] = useState({
        fname:'',
        email:'',
        password:'',
        tel:''
    });
    const [inputList, setInputList] = useState([]);
    const getInput=(e)=>{
        const {name,value} =e.target;
        setInput((oldItem)=>{
            return {...oldItem,
                    [name] : value,
                    }
        })
    }
    
    const submit=(e)=>{
        e.preventDefault();
        setInputList(input);
        // setInput('')
    }
    return (
        <>
            <form action="" onSubmit={submit}>
                <input type="text" value={input.fname} name="fname" id="" onChange={getInput} /><br />
                <input type="email"  name="email" id="" onChange={getInput}/><br />
                <input type="password"  name="password" id="" onChange={getInput}/><br />
                <input type="tel"  name="tel" id="tel" onChange={getInput}/><br />
                <button>submit</button><br />
            </form>
            <p>{inputList.fname}</p>
            <p>{inputList.email}</p>
            <p>{inputList.password}</p>
            <p>{inputList.tel}</p>
        </>
    );
};

export default Form;
