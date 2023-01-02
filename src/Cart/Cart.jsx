import React, {useState,useEffect} from 'react';
import Item from './Item';
import './Cart.css';
import {products} from './Product';


const Cart = () => {
    const [productItem, setProductItem] = useState(products);
    const [countItem, setCountItem] = useState(0);
    const [countPrice, setCountPrice] = useState(0)

    // single delete item
    const deleteItem=(id)=>{
        const item = productItem.filter((curEle)=>{
            return curEle.id !== id
        })
        setProductItem(item)
    }

    // plus item
    const addItems=(id)=>{
        let item = productItem.map((curEle)=>{
            if(curEle.id===id){
                return {
                    ...curEle,
                    quantity: curEle.quantity+1
                }
            }
            return curEle;
        })
        setProductItem(item)
    }

    // mins item
    const minItems=(id)=>{
        let item = productItem.map((curEle)=>{
            if(curEle.id === id){
                return {
                    ...curEle,
                    quantity: curEle.quantity-1,
                }
            }
            return curEle
        }).filter((curEle)=>{
            return curEle.quantity !==0;
        })
        setProductItem(item)
    }

    // count item
    const CountItme =()=>{
        let quantity= 0;
        let totalPrice =0;
        productItem.map((curEle)=>{
           quantity = quantity+ curEle.quantity;
           totalPrice += curEle.quantity * curEle.price
       })
        setCountItem(quantity)
        setCountPrice(totalPrice)

    }
    
    // count price 
    const CountPrice=()=>{
        let price = 0;
        productItem.map((curEle)=>{
            return price += curEle.price
        })
        setCountPrice(price)
    }

    useEffect(() => {
        CountItme();
    }, [productItem])
    
    return (
        <div className='cart-section'>
            <header className='cartHeader'>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                    <h3>continue shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>{countItem}</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>shopping cart</h1>
                <p className="total-items">you have <span className="total-items-count">{countItem} </span>items in cart</p>
                <div className="cart-items">

                    <div className="cart-items-container">
                        {productItem.map((curEle,index)=>{
                            return <Item key={index} {...curEle} 
                                    delItem={deleteItem}
                                    addItem={addItems}
                                    minItem={minItems}
                                    />;
                        })}
                        
                    </div>
                </div>
                <div className="card-total">
                    <h3>Cart Total: <span>{countPrice}</span></h3>
                    <button>Checkout</button>
                    <button className="clear-cart" onClick={()=>setProductItem(0)}>Clear cart</button>
                </div>
            </section>
        </div>
    )
}

export default Cart