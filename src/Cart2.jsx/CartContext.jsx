import React, { createContext, useReducer } from 'react'
import { products } from './Product'
import Cart2 from './Cart2';


// const CartCont = createContext()

// const reducer = (state, action) => {
//     if (action.type === 'INCREMENT') {
//         const updateCart = state.item.map((curEle) => {
//             if(action.payload === curEle.id){
//                 return {
//                     ...curEle,
//                     quantity: curEle.quantity+1,
//                 }
//             }
//             return curEle
//         })
//         return {...state,
//             item: updateCart
//         }
//     }
//     // decrement ====================
//     if(action.type === 'DECREMENT'){
//         const updateCart = state.item.map((curEle)=>{
//             if(curEle.id === action.payload){
//                 return {
//                     ...curEle,
//                     quantity: curEle.quantity-1,
//                 }
//             }
//             return curEle 
//         }).filter((curEle)=>{
//             return curEle.quantity !== 0;
//         })
//         return {
//             ...state,
//             item: updateCart
//         }
//     }
//     if(action.type=== 'DELETE_ITEM'){
//         return {
//             ...state,
//             item: state.item.filter((curEle)=>{
//                 return action.payload !== curEle.id
//             })
//         }
//     }
// }

// const initialState = {
//     item: products,
//     totalAmount: 0,
//     totalItem: 0
// }

const CartContext = () => {
    // const [state, dispatch] = useReducer(reducer, initialState);

    // //increment
    // const increment = (id) => {
    //     return dispatch({
    //         type: "INCREMENT",
    //         payload: id
    //     })
    // }

    // //decrement
    // const decrement = (id) => {
    //     return dispatch({
    //         type: "DECREMENT",
    //         payload: id
    //     })
    // }
    // //deleteAll
    // const removeItem = (id) => {
    //     return dispatch({
    //         type: "DELETE_ITEM",
    //         payload: id
    //     })
    // }

    return (
        <>
            <Cart2 />
        </>
    )
}

export default CartContext;