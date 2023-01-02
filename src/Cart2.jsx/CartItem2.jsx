import React,{useContext} from 'react';

const CartItem2 = () => {
    // const {decrement,increment,removeItem} = useContext(CartCont)
    return (
        <>
            <div className="items-info" key='2'>
                <div className="product-img">
                    <img src='' alt='' />
                </div>

                <div className="title">
                    <h2>sdf</h2>
                    <p>dfssf</p>
                </div>
                <div className="add-minus-quantity">
                    <i className="fa-solid fa-minus minus"  ></i>
                    <input type="text" name="" placeholder='3' id="" />
                    <i className="fa-solid fa-plus add"  ></i>
                </div>
                <div className="price">
                    <h3>22</h3>
                </div>
                <div className="remove-item">
                    <i className="fas fa-trash-alt removee"></i>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartItem2