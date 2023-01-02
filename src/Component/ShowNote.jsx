import React, {useState} from 'react'
import data from './ListCom';
import CreateNote from './CreateNote';

const ShowNote = () => {
    return (
        <>
            <section className='accordion-section'>
                <div className="accordion">
                    <h1>my accordion</h1>
                    <div></div>
                    {data.map((curEle, index) => {
                        return (
                            <CreateNote curElement={curEle}/>
                        )
                    })}



                </div>

            </section>
        </>
    )
}

export default ShowNote;
