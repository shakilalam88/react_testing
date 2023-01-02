import React, { useState } from 'react'
import text from './LoremApp'


const Lorem = () => {
    const [data, setData] = useState([]);
    const [para, setPara] = useState('');

    const getArry = () => {

        if(para>text.length-1){
            const textt = [...text,...text];
            const newAry = textt.slice(0, para);
            setData(newAry)
        }else if(para<0){
            const newAry = text.slice(0, 1);
            setData(newAry)
        }else{

            const newAry = text.slice(0, para);
            setData(newAry)
        }

    }

    return (
        <>
            <h1>lorem {para}</h1>
            <p>paragraphs: <input onChange={(e) => { setPara(e.target.value) }} type="number" name="" id="" /></p><br />
            <button onClick={getArry} className="btn">generate</button>
            <div className="loremIpsum">{data.map((ele, index) => { return <p key={index}>{ele}</p> })}</div>
        </>
    )
}

export default Lorem