import React from 'react'

const Item = ({id,img,price,quantity,title,description,delItem,addItem,minItem}) => {
    // const {id,img,price,quantity,title,description,delItem}=porps;
    return (
        <>
            <div className="cart-items-info" key={id}>
                <div className="cart-product-img">
                    <img src={img} alt={title} />
                </div>

                <div className="cart-title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="add-minus-quantity">
                    <i className="fa-solid fa-minus minus" onClick={()=>minItem(id)}></i>
                    <input type="cart-text" name="" placeholder={quantity} id="" />
                    <i className="fa-solid fa-plus add" onClick={()=>addItem(id)}></i>
                </div>
                <div className="cart-price">
                    <h3>{quantity*price}</h3>
                </div>
                <div className="cart-remove-item">
                    <i className="fas fa-trash-alt removee" onClick={()=>{delItem(id)}} ></i>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Item;