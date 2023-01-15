
import React from 'react'
import { createContext } from "react";
import { useState } from 'react';
export const  CartContext = createContext();


const CartContextProvider = ({children}) => {

    const [cartList,setCartList]=useState([])

    const  addtoCart=(dato,qty)=>{
      const found = cartList.find(product=>product.id===dato.id);
      if (found === undefined) {
        setCartList([
            ...cartList,
            {
            id: dato.id,
            name: dato.name,
            img:dato.img,
            price:dato.price,
            qty: qty

           }
          ]);
        } else {
       found.qty += qty;
          setCartList([
              ...cartList
          ]);
      }
  }









    const deleteItem = (id) => {
      const result = cartList.filter(item => item.id !== id);
      setCartList(result);
  }
  return (
   
    <CartContext.Provider value={{cartList,addtoCart,deleteItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default  CartContextProvider
