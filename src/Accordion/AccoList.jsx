import React,{useState} from 'react';


const AccoList = ({ id, title, info }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <article className='question' key={id}>
            <header>
                <h4>{title}</h4>
                <button className='btn' onClick={() => { setToggle(!toggle) }} >
                    {toggle ? "-" : "+"}
                </button>
            </header>
            {toggle ? <p>{info}</p> : null}

        </article>
    );
};

export default AccoList;
