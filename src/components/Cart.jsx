import React from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';
const Cart = () => {
  const {cartList,deleteItem}= useContext(CartContext);
  return (
    <>
      <h1>I am the cart </h1>
       <ul>
        {
          cartList.length===0
          ? <p>Your cart is empty</p>
          : cartList.map(item=> <li key={item.id}>{item.name}-cantidad comprada :{item.qty}<img src={item.img} alt="producto"/>-<button onClick={()=>deleteItem(item.id)}>Delete producto</button></li>
          )
         
        }
       </ul> 
    </>
  );
}

export default Cart
