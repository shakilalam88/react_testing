import React,{useState} from 'react';
import Tour from './Tour';
import { Sdata } from './Sdata';

const Travel = () => {
    const [sdata, setSdata] = useState(Sdata);
    console.log(sdata);
    const delTravel=(id)=>{
        const updateData =(sdata.filter((ele)=>{
            return ele.id !== id
        }))
        setSdata(updateData)
    }
    
    if(sdata.length===0){
        return (
            <>
            <h1>No more data</h1>
            <button className='btn' onClick={()=>{setSdata(Sdata)}}>Refress</button>
            </>
        )
    }
    return (
        <>
            {sdata.map((element) => {
                return (
                    <>
                        <Tour
                            key={element.id}{...element}
                            del={delTravel}
                            
                        />
                    </>
                )
            })}

        </>
    );
};

export default Travel;
