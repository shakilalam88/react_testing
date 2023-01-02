import React, {useState} from 'react';

const Tour = (props) => {
const [info, setInfo] = useState(false);

const deleteItem=()=>{
    props.del(props.id)
}
  return (
      <>
      <article className='single-tour'>
                <img src={props.image} alt={props.name} />
                <footer>
                    <div className="tour-info">
                        <h4>{props.name}</h4>
                        <h4 className='tour-price'>${props.price}</h4>
                    </div>
                    
                    <p>{ info? props.info : `${props.info.substring(0,200)}...`}
                    <button onClick={()=>{setInfo(!info)}}>{info?'Read Less':'Read More'}</button>
                    </p>
                    <button className='delete-btn' onClick={deleteItem}>not interested</button>
                </footer>
            </article>
      </>
  );
};

export default Tour;
