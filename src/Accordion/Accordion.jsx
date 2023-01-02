import React, { useState } from 'react';
import questions from '../Adata';
import AccoList from './AccoList';
import './Accor.css'
console.log(questions);


const Accordion = () => {
    const [data, setData] = useState(questions);
    

    return (
        <>
            <main>
                <div className='container'>
                    <h3>questions and answers about login</h3>
                    <section className='info'>
                        {data.map((curElem, index, arr) => {
                            return (
                                <AccoList key={index} {...curElem} />
                            )
                        })}


                    </section>
                </div>
            </main>

        </>
    );
};

export default Accordion;
