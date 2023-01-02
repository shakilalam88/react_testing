import React, { useContext } from 'react'
import '../Cart/Cart.css'
import CartItem2 from './CartItem2';



const Cart2 = () => {
    // const {item,totalAmount,totalItem} = useContext(CartCont);
    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                    <h3>continue shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>3</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>shopping cart</h1>
                <p className="total-items">you have <span className="total-items-count">4 </span>items in cart</p>
                <div className="cart-items">
                    <CartItem2 />
                </div>
                <div className="card-total">
                    <h3>Cart Total: <span>5</span></h3>
                    <button>Checkout</button>
                    <button className="clear-cart">Clear cart</button>
                </div>
            </section>
        </>
    )
}

export default Cart2